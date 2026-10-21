# Baby Care 新生兒衛教智慧問答平台｜GitHub Pages 介紹網站

這是一個使用純 HTML、CSS、JavaScript 製作的響應式專題介紹網站，可部署至 GitHub Pages。

## 檔案

- `index.html`：網站內容與各個區塊
- `style.css`：藍色、米白色與柔和金色的視覺設計、RWD 響應式版面
- `script.js`：手機版導覽選單、年份顯示與實際問答平台連結設定

## 上線前必做：設定實際系統網址

開啟 `script.js`，找到：

```js
const SYSTEM_URL = "";
```

將空字串替換成目前確實可公開存取的問答平台網址，例如：

```js
const SYSTEM_URL = "https://你的實際系統網址";
```

請使用你們目前有效的部署網址。不要直接假設舊網址仍可用；如果系統只能在校內網路或特定伺服器環境存取，校外訪客可能無法開啟。

## 上傳到既有 GitHub Repository

1. 先備份原本 Repository 的內容。
2. 將 `index.html`、`style.css`、`script.js`、`README.md` 放到要發佈的資料夾根目錄（若 Pages 使用 `/docs`，就放在 `docs/`）。
3. 在 GitHub Repository 開啟 **Settings → Pages**。
4. 在 **Build and deployment** 選擇 **Deploy from a branch**。
5. 選擇你要發佈的 branch（常見為 `main`）與資料夾（`/(root)` 或 `/docs`），按 **Save**。
6. 等待部署完成，從 Pages 設定頁取得網站網址。

若既有 Repository 已有程式或網站，請先確認目前 Pages 的發佈來源，避免覆蓋其他檔案。

## 注意事項

- GitHub Pages 是靜態網站託管服務；它不會執行 Python、Streamlit、Ollama、LangChain 或 ChromaDB 後端。
- 本網站依據專題簡報整理介紹內容。進階功能、評估數值與未來規劃的描述應以目前實作與正式測試資料為準。
- 簡報中的 77%、99%、100% 是固定 10 題測試的回答依據支持率，不能直接解讀為所有情境的醫療正確率。
- 請勿將 API 金鑰、密碼、個人資料或其他機密放入 GitHub Pages 原始碼。
