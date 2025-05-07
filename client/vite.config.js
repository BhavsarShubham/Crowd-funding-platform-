import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { nodePolyfills } from "vite-plugin-node-polyfills";

export default defineConfig({
  plugins: [
    react(),
    nodePolyfills(),
    
  ],
  define: {
    'process.env': {}, 
  },
  build: {
    target: 'esnext', 
  },
  optimizeDeps: {
    esbuildOptions: {
      target: 'esnext', 
    },
  },
  plugins: [react()],
  base: './',
});
