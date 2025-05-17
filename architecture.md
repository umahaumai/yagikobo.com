# サイト構成図

```
[利用者]
   |
   | HTTPS
   v
[格安VPS (固定IP)]
   |  (sish: SSHリバースプロキシ)
   |
   | SSHトンネル
   v
[自宅サーバ (Kubernetesクラスタ/Ingress Controller)]
   |
   |  (Ingress: Caddy or Traefik)
   v
[Webアプリケーション (nginx/static, API, DB等)]
```

## 構成要素

- 利用者：Webブラウザ等でサイトにアクセス
- 格安VPS：固定IPアドレスを持ち、sishでSSHトンネルの入口となる
- 自宅サーバ：Kubernetesクラスタを構築し、Ingress Controller（CaddyまたはTraefik）でWebアプリを公開
- Webアプリケーション：静的サイト（nginx）や将来的なAPI/DB等

## ポイント

- VPSは外部公開窓口としてのみ利用し、実際のサービスは自宅サーバで稼働
- SSHトンネルにより自宅サーバのサービスを安全に外部公開
- Ingress ControllerでHTTPS終端やルーティングを実施
- 将来的な拡張（動的サイト、DB、API等）にも対応可能な構成

## VPS側で推奨されるサービス・自動化構成例

### 推奨サービス一覧

- **ファイアウォール（ufw, firewalld, iptables など）**
  - 不要なポートを閉じ、最小限の通信のみ許可
- **Fail2ban**
  - SSHやWebサービスへの不正アクセス・ブルートフォース攻撃を自動でブロック
- **監視エージェント（Prometheus Node Exporter, Grafana Agent など）**
  - サーバリソース監視やアラート通知
- **ログ収集・転送（fluentd, Loki, Filebeat など）**
  - ログの一元管理・異常検知
- **自動アップデート/脆弱性スキャン（unattended-upgrades, Trivy, kube-bench など）**
  - セキュリティパッチの自動適用や脆弱性チェック
- **Let's Encrypt自動証明書更新（cert-manager, acme.sh など）**
  - HTTPS証明書の自動取得・更新
- **バックアップエージェント（Velero, restic など）**
  - 設定や永続データの自動バックアップ

### Kubernetesクラスタ＋GitHub管理による自動化構成例

1. VPS上に軽量Kubernetes（k3s等）を構築
2. sish, fail2ban, 監視エージェント等をKubernetesのPodとしてデプロイ
3. GitHubリポジトリでKubernetesマニフェストやHelmチャート、シークレット（Sealed Secrets等）を管理
4. ArgoCDやFluxでGitOps運用（GitHubの変更を自動で反映）
5. CI/CD（GitHub Actions等）でビルド・テスト・デプロイを自動化
6. cert-managerでLet's Encrypt証明書を自動管理
7. Prometheus/Grafanaで監視・可視化、Alertmanagerで通知
8. 必要に応じてバックアップやログ収集もPodとして導入

### ポイント

- sish以外にも、ファイアウォール・fail2ban・監視・ログ収集・自動証明書管理・バックアップ等のサービスが推奨される
- これらはKubernetesクラスタ上でPodとして動かし、GitHubで設定を一元管理し、ArgoCD/Fluxで自動デプロイすることで、sshによる手動操作を最小限にできる
- セキュリティ・運用効率・拡張性が大きく向上する
