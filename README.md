# Baby Care 新生兒衛教智慧問答平台介紹網站

本專案以第一版 Baby Care 網站為基礎，保留原有 HTML/CSS/JavaScript 架構，更新為藍色主色、金色重點、紫色點綴與米白背景，並放大桌機與手機文字。

## 檔案
- `index.html`：網站區塊、專題介紹、研究目的、系統流程、架構、研究成果與團隊資訊。
- `style.css`：視覺配色、字體大小、桌機與手機響應式排版。
- `script.js`：手機導覽選單、年份與實際問答平台連結。

## 導覽順序
首頁、專題團隊、研究背景與動機、系統流程、系統功能、系統架構圖、研究成果。

## 實際問答系統
按鈕連結至 https://www.cplo.xyz/apps/10055/ 。這是獨立的問答系統服務。GitHub Pages 只託管靜態介紹網站，不會執行 Python、Ollama、LangChain 或 Chroma 後端。

## 研究成果解讀
依據提供的 Baby Care.pdf，固定 10 題測試中的回答依據支持率為 Baseline 77%、向量搜尋 + BM25 為 99%、加入 RRF 與 Reranking 後為 100%。這些數字只代表簡報所述的固定題目測試，不可解讀為所有新生兒照護問題或真實醫療情境的準確率。

## 未來規劃
完善管理者與使用者系統、完整對話紀錄保存、新增圖資料庫、建立回答時間統計機制、新增使用者意見回報功能。這些項目以規劃方向呈現，不表示已完成。

## 部署到 GitHub Pages
Repository 的發布目錄內需有 `index.html`、`style.css` 與 `script.js`。在 GitHub Repository → Settings → Pages，選擇 `Deploy from a branch`、`main`、`/(root)` 後儲存。更新檔案並 Commit 後，GitHub Pages 會重新部署。


## 內容更新備註
網站內容依照專題整理資料增補研究動機、研究目的、資料來源、文件前處理、系統功能、架構與評估方法。固定 10 題的回答依據支持率與 20 題 RAGAS 評估分開描述，避免將不同測試混為一談。圖資料庫、完整歷史紀錄保存、意見回報、回答時間統計等仍列為未來規劃。

實際問答系統連結： https://www.cplo.xyz/apps/10055/
GitHub Pages 只負責託管靜態介紹網站，不執行 Python、Ollama、LangChain 或 ChromaDB 後端。


## 專題原始架構圖與進階 RAG 流程圖

網站已加入依使用者提供的專題簡報截圖整理的兩張圖：
- `architecture-overview.png`：系統整體架構，包含知識庫建置、LangChain AI Agent、檢索工具、回答模型、對話記憶與 Dashboard。
- `advanced-rag-flow.png`：進階 RAG 的 11 步驟流程，包含 Query Rewriting、BM25 與向量檢索、Reranker、對話記憶讀寫、Prompt 組合及回答輸出。

網頁中點擊圖片可開啟大圖；請將這兩個 PNG 與 HTML、CSS、JS 一起上傳至 GitHub Pages。
