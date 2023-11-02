import { Link } from "@solidjs/router";
import { Suspense } from "solid-js";
import {
  Body,
  ErrorBoundary,
  FileRoutes,
  Head,
  Html,
  Meta,
  Routes,
  Scripts,
  Title,
} from "solid-start";
import CenteredHeading from "./components/genericComponent/CenteredHeading";
import "./root.css";

export default function Root() {
  return (
    <Html lang="en">
      <Head>
        <Link rel="icon" href="/favicon.svg"></Link>
        <Title>Collosal</Title>
        <Meta name="og:image" content="https://raw.githubusercontent.com/Febri-i/codedesign-collosal/main/thumbnail.png" />
        <Meta name="description" content="This is a fictional company" />
        <Meta charset="utf-8" />
      </Head>
      <Body>
        <ErrorBoundary
          fallback={(err, _) => {
            console.error(err);
            return (
              <CenteredHeading
                title="ERROR"
                heading={err}
                err
              ></CenteredHeading>
            );
          }}
        >
          <Suspense>
            <Routes>
              <FileRoutes />
            </Routes>
          </Suspense>
        </ErrorBoundary>
        <Scripts />
      </Body>
    </Html>
  );
}
