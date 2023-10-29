import CardIcon from "~/components/genericComponent/IconCard/CardIcon";
import ListIcon from "~/components/genericComponent/IconCard/CardIconList";
import CardIconSM from "~/components/genericComponent/IconCard/CardIconSM";

export interface IllustratedFeature {
  title: string;
  description: string;
  illustration: string;
}

interface IServiceFeatureSummaryProps {
  features: IllustratedFeature[];
}

export default function ServiceFeatureSummary(
  props: IServiceFeatureSummaryProps
) {
  let type = 0;
  if (props.features.length > 2) {
    type = (props.features.length % 2) + 1;
  }
  return (
    <div
      class={
        type == 2
          ? " flex flex-col  gap-5"
          : "landscape:grid portrait:flex flex-col grid-cols-2 gap-5"
      }
    >
      {props.features.map((feature) => {
        if (type == 2) {
          return <ListIcon name={feature.title} src={feature.illustration} />;
        } else if (type == 1) {
          return (
            <CardIconSM src={feature.illustration} value={feature.title} />
          );
        }
        return (
          <CardIcon
            detail={feature.description}
            src={feature.illustration}
            title={feature.title}
          />
        );
      })}
    </div>
  );
}
