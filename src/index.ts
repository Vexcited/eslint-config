import type { TypedFlatConfigItem } from "./types";
import { jsonc } from "./configs/jsonc";
import { perfectionist } from "./configs/perfectionist";
import { sortPackageJson, sortTsconfig } from "./configs/sort";
import { stylistic } from "./configs/stylistic";
import { typescript } from "./configs/typescript";
import { unocss } from "./configs/unocss";

export interface VexcitedConfig {
  unocss: boolean;
}

export default async function vexcited(config: VexcitedConfig = {
  unocss: false
}): Promise<TypedFlatConfigItem[]> {
  return [
    ...await jsonc(),
    ...sortPackageJson(),
    ...sortTsconfig(),
    ...await typescript(),
    ...await stylistic(),
    ...perfectionist(),
    ...(config.unocss ? await unocss() : [])
  ];
}
