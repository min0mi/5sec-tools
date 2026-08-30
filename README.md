# 5秒で使えるツール.com

Astro + TypeScript + Vanilla CSSで作った、ブラウザ内完結の静的ツール集です。

## 開発

```bash
npm install
npm run dev
npm run test
npm run audit
npm run build
```

## Cloudflare Pagesへの公開

1. GitHubへpush
2. Cloudflare PagesでGitHub repositoryを選択
3. Framework presetに `Astro` を指定
4. Build commandに `npm run build` を指定
5. Build output directoryに `dist` を指定
6. Deploy

無料の `*.pages.dev` URLで公開できます。独自ドメインへ変更するときは `astro.config.mjs` の `site` だけ変更します。

## 11個目の追加方法

`src/lib/tools.ts` に定義を1件追加し、`ToolKind` に種類を追加します。固有の入力・計算が必要なら `src/pages/tools/[slug].astro` の入力ブロックと `calc` にその種類を追加すれば、一覧・検索・sitemap・関連リンクへ自動的に反映されます。

## ツール適合性チェック

`src/lib/tool-audit.ts` が、名称・用途・機能説明・入力と出力・検索語・関連ツールを自動点検します。新しいツールを追加したら `npm run audit` を実行し、「良好」にならない項目を修正します。
