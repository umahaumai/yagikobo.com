# 技術仕様書

## 1. 開発環境

### 1.1 使用技術

- サイトジェネレータ：Hugo（extended）
- CSS：Tailwind CSS v4（Hugo の `css.TailwindCSS`）+ DaisyUI 5
- テンプレート：Go テンプレート（`layouts/`）
- コンテンツ：Markdown（`content/`）
- パッケージ管理：pnpm（Node.js 22+）
- フォーマッタ / リンタ：Biome（JS/TS/JSON）、Prettier（Markdown）

### 1.2 開発ツール

- バージョン管理：Git / GitHub
- エディタ：Cursor / VS Code
- 検証：`scripts/validate.sh`（ビルド + lint）

## 2. アーキテクチャ

### 2.1 全体構成

- 静的サイト生成（SSG）
- 配信：GCP Cloud Storage（カスタムドメイン https://yagikobo.com、HTTPS）
- デプロイ：GitHub Actions（`.github/workflows/deploy.yml`）

### 2.2 ディレクトリ構造

```
content/
  ├── info/*.md        # お知らせ（permalink: /info/:slug/）
  ├── products/*.md    # 製品・サービス（permalink: /products/:slug/）
  └── company.md       # 会社概要
layouts/               # Hugo テンプレート
assets/                # ビルド対象アセット（Tailwind 入力等）
static/                # そのまま配信される静的ファイル（画像等）
scripts/               # 検証スクリプト
```

## 3. デプロイメント

### 3.1 デプロイフロー

1. フィーチャーブランチで変更 → ローカルで `scripts/validate.sh` 実行
2. main へ **PR** を作成（main 直 push は禁止）
3. マージで GitHub Actions が実行され、`hugo --minify` でビルド後 `gsutil rsync` で GCS バケットへ配信

### 3.2 環境設定

- 本番環境：GCP Cloud Storage
- ドメイン：カスタムドメイン（yagikobo.com）
- HTTPS：GCP Cloud Storage + カスタムドメイン設定

## 4. 性能要件

- ページロード時間：2 秒以内
- 静的ファイル配信による高速化
- 画像は適宜 WebP 等を利用

## 5. セキュリティ要件

- HTTPS 通信
- 依存パッケージの定期更新（`pnpm audit`）

## 6. モニタリング

- Google Analytics（GA4: G-9ZJW5T93CE）でトラフィック計測

## 7. ドキュメント

- `AGENTS.md`：AI エージェント向け指示書（最優先）
- `docs/plans.md`：現在地と次の作業
- `README.md`：セットアップ手順
