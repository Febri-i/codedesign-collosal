import { IAuthor } from "~/lib/graphql/types/author";
import BlogAuthorCard from "./BlogAuthor";
import BlogTagList from "./BlogTagList";
import style from "./BlogContent.module.css";

export interface IBlogContetProps {
  author: IAuthor;
  tags: string[];
  content: string;
}

export default function BlogContent(props: IBlogContetProps) {
  return (
    <div>
      <div innerHTML={props.content} class={style.blogContentContainer}></div>
      <div class="landscape:mx-[11rem] mt-8 gap-16 flex flex-col">
        <BlogTagList tags={props.tags} />
        <BlogAuthorCard {...props.author} />
      </div>
    </div>
  );
}
