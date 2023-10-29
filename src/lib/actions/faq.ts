import { IQA } from "../graphql/types/faq";
import { gqlCall } from "../utils";

export async function fetchFAQSections(): Promise<string[]> {
  const result = await gqlCall(`{faqsections}`);

  if (result?.faqsections) return result.faqsections;
  throw new Error("Failed to fetch FAQ Sections.");
}

export async function fetchFAQList(section: string): Promise<IQA[]> {
  const result = await gqlCall(
    `{faq(section: \"${section}\") {question, answer}}`
  );

  if (result?.faq) return result.faq;

  throw new Error("Failed to fetch FAQ List.");
}
