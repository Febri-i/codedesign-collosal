import { A } from "@solidjs/router";
import { IActionBlogCardInfo } from "~/lib/actions/blog";
import {
  getBlogUrl,
  parseISOtoString,
  parseMilisecondToString,
} from "~/lib/utils";

export default function BlogCard(props: IActionBlogCardInfo) {
  return (
    <div class="flex flex-col gap-6">
      <img
        src={props.thumbnail}
        class="aspect-[20375/13750] w-full  object-cover"
        alt=""
      />
      <div>
        <A href={getBlogUrl(props.blog_id)}>
          <h4 class="h-14 overflow-hidden">{props.title}</h4>
        </A>
        <p class="h-16 overflow-hidden text-ellipsis w-full">
          {props.description}
        </p>
      </div>
      <div class="h-fit flex items-center gap-6">
        <img
          class="aspect-square h-[3.125rem] rounded-full"
          src={props.author.picture}
          alt=""
        />
        <div>
          <span>{props.author.name}</span>
          <p>
            {parseISOtoString(props.date)} •{" "}
            {parseMilisecondToString(props.read_duration) + " read"}
          </p>
        </div>
      </div>
    </div>
  );
}
