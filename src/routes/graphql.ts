import { GraphQLObjectType, GraphQLSchema, graphql } from "graphql";

import { APIEvent, json } from "solid-start";
import { BlogQuery } from "~/lib/graphql/query/blog";
import { ProjectQuery } from "~/lib/graphql/query/project";
import { ServiceQuery } from "~/lib/graphql/query/service";
import { FAQQuery } from "~/lib/graphql/query/faq";
import { EmployeeQuery } from "~/lib/graphql/query/employee";
import { AuthorQuery } from "~/lib/graphql/query/author";
import { SiteStatisticQuery } from "~/lib/graphql/query/siteStatistic";
import { CommentQuery } from "~/lib/graphql/query/comment";

const RootQuery = new GraphQLObjectType({
  name: "RootQueryType",
  fields: {
    ...ServiceQuery,
    ...ProjectQuery,
    ...FAQQuery,
    ...CommentQuery,
    ...EmployeeQuery,
    ...AuthorQuery,
    ...SiteStatisticQuery,
    ...BlogQuery,
  },
});

const schema = new GraphQLSchema({ query: RootQuery });

const handler = async (event: APIEvent) => {
  const body = await new Response(event.request.body).json();
  const result = await graphql({ schema, source: body.query });
  return json(result);
};

export const GET = handler;
export const POST = handler;
