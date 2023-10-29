import { createMediaQuery } from "@solid-primitives/media";
import { Show } from "solid-js";

export interface ITestimonialCardProps {
  picture: string;
  name: string;
  company: string;
  critique: string;
}

export default function TestimonialCard(props: ITestimonialCardProps) {
  return (
    <div class="w-full flex h-full gap-4 flex-col rounded-md shadow-md landscape:items-center landscape:text-center p-8 bg-white glass bg-opacity-5">
      <img
        class="landscape:w-20 landscape:h-20 portrait:h-12 portrait:w-12 shrink-0 rounded-full bg-red-500 object-cover "
        src={props.picture}
        alt={props.name + "'s picture"}
      />

      <div>
        <div>
          <h3 class="text-white portrait:text-lg portrait:!leading-6">
            {props.name}
          </h3>
          <p>{props.company}</p>
        </div>

        <p
          style={{ color: "inherit" }}
          class="text-sm portrait:mt-2 landscape:mt-4"
        >
          "{props.critique}"
        </p>
      </div>
    </div>
  );
}
