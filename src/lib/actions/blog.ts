import { IAuthor } from "../graphql/types/author";
import { gqlCall } from "../utils";

export interface IActionBlogInfo {
  blog_id: string;
  title: string;
  description: string;
  author: IAuthor;
  thumbnail: string;
  read_duration: number;
  date: string;
  tags: string[];
}

export interface IActionBlogCardInfo {
  blog_id: string;
  title: string;
  thumbnail: string;
  description: string;
  read_duration: number;
  date: string;
  author: { name: string; picture: string };
}

export interface IActionBlogCardInfoList {
  done: boolean;
  items: IActionBlogCardInfo[];
}

export async function fetchBlogInfo(blog_id: string): Promise<IActionBlogInfo> {
  const result = await gqlCall(
    `{blogInfo(blog_id: \"${blog_id}\") {blog_id,tags, title, thumbnail, description, author{name, socials{type, url}, job, bio, picture}, read_duration, date}}`
  );

  if (result?.blogInfo) {
    return result?.blogInfo;
  }
  throw new Error("Blog info not found.");
}

export async function fetchBlogListCardInfo(
  page: number,
  size: number
): Promise<IActionBlogCardInfoList> {
  const result = await gqlCall(
    `{blogInfoList(page: ${page}, size: ${size}) {done, items{blog_id,tags, title, thumbnail, description, read_duration, date, author{name, picture}}}}`
  );

  if (result?.blogInfoList && result?.blogInfoList) {
    return {
      done:
        result?.blogInfoList?.done == undefined
          ? true
          : result?.blogInfoList?.done,
      items: result?.blogInfoList?.items || [],
    };
  }
  throw new Error("Failed to fetch blog list.");
}

export interface IActionBlogContent {
  content: string;
}

export async function fetchBlog(blog_id: string): Promise<IActionBlogContent> {
  const result = await gqlCall(
    `{blogContent (blog_id: \"${blog_id}\") { content} }`
  );

  if (result?.blogContent) {
    return result.blogContent;
  }
  throw new Error("Blog not found.");
}
