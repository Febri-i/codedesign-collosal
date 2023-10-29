export interface ITeamCardProps {
  picture: string;
  name: string;
  position: string;
}

export default function TeamCard(props: ITeamCardProps) {
  return (
    <div class="aspect-[205/300] h-full w-full bg-white bg-opacity-5 flex flex-col">
      <img
        src={props.picture}
        alt={"Our " + props.position + ", " + props.name}
        class="w-full aspect-[205/225]"
      />
      <div class="w-full  portrait:p-5 landscape:p-9">
        <h4>{props.name}</h4>
        <p>{props.position}</p>
      </div>
    </div>
  );
}
