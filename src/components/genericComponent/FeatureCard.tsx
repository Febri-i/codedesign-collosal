import { createMediaQuery } from "@solid-primitives/media";
import SvgRenderer from "../svgRenderer";
import { Show } from "solid-js";
interface IFeatureCardProps {
  src: string;
  title: string;
  detail: string;
  flat?: boolean;
}

function FeatureCard(props: IFeatureCardProps) {
  return (
    <div class="glass w-full gap-[1.81rem] portrait:flex-start landscape:aspect-[82/69] px-10 pb-9 flex pt-8 flex-col ">
      <div
        class={
          " w-fit h-fit  " +
          (props.flat
            ? "[&>svg]:w-[3.125rem] [&>svg]:h-[3.125rem]"
            : "glass p-[.81rem] rounded-md")
        }
      >
        <SvgRenderer class="w-[1.5rem] h-[1.5rem]" src={props.src} />
      </div>
      <div>
        <h4 class="portrait:!leading-4 portrait:mb-2">{props.title}</h4>
        <p class="text-gray-300 text-sm">{props.detail}</p>
      </div>
    </div>
  );
}

export default FeatureCard;
