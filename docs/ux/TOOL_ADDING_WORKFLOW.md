# ツール追加ワークフロー

新しいツールを追加するときは、個別の見た目から作らず、次の順番で5sec-toolsのUXシステムを通します。

## 1. 仕様を作る

NEW_TOOL_TEMPLATE.mdを複製し、目的、入力、出力、初期値、頻出値、エラー、コピー・リセットの要否を埋める。任意値をselectだけにしない。5秒で終わる最短操作を先に書く。

## 2. 競合を調べる

同じ目的のサイトを最低5件確認し、入力方式、preset、即時計算、結果、コピー、リセット、スマホ操作を比較する。文章・コード・配色・ロゴ・特徴的なレイアウトは流用せず、一般化できる操作パターンだけをCOMPETITOR_PATTERNS.mdへ記録する。

## 3. Schemaを登録する

tools.tsへToolDefinitionを追加し、tool-schema.tsへToolSchemaを追加する。number/money/date/time/textarea/file/colorなど、実際の入力方式を先に決める。SchemaがないツールはUX Gateで失敗する。

## 4. UIを実装する

一般ツールはToolHeader、FieldGroup、NumberInput、MoneyInput、DateInput、PresetChips、ResultCardなどを優先して使う。独自操作が必要なファイル・画像編集だけ専用ページにする。入力イベントで結果を更新し、結果の結論を最初に表示する。

## 5. レビューする

初見、急いでいる人、スマホ片手操作、キーボード、初心者の5視点で確認する。UIを10回見直す場合は、同じ問題の言い換えではなく、入力方式、初期値、操作数、結果、エラー、境界値、コピー、リセット、モバイル、アクセシビリティを別々に確認する。

## 6. Gateを通す

```text
npm run ux:gate
```

このコマンドは、Schema・名称・用途・入力と出力・関連リンク・UXルールの監査、全テスト、Astro本番ビルドを実行する。GitHubのmainへのpushでも `.github/workflows/ux-gate.yml` が同じ確認を行う。

## 7. 記録する

一般化できる知見はUX_RULES.mdまたはTOOL_PATTERNS.mdへ、今回だけの判断はTOOL_REVIEW.mdまたはUX_CHANGELOG.mdへ分けて記録する。
