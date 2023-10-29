import { Suspense } from "solid-js";
import CenteredHeading from "~/components/genericComponent/CenteredHeading";
import CollosalTitle from "~/components/genericComponent/CollosalTitle";
import { GenericDecoration } from "~/components/genericComponent/GenericDecoration";
import GenericExplanation from "~/components/genericComponent/GenericExplanation";
import { GenericLoading } from "~/components/genericComponent/GenericLoading";
import SvgRenderer from "~/components/svgRenderer";

interface _Step {
  heading: string;
  explanation: string;
  illustration: string;
}

function formatNumber(num: number) {
  // HACK: THERES GOTTA BE BETTER WAY OF DOING THIS BRUH
  return "0" + num;
}

export default function Workflow() {
  const steps: _Step[] = [
    {
      heading: "Let's talk about your company's problems first",
      explanation: `After submitting the quote form, we will review the data, then we will contact you. You can discuss with our team regarding your problem and find a solution to that problem.

        In this step, you will discuss what application to build.`,
      illustration: "/illustration/discuss.svg",
    },
    {
      explanation: `When everything is agreed upon, our team will make plans related to the application that will be created. Starting from analysis, design, to development.

        In this step, the application is 100% complete.`,
      heading:
        "Doing planning, design and development until everything is finished",
      illustration: "/illustration/developing.svg",
    },
    {
      explanation: `We will be responsible for delivering all the project assets to you, don't worry. These assets include, design files, source code, server access, and so on.

      In this step, everything is done and the contract ends.`,
      heading:
        "The project is complete and we ship all the project assets, and access to the server",
      illustration: "/illustration/deploy.svg",
    },
  ];
  return (
    <>
      <CollosalTitle title="How We Work" />
      <CenteredHeading
        title="HOW WE WORK"
        heading="We have a workflow that allows the job to be delivered well"
        hr
      />
      <Suspense fallback={<GenericLoading />}>
        {steps.map((step, i) => {
          const odd: boolean = i % 2 == 1;
          return (
            <GenericExplanation
              reverse={odd}
              heading={step.heading}
              title={"STEP " + formatNumber(i + 1)}
              detail={step.explanation}
            >
              <GenericDecoration index={i} />

              <SvgRenderer src={step.illustration} class="w-full h-full" />
            </GenericExplanation>
          );
        })}
      </Suspense>
    </>
  );
}
