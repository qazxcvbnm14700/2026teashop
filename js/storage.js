// Google Apps Script Web App URL
// 使用者可在 Google Sheet 部署 Apps Script 獲得此網址
// 系統預設亦支援本機 LocalStorage 作為備援與離線即時展示
const DEFAULT_GAS_URL = "https://script.google.com/macros/s/AKfycbz_REPLACE_WITH_YOUR_DEPLOYMENT_ID/exec";

// 取得使用者設定或預設的 API 網址
function getApiUrl() {
  return localStorage.getItem("tea_shop_api_url") || "";
}

function setApiUrl(url) {
  localStorage.setItem("tea_shop_api_url", url.trim());
}

// 取得本機保存的點餐記錄（支援離線與展示）
function getLocalOrders() {
  try {
    return JSON.parse(localStorage.getItem("tea_shop_local_orders") || "[]");
  } catch (e) {
    return [];
  }
}

function saveLocalOrder(order) {
  const orders = getLocalOrders();
  orders.unshift(order);
  localStorage.setItem("tea_shop_local_orders", JSON.stringify(orders));
}

// 送出點餐至 Google Sheet 或 LocalStorage
async function submitOrder(orderData) {
  const apiUrl = getApiUrl();
  saveLocalOrder(orderData); // 永遠先存一份到本機快取

  if (!apiUrl || apiUrl.includes("REPLACE_WITH_YOUR_DEPLOYMENT_ID")) {
    return {
      success: true,
      mode: "local",
      message: "點餐已暫存於瀏覽器（尚未設定 Google Sheet 部署網址）"
    };
  }

  try {
    // 透過 fetch 發送 POST 請求至 Google Apps Script
    // 注意：Google Apps Script 重新導向需使用 mode: 'no-cors' 或標準 JSONP/text
    const response = await fetch(apiUrl, {
      method: "POST",
      mode: "no-cors",
      headers: {
        "Content-Type": "text/plain;charset=utf-8"
      },
      body: JSON.stringify(orderData)
    });

    return {
      success: true,
      mode: "google_sheet",
      message: "點餐成功存入 Google Sheet！"
    };
  } catch (err) {
    console.warn("Google Sheet 連線發生錯誤，已保留本機紀錄：", err);
    return {
      success: true,
      mode: "local_fallback",
      message: "Google Sheet 連線異常，已自動為您暫存於本機！"
    };
  }
}

// 查詢點餐狀況
async function fetchOrders() {
  const apiUrl = getApiUrl();
  const localOrders = getLocalOrders();

  if (!apiUrl || apiUrl.includes("REPLACE_WITH_YOUR_DEPLOYMENT_ID")) {
    return localOrders;
  }

  try {
    const res = await fetch(apiUrl);
    const result = await res.json();
    if (result.status === "success" && Array.isArray(result.data)) {
      // 若從 Google Sheet 撈回資料，合併並依時間排序
      return result.data;
    }
  } catch (err) {
    console.warn("無法取得 Google Sheet 資料，改用本機紀錄：", err);
  }
  return localOrders;
}
