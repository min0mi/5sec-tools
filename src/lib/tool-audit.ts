import type { ToolDefinition } from './tools';

export type AuditLevel = '良好' | '要確認' | '不備';
export interface AuditCheck { name: string; passed: boolean; message: string; }
export interface ToolAudit { slug: string; title: string; score: number; level: AuditLevel; checks: AuditCheck[]; }

const check = (name: string, passed: boolean, message: string): AuditCheck => ({ name, passed, message });
const kindSignals: Record<ToolDefinition['kind'], string[]> = {
  'date-after': ['日付', '後'], 'date-before': ['日付', '前'], 'date-difference': ['日付', '差'],
  'video-speed': ['動画', '倍速'], discount: ['割引', '価格'], percentage: ['パーセント', '割合'],
  'unit-price': ['単価', '比較'], 'hourly-monthly': ['時給', '月収'], 'character-count': ['文字', '数'], 'random-picker': ['ランダム', '抽選'],
};

export function auditTool(tool: ToolDefinition, allTools: ToolDefinition[]): ToolAudit {
  const relatedExist = tool.relatedTools.every((slug) => allTools.some((candidate) => candidate.slug === slug));
  const keywordsOverlap = tool.keywords.some((keyword) => tool.title.includes(keyword) || tool.description.includes(keyword));
  const searchableDefinition = [tool.title, tool.shortTitle, tool.purpose, tool.description, ...tool.inputs, ...tool.outputs].join(' ');
  const signals = kindSignals[tool.kind];
  const checks = [
    check('名称', Boolean(tool.title && tool.shortTitle && tool.title.length <= 40), '名称があり、長すぎない'),
    check('用途', Boolean(tool.purpose && tool.purpose.length >= 8), '用途が具体的'),
    check('機能説明', Boolean(tool.description && tool.description.includes('。')), '機能説明がある'),
    check('入力と出力', tool.inputs.length > 0 && tool.outputs.length > 0, '入力と出力が定義されている'),
    check('名称と検索語', keywordsOverlap, '名称または説明に検索語が含まれる'),
    check('用途・名称・機能の一致', signals.every((signal) => searchableDefinition.includes(signal)), `種類「${tool.kind}」に必要な語が定義に含まれる`),
    check('関連ツール', relatedExist && !tool.relatedTools.includes(tool.slug), '関連先が存在し、自分自身を参照しない'),
  ];
  const score = Math.round(checks.filter((item) => item.passed).length / checks.length * 100);
  return { slug: tool.slug, title: tool.title, score, level: score === 100 ? '良好' : score >= 70 ? '要確認' : '不備', checks };
}

export const auditTools = (allTools: ToolDefinition[]) => allTools.map((tool) => auditTool(tool, allTools));
