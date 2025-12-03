import { Context, Layer } from "effect";

export const Env = Context.GenericTag<{ appName: string; port: number }>("Env");

export const EnvLive = Layer.succeed(Env, {
  appName: "Effect API",
  port: 3000,
});
