import { Effect, Layer } from "effect";
import { Schema as S } from "@effect/schema";
import { Env } from "./classes/env";
import { env } from "./libs/env";
import { Hono } from "hono";
import { HealthResponse } from "./classes/health";
import { healthHandler } from "./handlers/health";
import { serve } from "@hono/node-server";

const EnvLive = Layer.succeed(Env, { appName: "Effect API" });

const app = new Hono();
app.get("/health", async (c) => {
  const program = healthHandler.pipe(
    Effect.flatMap((data) => S.decode(HealthResponse)(data))
  );

  const result = await Effect.runPromise(Effect.provide(program, EnvLive));

  return c.json(result);
});

Effect.runPromise(
  Effect.provide(
    Effect.sync(() => {
      serve({ port: env.APP_HOST, fetch: app.fetch });
      console.log(`Effect API run on http://localhost:${env.APP_HOST}`);
    }),
    EnvLive
  )
);
