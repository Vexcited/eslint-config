import type { TypedFlatConfigItem } from "../types";

import pluginPerfectionist from "eslint-plugin-perfectionist";

export function perfectionist(): TypedFlatConfigItem[] {
  return [
    {
      name: "vexcited/perfectionist/setup",
      plugins: {
        perfectionist: pluginPerfectionist
      },
      rules: {
        ...pluginPerfectionist.configs["recommended-natural"].rules,
        "perfectionist/sort-imports": ["error", {
          groups: [
            "type",
            ["parent-type", "sibling-type", "index-type", "internal-type"],

            "builtin",
            "external",
            "internal",
            ["parent", "sibling", "index"],
            "side-effect",
            "object",
            "unknown"
          ],
          newlinesBetween: "ignore",
          order: "asc",
          type: "natural"
        }]
      }
    }
  ];
}
