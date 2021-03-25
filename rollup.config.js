import run from "@rollup/plugin-run";
import filesize from "rollup-plugin-filesize";

const dev = process.env.NODE_ENV !== "production";

export default {
  input: "api/server.js",
  output: {
    file: "dir/bundle.js",
    format: "cjs",
  },
  plugins: [dev && run() && filesize()],
};
