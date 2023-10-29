import { ProjectInfo } from "~/lib/actions/project";
import CenteredHeading from "../CenteredHeading";

export interface IProjectDetailProps {
  projectInfo?: ProjectInfo;
}

export default function ProjectDetail(props: IProjectDetailProps) {
  return (
    <>
      <CenteredHeading
        heading={props.projectInfo?.title || ""}
        hr
        title="PROJECT DETAIL"
      />

      <div class="landscape:grid portrait:flex flex-col grid-cols-2 gap-10">
        <img src="" class="aspect-[288935/247275] h-full" alt="" />
        <div>
          <p>{props.projectInfo?.description}</p>
          <div class="flex flex-col gap-10 mt-12 [&>div>p]:text-sm [&>div>p]:tracking-[0.0875rem] ">
            <div>
              <p>CATEGORY</p>
              <span>{props.projectInfo?.category}</span>
            </div>
            <div>
              <p>CLIENT</p>
              <span>{props.projectInfo?.client}</span>
            </div>
            <div>
              <p>TECHNOLOGY</p>
              <span>{props.projectInfo?.technology.join(", ")}</span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
