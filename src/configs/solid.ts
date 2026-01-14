import type { TypedFlatConfigItem } from "../types";
import { GLOB_JSX, GLOB_TSX } from "../globs";
import { interopDefault } from "../utils";

export async function solid(): Promise<TypedFlatConfigItem[]> {
  const files = [
    GLOB_JSX,
    GLOB_TSX
  ];

  const [
    pluginSolid,
    parserTs
  ] = await Promise.all([
    interopDefault(import("eslint-plugin-solid")),
    interopDefault(import("@typescript-eslint/parser"))
  ] as const);

  return [
    {
      name: "vexcited/solid/setup",
      plugins: {
        solid: pluginSolid
      }
    },
    {
      files,
      languageOptions: {
        parser: parserTs,
        parserOptions: {
          ecmaFeatures: {
            jsx: true
          },
          projectService: true
        },
        sourceType: "module"
      },
      name: "vexcited/solid/rules",
      rules: {
        "solid/components-return-once": "warn",
        "solid/event-handlers": ["error", {
          ignoreCase: false,
          warnOnSpread: false
        }],
        "solid/imports": "error",
        "solid/jsx-no-duplicate-props": "error",
        "solid/jsx-no-script-url": "error",
        "solid/jsx-no-undef": ["error", { typescriptEnabled: true }],
        "solid/jsx-uses-vars": "error",
        "solid/no-destructure": "error",
        "solid/no-innerhtml": ["error", { allowStatic: true }],
        "solid/no-react-deps": "error",
        "solid/no-react-specific-props": "error",
        "solid/no-unknown-namespaces": "off",
        "solid/prefer-for": "error",
        "solid/reactivity": "warn",
        "solid/self-closing-comp": "error",
        "solid/style-prop": ["error", { styleProps: ["style", "css"] }]
      }
    }
  ];
}
