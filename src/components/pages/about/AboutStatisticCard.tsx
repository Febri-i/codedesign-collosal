import SvgRenderer from "~/components/svgRenderer";

export interface IStatisticCardProps {
  src: string;
  title: string;
  detail: string;
}

export default function StatisticCard(props: IStatisticCardProps) {
  return (
    <div class="flex gap-10 portrait:glass portrait:p-5">
      <div class=" p-5 glass w-min h-min rounded-xl">
        <SvgRenderer src={props.src} class="w-[1.875rem] h-[1.875rem]" />
      </div>
      <div>
        <h1>{props.detail}</h1>
        <p>{props.title}</p>
      </div>
    </div>
  );
}
