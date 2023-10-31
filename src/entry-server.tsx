import { StartServer, createHandler, renderAsync } from "solid-start/entry-server";
import { renderStream } from "solid-start/server/render";

export default createHandler(
  renderAsync((event) => <StartServer event={event} />),
);
