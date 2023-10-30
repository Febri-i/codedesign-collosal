import ProjectSuggestion from "../project/ProjectSuggestion";

export interface IHomeProjectProps {}

export default function HomeProject(props: IHomeProjectProps) {
  return (
    <ProjectSuggestion
      size={2}
      title="PROJECTS"
      heading="We have completed many amazing projects that you will not believe"
    />
  );
}
