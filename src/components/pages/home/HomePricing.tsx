import { createMediaQuery } from "@solid-primitives/media";
import { createEffect, For } from "solid-js";
import CenteredHeading from "~/components/genericComponent/CenteredHeading";
import PricingCard from "~/components/genericComponent/project/PricingCard";
import { IPricing } from "~/lib/actions/service";

export interface IHomePricingProps {
  pricingList: IPricing[];
}

export default function HomePricing(props: IHomePricingProps) {
  let testimonyRef: HTMLDivElement | undefined;
  const isPortrait = createMediaQuery("(orientation:portrait)");
  createEffect(() => {
    if (testimonyRef) {
      testimonyRef.scrollLeft =
        testimonyRef.scrollWidth / 2 -
        testimonyRef.scrollWidth / props.pricingList.length;
    }
  });

  function horizontalScroll(e: WheelEvent) {
    if (isPortrait() && testimonyRef) {
      e.preventDefault();
      testimonyRef.scrollTo({
        left: testimonyRef.scrollLeft + e.deltaY,
        behavior: "smooth",
      });
    }
  }
  return (
    <div class="flex flex-col portrait:!mx-0 gap-8 landscape:items-center landscape:!mx-16 landscape:bg-accent-800 rounded-xl bg-opacity-40 landscape:pt-[5.63rem] landscape:pb-36  ">
      <CenteredHeading
        heading="What do you need? Choose a service that can help you"
        title="GET STARTED"
      />

      <div
        onwheel={horizontalScroll}
        ref={testimonyRef}
        class="landscape:grid portrait:[&>*]:w-72 px-10 hideScrollbar overflow-x-auto [&>*]:snap-center snap-x snap-mandatory [&>*]:shrink-0 grid-cols-3 gap-5 landscape:px-[8.87rem] landscape:sm:px-8 portrait:flex"
      >
        <For each={props.pricingList}>
          {(price) => {
            return (
              <PricingCard
                service={price.name}
                feature={price.offer}
                price={price.price + "$"}
              />
            );
          }}
        </For>
      </div>
    </div>
  );
}
