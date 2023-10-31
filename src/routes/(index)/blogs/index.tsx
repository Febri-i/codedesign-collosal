import { For, Show } from "solid-js";
import CenteredHeading from "~/components/genericComponent/CenteredHeading";
import CollosalTitle from "~/components/genericComponent/CollosalTitle";
import { GenericLoading } from "~/components/genericComponent/GenericLoading";
import BlogCard from "~/components/pages/blogs/BlogCard";
import { fetchBlogListCardInfo, IActionBlogCardInfo } from "~/lib/actions/blog";
import { createLoadMore } from "~/lib/hooks/createLoadMore";

export default function Blog() {
  const [blogList, isLoading, isDone, loadMore] =
    createLoadMore<IActionBlogCardInfo>(4, fetchBlogListCardInfo);
  return (
    <>
      <CollosalTitle title="Blogs" />

      <CenteredHeading
        title="BLOG"
        heading="Get precise knowledge wherever you are"
        hr
      />
      <div class="landscape:grid portrait:flex flex-col grid-cols-3 gap-x-5 gap-y-12">
        <For each={blogList}>
          {(id) => {
            return <BlogCard {...id} />;
          }}
        </For>
      </div>

      <Show when={!isDone()}>
        <Show when={!isLoading()} fallback={<GenericLoading />}>
          <button
            onclick={() => {
              loadMore();
            }}
            class="btn-lg btn-glass !mx-auto"
          >
            Load More
          </button>
        </Show>
      </Show>
    </>
  );
}
