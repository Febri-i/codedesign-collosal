import { For, Show, batch, createSignal, ErrorBoundary } from "solid-js";
import {
  IActionComment,
  fetchCommentList,
  postComment,
} from "~/lib/actions/comment";
import BlogCommentCard from "./BlogCommentCard";
import { createLoadMore } from "~/lib/hooks/createLoadMore";
import { GenericLoading } from "~/components/genericComponent/GenericLoading";

export interface IBlogCommentSectionProps {
  blog_id: string;
}

export default function BlogCommentSection(props: IBlogCommentSectionProps) {
  const [commentList, isLoading, isDone, gatherComment, _, setCommentList] =
    createLoadMore(4, (page: number, size: number) =>
      fetchCommentList(props.blog_id, page, size),
    );

  const [postingComment, setPostingComment] = createSignal<boolean>(false);
  const [username, setUsername] = createSignal<string>("");
  const [email, setEmail] = createSignal<string>("");
  const [comment, setComment] = createSignal<string>("");

  async function handleSubmit(e: Event) {
    e.preventDefault();
    setPostingComment(true);
    const result = await postComment(
      props.blog_id,
      email(),
      username(),
      comment(),
    );
    if (result) {
      setCommentList((val) => [result, ...val]);
      setPostingComment(false);
    }
  }

  return (
    <div
      onsubmit={handleSubmit}
      class=" landscape:mx-[11rem]  rounded-md flex flex-col  gap-12"
    >
      <form class="w-full bg-white bg-opacity-5">
        <div>
          <label for="commentUsername">
            <p>Username</p>{" "}
            <input
              disabled={postingComment()}
              type="text"
              value={username()}
              oninput={(e) => setUsername(e.target.value)}
              autocomplete="off"
              required
              id="commentUsername"
            />
          </label>
          <label for="commentEmail">
            <p>Email</p>{" "}
            <input
              disabled={postingComment()}
              type="text"
              autocomplete="off"
              value={email()}
              oninput={(e) => setEmail(e.target.value)}
              required
              id="commentEmail"
            />
          </label>
        </div>

        <label>
          <p>Comment</p>
          <textarea
            autocomplete="off"
            disabled={postingComment()}
            required
            class="resize-none"
            value={comment()}
            oninput={(e) => setComment(e.target.value)}
            id="quote"
            rows="5"
          ></textarea>
        </label>
        <button disabled={postingComment()} class="btn-lg btn-white">
          Post
        </button>
      </form>

      <div class="w-full">
        <div>
          <For each={commentList}>
            {(comment) => <BlogCommentCard {...comment} />}
          </For>
        </div>
        <Show when={!isDone()}>
          <Show when={!isLoading()} fallback={<GenericLoading />}>
            <button class="btn-lg mt-16 btn-glass mx-auto block ">
              Load More
            </button>
          </Show>
        </Show>
      </div>
    </div>
  );
}
