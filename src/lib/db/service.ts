import { IGQLServiceInfo } from "../graphql/types/service";
import { services_sample } from "./sample/services_sample";

export function _DBGetServiceInfo(
  service_name: string,
): IGQLServiceInfo | undefined {
  return services_sample.find((val) => val.name == service_name);
}

export function _DBGetServiceInfoList(): IGQLServiceInfo[] {
  return services_sample;
}
