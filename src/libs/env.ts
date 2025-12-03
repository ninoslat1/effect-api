import { createEnv } from "@t3-oss/env-core";
import z from "zod";

export const env = createEnv({
  clientPrefix: "PUBLIC_",
  server: {
    APP_HOST: z.number(),
  },
  client: {},
  /**
   * Makes sure you explicitly access **all** environment variables
   * from `server` and `client` in your `runtimeEnv`.
   */
  runtimeEnvStrict: {
    APP_HOST: process.env.APP_HOST,
  },
});
