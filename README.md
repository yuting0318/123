# Course Database Demo

國立臺北護理健康大學資訊管理系大二資料庫管理系統課程範例程式

此 fork 為使用 [React.js](https://react.dev/) 以及 [koa.js](https://koajs.com/) 開發的版本。

[教學說明影片](https://www.youtube.com/watch?v=WJTRE3RXABc)

## 環境

本專案使用下列版本的服務開發：

- Microsoft SQL Server 2019 ([Docker](https://hub.docker.com/_/microsoft-mssql-server))
- Node.js v18.14.2

> SQL Server 資料庫安裝完成後，請設定防火牆及[開啟 SQL Server 驗證](https://learn.microsoft.com/zh-tw/sql/relational-databases/security/choose-an-authentication-mode)（若使用 Docker 則不需執行此步驟）

## 執行

### 初始化資料庫

1. 執行 [migration.sql](database/migration.sql) 初始化資料庫
2. 執行 [seed.sql](database/seed.sql) 建立範例資料

### 啟動程式

1. 安裝 Node.js 套件

```shell
npm install
```

2. 設定環境變數，可參考 [.env.example](.env.example) 建立 .env 檔案，將 `NODE_ENV` 設置為 `production`。

3. 建置前端 React.js 專案

```shell
npm run build
```

4. 啟動程式

```shell
npm start
```

程式啟動後，可以到 http://localhost:3000 開啟網頁。帳號 & 密碼請參考 [seed.sql](database/seed.sql) 中 `Customer` 資料。管理畫面網址為 [http://localhost:3000/admin](http://localhost:3000/admin)，帳號 & 密碼請參考 `SystemUser` 資料 (admin/admin)。

> 當 `NODE_ENV` 設置為 `development` 時，程式只會有後端部分，並不會包含前端網頁。

## 開發

### Dev Server

1. 按照上方[啟動程式](#啟動程式)步驟安裝套件並設定環境變數，並將 `NODE_ENV` 設置為 `development`。
2. 啟動後端程式

```shell
npm start
```

3. 啟動 dev server

```shell
npm run dev
```

啟動後，可以到 http://localhost:5173 或是 console 中的網址開啟網頁。

### 專案架構

本專案使用 MVC 架構。

```
app/           -- 主程式 (HTTP Server)
controllers/   -- 負責處理 API 請求
data/          -- 課程範例，與此專案無關
database/      -- 資料庫初始化及範例資料檔案
models/        -- 由 controller 程式呼叫，負責操作資料庫
  *.test.js    -- SQL 指令測試程式，可使用 IDE 功能或 npm run test 執行
public/        -- 公開 assets (網頁 Logo)
types/         -- 物件型別定義，可用於 JSDoc 文件
utils/         -- 工具程式以及 infrastrcture 相關程式
views/         -- 前端專案 (React.js)
  components/  -- 可重複使用的 UI 元件
  loaders/     -- 於頁面載入前執行，可用於載入資料
  routes/      -- 頁面及 Layout 檔案
  index.css    -- 全域樣式，本專案使用 Tailwind CSS
  main.jsx     -- 前端主程式
```

### Code Style

提交 (commit) 前，請先執行下列指令確保程式碼樣式符合規範。

1. 格式化程式碼

```shell
npm run format
```

2. 檢查程式碼樣式

```shell
npm run lint
```
