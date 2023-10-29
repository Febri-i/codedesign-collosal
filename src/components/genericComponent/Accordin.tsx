import { createSignal } from "solid-js";

export interface IAccordinProps {
  title: string;
  detail: string;
}

export default function Accordin(props: IAccordinProps) {
  const [showing, setShowing] = createSignal<boolean>(false);

  return (
    <div onclick={() => setShowing((val) => !val)} class="cursor-pointer">
      <div class="flex  items-start justify-between">
        <h4>{props.title}</h4>
        <svg
          class="w-6 transition-transform duration-100  rotate-0  "
          classList={{
            " rotate-180 ": showing(),
          }}
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M18 9L12 15L6 9"
            stroke="white"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>
      </div>
      <div
        style={{ transition: "grid-template-rows .1s ease-out" }}
        class="grid grid-rows-[0fr] "
        classList={{
          " grid-rows-[1fr] ": showing(),
        }}
      >
        <p class="w-full overflow-hidden">{props.detail}</p>
      </div>
    </div>
  );
}
