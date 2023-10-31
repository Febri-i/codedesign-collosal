import ErrorBoundary, {
  createRouteData,
  useParams,
  useRouteData,
} from "solid-start";
import CenteredHeading from "~/components/genericComponent/CenteredHeading";
import BlogContent, {
  IBlogContetProps,
} from "~/components/pages/blogs/BlogContent";
import {
  fetchBlog,
  fetchBlogInfo,
  IActionBlogContent,
  IActionBlogInfo,
} from "~/lib/actions/blog";

import BlogSuggestion from "~/components/pages/blogs/BlogSuggestion";
import BlogCommentSection from "~/components/pages/blogs/BlogCommentSection";
import { parseISOtoString, parseMilisecondToString } from "~/lib/utils";
import CollosalTitle from "~/components/genericComponent/CollosalTitle";
import { _DBGetFAQs } from "~/lib/db/faq";
import { IAuthor } from "~/lib/graphql/types/author";

export function routeData() {
  const param = useParams<{ blog_id: string }>();
  return createRouteData<IActionBlogInfo>(() => fetchBlogInfo(param.blog_id));
}

export default function BlogPost() {
  const param = useParams<{ blog_id: string }>();

  const blogInfo = useRouteData<typeof routeData>();
  return (
    <>
      <CollosalTitle title={blogInfo()?.title as string} />,
      <div class="flex flex-col gap-20">
        <ErrorBoundary
          fallback={(err, _) => {
            console.error(err);
            return (
              <CenteredHeading
                err
                title="ERROR"
                heading="Blog not found."
              ></CenteredHeading>
            );
          }}
        >
          <CenteredHeading
            title="BLOG"
            heading={blogInfo()?.title as string}
            extra={
              parseISOtoString(blogInfo()?.date as string) +
              " • " +
              parseMilisecondToString(blogInfo()?.read_duration as number) +
              " read"
            }
          />
          <img
            src={blogInfo()?.thumbnail as string}
            class="aspect-[57/37]  landscape:mx-[5.5rem] object-cover"
          />
          <BlogContent
            tags={blogInfo()?.tags as string[]}
            author={blogInfo()?.author as IAuthor}
            content={""}
          />
        </ErrorBoundary>
      </div>
    </>
  );
}
