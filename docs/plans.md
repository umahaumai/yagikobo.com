# plans.md

このファイルは、yagikobo.com の現在地と次の作業を記録する軽量な作業メモです。

## Current Focus

- [x] **サブエージェント運用基盤 + 依存更新 + ドキュメント整備**（2026-08-20）: `AGENTS.md`・`scripts/validate.sh` を追加、`biome.json` を Biome 2 へ移行。依存を一括最新化（Biome 1.9→2.5 / textlint 14→15 / tailwindcss 4.1→4.3 / daisyui 5.5→5.7 / prettier 3.7→3.9）。`prd.md` / `specs.md` を現行 Hugo 構成に更新。PR はこの後作成
- [ ] **デジナビ公開告知**: `content/info/` にお知らせ記事を追加（次の PR）

## 構成メモ

- Hugo extended + Tailwind v4 + DaisyUI 5（ローカル: `~/.local/bin/hugo`）
- デプロイ: main への PR マージ → `.github/workflows/deploy.yml` → GCS（https://yagikobo.com）
- お知らせ: `content/info/*.md`（permalink `/info/:slug/`、フロントマター規約は `AGENTS.md` §4）

## Decision Log

- 2026-08-20: **main 直 push を禁止し PR 運用に確定**（記事が即時公開されるサイトのため）。あわせて依存を一括更新（Biome 1.9→2.5 / textlint 14→15 / tailwindcss 4.1→4.3 / daisyui 5.5→5.7 / prettier 3.7→3.9）、`prd.md` / `specs.md` を旧 Gatsby 時代の内容から現行 Hugo 構成に更新、サブエージェント運用基盤（`AGENTS.md`・`scripts/validate.sh`・`docs/plans.md`）を追加。
