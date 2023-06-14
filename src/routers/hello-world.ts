import { Router } from "express";
import logRequest from "../middleware/log-request";
import notFound from "../errors/404-res.json";

const fallbackRoute = Router();

fallbackRoute.get("/", logRequest, (req, res, next) => {
  res.status(400).send(notFound);
});

export default fallbackRoute;
