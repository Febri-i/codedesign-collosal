import { For, createResource, Suspense } from "solid-js";
import CenteredHeading from "../../genericComponent/CenteredHeading";
import { A } from "@solidjs/router";
import { fetchFAQList } from "~/lib/actions/faq";

export interface QA {
  question: string;
  answer: string;
}
export interface IQuickFaqProps {
  section: string;
}

export default function QuickFaq(props: IQuickFaqProps) {
  const [faqs] = createResource<QA[]>(() => fetchFAQList(props.section));
  return (
    <Suspense fallback={<span class="loading loading-bars loading-lg"></span>}>
      <div>
        <CenteredHeading
          title="FAQ"
          heading="Frequently asked questions, maybe the same as yours"
          decoration
        />
        <div class="grid grid-cols-2 gap-x-6 gap-y-12 mt-16">
          <For each={faqs()}>
            {(qa) => (
              <div>
                <h4>{qa.question}</h4>
                <p>{qa.answer}</p>
              </div>
            )}
          </For>
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
