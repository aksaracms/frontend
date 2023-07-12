import { defineConfig, presetAttributify, presetUno } from "unocss";

export default defineConfig({
  presets: [
    presetUno({
      variablePrefix: "uno-"
    }),
    presetAttributify()
  ]
});
