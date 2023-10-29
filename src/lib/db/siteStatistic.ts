import { ISiteStatistic } from "../graphql/types/siteStatistic";

export function _DBGetSiteStatistic(): ISiteStatistic {
  return {
    totalClient: 10,
    totalCountries: 5,
    totalEarning: 100000,
  };
}
