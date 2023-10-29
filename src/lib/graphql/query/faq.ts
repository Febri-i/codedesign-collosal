import {
  GraphQLFieldConfig,
  GraphQLList,
  GraphQLNonNull,
  GraphQLString,
} from "graphql";
import { _DBGetFAQs, _DBGetFAQSection } from "~/lib/db/faq";
import { QAType } from "../types/faq";

const faq: GraphQLFieldConfig<any, any> = {
  type: new GraphQLList(QAType),
  args: { section: { type: new GraphQLNonNull(GraphQLString) } },
  resolve: (_parent, args: { section: string }) => _DBGetFAQs(args.section),
};
const faqsections: GraphQLFieldConfig<any, any> = {
  type: new GraphQLList(GraphQLString),
  resolve: () => _DBGetFAQSection(),
};
export const FAQQuery = { faq, faqsections };
