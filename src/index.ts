import bodyParser from "body-parser";
import express from "express";
import errorMiddleware from "./middleware/error-middleware";
import fallbackRoute from "./routers/hello-world";
import { ExpressRequest } from "./types/custom-express";
import { config } from "dotenv";
import isThisHell from "./routers/hell";
config();

process.on("uncaughtExceptionMonitor", (e) => {
  console.error(e);
});

process.on("uncaughtException", (e) => {
  console.error("Uncaught exception: " + e);
});

const server = express();

function main() {
  const PORT = process.env.PORT;

  server.use((req, res, next) => {
    console.log(req.method + ": Request received for " + req.originalUrl);
    next();
  });

  const includeRawBodyOptions: bodyParser.Options = {
    limit: "50mb",
    type: "application/json",
    verify: (req: ExpressRequest, res, buf) => {
      req.rawBody = buf;
    }
  };
  server.use(bodyParser.json(includeRawBodyOptions));
  server.use(bodyParser.urlencoded({ extended: true }));

  server.use("/isthishell", isThisHell);
  server.use("/404", fallbackRoute);
  server.use("/", (req, res, next) => {
    res.redirect("/404");
  });
  server.use(errorMiddleware);

  server.listen(PORT, () => {
    console.log(`Listening on port ${PORT}`);
  });
}

main();
