import { IGQLPartialListQueryResult } from "../graphql/query/portialListQueryTemplate";
import { IProject } from "../graphql/types/project";
import { projects_sample } from "./sample/projects_sample";

export function _DBGetProjectInfo(project_id: string): IProject | undefined {
  return projects_sample.find((val) => val.project_id == project_id);
}

export function _DBGetProjectInfoList(
  page: number,
  size: number,
  technology?: string,
): IGQLPartialListQueryResult<IProject> {
  const start = size * page;
  const itemList = technology
    ? projects_sample.filter((project) =>
        project.technology.includes(technology as string),
      )
    : projects_sample;
  return {
    done: start + size > itemList.length,
    items: itemList.slice(start, start + size),
  };
}

// HACK: THIS IS JUST QUICK WAY OF GETTING TECHNOLOGY LIST, WERE WORKING WITH DUMMY SAMPLE AFTER ALL.
export function _DBGetProjectTechnologyList(): string[] {
  const technologyList: string[] = [];
  return projects_sample
    .map((val) => val.technology)
    .reduce((val, acc) => [...acc, ...val])
    .filter((val: string) => {
      if (technologyList.includes(val)) {
        return false;
      }
      return technologyList.push(val);
    });
}
