import { For } from "solid-js";

import { IAuthor } from "~/lib/graphql/types/author";
import { BlogSocialIcon } from "./BlogSocialIcon";

export default function BlogAuthorCard(props: IAuthor) {
  return (
    <div class="flex portrait:flex-col w-full shadow-md rounded-md bg-white items-start bg-opacity-5 landscape:gap-12 p-10">
      <img
        class="landscape:w-24 portrait:w-16 aspect-square shrink-0 object-cover block rounded-full"
        src={props.picture}
        alt={props.name + "'s picture"}
      />
      <div>
        <div class="flex justify-between items-center">
          <div class="flex flex-col justify-center">
            <h4>{props.name}</h4>
            <p class="text-xs">{props.job}</p>
          </div>
          <div class="flex items-center gap-2">
            <For each={props.socials}>
              {(social) => (
                <BlogSocialIcon
                  class="[&>svg]:w-5 [&>svg]:h-5 p-2 bg-white bg-opacity-10 rounded-full"
                  {...social}
                />
              )}
            </For>
          </div>
        </div>
        <span class="mt-4 block">{props.bio}</span>
      </div>
    </div>
  );
}
