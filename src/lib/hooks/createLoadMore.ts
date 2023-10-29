import { Accessor, batch, createSignal } from "solid-js";
import { SetStoreFunction, createStore } from "solid-js/store";

export function createLoadMore<Type>(
  pageSize: number,
  fetchPage: (
    page: number,
    size: number
  ) => Promise<{ done: boolean; items: Type[] }>
): [
  Type[],
  Accessor<boolean>,
  Accessor<boolean>,
  () => void,
  () => void,
  SetStoreFunction<Type[]>
] {
  const [itemtList, setItemList] = createStore<Type[]>([]);
  const [loading, setLoading] = createSignal<boolean>(false);
  const [isDone, setDone] = createSignal<boolean>(false);

  let page = -1;

  async function gatherItem() {
    setLoading(true);
    page++;
    try {
      const result = await fetchPage(page, pageSize);
      batch(() => {
        setItemList((val) => [...val, ...result.items]);
        if (result.done) {
          setDone(true);
        }
        setLoading(false);
      });
    } catch (error) {
      if (itemtList.length) {
        console.error(error);

        return;
      }
      throw error;
    }
  }

  // createEffect(() => {
  gatherItem();
  // });

  return [
    itemtList,
    loading,
    isDone,
    gatherItem,
    () => {
      setItemList([]), (page = -1);
    },
    setItemList,
  ];
}
