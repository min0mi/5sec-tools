import type { ToolKind } from './tools';

export type InputType = 'number' | 'money' | 'date' | 'text' | 'textarea' | 'file' | 'color' | 'range' | 'custom';
export interface ToolInputSchema { id: string; type: InputType; label: string; default?: string | number; unit?: string; presets?: Array<string | number>; required?: boolean; }
export interface ToolSchema { kind: ToolKind; inputs: ToolInputSchema[]; liveResult: boolean; resultType: 'number' | 'currency' | 'date' | 'duration' | 'percentage' | 'text' | 'comparison' | 'custom'; copyable?: boolean; }

export const toolSchemas: Record<ToolKind, ToolSchema> = {
  'date-after': { kind:'date-after', inputs:[{id:'date',type:'date',label:'基準日',default:'today',required:true},{id:'days',type:'number',label:'何日後？',default:30,unit:'日',presets:[7,30,90,100],required:true}], liveResult:true, resultType:'date', copyable:true },
  'date-before': { kind:'date-before', inputs:[{id:'date',type:'date',label:'基準日',default:'today',required:true},{id:'days',type:'number',label:'何日前？',default:30,unit:'日',presets:[7,30,90,100],required:true}], liveResult:true, resultType:'date', copyable:true },
  'date-difference': { kind:'date-difference', inputs:[{id:'start',type:'date',label:'開始日',default:'today',required:true},{id:'end',type:'date',label:'終了日',default:'today',required:true}], liveResult:true, resultType:'number', copyable:true },
  'video-speed': { kind:'video-speed', inputs:[{id:'minutes',type:'number',label:'動画時間',default:90,unit:'分',required:true},{id:'speed',type:'number',label:'再生速度',default:1.5,unit:'倍',presets:[1.25,1.5,2],required:true}], liveResult:true, resultType:'duration' },
  'discount': { kind:'discount', inputs:[{id:'price',type:'money',label:'元の価格',default:1000,unit:'円',required:true},{id:'rate',type:'number',label:'割引率',default:20,unit:'%',presets:[5,10,20,30,50],required:true}], liveResult:true, resultType:'currency', copyable:true },
  'percentage': { kind:'percentage', inputs:[{id:'base',type:'number',label:'元の数',default:1200,required:true},{id:'rate',type:'number',label:'割合',default:15,unit:'%',presets:[5,10,15,20,50],required:true}], liveResult:true, resultType:'number', copyable:true },
  'unit-price': { kind:'unit-price', inputs:[{id:'priceA',type:'money',label:'商品Aの価格',unit:'円',required:true},{id:'amountA',type:'number',label:'商品Aの内容量',unit:'g',required:true},{id:'priceB',type:'money',label:'商品Bの価格',unit:'円',required:true},{id:'amountB',type:'number',label:'商品Bの内容量',unit:'g',required:true}], liveResult:true, resultType:'comparison', copyable:true },
  'hourly-monthly': { kind:'hourly-monthly', inputs:[{id:'hourly',type:'money',label:'時給',default:1200,unit:'円',required:true},{id:'hours',type:'number',label:'1日の勤務時間',default:8,unit:'時間',required:true},{id:'days',type:'number',label:'週の勤務日数',default:5,unit:'日',presets:[3,4,5],required:true}], liveResult:true, resultType:'currency' },
  'character-count': { kind:'character-count', inputs:[{id:'text',type:'textarea',label:'文章',required:false}], liveResult:true, resultType:'number', copyable:true },
  'random-picker': { kind:'random-picker', inputs:[{id:'options',type:'textarea',label:'候補（1行1つ）',required:true}], liveResult:false, resultType:'text', copyable:false },
  'image-converter': { kind:'image-converter', inputs:[{id:'files',type:'file',label:'画像ファイル',required:true},{id:'format',type:'custom',label:'変換後の形式',required:true},{id:'quality',type:'range',label:'品質',default:80}], liveResult:false, resultType:'custom' },
  'image-crop': { kind:'image-crop', inputs:[{id:'file',type:'file',label:'画像ファイル',required:true},{id:'area',type:'custom',label:'切り抜き範囲',required:true},{id:'format',type:'custom',label:'保存形式'}], liveResult:true, resultType:'custom' },
  'qr-code': { kind:'qr-code', inputs:[{id:'text',type:'text',label:'URL・短文',required:true}], liveResult:true, resultType:'custom', copyable:false },
  'password-generator': { kind:'password-generator', inputs:[{id:'length',type:'number',label:'長さ',default:16,presets:[12,16,20,24],required:true},{id:'uppercase',type:'custom',label:'大文字'},{id:'digits',type:'custom',label:'数字'},{id:'symbols',type:'custom',label:'記号'}], liveResult:false, resultType:'text', copyable:true },
  'image-resize': { kind:'image-resize', inputs:[{id:'file',type:'file',label:'画像ファイル',required:true},{id:'width',type:'number',label:'幅'},{id:'height',type:'number',label:'高さ'}], liveResult:false, resultType:'custom' },
  'text-replace': { kind:'text-replace', inputs:[{id:'text',type:'textarea',label:'文章',required:true},{id:'search',type:'text',label:'検索語',required:true},{id:'replacement',type:'text',label:'置換後',required:false}], liveResult:true, resultType:'text', copyable:true },
  'csv-tsv-converter': { kind:'csv-tsv-converter', inputs:[{id:'text',type:'textarea',label:'表形式テキスト',required:true},{id:'target',type:'custom',label:'変換先',required:true}], liveResult:true, resultType:'text', copyable:true },
};
