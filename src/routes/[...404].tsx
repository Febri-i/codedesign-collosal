import { A } from "solid-start";

export default function NotFound() {
  return (
    <div>
      <div class="flex mx-auto w-1/2 gap-5 flex-col items-center text-center">
        <h5 class="text-red-600">ERROR</h5>
        <h1>
          The page you are looking for is not on this website, please check
          again
        </h1>
        <p>
          The system cannot find the page you are looking for, maybe you have
          the wrong path or the page has been deleted.
        </p>
        <A href="/">
          <button class="btn-lg btn-glass">Back to Home</button>
        </A>
      </div>
    </div>
  );
}
