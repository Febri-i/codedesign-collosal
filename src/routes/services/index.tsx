import CenteredHeading from "~/components/genericComponent/CenteredHeading";
import ServiceSummaryTemplate from "~/components/pages/services/ServiceSummaryTemplate";
import ServiceFeatureSummary from "~/components/pages/services/ServiceFeatureSummary";
import { fetchServiceSummaryInfoList } from "~/lib/actions/service";
import { createRouteData, useRouteData } from "solid-start";
import { GenericDecoration } from "~/components/genericComponent/GenericDecoration";
import { For, Suspense } from "solid-js";
import { GenericLoading } from "~/components/genericComponent/GenericLoading";
import CollosalTitle from "~/components/genericComponent/CollosalTitle";

export function routeData() {
  return createRouteData(fetchServiceSummaryInfoList);
}

export default function Service() {
  const serviceList = useRouteData<typeof routeData>();
  return (
    <>
      <CollosalTitle title="Services" />
      <CenteredHeading
        title="SERVICES"
        heading="We are here to help solve your company's problems"
        hr
      />
      <Suspense fallback={<GenericLoading />}>
        <For each={serviceList()}>
          {(
            {
              heading,
              illustration,
              name,
              summaryDescription,
              summaryIllustratedFeatures,
            },
            index,
          ) => {
            const i = index();
            return (
              <ServiceSummaryTemplate
                heading={heading}
                ilustration={illustration}
                name={name}
                decoration={<GenericDecoration index={i} />}
                summaryDescription={summaryDescription}
                reverse={i % 2 == 1}
              >
                <ServiceFeatureSummary features={summaryIllustratedFeatures} />
              </ServiceSummaryTemplate>
            );
          }}
        </For>
      </Suspense>
    </>
  );
}
