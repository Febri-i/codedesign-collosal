import { A } from "solid-start";

export default function Callout() {
  return (
    <div class="flex relative landscape:items-center landscape:justify-between overflow-visible portrait:flex-col gap-[3.81rem] border-t-[1px] py-8 border-b-[1px] border-gray-800 ">
      <div class="portrait:hidden text-red absolute w-14 h-14 blur-sm -translate-x-[200%] left-0 top-full  rounded-full bg-gradient-to-br to-[#009C3E] from-[#66FFA3]" />
      <div class="portrait:hidden absolute w-16 h-16 blur-sm right-0 translate-x-[200%] bottom-full  rounded-full bg-gradient-to-br to-[#FC165B] from-[#FF81A6]" />

      <h2>We've prepared everything, it's time for you to tell the problem</h2>
      <div class="flex portrait:ml-auto [&_button]:landscape:btn-lg [&_button]:portrait:btn-sm items-center  w-fit gap-[.62rem]">
        <A href="/quote">
          <button class=" whitespace-nowrap btn-primary">Send Quote</button>
        </A>
        <A href="/contact">
          <button class="whitespace-nowrap btn-glass">Ask Us</button>
        </A>
      </div>
    </div>
  );
}
