# Site-wide Tool Review

| ID | 目的 | 入力 | 操作負荷 | モバイル / エラー | 結果・補助 |
| --- | --- | --- | --- | --- | --- |
| T01 | 日付を期間分ずらす | date、number、方向・単位ボタン | 日付確認＋数値入力 | date入力、具体的エラー | 日付・曜日、コピー、リセット、preset |
| T02 | 日付から日数を引く | date、number、preset | 2入力 | date入力、範囲エラー | 日付・曜日、コピー |
| T03 | 2日付の間隔 | date×2 | 2入力 | date入力、未入力エラー | 日数・前後、今日ボタン |
| T04 | 倍速視聴時間 | number×2、preset | 2入力 | numeric keyboard | 実時間・単位 |
| T05 | 割引後価格 | money、number、preset | 2入力 | numeric keyboard、率エラー | 支払額・値引き額、コピー |
| T06 | 割合の数値 | number、number、preset | 2入力 | numeric keyboard | 値と式、コピー |
| T07 | 商品単価比較 | money/number×2組 | 4入力 | numeric keyboard、内容量エラー | お得な商品・各単価 |
| T08 | 収入目安 | money/number×3、preset | 3入力 | numeric keyboard | 月収・週収・年収 |
| T09 | 文字数 | textarea | 貼り付け1回 | 大きい入力欄 | 文字数・除外数・行数等 |
| T10 | 候補抽選 | textarea、抽選 | 貼り付け＋1タップ | 大きい入力欄 | 候補、クリア、抽選 |
| T11 | 画像形式変換 | file、形式、品質 | 選択＋変換 | drag & drop | プレビュー・個別/一括保存 |
| T12 | 画像トリミング | file、canvas、数値 | 選択＋範囲操作 | タッチ対応、範囲表示 | ハンドル・比率・保存 |

## 共通の残課題

URL共有や履歴は、入力データをURLへ含める必要があるツールだけ段階的に追加する。ファイルはプライバシー上、ブラウザ内処理を維持する。
