import { BasicType, AdvancedType } from 'mailbroad-core';

export function isTableBlock(blockType: any) {
  return blockType === AdvancedType.TABLE;
}
