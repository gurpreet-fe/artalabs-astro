import { defineConfig } from "astro/config";

// https://astro.build/config
// eslint-disable-next-line import/no-unresolved
import svelte from "@astrojs/svelte";

// https://astro.build/config
export default defineConfig({
  integrations: [svelte()],
});
