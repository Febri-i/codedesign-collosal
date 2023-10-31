import ErrorBoundary, {
  createRouteData,
  useParams,
  useRouteData,
} from "solid-start";
import CenteredHeading from "~/components/genericComponent/CenteredHeading";
import CollosalTitle from "~/components/genericComponent/CollosalTitle";
import ProjectDetail from "~/components/pages/project/ProjectDetail";
import ProjectSuggestion from "~/components/pages/project/ProjectSuggestion";
import { fetchProjectInfo } from "~/lib/actions/project";

export function routeData() {
  const params = useParams<{ project_id: string }>();

  return createRouteData(() => fetchProjectInfo(params.project_id));
}

export default function ProjectDetailPage() {
  const projectInfo = useRouteData<typeof routeData>();

  return (
    <ErrorBoundary
      fallback={(e) => {
        console.error(e);
        return (
          <CenteredHeading err title="ERROR" heading="Project not found." />
        );
      }}
    >
      <CollosalTitle title={projectInfo()?.title + " Project"} />

      <ProjectDetail projectInfo={projectInfo()} />
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
    </ErrorBoundary>
  );
}
