import { GraphQLFieldConfig, GraphQLList } from "graphql";
import { _DBGetEmployeeList } from "~/lib/db/employee";
import { EmployeeType } from "../types/employee";

const employees: GraphQLFieldConfig<any, any> = {
  type: new GraphQLList(EmployeeType),
  resolve: () => _DBGetEmployeeList(),
};

export const EmployeeQuery = { employees };
