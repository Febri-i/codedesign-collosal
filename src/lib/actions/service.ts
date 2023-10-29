import { IllustratedFeature } from "../graphql/types/service";
import { gqlCall } from "../utils";

export interface IActionServiceInfoDetailed {
  name: string;
  illustration: string;
  description: string;
  illustratedFeatures: IllustratedFeature[];
  benefit: string[];
}

export interface IActionServiceSummaryInfo {
  name: string;
  heading: string;
  summaryDescription: string;
  illustration: string;
  summaryIllustratedFeatures: IllustratedFeature[];
}

export async function fetchServiceInfoDetailed(
  service_name: string
): Promise<IActionServiceInfoDetailed> {
  const result = await gqlCall(
    `{service(service_name: "${service_name}") {name, benefit, description, illustratedFeatures{title, description, illustration}, illustration}}`
  );

  if (result?.service) return result?.service;

  throw new Error("Failed to fetch service information.");
}

export async function fetchServiceSummaryInfoList(): Promise<
  IActionServiceSummaryInfo[]
> {
  const result = await gqlCall(
    `{services { name, heading, summaryDescription, illustration, summaryIllustratedFeatures{title, description, illustration}}}`
  );

  if (result?.services) return result?.services;

  throw new Error("Failed to fetch service list.");
}

export interface IPricing {
  name: string;
  price: number;
  offer: string[];
}

export async function fetchPricingList(): Promise<IPricing[]> {
  const result = await gqlCall(`{services { offer, name, price}}`);

  if (result?.services) return result?.services;

  throw new Error("Failed to fetch pricing list");
}
