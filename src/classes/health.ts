import { Schema as S } from "@effect/schema";

export const HealthResponse = S.Struct({
  status: S.Literal("ok"),
  timestamp: S.Number,
});

export type SHealthResponse = S.Schema.Type<typeof HealthResponse>;
