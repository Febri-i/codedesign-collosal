import { IGQLPartialListQueryResult } from "../graphql/query/portialListQueryTemplate";
import { IComment } from "../graphql/types/comment";
import { comment_sample } from "./sample/comment_sample";

export function _DBGetCommentList(
  blog_id: string,
  page: number,
  size: number
): IGQLPartialListQueryResult<IComment> {
  const start = page * size;

  return {
    done: start + size >= comment_sample.length,
    items: comment_sample.slice(start, start + size),
  };
}
export function _DBAddComment(
  blog_id: string,
  comment: string,
  email: string,
  username: string
): IComment {
  const comment_result: IComment = {
    comment: comment,
    email: email,
    username: username,
    date: new Date(Date.now()).toISOString(),
  };

  comment_sample.push(comment_result);
  return comment_result;
}
