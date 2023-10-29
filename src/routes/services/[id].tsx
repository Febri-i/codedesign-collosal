import { For, Suspense, createEffect } from "solid-js";
import {
  ErrorBoundary,
  createRouteData,
  useParams,
  useRouteData,
} from "solid-start";
import CenteredHeading from "~/components/genericComponent/CenteredHeading";
import CollosalTitle from "~/components/genericComponent/CollosalTitle";
import FeatureCard from "~/components/genericComponent/FeatureCard";
import { GenericLoading } from "~/components/genericComponent/GenericLoading";
import QuickFaq from "~/components/pages/faq/QuickFaq";
import { fetchServiceInfoDetailed } from "~/lib/actions/service";

export function routeData() {
  const params = useParams<{ id: string }>();

  return createRouteData(() => fetchServiceInfoDetailed(decodeURI(params.id)));
}

export default function ServiceDetail() {
  const serviceInfo = useRouteData<typeof routeData>();

  return (
    <>
      <CollosalTitle title={serviceInfo()?.name + " Service"} />
      <CenteredHeading
        hr
        heading="Solve your company's repetitive problems by designing apps"
        title="DEVELOPMENT"
      />
      <div class="grid grid-cols-2 gap-16">
        <img
          class="w-full h-full object-contain"
          src={serviceInfo()?.illustration}
        />

        <div>
          {serviceInfo()
            ?.description.split("\n")
            .map((str) => (
              <>
                <p>{str}</p>
                <br />
              </>
            ))}
          <ul class="mt-10 list-disc list-inside">
            <For each={serviceInfo()?.benefit}>
              {(featureish) => (
                <li class="mt-2">
                  <span>{featureish}</span>
                </li>
              )}
            </For>
          </ul>
        </div>
      </div>
      <div>
        <CenteredHeading
          title="FEATURES"
          heading="Here's what you will get when purchasing this service"
        />

        <div class="grid grid-cols-3 gap-5 mt-[5.62rem]">
          <For each={serviceInfo()?.illustratedFeatures}>
            {(feature) => {
              return (
                <FeatureCard
                  detail={feature.description}
                  title={feature.title}
                  src={feature.illustration}
                  flat
                ></FeatureCard>
              );
            }}
          </For>
        </div>
      </div>
      <QuickFaq section="General" />
    </>
  );
}
