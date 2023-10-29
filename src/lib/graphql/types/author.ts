import { GraphQLList, GraphQLObjectType, GraphQLString } from "graphql";

export interface ISocial {
  type: string;
  url: string;
}

export interface IAuthor {
  author_id: string;
  picture: string;
  name: string;
  bio: string;
  socials: ISocial[];
  job: string;
}

export const SocialType = new GraphQLObjectType({
  name: "Social",
  fields() {
    return {
      url: { type: GraphQLString },
      type: { type: GraphQLString },
    };
  },
});

export const AuthorType = new GraphQLObjectType({
  name: "Author",
  fields() {
    return {
      author_id: { type: GraphQLString },
      name: { type: GraphQLString },
      bio: { type: GraphQLString },
      picture: { type: GraphQLString },
      job: { type: GraphQLString },
      socials: {
        type: new GraphQLList(SocialType),
        resolve(parent) {
          return parent.socials;
        },
      },
    };
  },
});
