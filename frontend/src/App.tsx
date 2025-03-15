import "./App.css";

import { createTRPCClient, httpBatchLink } from "@trpc/client";
import type { AppRouter } from "../../backend/index";

const trpc = createTRPCClient<AppRouter>({
  links: [
    httpBatchLink({
      url: "http://localhost:3000",
    }),
  ],
});

function App() {
  return (
    <>
      <div>Hello</div>
    </>
  );
}

export default App;
