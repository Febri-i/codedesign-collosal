import { ErrorBoundary } from "solid-js";
import { Outlet } from "solid-start";
import CenteredHeading from "~/components/genericComponent/CenteredHeading";
import GenericPage from "~/components/genericComponent/GenericPage";

export default function Index() {
  return <GenericPage>
    <ErrorBoundary fallback={
      (e, _) => {
        console.error(e)
        return <CenteredHeading err title="ERROR" heading="Error occured." />
      }
    }>
      <Outlet />
    </ErrorBoundary>
  </GenericPage>
}
