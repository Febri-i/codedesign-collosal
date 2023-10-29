import { gqlCall } from "../utils";

export interface IActionSummayProjectInfo {
  done: boolean;
  items: SummaryProjectInfo[];
}

export interface ITestimony {
  client: string;
  personInCharge: string;
  pictureOfPersonInCharge: string;
  review: string;
}

export interface ProjectInfo {
  title: string;
  description: string;
  technology: string[];
  thumbnail: string;
  client: string;
  category: string;
}

export interface SummaryProjectInfo {
  title: string;
  description: string;
  project_id: string;
  thumbnail: string;
}

export async function fetchProjectInfo(
  project_id: string
): Promise<ProjectInfo> {
  const result = await gqlCall(
    `{project(project_id: \"${project_id}\") {title,description,category,technology,thumbnail,client}}`
  );
  if (result?.project) {
    return result?.project;
  }

  throw new Error("Failed to fetch project.");
}

export async function fetchRandomProjectSummaryInfo(
  size: number
): Promise<SummaryProjectInfo[]> {
  const result = await gqlCall(
    `{projectList(size: ${size}, page: 0) {done, items {title, description, project_id, thumbnail}}}`
  );
  if (result?.projectList?.items) {
    return result.projectList.items;
  }
  throw new Error("Failed to fetch random project.");
}

export async function fetchRandomTestimony(
  size: number
): Promise<ITestimony[]> {
  const result = await gqlCall(
    `{projectList(size: ${size}, page: 0) {done, items {client, review , personInCharge, pictureOfPersonInCharge}}}`
  );

  if (result?.projectList?.items) {
    return result.projectList.items;
  }
  throw "Failed to fetch testimony.";
}

export async function fetchProjectList(
  page: number,
  size: number,
  technology?: string
): Promise<IActionSummayProjectInfo> {
  const result = await gqlCall(
    `{projectList(size: ${size}, page: ${page}${
      (technology && `, technology: \"${technology}\"`) || ""
    }) {done, items {title, description, project_id, thumbnail}}}`
  );

  if (result?.projectList) return result?.projectList;

  throw new Error("Failed to fetch project list.");
}

export async function fetchTechnologyList(): Promise<string[]> {
  const result = await gqlCall("{technologyList }");
  if (result?.technologyList) {
    return result.technologyList;
  }
  throw new Error("Failed to fetch technology list.");
}
