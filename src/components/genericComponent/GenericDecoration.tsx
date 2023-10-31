import { Show } from "solid-js";

interface IGenericDecorationProps {
  index: number;
}

export function GenericDecoration(props: IGenericDecorationProps) {
  const odd = props.index % 2 == 1;
  return (
    <Show when={props.index}>
      <div
        class={`w-96 ${odd ? "bg-accent-500" : "bg-semantic-500"
          } -translate-y-32 bgDecoration ${odd ? "-translate-x-32 " : "translate-x-32 "
          }`}
      ></div>
      <div
        class={`w-96 bgDecoration translate-y-32 ${odd ? "bg-purple-700" : "bg-semanticSecondary-500"
          } ${odd ? " translate-x-32 " : "-translate-x-32  "}`}
      ></div>

    </Show>
  );
}
