import { createResource, ErrorBoundary, Suspense } from "solid-js";
import { useRouteData } from "solid-start";
import CenteredHeading from "~/components/genericComponent/CenteredHeading";
import CollosalTitle from "~/components/genericComponent/CollosalTitle";
import { GenericLoading } from "~/components/genericComponent/GenericLoading";
import LogoList from "~/components/genericComponent/logoList/LogoList";

import HomeFeature from "~/components/pages/home/HomeFeature";
import HomeHero from "~/components/pages/home/HomeHero";
import HomePricing from "~/components/pages/home/HomePricing";
import HomeProject from "~/components/pages/home/HomeProject";
import HomeTeam from "~/components/pages/home/HomeTeam";
import HomeTestimony from "~/components/pages/home/HomeTestimony";
import HowWeWork from "~/components/pages/home/HowWeWork";
import { ITestimony, fetchRandomTestimony } from "~/lib/actions/project";
import { IPricing, fetchPricingList } from "~/lib/actions/service";

export function routeData() {
  const [testimony] = createResource<ITestimony[]>(() =>
    fetchRandomTestimony(3)
  );

  const [pricing] = createResource<IPricing[]>(fetchPricingList);

  return { testimony, pricing };
}

export default function Index() {
  const { pricing, testimony } = useRouteData<typeof routeData>();
  return (
    <>
      <CollosalTitle title="Home" />
      <HomeHero />
      <HomeFeature />
      <LogoList />
      <HowWeWork />
      <HomeTeam />
      <hr />
      <HomeProject />
      <ErrorBoundary
        fallback={(_e, _) => {
          console.error(_e);
          return (
            <CenteredHeading
              err
              title="ERROR"
              heading="Im sorry, failed to get pricing list."
            />
          );
        }}
      >
        <Suspense fallback={<GenericLoading />}>
          <HomePricing pricingList={pricing() as IPricing[]} />
        </Suspense>
      </ErrorBoundary>
      <ErrorBoundary
        fallback={(_e, _) => {
          console.error(_e);
          return (
            <CenteredHeading
              err
              title="ERROR"
              heading="Im sorry, failed to get testimony list."
            />
          );
        }}
      >
        <Suspense fallback={<GenericLoading />}>
          <HomeTestimony testimonyList={testimony() as ITestimony[]} />
        </Suspense>
      </ErrorBoundary>
    </>
  );
}
