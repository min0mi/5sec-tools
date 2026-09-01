# Tool Patterns

## 標準の計算ツール

`ToolHeader` → `FieldGroup` / `NumberInput` / `DateInput` → `PresetChips` → `ResultCard` の順に置く。入力イベントとchangeイベントの両方で結果を更新する。

## 日付シフト

基準日は今日を初期値にする。方向と単位は少数の segmented control、量は自由入力＋頻出値プリセットにする。結果には日付と曜日を表示し、月末・うるう年の扱いを定義する。

## 比較ツール

入力値だけでなく「どちらが有利か」を最初に表示する。各対象の内訳と比較単位を補助情報として並べる。

## ファイルツール

file pickerとdrag & dropを併設し、処理中・空状態・失敗・成功を表示する。可能な処理はブラウザ内で完結し、保存リンクを結果の直後に置く。

## Schema

入力の型、ラベル、初期値、単位、プリセット、必須状態、liveResult、resultType、copyableを `src/lib/tool-schema.ts` に定義する。共通UIで不自然になる操作だけ専用ページに分離する。
