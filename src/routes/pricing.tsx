import { createMediaQuery } from "@solid-primitives/media";
import { createEffect, ErrorBoundary, For, Suspense } from "solid-js";
import { createRouteData, useRouteData } from "solid-start";
import CenteredHeading from "~/components/genericComponent/CenteredHeading";
import CollosalTitle from "~/components/genericComponent/CollosalTitle";
import { GenericLoading } from "~/components/genericComponent/GenericLoading";
import PricingCard from "~/components/genericComponent/project/PricingCard";
import QuickFaq from "~/components/pages/faq/QuickFaq";
import { fetchPricingList } from "~/lib/actions/service";

export function routeData() {
  return createRouteData(fetchPricingList);
}

export default function Pricing() {
  let pricingRef: HTMLDivElement | undefined;
  const isPortrait = createMediaQuery("(orientation:portrait)");
  const pricing = useRouteData<typeof routeData>();
  createEffect(() => {
    const totalPricing = pricing()?.length;
    if (pricingRef && totalPricing) {
      pricingRef.scrollLeft =
        pricingRef.scrollWidth / 2 - pricingRef.scrollWidth / totalPricing;
    }
  });
  function horizontalScroll(e: WheelEvent) {
    if (isPortrait() && pricingRef) {
      e.preventDefault();
      pricingRef.scrollTo({
        left: pricingRef.scrollLeft + e.deltaY,
        behavior: "smooth",
      });
    }
  }
  return (
    <>
      <CollosalTitle title="Pricing" />
      <CenteredHeading
        title="PRICING"
        heading="What do you need? Choose a service that can help you"
        hr
      />

      <Suspense fallback={<GenericLoading />}>
        <div
          ref={pricingRef}
          onwheel={horizontalScroll}
          class=" portrait:overflow-x-auto px-5 snap-x snap-mandatory [&>*]:snap-center hideScrollbar portrait:[&>*]:shrink-0 portrait:[&>*]:w-72  landscape:grid portrait:flex  grid-cols-3 gap-5"
        >
          <For each={pricing()}>
            {(service) => {
              return (
                <PricingCard
                  glass
                  service={service.name}
                  price={service.price + "$"}
                  feature={service.offer}
                />
              );
            }}
          </For>
        </div>
      </Suspense>
      <ErrorBoundary
        fallback={(e, _) => {
          console.error(e);
          return <></>;
        }}
      >
        <QuickFaq section="Transaction" />
      </ErrorBoundary>
    </>
  );
}
