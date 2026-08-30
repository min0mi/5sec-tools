import { describe, expect, it } from 'vitest';
import { tools } from '../src/lib/tools';
import { auditTool, auditTools } from '../src/lib/tool-audit';

describe('tool definition audit', () => {
  it('all published tools are appropriate by the baseline rules', () => {
    const results = auditTools(tools.filter((tool) => tool.status === 'published'));
    expect(results).toHaveLength(12);
    expect(results.every((result) => result.level === '良好')).toBe(true);
  });

  it('flags missing purpose, outputs, and broken related links', () => {
    const result = auditTool({...tools[0], purpose: '', outputs: [], relatedTools: ['missing-tool']}, tools);
    expect(result.level).toBe('不備');
    expect(result.checks.filter((check) => !check.passed).map((check) => check.name)).toEqual(expect.arrayContaining(['用途', '入力と出力', '関連ツール']));
  });
});
