# AGENTS.md — AI エージェント（Cursor / Copilot / Hermes サブエージェント）向け指示書

**目的**: このリポジトリでAIエージェントが従うべき開発方針とルールを定義します。

---

## 1. プロジェクト概要

- **サイト**: 株式会社やぎ工房 コーポレートサイト（https://yagikobo.com）
- **構成**: Hugo（静的サイトジェネレータ）+ Tailwind CSS v4（`css.TailwindCSS`）+ DaisyUI 5
- **配信**: GCP Cloud Storage（GitHub Actions が main push 時に `gsutil rsync` でデプロイ）

## 2. ドキュメントの位置づけ

- **`AGENTS.md`**（本ファイル）: AI エージェント向け指示書。最優先で参照
- **`README.md`**: セットアップ手順
- **`prd.md` / `specs.md`**: プロジェクト要件・技術仕様（2026-08-20 に現行 Hugo 構成へ更新済み）
- **`docs/plans.md`**: 現在地と次の作業

## 3. ディレクトリ構造

```
content/
  ├── info/*.md        # お知らせ（permalink: /info/:slug/）
  ├── products/*.md    # 製品・サービス（permalink: /products/:slug/）
  └── company.md       # 会社概要
layouts/               # Hugo テンプレート
assets/                # ビルド対象アセット（Tailwind 入力等）
static/                # そのまま配信される静的ファイル（画像は /images/ で参照）
```

## 4. お知らせ記事のフロントマター規約

`content/info/` に新規記事を追加する際は、既存記事（例: `content/info/2025-12-13_site-structure.md`）の形式に従うこと:

```yaml
---
title: "【お知らせ】記事タイトル"
slug: "YYYY-MM-DD_短い識別子"
category: "info"
createdAt: "YYYY-MM-DDTHH:MM:SS+09:00"
updatedAt: "YYYY-MM-DDTHH:MM:SS+09:00"
thumbnail: "/images/info/yagikobo.png"
thumbnail_alt: "やぎ工房"
open: true
---
```

- URL は `slug` が決まる（ファイル名ではない）。ファイル名は `YYYY-MM-DD_*.md` 形式が慣習
- `createdAt` は JST（+09:00）で記述
- 本文は Markdown。見出しは `##` から始める
- タイトルには「【お知らせ】」プレフィックスを使う慣習

### 記事内で画像を使う場合

- 画像ファイルは `static/images/` 配下に配置する（記事用は `static/images/info/` 等）
- Markdown 記法: `![代替テキスト](/images/info/xxx.png)`（絶対パスが基本）
- `../images/...` の相対パスでも可（`layouts/_default/single.html` が `/images/` へ正規化する）
- shortcode: `{{< image src="../images/info/xxx.png" alt="..." >}}` も利用可（同様に正規化）

## 5. 開発コマンド

```bash
export PATH="$PWD/node_modules/.bin:$HOME/.local/bin:$PATH"   # tailwindcss / hugo を通す

make build            # hugo --minify（ビルド）
pnpm lint             # biome lint
pnpm format           # biome format --write
scripts/validate.sh   # ビルド + lint の一括検証（変更後に実行）
```

- ローカルの Hugo は `~/.local/bin/hugo`（v0.165.0 extended。本番の GitHub Actions は latest を使用）
- Node.js + pnpm は必須（Tailwind が `tailwindcss` バイナリを呼ぶため）

## 6. デプロイとブランチ運用

- **main への push で GitHub Actions が走り、本番（GCS）へ即デプロイされる**
- main 直 push は**明示指示がある場合のみ**。作業は「変更準備（diff 提示）→ 確認 → push 承認」の順
- 個人開発のため PR 運用は必須ではないが、本番反映を伴う変更は慎重に

## 7. コメント方針

- コードコメント（Hugo テンプレート等）は**ドメイン知識のみ**残す。変更履歴・動作説明・自明コメントは書かない

## 8. フォーマッタ

- TypeScript / JavaScript / TSX / JSX: **Biome**（`.cursor/rules` 準拠）
- Markdown / MDX: **Prettier**

---

**この指示書は必要に応じて更新されます。最新版を参照してください。**
