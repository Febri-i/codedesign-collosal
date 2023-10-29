import { Accessor, children, createSignal, JSX, Setter } from "solid-js";
import { useCardCarousel } from "./CardCarousel";

interface ICardCarouselItemProps {
  children: JSX.Element;
}
export default function CarrdCarouselItem(props: ICardCarouselItemProps) {
  const [ourIndex, setOurIndex] = createSignal<number>(0);
  const [currentIndex, setTotalCard] = useCardCarousel() as [
    Accessor<number>,
    Setter<number>,
  ];
  setTotalCard((val) => {
    setOurIndex(val);
    return val + 1;
  });
  return (
    <div
      class="landscape:aspect-[259/279]  portrait:!opacity-100 landscape:w-[calc(33.33%-1.25rem/2)] portrait:text-opacity-100 portrait:!translate-x-0 portrait:!translate-y-0  landscape:absolute  duration-500 transition-all text-white [&>div]:transition-all"
      classList={{
        "left-full -translate-x-full text-opacity-50":
          currentIndex() < ourIndex(),
        "left-0 text-opacity-50": currentIndex() > ourIndex(),
        /*HACK: USE SHADOW INSTEAD OF BORDER FOR BETTER EFFECT*/
        "left-1/2 -translate-x-1/2 -translate-y-10 text-opacity-100 z-19 [&>div]:landscape:border-2 [&>div]:border-accent-500 ":
          currentIndex() == ourIndex(),
        "opacity-0": Math.abs(currentIndex() - ourIndex()) > 1,
      }}
    >
      {props.children}
    </div>
  );
}
