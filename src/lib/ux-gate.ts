import type { ToolSchema } from './tool-schema';

export interface UxGateResult { kind: ToolSchema['kind']; passed: boolean; checks: Record<string, boolean>; }

export function runUxGate(schema: ToolSchema): UxGateResult {
  const checks = {
    labels: schema.inputs.every((input) => Boolean(input.label)),
    inputRule: schema.inputs.every((input) => input.type !== 'custom' || ['format','area'].includes(input.id)),
    usefulDefaults: schema.inputs.filter((input) => input.type === 'date').every((input) => input.default === 'today'),
    presetsKeepFreeInput: schema.inputs.filter((input) => input.presets).every((input) => ['number','money'].includes(input.type)),
    liveFeedback: schema.liveResult || schema.kind === 'random-picker' || ['image-converter','image-crop'].includes(schema.kind),
    resultDefined: Boolean(schema.resultType),
    fileInputsAreFilePickers: schema.inputs.filter((input) => input.type === 'file').every((input) => input.required !== undefined),
  };
  return { kind: schema.kind, passed: Object.values(checks).every(Boolean), checks };
}

export const uxGateAll = (schemas: ToolSchema[]) => schemas.map(runUxGate);
