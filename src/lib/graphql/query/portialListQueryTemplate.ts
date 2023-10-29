import { GraphQLBoolean, GraphQLList, GraphQLObjectType } from "graphql";

export interface IGQLPartialListQueryResult<Type> {
  done: boolean;
  items: Type[];
}
export function createPartialGQLQueryType<Type>(
  type: GraphQLObjectType<any, any>,
) {
  return new GraphQLObjectType({
    name:
      "Partial" +
      type.name[0].toUpperCase() +
      type.name.substring(1) +
      "ListQuery",
    fields() {
      return {
        done: { type: GraphQLBoolean },
        items: {
          type: new GraphQLList(type),
          resolve(parent: IGQLPartialListQueryResult<Type>) {
            return parent.items;
          },
        },
      };
    },
  });
}
