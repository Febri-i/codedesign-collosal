import { JSX } from "solid-js/web/types/jsx";
import ServiceDetail from "./ServiceDetail.module.css";
import { A } from "solid-start";
import SvgRenderer from "~/components/svgRenderer";
import { getServiceUrl } from "~/lib/utils";

export interface IServiceSummaryTemplateProps {
  name: string;
  heading: string;
  summaryDescription: string;
  ilustration: string;
  children?: JSX.Element;
  decoration?: JSX.Element;
  reverse?: boolean;
}

export default function ServiceSummaryTemplate(
  props: IServiceSummaryTemplateProps,
) {
  const illustration = (
    <div class="relative">
      {props.decoration}
      <SvgRenderer class="w-full h-full" src={props.ilustration} />
    </div>
  );
  return (
    <div class="landscape:grid portrait:flex flex-col portrait:grid-rows-2 landscape:grid-cols-2 gap-16">
      <div
        classList={{
          "  col-start-2 row-end-1 ": props.reverse,
        }}
      >
        {illustration}
      </div>
      <div classList={{ " col-start-1 ": props.reverse }} class="w-full h-fit">
        <h5>{props.name}</h5>
        <h2>{props.heading}</h2>
        <p class="my-7">{props.summaryDescription}</p>
        {props.children}

        <A href={getServiceUrl(props.name)}>
          <h6 class={ServiceDetail.serviceDetail}>Service Detail</h6>
        </A>
      </div>
    </div>
  );
}
