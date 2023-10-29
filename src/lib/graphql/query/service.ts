import {
  GraphQLFieldConfig,
  GraphQLList,
  GraphQLNonNull,
  GraphQLString,
} from "graphql";
import { _DBGetServiceInfo, _DBGetServiceInfoList } from "~/lib/db/service";
import { ServiceType } from "../types/service";

interface _ServiceQueryArgs {
  service_name: string;
}
const service: GraphQLFieldConfig<any, any> = {
  type: ServiceType,
  args: { service_name: { type: new GraphQLNonNull(GraphQLString) } },
  resolve: (_parent, args: _ServiceQueryArgs) =>
    _DBGetServiceInfo(args.service_name),
};
const services: GraphQLFieldConfig<any, any> = {
  type: new GraphQLList(ServiceType),
  resolve: (_parent, _args) => _DBGetServiceInfoList(),
};
export const ServiceQuery = { service, services };
