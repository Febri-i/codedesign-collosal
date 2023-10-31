import { A } from "@solidjs/router";
import { For } from "solid-js";
import SvgRenderer from "../svgRenderer";

interface SectionDetail {
  name: string;
  url: string;
}

interface FooterSection {
  title: string;
  details: SectionDetail[];
}
// TODO FILL UP THE LINKSSS
export default function Footer() {
  const sectionServices: FooterSection = {
    title: "Services",
    details: [
      { url: "", name: "Web Development" },
      { url: "", name: "App Development" },
      { url: "", name: "UI Design" },
      { url: "", name: "Consultation" },
      { url: "", name: "Maintenance" },
    ],
  };

  const sectionCompany: FooterSection = {
    title: "Company",
    details: [
      { url: "", name: "About" },
      { url: "", name: "Contact" },
      { url: "", name: "Send Quote" },
      { url: "", name: "Privacy Policy" },
      { url: "", name: "Term of Service" },
      { url: "", name: "Jobs" },
    ],
  };

  const sectionResources: FooterSection = {
    title: "Resources",
    details: [
      { url: "", name: "Support" },
      { url: "", name: "Documentation" },
      { url: "", name: "License" },
      { url: "", name: "Sitemap" },
    ],
  };

  return (
    <footer class="grid grid-cols-4 pb-8 portrait:grid-cols-2">
      <div >
        <div class="flex items-center  gap-2 ">
          <SvgRenderer class="w-8" src="/logo/collosal2.svg" />
          <h3>Callosal.</h3>
        </div>
        <div>
          <p>Copyright © 2021</p>
          <p>Design By Collosal LLC</p>
        </div>
      </div>
      <For each={[sectionServices, sectionCompany, sectionResources]}>
        {(section) => {
          return (
            <div>
              <span class="mb-2 text-sm font-bold">{section.title}</span>
              <For each={section.details}>
                {(sectDetails) => {
                  return (
                    <A href={sectDetails.url}>
                      <p>{sectDetails.name}</p>
                    </A>
                  );
                }}
              </For>
            </div>
          );
        }}
      </For>
    </footer >
  );
}
