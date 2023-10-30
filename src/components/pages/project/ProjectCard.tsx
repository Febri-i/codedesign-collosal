import { A } from "solid-start";
import { SummaryProjectInfo } from "~/lib/actions/project";
import { getProjectUrl } from "~/lib/utils";

export default function ProjectCard(props: SummaryProjectInfo) {
  return (
    <div class="h-full flex flex-col">
      <img
        class="aspect-[31375/27562] w-full shrink-0 object-cover"
        src={props.thumbnail || ""}
        alt={props.description}
      />
      <div class="flex h-full landscape:items-center gap-4 mt-8 landscape:text-center px-4 flex-col">
        <h3>{props.title}</h3>
        <p class="h-full">{props.description}</p>
        <A
          class="mt-6  portrait:ml-auto"
          href={getProjectUrl(props.project_id)}
        >
          <button class="btn-sm btn-round ">Detail</button>
        </A>
      </div>
    </div>
  );
}
