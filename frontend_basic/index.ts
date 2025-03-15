import { createTRPCClient, httpBatchLink } from "@trpc/client";
import type { AppRouter } from "../backend";
//     👆 **type-only** import
// Pass AppRouter as generic here. 👇 This lets the `trpc` object know
// what procedures are available on the server and their input/output types.
const trpc = createTRPCClient<AppRouter>({
  links: [
    httpBatchLink({
      url: "http://localhost:3000",
    }),
  ],
});

// Inferred types
async function f() {
  const user = await trpc.userById.query("1");
  const createdUser = await trpc.userCreate.mutate({ name: "sachinraja" });

  console.log(user);
  console.log(createdUser);
}

f().then(() => console.log("finished"));
