import { Hono } from "hono";
import { healthRoute } from "./health.route.js";

export const apiRoutes = new Hono();

apiRoutes.route("/health", healthRoute);
