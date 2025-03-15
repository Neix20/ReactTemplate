import react from '@vitejs/plugin-react'

import path from "path";

import { defineConfig, loadEnv } from 'vite';

// https://vitejs.dev/config/
export default defineConfig(({command, mode }) => {

  const cwd = process.cwd();
  const env = loadEnv(mode, cwd, '');

  const serverConfig = {
    host: true,
    port: Number(env.VITE_PORT),
    strictPort: true,
    allowedHosts: ['*' ]
};

  return {
    plugins: [react()],
    define: {
      'process.env': process.env
    },
    server: serverConfig,
    resolve: {
      alias: {
        "@api":  path.resolve(__dirname, "./src/api/"),
        "@models":  path.resolve(__dirname, "./src/models/"),
        "@features":  path.resolve(__dirname, "./src/features/"),
        "@assets":  path.resolve(__dirname, "./src/assets/"),
        "@components":  path.resolve(__dirname, "./src/components/"),
        "@config":  path.resolve(__dirname, "./src/config/"),
        "@hooks":  path.resolve(__dirname, "./src/hooks/"),
        "@app":  path.resolve(__dirname, "./src/app/"),
        "@libs":  path.resolve(__dirname, "./src/libs/"),
        "@utility": path.resolve(__dirname, "./src/utility/"),
      }
    }
  }
});
