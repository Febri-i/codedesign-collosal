import { For, createResource, Suspense, Show } from "solid-js";
import CenteredHeading from "../../genericComponent/CenteredHeading";
import { A } from "@solidjs/router";
import { fetchFAQList } from "~/lib/actions/faq";
import { createMediaQuery } from "@solid-primitives/media";
import Accordin from "~/components/genericComponent/Accordin";

export interface QA {
  question: string;
  answer: string;
}
export interface IQuickFaqProps {
  section: string;
}

export default function QuickFaq(props: IQuickFaqProps) {
  const [faqs] = createResource<QA[]>(() => fetchFAQList(props.section));
  const isPortrait = createMediaQuery("(orientation: portrait)")
  return (
    <Suspense fallback={<span class="loading loading-bars loading-lg"></span>}>
      <div>
        <CenteredHeading
          title="FAQ"
          heading="Frequently asked questions, maybe the same as yours"
          decoration
        />
        <div class="landscape:grid portrait:flex flex-col grid-cols-2 gap-x-6 gap-y-12 mt-16">
          <Show fallback={
            <For each={faqs()}>
              {(qa) => (
                <div>
                  <h4>{qa.question}</h4>
                  <p>{qa.answer}</p>
                </div>
              )}
            </For>
          } when={isPortrait()}>
            <For each={faqs()}>
              {(faq) => <Accordin title={faq.question} detail={faq.answer} />}
            </For>

          </Show>
        </div>
        <span class="text-center mt-20 block">
          Didn't find an answer?{" "}
          <A href="/contact" class="link">
            Do not hesitate to ask!
          </A>
        </span>
      </div>
    </Suspense>
  );
}
