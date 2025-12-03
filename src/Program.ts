import { Effect } from "effect";
import { Env, EnvLive } from "./services/env.js";
import { Hono } from "hono";
import { serve } from "@hono/node-server";
import { apiRoutes } from "./routes/index.js";

const app = new Hono();
app.route("/api", apiRoutes);

const startServer = Effect.gen(function* () {
  const env = yield* Env;

  serve({
    port: env.port,
    fetch: app.fetch,
  });

  console.log(`🚀 Effect API running on http://localhost:${env.port}`);
});

Effect.runPromise(Effect.provide(startServer, EnvLive));
