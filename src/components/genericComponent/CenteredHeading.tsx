export interface ICenteredHeadingProps {
  title: string;
  err?: boolean;
  extra?: string;
  heading: string;
  hr?: boolean;
  decoration?: boolean;
}

export default function CenteredHeading(props: ICenteredHeadingProps) {
  return (
    <div class="relative landscape:grid grid-cols-12 gap-x-5">
      {props.decoration && (
        <>
          <div class="absolute w-16 aspect-square blur-sm -top-12 right-48 rounded-full bg-gradient-to-br to-[#009C3E] from-[#66FFA3]" />
          <div class="absolute w-11 aspect-square blur-sm top-0 left-0 rounded-full bg-gradient-to-br to-[#FC165B] from-[#FF81A6]" />
          <div class="absolute w-8 aspect-square blur-sm top-1/2 left-full rounded-full bg-accent-500 " />
        </>
      )}
      <div class=" flex text-center flex-col col-start-4 col-end-10 items-center ">
        <h5 class={props.err ? "!text-red-500" : ""}>{props.title}</h5>
        <h1>{props.heading}</h1>

        {props.extra && <p class="mt-8">{props.extra}</p>}
      </div>
      {props.hr && <hr class="mt-[5.88rem] col-span-12" />}
    </div>
  );
}
