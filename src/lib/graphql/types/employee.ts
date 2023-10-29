import { GraphQLObjectType, GraphQLString } from "graphql";

export interface IGQLEmployee {
  name: string;
  position: string;
  picture: string;
}

export const EmployeeType = new GraphQLObjectType({
  name: "Employee",
  fields() {
    return {
      name: { type: GraphQLString },
      position: { type: GraphQLString },
      picture: { type: GraphQLString },
    };
  },
});
