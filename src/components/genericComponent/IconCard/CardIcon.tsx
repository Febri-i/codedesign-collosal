import SvgRenderer from "~/components/svgRenderer";

export interface ICardIconProps {
  title: string;
  detail: string;
  src: string;
}

export default function CardIcon(props: ICardIconProps) {
  return (
    <div class="landscape:aspect-[15/9] glass rounded-md shadow-md  w-full px-5 py-6">
      <div class="flex gap-4 items-center justify-start">
        <SvgRenderer
          class="aspect-square h-[1.875rem] w-[1.875rem] object-contain"
          src={props.src}
        />
        <h6 class="w-full">{props.title}</h6>
      </div>
      <p class="mt-4 w-full leading-6 text-sm">{props.detail}</p>
    </div>
  );
}
