# Client API（発注企業）※ Cognito グループ `client`

| エンドポイント           | メソッド   | 概要                     |
| ------------------------ | ---------- | ------------------------ |
| `/client/projects`       | **GET**    | 案件一覧取得             |
| `/client/projects/{id}`  | **GET**    | 案件詳細取得             |
| `/client/projects`       | **POST**   | 案件登録                 |
| `/client/projects/{id}`  | **PATCH**  | 案件情報更新             |
| `/client/projects/{id}`  | **DELETE** | 案件削除                 |
| `/client/engineers/{id}` | **GET**    | エンジニア詳細取得       |
| `/client/messages`       | **POST**   | メッセージ送信（メール） |

---

## 案件一覧クエリ — `GET /client/projects`

| パラメータ | 用途                          | 例                 |
| ---------- | ----------------------------- | ------------------ |
| `title`    | 案件タイトル部分一致検索      | `?title=LP`        |
| `from`     | 登録日開始 (YYYY-MM-DD)       | `?from=2025-01-01` |
| `to`       | 登録日終了 (YYYY-MM-DD)       | `?to=2025-06-30`   |
| `page`     | ページ番号 (1〜) - 既定 **1** | `?page=2`          |
| `limit`    | 件数 (最大 100) - 既定 **20** | `?limit=50`        |

---

## エンジニア一覧クエリ — `GET /client/engineers`

| パラメータ | 用途                                   | 例                  |
| ---------- | -------------------------------------- | ------------------- |
| `skill`    | スキル完全一致（複数可・カンマ区切り） | `?skill=python,aws` |
| `role`     | 職種絞込 例: `backend`, `designer`     | `?role=backend`     |
| `name`     | エンジニア名部分一致検索               | `?name=花子`        |
| `page`     | ページ番号 (1〜) - 既定 **1**          | `?page=1`           |
| `limit`    | 件数 (最大 100) - 既定 **20**          | `?limit=20`         |

> すべて **Bearer JWT（`client` グループ）必須**
> 他社 ID のリソース操作は `403 Forbidden` を返却

---

### 変更履歴

| Ver | 日付       | 変更点 |
| --- | ---------- | ------ |
| 1.0 | 2025-06-15 | 初版   |
