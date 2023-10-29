import { For } from "solid-js";
import { A } from "solid-start";
import { getServiceUrl } from "~/lib/utils";

export interface IPricingProps {
  service: string;
  price: string;
  feature: string[];
  glass?: boolean;
}

export default function PricingCard(props: IPricingProps) {
  return (
    <div
      class={
        "flex flex-col pt-14 px-8 pb-8 rounded-lg overflow-hidden   justify-between aspect-[205/296] " +
        (props.glass ? "glass" : "bg-purple-900")
      }
    >
      <div class="flex justify-between gap-5">
        <span class="font-bold">{props.service}</span>
        <div>
          <p>Starting from</p>
          <h1>{props.price}</h1>
        </div>
      </div>
      <div class="flex flex-col justify-center  items-center gap-2">
        <For each={props.feature}>
          {(feature: string) => <span>{feature}</span>}
        </For>
      </div>

      <A href={getServiceUrl(props.service)} class="w-full">
        <button class="btn-white btn-lg w-full">Detail</button>
      </A>
    </div>
  );
}
