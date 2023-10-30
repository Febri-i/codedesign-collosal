import { Show } from "solid-js";
import ErrorBoundary, {
  createRouteData,
  useParams,
  useRouteData,
} from "solid-start";
import CollosalTitle from "~/components/genericComponent/CollosalTitle";
import ProjectDetail from "~/components/genericComponent/project/ProjectDetail";
import ProjectSuggestion from "~/components/genericComponent/project/ProjectSuggestion";
import { fetchProjectInfo } from "~/lib/actions/project";

export function routeData() {
  const params = useParams<{ project_id: string }>();

  return createRouteData(() => fetchProjectInfo(params.project_id));
}

export default function ProjectDetailPage() {
  const projectInfo = useRouteData<typeof routeData>();

  return (
    <>
      <CollosalTitle title={projectInfo()?.title + " Project"} />

      <Show when={projectInfo() !== undefined}>
        <ProjectDetail projectInfo={projectInfo()} />
      </Show>
      <hr />
      <ErrorBoundary
        fallback={(e, _) => {
          console.error(e);
          return <></>;
        }}
      >
        <ProjectSuggestion
          size={2}
          title="PROJECTS"
          heading="Other Amazing Projects"
        />
      </ErrorBoundary>
    </>
  );
}
