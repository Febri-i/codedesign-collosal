import SvgRenderer from "~/components/svgRenderer";

export interface ICardIconSMProps {
  key?: string;
  value: string;
  src: string;
  reverse?: boolean;
}

export default function CardIconSM(props: ICardIconSMProps) {
  return (
    <div class="flex gap-6 items-center">
      <div class="aspect-square h-full p-4 glass rounded-md">
        <SvgRenderer class="h-5 w-5 object-contain" src={props.src} />
      </div>
      <div class="flex w-full flex-col items-start">
        {props.key && !props.reverse && <p>{props.key}</p>}

        {props.key ? (
          <h4 class="w-full ">{props.value}</h4>
        ) : (
          <h6 class="w-full overflow-hidden">{props.value}</h6>
        )}
        {props.key && props.reverse && <p>{props.key}</p>}
      </div>
    </div>
  );
}
