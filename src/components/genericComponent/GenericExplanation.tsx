import { JSX } from "solid-js";

export interface ExplanationAction {
  label: string;
  cb: () => void;
}

export interface IExplanationProps {
  title: string;
  heading: string;
  detail?: string;
  children: JSX.Element;
  action?: ExplanationAction;
  reverse?: boolean;
}

export default function GenericExplanation(props: IExplanationProps) {
  return (
    <div class="landscape:grid portrait:flex flex-col  landscape:grid-cols-2 relative gap-16 ">
      <div
        classList={{
          " col-start-2 row-end-1 ": props.reverse,
        }}
      >
        {props.children}
      </div>
      <div
        classList={{ " col-start-1 ": props.reverse }}
        class="flex flex-col justify-center items-start"
      >
        <h5>{props.title}</h5>
        <h2>{props.heading}</h2>
        {props.detail && (
          <div class="mt-7">
            {props.detail.split("\n").map((str) => (
              <>
                <p>{str}</p>
                <br />
              </>
            ))}
          </div>
        )}
        {props.action && (
          <button onclick={props.action.cb} class="btn-md btn-glass mt-12">
            {props.action.label}
          </button>
        )}
      </div>
    </div>
  );
}
