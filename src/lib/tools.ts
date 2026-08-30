export type ToolKind = 'date-after' | 'date-before' | 'date-difference' | 'video-speed' | 'discount' | 'percentage' | 'unit-price' | 'hourly-monthly' | 'character-count' | 'random-picker';

export interface ToolDefinition {
  slug: string; title: string; shortTitle: string; description: string; category: string; keywords: string[]; relatedTools: string[]; status: 'draft' | 'published'; kind: ToolKind;
}

export const tools: ToolDefinition[] = [
  {slug:'date-after', title:'何日後か計算', shortTitle:'何日後か計算', description:'基準日から指定した日数後の日付を計算します。', category:'日付', keywords:['日付','何日後','予定'], relatedTools:['date-before','date-difference'], status:'published', kind:'date-after'},
  {slug:'date-before', title:'何日前か計算', shortTitle:'何日前か計算', description:'基準日から指定した日数前の日付を計算します。', category:'日付', keywords:['日付','何日前','逆算'], relatedTools:['date-after','date-difference'], status:'published', kind:'date-before'},
  {slug:'date-difference', title:'日数差計算', shortTitle:'日数差計算', description:'2つの日付の間が何日あるかを計算します。', category:'日付', keywords:['日付','日数','差'], relatedTools:['date-after','date-before'], status:'published', kind:'date-difference'},
  {slug:'video-speed', title:'動画を倍速で見ると何分？', shortTitle:'動画倍速再生時間', description:'動画を倍速再生したときの、実際にかかる時間を計算します。', category:'時間', keywords:['動画','倍速','再生時間'], relatedTools:['hourly-monthly'], status:'published', kind:'video-speed'},
  {slug:'discount', title:'割引計算', shortTitle:'割引計算', description:'元の価格と割引率から、支払額と値引き額を計算します。', category:'お金', keywords:['割引','セール','価格'], relatedTools:['percentage','unit-price'], status:'published', kind:'discount'},
  {slug:'percentage', title:'パーセント計算', shortTitle:'パーセント計算', description:'数値の何パーセントがいくらかを計算します。', category:'お金', keywords:['パーセント','割合','%'], relatedTools:['discount','unit-price'], status:'published', kind:'percentage'},
  {slug:'unit-price', title:'どっちがお得？単価比較', shortTitle:'単価比較', description:'2つの商品を同じ単位で比べて、安い方を確認します。', category:'お金', keywords:['単価','比較','お得'], relatedTools:['discount','percentage'], status:'published', kind:'unit-price'},
  {slug:'hourly-monthly', title:'時給から月収', shortTitle:'時給から月収', description:'時給と勤務日数から、週収・月収・年収の目安を計算します。', category:'仕事', keywords:['時給','月収','年収'], relatedTools:['percentage','video-speed'], status:'published', kind:'hourly-monthly'},
  {slug:'character-count', title:'文字数カウント', shortTitle:'文字数カウント', description:'文章の文字数、空白を除いた文字数、行数を数えます。', category:'文章', keywords:['文字数','文章','カウント'], relatedTools:['random-picker'], status:'published', kind:'character-count'},
  {slug:'random-picker', title:'ランダム抽選', shortTitle:'ランダム抽選', description:'候補を1行ずつ入力すると、ランダムに1つ選びます。', category:'便利', keywords:['抽選','ランダム','くじ'], relatedTools:['character-count'], status:'published', kind:'random-picker'},
];

export const getTool = (slug: string) => tools.find((tool) => tool.slug === slug);
