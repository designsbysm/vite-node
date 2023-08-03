import { defineConfig, loadEnv, UserConfig } from "vite";
import EnvironmentPlugin from "vite-plugin-environment";
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
  };
}) as UserConfig;
