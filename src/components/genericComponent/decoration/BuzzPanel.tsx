import { For, Show, createEffect, createSignal } from "solid-js";

export interface IBuzzPanelProps {
  heading?: boolean;
  startSize?: number;
  dontFinish?: boolean;
  rows: number;
  min?: number;
}
function randLength(min: number, max: number) {
  return Math.round(Math.random() * (max - min) + min);
}
export default function BuzzPanel(props: IBuzzPanelProps) {
  const [rows, setRows] = createSignal<number[][]>([]);
  let totalRow = props.rows;
  const totalCol = 100; // props.min ? Math.ceil(100 / props.min) : 100;
  createEffect(() => {
    let tmprow: number[][] = [];
    if (props.heading) {
      totalRow--;
    }
    const min = props.min || 0;
    for (let y = 0; y < totalRow; y++) {
      tmprow.push([]);
      if (props.startSize !== undefined) {
        tmprow[y].push(props.startSize);
      }
      let restcol = totalCol - min;
      let edge = randLength(min, 50);
      while (restcol > edge) {
        const percentage = randLength(min, restcol);
        restcol -= percentage;
        tmprow[y].push(percentage);
      }
      const total = tmprow[y].reduce((a, b) => a + b);
      if (total + edge > 100) {
        const overshoot = total + edge - 100;
        const toosmall = tmprow[y].pop() || 0;
        if (toosmall < min) {
          edge += toosmall - overshoot;
        } else {
          if (toosmall > edge) {
            tmprow[y].push(toosmall - overshoot);
          } else {
            tmprow[y].push(toosmall);
            edge -= overshoot;
          }
        }
      }
      tmprow[y].push(edge);
    }

    setRows(tmprow);
  });

  return (
    <>
      {props.heading && (
        <div class=" h-full buzzPanelHeading">
          <div
            class="h-full"
            style={{
              width: randLength(props.min || 0, 100) + "%",
            }}
          ></div>
        </div>
      )}

      <For each={rows()}>
        {(cols) => (
          <div class={"h-full flex w-full  justify-start "}>
            <For each={cols}>
              {(length, i) => {
                return (
                  <div
                    style={{ width: length + "%" }}
                    class={
                      " h-full " +
                      ((i() >= cols.length - 1 && props.dontFinish) ||
                      length < (props.min || 0)
                        ? "hidden"
                        : " ") +
                      (!i() && props.startSize ? " flex-shrink-0 " : "")
                    }
                  >
                    {" "}
                  </div>
                );
              }}
            </For>
          </div>
        )}
      </For>
    </>
  );
}
