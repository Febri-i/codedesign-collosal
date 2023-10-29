import {
  For,
  createSignal,
  createContext,
  useContext,
  Setter,
  Accessor,
  JSX,
} from "solid-js";

export interface ICardCarouselProps {
  children: JSX.Element;
}

const CardCarouselContext = createContext<[Accessor<number>, Setter<number>]>();

export function useCardCarousel() {
  return useContext(CardCarouselContext);
}

export default function CardCarousel(props: ICardCarouselProps) {
  const [currentIndex, setCurrentIndex] = createSignal<number>(1);
  const [totalCard, setTotalCard] = createSignal<number>(0);
  const setIndex = (index: number) => {
    setCurrentIndex(Math.min(totalCard(), Math.max(-1, index)));
  };
  const handleClick = (e: MouseEvent) => {
    setIndex(currentIndex() + (e.clientX > window.innerWidth / 2 ? 1 : -1));
  };

  function cardsList(): number[] {
    let cards: number[] = [];
    for (let i = 0; i < totalCard(); i++) {
      cards.push(i);
    }
    return cards;
  }

  const cards = [];
  cards.push();
  return (
    <div
      onclick={handleClick}
      class="relative w-full pt-10 portrait:flex flex-col gap-8 overflow-visible mb-32"
    >
      <CardCarouselContext.Provider value={[currentIndex, setTotalCard]}>
        {props.children}
      </CardCarouselContext.Provider>
      <div class="aspect-[259/279]  portrait:hidden w-[31%] pointer-events-none opacity-0" />

      <div class="flex absolute portrait:hidden left-1/2 -translate-x-1/2 -bottom-24 gap-2 translate-y-100">
        <For each={cardsList()}>
          {(_x, i) => {
            return (
              <div
                class={"w-2 h-2 rounded-full  transition-all duration-300 "}
                style={{
                  "background-color": `rgba(255,255,255,${
                    currentIndex() == i() ? 1 : 0.5
                  })`,
                }}
              />
            );
          }}
        </For>
      </div>
    </div>
  );
}
