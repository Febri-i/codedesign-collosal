import { GenericDecoration } from "~/components/genericComponent/GenericDecoration";
import SvgRenderer from "~/components/svgRenderer";
import GenericExplanation from "../../genericComponent/GenericExplanation";
//        class="w-full h-full scale-125 origin-center"

export default function HomeTeam() {
  return (
    <GenericExplanation
      title="OUR TEAM"
      reverse={true}
      action={{ label: "See Our Teams", cb: () => {} }}
      heading="We're a team of designers, engineers and analysts"
      detail="Our team consists of many creative people. We are committed to maintaining quality work as well as speed. These creative people work together to create maximum work results."
    >
      <GenericDecoration index={3} />
      <SvgRenderer src="/illustration/team.svg" />
    </GenericExplanation>
  );
}
