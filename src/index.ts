import cors from "cors";
import express, { Application, Request, Response } from "express";

import { serverPort } from "./config";

const bootstrap = () => {
  const app: Application = express();

  app.use(
    cors({
      origin: "*",
    })
  );

  app.get("", (_req: Request, res: Response) => {
    res.send("hello world");
  });

  if (import.meta.env.PROD) {
    app.listen(serverPort, () => console.info(`listening on: ${serverPort}`));
  }

  return app;
};

export const viteNodeApp = bootstrap();
