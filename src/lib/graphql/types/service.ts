import {
  GraphQLInt,
  GraphQLList,
  GraphQLObjectType,
  GraphQLString,
} from "graphql";

export interface IllustratedFeature {
  title: string;
  description: string;
  illustration: string;
}

export interface IGQLServiceInfo {
  name: string;
  price: number;
  illustration: string;
  description: string;
  summaryDescription: string;
  heading: string;
  offer: string[];
  illustratedFeatures: IllustratedFeature[];
  summaryIllustratedFeatures: IllustratedFeature[];
  benefit: string[];
}

const FeatureType = new GraphQLObjectType({
  name: "Feature",
  fields() {
    return {
      title: { type: GraphQLString },
      description: { type: GraphQLString },
      illustration: { type: GraphQLString },
    };
  },
});

export const ServiceType = new GraphQLObjectType({
  name: "Service",
  fields() {
    return {
      name: { type: GraphQLString },
      price: { type: GraphQLInt },
      summaryDescription: { type: GraphQLString },
      heading: { type: GraphQLString },

      description: { type: GraphQLString },
      benefit: { type: new GraphQLList(GraphQLString) },
      illustration: { type: GraphQLString },
      offer: { type: new GraphQLList(GraphQLString) },
      illustratedFeatures: {
        type: new GraphQLList(FeatureType),
        resolve: (parent: IGQLServiceInfo) => {
          return parent.illustratedFeatures;
        },
      },
      summaryIllustratedFeatures: {
        type: new GraphQLList(FeatureType),
        resolve: (parent: IGQLServiceInfo) => {
          return parent.summaryIllustratedFeatures;
        },
      },
    };
  },
});
