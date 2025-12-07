# yagikobo.com

株式会社やぎ工房のソースコード | Gatsby.js | Hugo | mui

---

## 概要

株式会社やぎ工房のソースコードです。

---

## セットアップ

### 必要な環境

- **Hugo**（必須）- サイトのビルドに使用
- **Node.js + pnpm**（オプション）- 開発ツール（prettier、biome、textlint）やGatsby.jsを使用する場合のみ

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

#### Gatsby.jsの場合

```bash
pnpm install  # 初回のみ
pnpm develop
# または
pnpm start
```

### ビルド

#### Hugoの場合（推奨）

```bash
make build
# または
hugo --minify
```

#### Gatsby.jsの場合

```bash
pnpm build
```

### その他のコマンド

```bash
make help      # 利用可能なコマンド一覧を表示
make clean     # ビルド成果物を削除
```

> **注意**: Hugoは単体で動作するため、Node.jsやpnpmは**必須ではありません**。開発ツール（prettier、biome、textlint）やGatsby.jsを使用する場合のみ必要です。

---

## 開発フロー

基本的には Github Flow に従います。
とはいえ個人開発なので、ブランチや issue の運用は簡略化しています。
また、Gatsby.js + mui の組み合わせで開発しているため、それに合わせた開発フローを取っています。

## 作成について

- 使うもの
  - react
  - typescript
  - gatsbyjs[https://github.com/Vagr9K/gatsby-material-starter]
  - node
  - webpack
  - graphql
  - mui[https://mui.com/material-ui/]
  - hugo
