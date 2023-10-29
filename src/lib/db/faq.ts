import { IQA } from "../graphql/types/faq";
import { faq_sample } from "./sample/faq_sample";

export function _DBGetFAQs(section: string): IQA[] {
  return (faq_sample as any)[section];
}

export function _DBGetFAQSection(): string[] {
  return Object.keys(faq_sample);
}
