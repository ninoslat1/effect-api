import { Effect } from "effect";
import { Env } from "src/classes/env";

export const healthHandler = Effect.gen(function* () {
  const env = yield* Env;
  return {
    status: "ok" as const,
    timestamp: Date.now(),
    app: env.appName,
  };
});
