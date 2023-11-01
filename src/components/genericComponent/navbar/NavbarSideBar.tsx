import { createSignal, For } from "solid-js";
import { A } from "solid-start";
import SvgRenderer from "~/components/svgRenderer";
import { INavbarLink } from "./Navbar";

interface INavbarSideBarProps {
  links: INavbarLink[];
}

export function NavbarSidebar(props: INavbarSideBarProps) {
  const [showSideBar, setShowSideBar] = createSignal<boolean>(false);
  return (
    <>
      <SvgRenderer
        class="w-10 h-10 ml-auto cursor-pointer"
        src="/icons/menu.svg"
        onclick={() => setShowSideBar((val) => !val)}
      />
      <div
        id="sidebarcontainer"
        onclick={(e) =>
          e.target.id == "sidebarcontainer" && setShowSideBar(false)
        }
        class=" fixed inset-0  bg-black z-40 bg-opacity-80 transition-colors "
        classList={{
          " pointer-events-none !bg-opacity-0 ": !showSideBar(),
        }}
      >
        <div
          class="min-w-1/2 flex flex-col gap-y-8 justify-between h-full translate-x-0 p-8 absolute transition-all  bg-white right-0"
          classList={{
            " !translate-x-full ": !showSideBar(),
          }}
        >
          <div class="w-full">
            <SvgRenderer
              src="/icons/back.svg"
              class="text-black w-6 h-6 cursor-pointer"
              onclick={() => setShowSideBar(false)}
            />
          </div>
          <div class="flex h-full gap-4 flex-col">
            <For each={props.links}>
              {(link) => (
                <A href={link.url}>
                  <span class="text-black text-lg">{link.title}</span>
                </A>
              )}
            </For>
          </div>
        </div>
      </div>
    </>
  );
}
