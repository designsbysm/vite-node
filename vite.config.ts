import { fileURLToPath, URL } from "node:url";
import { defineConfig, loadEnv, UserConfig } from "vite";
import { VitePluginNode } from "vite-plugin-node";

export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), "");
  const serverPort: number = parseInt(env.SERVER_PORT, 10) || 3000;

  return {
    server: {
      port: serverPort,
    },
    plugins: [
      ...VitePluginNode({
        adapter: "fastify",
        appPath: "./src/index.ts",
      }),
      // eslint-disable-next-line @typescript-eslint/no-unsafe-call
      EnvironmentPlugin("all"),
    ],
    resolve: {
      alias: {
        "@": fileURLToPath(new URL("./src", import.meta.url)),
      },
    },
  };
}) as UserConfig;
