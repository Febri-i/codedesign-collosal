import { JSX } from "solid-js";
import MainDecoration from "./MainDecoration";
import Navbar from "./navbar/Navbar";
import Footer from "./Footer";
import Callout from "./Callout";

export interface IGenericPageProps {
  children?: JSX.Element;
  sendQuote?: boolean;
}

export default function GenericPage(props: IGenericPageProps) {
  let extraFilter: string = `url('data:image/svg+xml, <svg\
              width="200"\
              height="200"\
              viewBox="0 0 200 200"\
              xmlns="http://www.w3.org/2000/svg"\
            >\
              <defs>\
                <filter  id="svgFilter">\
                  <feTurbulence\
                    type="fractalNoise"\
                    baseFrequency=".5"\
                    numOctaves="1"\
                    result="turbolence"\
                  />\
                  <feDisplacementMap\
                    in2="turbolance"\
                    scale="300"\
                    in="SourceGraphic"\
                  />\
                </filter>\
              </defs>\
            </svg>#svgFilter')`;
  return (
    <div class="bg-gray-900 relative">
      <div class="relative h-fit z-10  text-white ">
        <div class="absolute inset-0 overflow-hidden -z-10 ">
          <div
            style={{
              "backdrop-filter": ` ${extraFilter} `,
            }}
            class="absolute inset-0 z-10 bg-gray-900 bg-opacity-80"
          ></div>
          <MainDecoration />
        </div>
        <div class="flex flex-col portrait:[&>*]:mx-10 portrait:pt-4 portrait:gap-y-10 landscape:gap-y-36 overflow-x-hidden landscape:[&>*]:mx-[13rem] landscape:pt-14">
          <Navbar />

          {props.children}
          {!(props.sendQuote === false) && <Callout />}
          <Footer />
        </div>
      </div>
    </div>
  );
}
