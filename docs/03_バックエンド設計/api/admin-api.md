# Admin API（管理者）※ Cognito グループ `admin`

| エンドポイント          | メソッド   | 概要               |
| ----------------------- | ---------- | ------------------ |
| `/admin/engineers`      | **GET**    | エンジニア一覧取得 |
| `/admin/engineers/{id}` | **GET**    | エンジニア詳細取得 |
| `/admin/engineers`      | **POST**   | エンジニア登録     |
| `/admin/engineers/{id}` | **PATCH**  | エンジニア情報更新 |
| `/admin/engineers/{id}` | **DELETE** | エンジニア削除     |
| `/admin/customers`      | **GET**    | 顧客一覧取得       |
| `/admin/customers/{id}` | **GET**    | 顧客詳細取得       |
| `/admin/customers`      | **POST**   | 顧客登録           |
| `/admin/customers/{id}` | **PATCH**  | 顧客情報更新       |
| `/admin/customers/{id}` | **DELETE** | 顧客削除           |
| `/admin/projects`       | **GET**    | 案件一覧取得       |
| `/admin/projects/{id}`  | **GET**    | 案件詳細取得       |
| `/admin/projects`       | **POST**   | 案件登録           |
| `/admin/projects/{id}`  | **PATCH**  | 案件情報更新       |
| `/admin/projects/{id}`  | **DELETE** | 案件削除           |

---

## 一覧クエリ共通パラメータ

| パラメータ | 用途                             | 例                 |
| ---------- | -------------------------------- | ------------------ |
| `name`     | 部分一致検索（エンジニア・顧客） | `?name=花子`       |
| `title`    | 部分一致検索（案件）             | `?title=EC`        |
| `from`     | 登録日開始 (YYYY-MM-DD)          | `?from=2025-01-01` |
| `to`       | 登録日終了 (YYYY-MM-DD)          | `?to=2025-06-30`   |
| `page`     | ページ番号 (1〜) — 既定 **1**    | `?page=2`          |
| `limit`    | 件数 (最大 100) — 既定 **20**    | `?limit=50`        |

> すべて **Bearer JWT（`admin` グループ）必須**
> `/admin/engineers` では `name`、`/admin/projects` では `title` が主な検索キーになります。

---

### 変更履歴

| Ver | 日付       | 変更点 |
| --- | ---------- | ------ |
| 1.0 | 2025-06-15 | 初版   |
