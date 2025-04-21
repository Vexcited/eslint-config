import type { TypedFlatConfigItem } from "../types";

import { interopDefault } from "../utils";

export async function unocss(): Promise<TypedFlatConfigItem[]> {
  const [
    pluginUnoCSS
  ] = await Promise.all([
    interopDefault(import("@unocss/eslint-plugin"))
  ] as const);

  return [
    {
      name: "vexcited/unocss",
      plugins: {
        unocss: pluginUnoCSS
      },
      rules: {
        "unocss/blocklist": "error",
        "unocss/order": "warn"
      }
    }
  ];
}
