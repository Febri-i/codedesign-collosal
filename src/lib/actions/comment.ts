import { gqlCall } from "../utils";

export interface IActionComment {
  username: string;
  date: string;
  email: string;
  comment: string;
}

export async function fetchCommentList(
  blog_id: string,
  page: number,
  size: number
): Promise<{ done: boolean; items: IActionComment[] }> {
  const result = await gqlCall(
    `{commentList(blog_id: \"${blog_id}\", page: ${page}, size: ${size}){done, items {username, date, comment, email}}}`
  );
  if (result?.commentList) {
    return result.commentList;
  }
  throw new Error("Failed to get comments.");
}

export async function postComment(
  blog_id: string,
  email: string,
  username: string,
  comment: string
) {
  const result = await gqlCall(
    `{addComment(blog_id: \"${blog_id}\", email:\"${email}\", username:\"${username}\",comment:\"${comment}\"){username, date, comment, email}}`
  );

  if (result?.addComment) {
    return result.addComment;
  }
  throw new Error("Failed to post comment.");
}
