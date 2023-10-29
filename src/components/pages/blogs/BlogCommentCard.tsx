import { IActionComment } from "~/lib/actions/comment";
import { parseISOtoString } from "~/lib/utils";
export default function BlogCommentCard(props: IActionComment) {
  return (
    <div>
      <div class="flex  mb-4 items-center justify-between">
        <div>
          <h4>{props.username}</h4>
          <p>{parseISOtoString(props.date)}</p>
        </div>

        <p>{props.email}</p>
      </div>
      <p class="pl-2">{props.comment}</p>
    </div>
  );
}
