import { Schema as S } from "@effect/schema";

export const HealthResponse = S.Struct({
  status: S.Literal("ok"),
  timestamp: S.Number,
  app: S.String,
});

export type HealthResponse = S.Schema.Type<typeof HealthResponse>;
