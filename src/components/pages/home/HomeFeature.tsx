import FeatureCard from "../../genericComponent/FeatureCard";

export interface IHomeFeatureProps {}

export default function HomeFeature(props: IHomeFeatureProps) {
  return (
    <div>
      <div class="flex gap-5 portrait:flex-col landscape:justify-center">
        <FeatureCard
          src="/icons/figma.svg"
          title="Design"
          detail="The project interface will be designed first, our favorite tool is Figma"
        ></FeatureCard>
        <FeatureCard
          src="/icons/code.svg"
          title="Develop"
          detail="Transform design and write business logic here. Choose the technology you want."
        ></FeatureCard>
        <FeatureCard
          src="/icons/box.svg"
          title="Ship"
          detail="After the work is complete, we will send the project and all its assets to you"
        ></FeatureCard>
      </div>
    </div>
  );
}
