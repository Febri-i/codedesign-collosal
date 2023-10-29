import { Title } from "solid-start";

export interface ICollosalTitleProps {
  title: string;
}

export default function CollosalTitle(props: ICollosalTitleProps) {
  return (
    <>
      <Title>{"Collosal - " + props.title.trim()}</Title>
    </>
  );
}
