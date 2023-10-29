import SvgRenderer from "~/components/svgRenderer";

export interface IListIconProps {
  name: string;
  src: string;
}

export default function ListIcon(props: IListIconProps) {
  return (
    <div class="flex items-center justify-start px-[1.37rem] gap-5 glass rounded-md ring-1 ring-gray-700 shadow-md py-[.94rem]">
      <SvgRenderer
        class="h-[1.875rem] w-[1.875rem] object-contain"
        src={props.src}
      />
      <h6>{props.name}</h6>
    </div>
  );
}
