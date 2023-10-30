import { For, createEffect, createSignal, Suspense, Show } from "solid-js";
import ErrorBoundary, { createRouteData, useRouteData } from "solid-start";
import Accordin from "~/components/genericComponent/Accordin";
import CenteredHeading from "~/components/genericComponent/CenteredHeading";
import CollosalTitle from "~/components/genericComponent/CollosalTitle";
import { GenericLoading } from "~/components/genericComponent/GenericLoading";
import { fetchFAQList, fetchFAQSections } from "~/lib/actions/faq";
import { IQA } from "~/lib/graphql/types/faq";

export function routeData() {
  const faqSection = createRouteData(fetchFAQSections);
  return { faqSection };
}

export default function Faq() {
  const [currentIndex, setCurrentIndex] = createSignal<number>(0);
  const { faqSection } = useRouteData<typeof routeData>();
  const [faqQAs, setFAQs] = createSignal<IQA[]>([]);
  const [isLoading, setIsLoading] = createSignal<boolean>(false);
  createEffect(() => {
    const sections: string[] | undefined = faqSection();
    const index = currentIndex();
    if (!sections?.length) {
      return;
    }
    const section = sections[index];
    if (section) {
      setIsLoading(true);
      fetchFAQList(section).then((result) => {
        if (result) {
          setFAQs(result);
        }
        setIsLoading(false);
      });
    }
  });
  return (
    <>
      <CollosalTitle title="FAQs" />

      <ErrorBoundary
        fallback={(e, _) => {
          console.error(e);
          return (
            <CenteredHeading
              err
              title="ERROR"
              heading="Im sorry, failed to get FAQ list."
            />
          );
        }}
      >
        <Suspense fallback={<GenericLoading />}>
          <CenteredHeading
            title="FAQ"
            heading="Frequently asked questions, maybe the same as yours"
            hr
          />
          <div class="landscape:grid portrait:flex flex-col  grid-cols-3 gap-5">
            <div class="flex landscape:flex-col rounded-xl overflow-hidden  h-min  portrait:justify-between   ">
              <For each={faqSection()}>
                {(faq, i) => {
                  const ourIndex = i();
                  return (
                    <span
                      class="portrait:text-center landscape:px-10  py-4 bg-gray-800 cursor-pointer w-full"
                      onclick={() => setCurrentIndex(ourIndex)}
                      classList={{
                        " text-white font-bold ": currentIndex() == ourIndex,
                      }}
                    >
                      {faq}
                    </span>
                  );
                }}
              </For>
            </div>
            <Show when={!isLoading()} fallback={<GenericLoading />}>
              <div class="col-span-2 flex flex-col gap-2 [&>*]:border-b-[1px] [&>*]:border-gray-600 [&>*]:pb-4">
                <For each={faqQAs()}>
                  {(faq) => {
                    return (
                      <Accordin title={faq.question} detail={faq.answer} />
                    );
                  }}
                </For>
              </div>
            </Show>
          </div>
        </Suspense>
      </ErrorBoundary>
    </>
  );
}
