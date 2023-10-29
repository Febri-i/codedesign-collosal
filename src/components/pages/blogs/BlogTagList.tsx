interface ITagListProps {
  tags: string[];
}

export default function BlogTagList(props: ITagListProps) {
  return (
    <div class="flex gap-x-5 gap-y-4 flex-wrap">
      {props.tags.map((tag) => (
        <span class="bg-white bg-opacity-5 ring-1 ring-gray-700 rounded-full px-4 py-[.4rem]">
          {tag}
        </span>
      ))}
    </div>
  );
}
