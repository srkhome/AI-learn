# 宜仁居家 AI 學習｜AI 行銷影片形象網站（GitHub Pages）

這是一個可直接部署到 **GitHub Pages** 的靜態網站專案。

## ✅ 內容包含
- 首頁 `/`
- 流程總覽 `/process.html`
- 工具教學（單頁錨點）`/tools/`
- 工具獨立頁（第二層）
- 成果案例 `/cases.html`
- FAQ `/faq.html`
- 聯絡 `/contact.html`
- 已內建你的流程圖圖片（`assets/img/ai-marketing-process.jpg`）

## 🚀 部署到 GitHub Pages（最簡單方式）
1. 在 GitHub 建立一個新 repo（例如：`yiren-ai-site`）
2. 把這個專案的所有檔案上傳到 repo 根目錄
3. 到 GitHub repo → **Settings** → **Pages**
4. **Source** 選擇 `Deploy from a branch`
5. **Branch** 選擇 `main`，資料夾選 `/ (root)` → Save
6. 等待 Pages 建立完成後，就會得到網址

## 🔧 本機預覽
你可以用任何靜態伺服器來預覽，例如（擇一）：

### Python（macOS 常見）
```bash
python3 -m http.server 8000
```
然後打開：
`http://localhost:8000`

## 🗂 專案結構
```
.
├── index.html
├── process.html
├── tools/
│   ├── index.html
│   ├── chatgpt.html
│   ├── dreamface.html
│   ├── capcut.html
│   ├── kaipai.html
│   └── gemini.html
├── cases.html
├── faq.html
├── contact.html
└── assets/
    ├── styles.css
    ├── main.js
    └── img/
        ├── logo.svg
        └── ai-marketing-process.jpg
```

## 📝 修改資訊
- 品牌名稱與聯絡資訊在各頁 Footer 與 `/contact.html`
- 流程圖圖片檔案：`assets/img/ai-marketing-process.jpg`

---
© 宜仁居家 AI 學習
