import GenericExplanation from "../../genericComponent/GenericExplanation";
import SvgRenderer from "~/components/svgRenderer";
import { GenericDecoration } from "~/components/genericComponent/GenericDecoration";

export interface IHowWeWorkProps {}

export default function HowWeWork(props: IHowWeWorkProps) {
  return (
    <GenericExplanation
      title="HOW WE WORK?"
      heading="Everything is well planned, well designed and developed wholeheartedly"
      detail="Careful planning makes us confident, developed with best practices so that the project can be maintained. We always test projects before they are shipped."
    >
      <GenericDecoration index={2} />
      <SvgRenderer src="/illustration/howwework.svg" />
    </GenericExplanation>
  );
}
