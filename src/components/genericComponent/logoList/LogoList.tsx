import { createMediaQuery } from "@solid-primitives/media";
import { createEffect, For, Show } from "solid-js";
import SvgRenderer from "../../svgRenderer";
import style from "./LogoList.module.css";
export default function LogoList() {
  const logoList: string[] = [
    "/logo/github.svg",
    "/logo/forbes.svg",
    "/logo/microsoft.svg",
    "/logo/facebook.svg",
  ];
  const isLandscape = createMediaQuery("(orientation: landscape)");
  return (
    <div class={style.logoWrapper}>
      <div class={style.logoContainer}>
        <For each={logoList}>
          {(logo) => <SvgRenderer class={style.logoItem} src={logo} />}
        </For>
      </div>
      <Show when={!isLandscape()}>
        <div class={style.logoContainer}>
          <For each={logoList}>
            {(logo) => <SvgRenderer class={style.logoItem} src={logo} />}
          </For>
        </div>
      </Show>
    </div>
  );
}
