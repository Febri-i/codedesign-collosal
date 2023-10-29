import {
  GraphQLFieldConfig,
  GraphQLInt,
  GraphQLList,
  GraphQLNonNull,
  GraphQLString,
} from "graphql";
import {
  _DBGetProjectInfo,
  _DBGetProjectInfoList,
  _DBGetProjectTechnologyList,
} from "~/lib/db/project";
import { ProjectType } from "../types/project";
import { createPartialGQLQueryType } from "./portialListQueryTemplate";

interface _ProjectQueryArgs {
  project_id: string;
}

interface _ProjectsQueryArgs {
  size: number;
  page: number;
  technology?: string;
}
const project: GraphQLFieldConfig<any, any> = {
  type: ProjectType,
  args: { project_id: { type: new GraphQLNonNull(GraphQLString) } },
  resolve(_parent, args: _ProjectQueryArgs) {
    return _DBGetProjectInfo(args.project_id);
  },
};

const projectList: GraphQLFieldConfig<any, any> = {
  type: createPartialGQLQueryType(ProjectType),
  args: {
    size: { type: new GraphQLNonNull(GraphQLInt) },
    page: { type: new GraphQLNonNull(GraphQLInt) },
    technology: { type: GraphQLString },
  },
  resolve: (_parent, args: _ProjectsQueryArgs) =>
    _DBGetProjectInfoList(args.page, args.size, args.technology),
};
const technologyList: GraphQLFieldConfig<any, any> = {
  type: new GraphQLList(GraphQLString),
  resolve() {
    return _DBGetProjectTechnologyList();
  },
};

export const ProjectQuery = {
  project,
  projectList,
  technologyList,
};
