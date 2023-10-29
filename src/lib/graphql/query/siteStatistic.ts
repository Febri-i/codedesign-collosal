import { GraphQLFieldConfig } from "graphql";
import { _DBGetSiteStatistic } from "~/lib/db/siteStatistic";
import { SiteStatisticType } from "../types/siteStatistic";

const siteStatistics: GraphQLFieldConfig<any, any> = {
  type: SiteStatisticType,
  resolve: () => _DBGetSiteStatistic(),
};

export const SiteStatisticQuery = { siteStatistics };
