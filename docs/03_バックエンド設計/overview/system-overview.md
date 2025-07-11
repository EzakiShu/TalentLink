<!-- v0.1 2025-06-15 -->

# システム概要（TalentLink バックエンド）

## 目的
- **企業（発注者）** と **副業エンジニア（受注者）** を安全・迅速にマッチングする
- 選考〜案件登録〜進捗管理を **INNOTECHS** が伴走し、品質・スケジュールを担保
- **サーバレス（AWS Lambda）** により *小規模でも低コスト・高可用* を実現

## ステークホルダー
| 区分              | 代表ユーザー   | 主なゴール                               |
| ----------------- | -------------- | ---------------------------------------- |
| 発注者 (Client)   | 企業担当者     | 認定エンジニアを検索・案件登録・進捗確認 |
| 受注者 (Engineer) | 副業エンジニア | 案件検索・応募・稼働報告                 |
| 管理者 (Admin)    | INNOTECHS 運営 | エンジニア選考・顧客/案件管理・品質管理  |

## 採用技術
- **言語 / ランタイム**: Python 3.12
- **クラウド / 実行基盤**: AWS
  - API Gateway（REST API）
  - AWS Lambda（サーバレス関数）
  - Amazon RDS (MySQL)
  - Amazon Cognito（ユーザー管理 & JWT 認証）
  - Amazon S3（静的アセット・添付ファイル）
  - Amazon EventBridge（バッチ／通知トリガー）
- **IaC / デプロイ**: AWS SAM
- **ドキュメント**: Markdown + Mermaid（Docs-as-Code）

## 主なユースケース ✍️
1. 発注者が会員登録し、案件を投稿
2. 受注者が採用面談に合格し、Slack へ招待
3. 受注者が案件を検索して応募 → 発注者が承認
4. 双方が進捗を確認、管理者が品質チェック
5. 完了後、報酬支払い・評価

（詳細は `usecases.md` 参照）

## 重要な非機能要件
| 分類         | 要件                                                   |
| ------------ | ------------------------------------------------------ |
| セキュリティ | JWT + Cognito・IAM 最小権限、WAF で基本対策            |
| 可用性       | Lambda / RDS マルチ AZ、SLO 99.9%                      |
| コスト       | 基本は従量課金（Lambda・REST API）で月額固定費を最小化 |
| 拡張性       | API バージョンで後方互換、ドメイン別 Lambda 分割       |
