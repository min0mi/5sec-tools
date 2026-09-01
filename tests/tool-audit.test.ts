import { describe, expect, it } from 'vitest';
import { tools } from '../src/lib/tools';
import { auditTool, auditTools } from '../src/lib/tool-audit';
import { toolSchemas } from '../src/lib/tool-schema';
import { runUxGate } from '../src/lib/ux-gate';

describe('tool definition audit', () => {
  it('all published tools are appropriate by the baseline rules', () => {
    const results = auditTools(tools.filter((tool) => tool.status === 'published'));
    expect(results).toHaveLength(17);
    expect(results.every((result) => result.level === '良好')).toBe(true);
  });

  it('flags missing purpose, outputs, and broken related links', () => {
    const result = auditTool({...tools[0], purpose: '', outputs: [], relatedTools: ['missing-tool']}, tools);
    expect(result.level).toBe('不備');
    expect(result.checks.filter((check) => !check.passed).map((check) => check.name)).toEqual(expect.arrayContaining(['用途', '入力と出力', '関連ツール']));
  });

  it('has a schema for every published tool', () => {
    expect(tools.filter((tool) => tool.status === 'published').every((tool) => toolSchemas[tool.kind])).toBe(true);
  });

  it('passes the shared UX gate for every published tool', () => {
    expect(tools.filter((tool) => tool.status === 'published').map((tool) => runUxGate(toolSchemas[tool.kind]).passed).every(Boolean)).toBe(true);
  });
});
