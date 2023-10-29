import {
  ErrorBoundary,
  For,
  Show,
  createResource,
  createSignal,
  createEffect,
} from "solid-js";

import CollosalTitle from "~/components/genericComponent/CollosalTitle";
import GenericExplanation from "~/components/genericComponent/GenericExplanation";
import { GenericLoading } from "~/components/genericComponent/GenericLoading";
import ProjectCard from "~/components/genericComponent/project/ProjectCard";
import {
  fetchProjectList,
  fetchTechnologyList,
  SummaryProjectInfo,
} from "~/lib/actions/project";
import { createLoadMore } from "~/lib/hooks/createLoadMore";

export default function Project() {
  const [technolgy, setTechnology] = createSignal<string>("all");

  const [projectList, isLoading, isDone, loadMore, resetProjectList] =
    createLoadMore<SummaryProjectInfo>(4, async (page, size) => {
      return await fetchProjectList(
        page,
        size,
        technolgy() == "all" ? undefined : technolgy(),
      );
    });
  createEffect(() => {
    resetProjectList();
    loadMore();
  });
  const [technologyList] = createResource<string[]>(fetchTechnologyList);
  return (
    <>
      <CollosalTitle title="Projects" />

      <GenericExplanation
        reverse
        title="PROJECTS"
        heading="We have completed many amazing projects that you will not believe"
      >
        <div class="flex items-center justify-end h-full">
          <select
            onchange={(e) => {
              resetProjectList();
              setTechnology((e.target as HTMLSelectElement).value);
              loadMore();
            }}
          >
            <option value="all" class="text-black">
              Technology
            </option>
            <For each={technologyList()}>
              {(technology) => (
                <option class="text-black" value={technology}>
                  {technology}
                </option>
              )}
            </For>
          </select>
        </div>
      </GenericExplanation>
      <hr />
      <div class="flex flex-col gap-20 justify-center">
        <div class="grid grid-cols-2 gap-x-5 gap-y-16">
          <For each={projectList}>
            {(projectinfo) => <ProjectCard {...projectinfo} />}
          </For>
        </div>

        <Show when={!isDone()}>
          <Show when={!isLoading()} fallback={<GenericLoading />}>
            <button class="btn-lg btn-glass mx-auto" onclick={() => loadMore()}>
              Load More
            </button>
          </Show>
        </Show>
      </div>
    </>
  );
}
