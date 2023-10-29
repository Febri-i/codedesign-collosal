import { IGQLEmployee } from "../graphql/types/employee";
import { employees_sample } from "./sample/employees_sample";

export function _DBGetEmployeeList(): IGQLEmployee[] {
  return employees_sample;
}
