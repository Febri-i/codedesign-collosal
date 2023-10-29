import { For } from "solid-js";
import CarrdCarouselItem from "~/components/genericComponent/carousel/CardCarouselItem";
import CenteredHeading from "~/components/genericComponent/CenteredHeading";
import { ITestimony } from "~/lib/actions/project";
import CardCarousel from "../../genericComponent/carousel/CardCarousel";
import TestimonialCard from "../../genericComponent/TestimonialCard";

export interface IHomeTestimonyProps {
  testimonyList: ITestimony[];
}

export default function HomeTestimony(props: IHomeTestimonyProps) {
  return (
    <div
      class="flex flex-col landscape:gap-16 relative"
      style={{ margin: "0 4.19rem" }}
    >
      <div class="h-[100vh] bg-accent-500 top-0 left-full bgDecoration "></div>
      <div class="h-[100vh] bg-semanticSecondary-500 bottom-o right-full bgDecoration "></div>

      <CenteredHeading
        title="TESTIMONIAL"
        heading="What do our clients say that we never let down?"
      />

      <div class="relative ">
        <CardCarousel>
          <For each={props.testimonyList}>
            {(testimony) => {
              return (
                <CarrdCarouselItem>
                  <TestimonialCard
                    company={testimony.client}
                    critique={testimony.review}
                    name={testimony.personInCharge}
                    picture={testimony.pictureOfPersonInCharge}
                  />
                </CarrdCarouselItem>
              );
            }}
          </For>
        </CardCarousel>
      </div>
    </div>
  );
}
