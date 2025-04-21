import type { TypedFlatConfigItem } from "../types";

import { interopDefault } from "../utils";

export async function stylistic(): Promise<TypedFlatConfigItem[]> {
  const pluginStylistic = await interopDefault(import("@stylistic/eslint-plugin"));

  const config = pluginStylistic.configs.customize({
    arrowParens: true,
    blockSpacing: true,
    braceStyle: "stroustrup",
    commaDangle: "never",
    indent: 2,
    jsx: true,
    pluginName: "style",
    quotes: "double",
    semi: true
  });

  return [
    {
      name: "vexcited/stylistic/rules",
      plugins: {
        style: pluginStylistic
      },
      rules: {
        ...config.rules,
        "style/generator-star-spacing": ["error", { after: true, before: false }],
        "style/yield-star-spacing": ["error", { after: true, before: false }]
      }
    }
  ];
}
