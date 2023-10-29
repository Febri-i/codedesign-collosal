import { For, Suspense, createResource } from "solid-js";
import BlogCard from "./BlogCard";
import {
  IActionBlogCardInfoList,
  fetchBlogListCardInfo,
} from "~/lib/actions/blog";
import { GenericLoading } from "~/components/genericComponent/GenericLoading";

export default function BlogSuggestion() {
  const [suggestion] = createResource<IActionBlogCardInfoList>(() =>
    fetchBlogListCardInfo(0, 3)
  );
  return (
    <div class="mt-28">
      <h2>Other people also read...</h2>
      <div class="landscape:grid portrait:flex flex-col grid-cols-3 gap-5 mt-4">
        <Suspense fallback={<GenericLoading />}>
          <For each={suggestion()?.items}>
            {(blogInfo) => <BlogCard {...blogInfo} />}
          </For>
        </Suspense>
      </div>
    </div>
  );
}
