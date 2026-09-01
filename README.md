# 5秒で使えるツール.com

Astro + TypeScript + Vanilla CSSで作った、ブラウザ内完結のツール集です。基本方針は「ページを開く → 入力する → 答えを得る」。登録、チュートリアル、不要な送信ボタンを置かず、最初の画面で主要入力と結果が分かる構成にします。

## 開発

    npm install
    npm run dev
    npm run test
    npm run audit
    npm run build

## 共通UIと入力ルール

src/components/ に再利用部品を置いています。ToolLayout、ToolHeader、FieldGroup、NumberInput、MoneyInput、TextInput、DateInput、TimeInput、UnitInput、SelectInput、SegmentedControl、PresetChips、ToggleInput、FileDropzone、ResultCard、ComparisonResult、ResultRow、CopyButton、ResetButton、ErrorMessage、RelatedToolsを用意しています。画像編集のように操作が特殊なものは、専用ページの固有UIを許可します。

src/lib/tool-schema.ts が入力型・ラベル・初期値・プリセット・結果型を定義します。任意の数値・金額は自由入力、日付はdate input、時刻はtime input、長文はtextarea、ファイルはfile picker、色はcolor input、頻出値は自由入力＋プリセットを基本にします。固定選択肢が少数ならボタン群、多数の固定選択肢だけが合理的な場合だけselectを使います。

新しい一般ツールは、tools.tsの定義、tool-schema.tsのSchema、[slug].astroの入力ブロックと計算処理を追加します。画像編集などの独自操作は専用ページを作り、一覧にはtools.tsだけで登録します。

ツール追加時は [TOOL_ADDING_WORKFLOW.md](docs/ux/TOOL_ADDING_WORKFLOW.md) と [NEW_TOOL_TEMPLATE.md](docs/ux/NEW_TOOL_TEMPLATE.md) を使い、最後に `npm run ux:gate` を実行します。GitHubへpushした場合もUX Gateが自動実行されます。

## UX Gate

src/lib/ux-gate.ts は、ラベル、初期値、自由入力とプリセットの併用、リアルタイム更新、結果型、ファイル入力などを共通点検します。新しいツールを追加したら、npm run test、npm run audit、npm run buildを実行します。

公開前は、初見で用途が分かるか、任意値をselectだけにしていないか、入力と同時に結果が出るか、結論が一番目立つか、44px以上のタップ領域か、キーボード操作できるか、具体的なエラーかを確認します。

## 参考URLからの追加フロー

1. 目的、入力項目、入力型、初期値、プリセット、計算、結果、補助機能を抽出する。
2. 不要な操作、分かりにくい結果、過剰なselectを評価する。
3. 複数サイトの長所を組み合わせ、5秒で使える入力フローへ再設計する。
4. Schemaと共通部品で実装し、必要な場合だけ固有UIを作る。
5. UX Gate、単体テスト、ビルド、スマホ画面、実操作を確認する。
6. 参考サイト固有の文章、ロゴ、配色、コード、レイアウトは複製せず、機能と一般的なUIパターンだけを採用する。

## Cloudflare Pagesへの公開

GitHubのmainへpushするとCloudflare Pagesが自動デプロイします。設定はAstro、ビルドコマンドnpm run build、出力先distです。現在の公開先は https://5sec-tools.pages.dev/ です。
