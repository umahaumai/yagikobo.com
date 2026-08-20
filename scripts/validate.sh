#!/usr/bin/env bash
# ビルド + lint の一括検証。変更後は必ず実行する。
set -euo pipefail
cd "$(dirname "$0")/.."

export PATH="$PWD/node_modules/.bin:$HOME/.local/bin:$PATH"

echo "== hugo build =="
hugo --minify

echo "== biome lint =="
pnpm lint

echo "== OK =="
