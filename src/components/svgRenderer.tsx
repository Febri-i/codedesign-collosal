import { createEffect, createSignal } from "solid-js";
import { JSX } from "solid-js/web/types/jsx";

type ISvgRendererProps = JSX.SvgSVGAttributes<SVGSVGElement> & {
  src: string;
};

export default function SvgRenderer(props: ISvgRendererProps) {
  const [svgstr, setSvgStr] = createSignal<string>("");
  const { src, ...attributes } = props;
  createEffect(() => {
    fetch(props.src)
      .then((res) => {
        return res.text();
      })
      .then((str) => {
        setSvgStr(str);
      });
  });

  return (
    <svg
      {...() => {
        let str = svgstr();
        if (!str) {
          return {};
        }
        const attrsMatch = str
          .trim()
          .substring(1, str.indexOf(">"))
          .matchAll(/((\w+)=[\'\"](.*?)[\"\'])/gm);
        let match = attrsMatch.next();
        let attrs: any = {};
        while (!match.done) {
          const key: string = match.value[2];
          const value: string = match.value[3];
          attrs[key] = value;
          match = attrsMatch.next();
        }

        return attrs;
      }}
      {...attributes}
      innerHTML={(() => {
        const str = svgstr()?.trim();
        if (str?.length) {
          return str
            .substring(str.indexOf(">") + 1, str.lastIndexOf("<"))
            .trim();
        }
        return "";
      })()}
    ></svg>
  );
}
