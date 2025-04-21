# @vexcited/eslint-config

- Auto fix for formatting (aimed to be used standalone **without** Prettier)
- Reasonable defaults, best practices, only one line of config
- Designed to work with TypeScript, JSX, JSON(C), etc. out-of-box
- Very opinionated, you can't change the rules at all.
- [ESLint Flat config](https://eslint.org/docs/latest/use/configure/configuration-files-new) preferred
- Optional UnoCSS and SolidJS support

## Usage

```bash
# You have to install `eslint` first,
# `jiti` is used to load the config with `.ts` extension
# and `@vexcited/eslint-config` is the config from this repository !
pnpm add -D eslint jiti @vexcited/eslint-config
```

```ts
// eslint.config.ts
import vexcited from "@vexcited/eslint-config"
export default vexcited();
```

## Visual Studio Code

Make sure you've installed the [eslint extension](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint).

Once done, you can create a `.vscode/settings.json` file in your project root with the following settings.

```jsonc
{
  "prettier.enable": false,
  "editor.formatOnSave": false,
  "editor.codeActionsOnSave": {
    "source.fixAll.eslint": "explicit",
    "source.organizeImports": "never"
  },
  "eslint.validate": [
    "javascript",
    "javascriptreact",
    "typescript",
    "typescriptreact",
    "html",
    "markdown",
    "json",
    "jsonc",
    "yaml",
    "toml",
    "xml",
    "astro",
    "css",
    "less",
    "scss",
    "pcss",
    "postcss"
  ]
}
```

## Credits

This repository is hugely based on [`@antfu/eslint-config`](https://github.com/antfu/eslint-config), but with my own opinionated rules and some extra features.
