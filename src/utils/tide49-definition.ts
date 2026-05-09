import type {VIADefinitionV3} from '@the-via/reader';
import {keyboardDefinitionV3ToVIADefinitionV3} from '@the-via/reader';
import rawDef from '../../docs/Epomaker_tide49.json';

// Tide49 键盘定义：将原始 KLE JSON 转换为 VIADefinitionV3 格式
export const TIDE49_DEFINITION: VIADefinitionV3 = (() => {
  const def = keyboardDefinitionV3ToVIADefinitionV3(rawDef as any);
  return {
    ...def,
    name: 'Tide 49',
  };
})();

export const TIDE49_VENDOR_PRODUCT_ID = 0x342d * 65536 + 0xe47a;
export const TIDE49_PATH = 'tide49-local';
export const TIDE49_LAYER_COUNT = 6;
export const TIDE49_KEY_COUNT = TIDE49_DEFINITION.layouts.keys.length;
