import { For } from "solid-js";

interface IServiceDetailProps {
  illustration: string;
  description: string;
  benefit: string[]
}

export function ServiceDetail(props: IServiceDetailProps) {
  return (
    <div class="landscape:grid portrait:flex flex-col portrait:mb-5 grid-cols-2 gap-16">
      <img
        class="w-full h-full object-contain"
        src={props.illustration}
      />

      <div>
        {props.description.split("\n")
          .map((str) => (
            <>
              <p>{str}</p>
              <br />
            </>
          ))}
        <ul class="mt-11 list-disc list-inside">
          <For each={props.benefit}>
            {(featureish) => (
              <li class="mt-3">
                <span>{featureish}</span>
              </li>
            )}
          </For>
        </ul>
      </div>
    </div>
  )
}
