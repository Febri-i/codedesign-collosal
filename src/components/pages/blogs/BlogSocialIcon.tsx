import SvgRenderer from "~/components/svgRenderer";

function getIcon(type: string) {
  return "/icons/" + type + ".svg";
}

interface IBlogSocialIconProps {
  class: string;
  type: string;
  url: string;
}

export function BlogSocialIcon(props: IBlogSocialIconProps) {
  return (
    <a href={props.url} class={props.class}>
      <SvgRenderer
        width="100%"
        height="100%"
        class="w-full h-full"
        src={getIcon(props.type)}
      />
    </a>
  );
}
