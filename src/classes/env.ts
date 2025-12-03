import { Context } from "effect";

export const Env = Context.GenericTag<{ appName: string }>("Env");
