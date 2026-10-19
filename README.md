# TP TEA × plantica 班級手搖飲點餐系統

根據 `menu.jpg` 菜單風格精心設計之班級學生點飲料網站，具備即時價格試算、Google Sheet 雲端訂單同步與點餐現況即時檢視功能。

## 🌐 GitHub Pages 網站網址
- **線上點餐網站**：[https://qazxcvbnm14700.github.io/2026teashop/](https://qazxcvbnm14700.github.io/2026teashop/)
- **點餐狀況檢視**：[https://qazxcvbnm14700.github.io/2026teashop/orders.html](https://qazxcvbnm14700.github.io/2026teashop/orders.html)

---

## 📌 系統功能特色
1. **嚴格遵守排版規範**：
   - 網頁排版由上而下以「列」為單位。
   - **第 1 列**：菜單（顯示 `menu.jpg`，等比例縮放且不裁切）。
   - **第 2 列**：表單 | 價格（左側為學生姓名與餐點規格選單，右側為即時計算總金額的價格看板）。
2. **完整菜單對應（共 63 個品項）**：
   - 暢銷排行、雅韻烏龍、玫瑰醋系列、蜜柑系列、焙茶系列、清爽綠茶、香醇紅茶、蕎麥系列、無茶也歡、季節限定、雞蛋糕系列等全品項收錄。
   - 支援 10 款配料自由加選（+10元 / +15元）與甜度、冰量客製化調整。
3. **即時價格試算**：
   - 即時計算（單品基礎價 + 加料總額）× 訂購數量，送出訂單時自動隨單送出總金額與單價。
4. **Google Sheet 整合部署**：
   - 支援將訂單寫入 Google Sheet（試算表名稱：`2026手搖飲點餐記錄`）。
   - 後端程式碼位於 `google_apps_script.js`，包含自動建立標題列、防併發鎖定 (`LockService`) 與讀取 API。

---

## 📑 Google Sheet 與 Apps Script 部署步驟
1. 開啟 [Google 雲端硬碟](https://drive.google.com/)，建立一個新的 Google 試算表，命名為：`2026手搖飲點餐記錄`。
2. 點選試算表上方選單的 **「擴充功能」 > 「Apps Script」**。
3. 將本專案中的 [`google_apps_script.js`](google_apps_script.js) 程式碼完整複製並覆蓋到編輯器中。
4. 點選右上角 **「部署」 > 「新增部署作業」**：
   - 類型選擇 **「網頁應用程式 (Web App)」**。
   - 說明可輸入：`2026 點餐 API`。
   - 執行身分選擇：**「我」**。
   - 誰可以存取：**「所有人 (Anyone)」**。
5. 點選 **「部署」** 並授予權限，複製所產生的「網頁應用程式網址 (Web App URL)」。
6. 前往點餐網頁右側的 **「⚙️ Google Sheet 串接設定」**，貼上該網址並點擊儲存，即可實現全球連線存檔！
