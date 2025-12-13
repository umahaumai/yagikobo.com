---
title: "[products] 当 HPについて"
slug: "2025-12-13_hp_renewal"
category: "product"
createdAt: "2025-12-13T00:01:00+09:00"
updatedAt: "2025-12-13T00:01:00+09:00"
thumbnail: "/images/info/yagikobo.png"
thumbnail_alt: "やぎ工房"
open: true
---

## リニューアルについて（2025/12/13）

当サイトは、これまで **Gatsby.js（Node.js）** を使って構築していましたが、Gatsby.js がメンテナンスモードとなったことを受け、今後の保守性・更新のしやすさを考えて **Hugo** へ移行しました。

今回のリニューアルでは「コンテンツの追加・更新がしやすいこと」「なるべくシンプルに運用できること」を重視し、静的サイトとしての構成を見直しています。

## 現在の技術構成

- 静的サイトジェネレータ: Hugo
- スタイル: Tailwind CSS / daisyUI
- コンテンツ管理: Markdown
- デプロイ: GitHub Actions

## 1. 開発環境

### 1.1 使用技術

- フレームワーク: Hugo
- 言語: （テンプレート言語）Go Template
- スタイル: Tailwind CSS / daisyUI
- コンテンツ管理: Markdown
- デプロイ: GitHub Actions
- 運用: GCP

### 1.2 開発ツール

- バージョン管理: Git
- リポジトリ: GitHub
- エディタ: Cursor
- パッケージ管理: pnpm

## 2. アーキテクチャ

### 2.1 全体構成

- 静的サイト生成（SSG）
- Hugo によるテンプレートレンダリング
- コンテンツは Markdown で管理

