import { Effect } from "effect";
import { healthHandler } from "src/handlers/health.js";
import { Schema as S } from "@effect/schema";
import { HealthResponse } from "src/schemas/health.schema.js";
import { EnvLive } from "src/services/env.js";
import { Hono } from "hono";

export const healthRoute = new Hono();

healthRoute.get("/", async (c) => {
  const program = healthHandler.pipe(
    Effect.flatMap((data) => S.decode(HealthResponse)(data))
  );

  const result = await Effect.runPromise(Effect.provide(program, EnvLive));

  return c.json(result);
});
