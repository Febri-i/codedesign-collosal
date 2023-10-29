import { GraphQLInt, GraphQLObjectType } from "graphql";

export interface ISiteStatistic {
  totalClient: number;
  totalEarning: number;
  totalCountries: number;
}

export const SiteStatisticType = new GraphQLObjectType({
  name: "SiteStatistic",
  fields() {
    return {
      totalClient: { type: GraphQLInt },
      totalEarning: { type: GraphQLInt },
      totalCountries: { type: GraphQLInt },
    };
  },
});
