import {
  GraphQLBoolean,
  GraphQLList,
  GraphQLObjectType,
  GraphQLString,
} from "graphql";

export interface IProject {
  category: string;
  client: string;
  project_id: string;
  description: string;
  technology: string[];
  title: string;
  review: string;
  thumbnail: string;
  personInCharge: string;
  pictureOfPersonInCharge: string;
}

export const ProjectType = new GraphQLObjectType({
  name: "Project",
  fields: () => ({
    category: {
      type: GraphQLString,
    },
    project_id: {
      type: GraphQLString,
    },
    title: {
      type: GraphQLString,
    },
    description: {
      type: GraphQLString,
    },
    thumbnail: {
      type: GraphQLString,
    },
    client: {
      type: GraphQLString,
    },
    review: {
      type: GraphQLString,
    },
    personInCharge: {
      type: GraphQLString,
    },
    pictureOfPersonInCharge: {
      type: GraphQLString,
    },
    technology: {
      type: new GraphQLList(GraphQLString),
    },
  }),
});

export const ProjectListQueryType = new GraphQLObjectType({
  name: "ProjectListQuery",
  fields() {
    return {
      done: { type: GraphQLBoolean },
      items: { type: new GraphQLList(ProjectType) },
    };
  },
});
