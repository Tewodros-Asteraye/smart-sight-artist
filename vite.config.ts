
import { defineConfig } from "@lovable.dev/vite-tanstack-config";

export default defineConfig({
  vite: {
    server: {
      allowedHosts: ["africa-climate-action-plc-wm8d.onrender.com"],
    },
  },

  nitro: {
    preset: "node-server",
  },

  tanstackStart: {
    // Keep the existing SSR server entry.
    server: { entry: "server" },
  },
});
