import { For, createResource, Suspense } from "solid-js";
import ProjectCard from "./ProjectCard";
import {
  SummaryProjectInfo,
  fetchRandomProjectSummaryInfo,
} from "~/lib/actions/project";
import { GenericLoading } from "~/components/genericComponent/GenericLoading";
import CenteredHeading from "~/components/genericComponent/CenteredHeading";

export interface IProjectSuggestionProps {
  size: number;
  heading: string;
  title: string;
}

export default function ProjectSuggestion(props: IProjectSuggestionProps) {
  const [projects] = createResource<SummaryProjectInfo[]>(() =>
    fetchRandomProjectSummaryInfo(props.size),
  );
  return (
    <Suspense fallback={<GenericLoading />}>
      <div>
        <CenteredHeading
          title={props.title}
          decoration
          heading={props.heading}
        />
        <div class="landscape:grid grid-cols-2 portrait:flex flex-col gap-10 mt-16">
          <For each={projects()}>{(items) => <ProjectCard {...items} />}</For>
        </div>
      </div>
    </Suspense>
  );
}
