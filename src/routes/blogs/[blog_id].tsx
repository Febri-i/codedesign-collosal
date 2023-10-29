import { createRouteData, useParams, useRouteData } from "solid-start";
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
import { ErrorBoundary, Suspense } from "solid-js";
import { GenericLoading } from "~/components/genericComponent/GenericLoading";

export function routeData() {
  const param = useParams<{ blog_id: string }>();
  const blogInfo = createRouteData<IActionBlogInfo>(() =>
    fetchBlogInfo(param.blog_id)
  );
  const blogContent = createRouteData<IActionBlogContent>(() =>
    fetchBlog(param.blog_id)
  );

  return { blogInfo, blogContent };
}

export default function BlogPost() {
  const param = useParams<{ blog_id: string }>();

  const { blogInfo, blogContent } = useRouteData<typeof routeData>();
  const blogContentProps = function (): IBlogContetProps {
    const author = blogInfo()?.author;
    const content = blogContent()?.content;
    const tags = blogInfo()?.tags;
    if (author && content && tags) {
      return {
        author,
        content,
        tags,
      };
    }
    return {
      content: "",
      author: {
        author_id: "",
        bio: "",
        job: "",
        name: "",
        picture: "",
        socials: [],
      },
      tags: [],
    };
  };
  return (
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
      <Suspense fallback={<GenericLoading />}>
        <CollosalTitle title={blogInfo()?.title as string} />

        <div class="flex flex-col gap-20">
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
          <BlogContent {...blogContentProps()} />
          <ErrorBoundary
            fallback={(e, _) => {
              console.error(e);
              return <></>;
            }}
          >
            <BlogSuggestion />
          </ErrorBoundary>
          <ErrorBoundary
            fallback={(err, _) => {
              console.error(err);
              return (
                <div class="w-full flex justify-center landscape:mx-[11rem]">
                  <h2>Failed to load comments.</h2>
                </div>
              );
            }}
          >
            <BlogCommentSection blog_id={param.blog_id} />
          </ErrorBoundary>
        </div>
      </Suspense>
    </ErrorBoundary>
  );
}
