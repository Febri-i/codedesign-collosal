import { IActionComment } from "~/lib/actions/comment";
import { parseISOtoString } from "~/lib/utils";
export default function BlogCommentCard(props: IActionComment) {

  return (
    <div>
      <div class="flex  mb-4 items-center justify-between">
        <div class="w-full">
          <h4>{props.username}</h4>
          <p>{parseISOtoString(props.date)}</p>
        </div>

      </div>
      <p class="pl-2">{props.comment}</p>
      <p class="text-end mt-5" >{props.email}</p>
    </div>
  );
}
