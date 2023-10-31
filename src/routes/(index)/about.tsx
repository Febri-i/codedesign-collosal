import { For } from "solid-js";
import CenteredHeading from "~/components/genericComponent/CenteredHeading";
import { createRouteData, useRouteData } from "solid-start";

import TeamCard from "~/components/genericComponent/TeamCard";
import AboutStatistic from "~/components/pages/about/AboutStatistic";
import { fetchAllEmployee } from "~/lib/actions/employee";
import LogoList from "~/components/genericComponent/logoList/LogoList";
import GenericExplanation from "~/components/genericComponent/GenericExplanation";
import CollosalTitle from "~/components/genericComponent/CollosalTitle";

export function routeData() {
  return createRouteData(fetchAllEmployee);
}

export default function About() {
  const employees = useRouteData<typeof routeData>();
  return (
    <>
      <CollosalTitle title="About" />
      <GenericExplanation
        title="ABOUT"
        heading="We are creative, smart and hardworking people"
        detail="Several creative people gather in the same place - that's Collosal. We collaborate to produce the best results, loved by clients and comfortable for users. Here we maintain togetherness even though with different backgrounds, all the people here are already experts in their respective fields."
      >
        <div class="relative h-[26.25rem]">
          <img
            src="/aguyonblue.jpeg"
            class="absolute  landscape:-top-14 left-1/2 -translate-x-1/2 portrait:h-[80%] landscape:h-full object-cover rounded-2xl aspect-[20.25/26.25rem]"
          />
          <img
            src="/discussion.jpeg"
            class="absolute portrait:right-0 portrait:bottom-0 landscape:left-1/2 landscape:top-1/2 aspect-ratio[52/17.8125] portrait:h-[60%] landscape:h-[17.8125rem] object-cover rounded-2xl"
          />
        </div>
      </GenericExplanation>
      <hr />

      <div class="flex flex-col gap-14">
        <CenteredHeading
          title="STATISTICS"
          heading="In 3 years we reached 8 countries, 193 clients and earning $100k USD"
        />
        <AboutStatistic />
        <LogoList />
      </div>

      <div>
        <CenteredHeading
          title="OUR TEAM"
          heading="Meet the team! All creative people are here"
          decoration
        />
        <div class="grid portrait:grid-cols-2 landscape:grid-cols-3 gap-6 mt-24">
          <For each={employees()}>
            {(employee) => <TeamCard {...employee} />}
          </For>
        </div>
      </div>
    </>
  );
}
