import { A } from "solid-start";
import CenteredHeading from "~/components/genericComponent/CenteredHeading";

export default function HomeHero() {
  return (
    <div class="flex flex-col items-center ">
      <CenteredHeading
        title="CLIENT-DEVELOPMENT DRIVEN"
        heading="We Design. We Develop. We Ship. In The Same Day."
      />
      <h5 class="mb-[.81rem] "></h5>

      <p class="mx-[17%] text-center mb-10">
        We are committed to not making clients wait. We will deliver the work as
        quickly as possible. Even on the same day. Even so, we do not reduce the
        quality of our work.
      </p>
      <div class="flex landscape:[&_button]:btn-lg portrait:[&_button]:btn-sm gap-[1.44rem]">
        <A href="/quote">
          <button class=" btn-primary">Send Quote</button>
        </A>
        <button class=" btn-glass">Learn More</button>
      </div>
    </div>
  );
}
