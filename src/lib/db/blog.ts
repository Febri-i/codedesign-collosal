import { IGQLPartialListQueryResult } from "../graphql/query/portialListQueryTemplate";
import { IGQLBlogContent, IGQLBlogInfo } from "../graphql/types/blog";
import { blogContent_sample, blogListInfo_sample } from "./sample/blog_sample";

export function _DBGetBlogInfo(blog_id: string): IGQLBlogInfo | undefined {
  return blogListInfo_sample.find((bloginfo) => bloginfo.blog_id == blog_id);
}

export function _DBGetBlogContent(
  blog_id: string,
): IGQLBlogContent | undefined {
  return { blog_id, content: blogContent_sample };
}

export function _DBGetBlogInfoList(
  page: number,
  size: number,
): IGQLPartialListQueryResult<IGQLBlogInfo> {
  const start = page * size;
  return {
    done: start + size >= blogListInfo_sample.length,
    items: blogListInfo_sample.slice(start, start + size),
  };
}
