import { createMediaQuery } from "@solid-primitives/media";
import { For, Show } from "solid-js";
import { A } from "solid-start";
import SvgRenderer from "~/components/svgRenderer";

import style from "./Navbar.module.css";
import { NavbarSidebar } from "./NavbarSideBar";

export interface INavbarLink {
  title: string;
  url: string;
}

export default function Navbar() {
  const isLandscape = createMediaQuery("(orientation: landscape)");

  const links: INavbarLink[] = [
    { title: "Services", url: "/services" },
    { title: "How We Work", url: "/workflow" },
    { title: "Projects", url: "/projects" },
    { title: "Blogs", url: "/blogs" },
    { title: "Pricing", url: "/pricing" },
    { title: "About", url: "/about" },
  ];
  return (
    <div class={style.navbar}>
      <A href="/">
        <div class="flex gap-4 items-center">
          <SvgRenderer src="/logo/collosal1.svg" class="aspect-square w-6" />
          <h3>Collosal.</h3>
        </div>
      </A>
      <Show when={!isLandscape()}>
        <NavbarSidebar links={links} />
      </Show>
      <Show when={isLandscape()}>
        <div class="w-full flex justify-center gap-11 [&>p]:whitespace-nowrap text-gray-200">
          <For each={links}>
            {(link) => (
              <A href={link.url}>
                <p>{link.title}</p>
              </A>
            )}
          </For>
        </div>
        <A href="/contact">
          <button class="btn-sm btn-glass">Contacts</button>
        </A>
      </Show>
    </div>
  );
}
