# yagikobo.com

株式会社やぎ工房のソースコード | Hugo

---

## 概要

株式会社やぎ工房のソースコードです。

---

## セットアップ

### 必要な環境

- **Hugo**（必須）- サイトのビルドに使用
- **Node.js + pnpm**（推奨）- Tailwind（Hugoの `css.TailwindCSS`）と開発ツールに使用

### Hugoのインストール（macOS）

Homebrewを使用してHugoをインストールします：

```bash
brew install hugo
```

または、Makefileを使用：

```bash
make install
```

インストール後、バージョンを確認：

```bash
hugo version
```

### 開発サーバーの起動

#### Hugoの場合（推奨）

```bash
make dev
# または
hugo server
```

### ビルド

#### Hugoの場合（推奨）

```bash
make build
# または
hugo --minify
```

### その他のコマンド

```bash
make help      # 利用可能なコマンド一覧を表示
make clean     # ビルド成果物を削除
```

> **注意**: Tailwind を使うため、CI/開発では Node.js + pnpm も利用します（Hugoの `css.TailwindCSS` が `tailwindcss` を呼び出します）。

---

## 開発フロー

- **main 直 push は禁止**。フィーチャーブランチで作業し、PR を作成・マージする
- main へのマージで GitHub Actions が本番（GCS）へ自動デプロイされる（記事の追加も PR 経由）
- 変更前後は `scripts/validate.sh`（ビルド + lint）を実行する
- 個人開発のため issue 運用は簡略化している

## 作成について

- 使うもの
  - node
  - hugo

---

## ライセンス

MIT License で公開します。詳細は `LICENSE` を参照してください。
