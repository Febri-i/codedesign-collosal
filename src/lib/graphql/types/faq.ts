import { GraphQLObjectType, GraphQLString } from "graphql";

export const QAType = new GraphQLObjectType({
  name: "QA",
  fields() {
    return {
      question: { type: GraphQLString },
      answer: { type: GraphQLString },
    };
  },
});

export interface IQA {
  question: string;
  answer: string;
}
