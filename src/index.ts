import FastifyMiddie from "@fastify/middie";
import cors from "cors";
import Fastify from "fastify";

import { serverPort } from "@/config";

const bootstrap = async () => {
  const app = Fastify();

  await app.register(FastifyMiddie);

  await app.use(
    cors({
      origin: "*",
    })
  );

  app.get("/", () => ({ message: "hello world" }));

  if (import.meta.env.PROD) {
    return await app
      .listen({ port: serverPort })
      .then(() => app.server.address())
      .then((address) => (typeof address === "string" ? address : address?.port))
      .then((address) => console.info(`listening on: ${address}`))
      .catch((err) => {
        console.error("error starting server:", err);
        process.exit(1);
      });
  }

  return await Promise.resolve(app);
};

export const viteNodeApp = bootstrap();
