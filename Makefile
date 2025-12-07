.PHONY: help dev build serve clean install

help: ## このヘルプメッセージを表示
	@echo "利用可能なコマンド:"
	@grep -E '^[a-zA-Z_-]+:.*?## .*$$' $(MAKEFILE_LIST) | awk 'BEGIN {FS = ":.*?## "}; {printf "  \033[36m%-15s\033[0m %s\n", $$1, $$2}'

install: ## Hugoをインストール（Homebrew経由）
	@which hugo > /dev/null || (echo "Hugoをインストール中..." && brew install hugo)
	@hugo version

dev: ## 開発サーバーを起動
	hugo server

build: clean ## サイトをビルド（minify付き）
	hugo --minify

serve: ## ビルド済みサイトをサーブ
	hugo server

clean: ## ビルド成果物を削除
	rm -rf public

.DEFAULT_GOAL := help
