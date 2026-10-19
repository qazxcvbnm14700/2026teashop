// 狀態管理
let currentCategory = "暢銷排行";
let selectedItem = null;
let selectedTempSize = "";
let selectedSweetness = "正常糖 (標準)";
let selectedIce = "正常冰 (標準)";
let selectedToppings = [];
let quantity = 1;

// 初始化
document.addEventListener("DOMContentLoaded", () => {
  renderCategoryTabs();
  renderItemsGrid(currentCategory);
  renderCustomizationOptions();
  setupEventListeners();

  // 預設選取第一個品項
  const firstItem = MENU_DATA[0].items[0];
  selectItem(firstItem, MENU_DATA[0].category);

  // 載入已儲存的 API 網址
  const savedUrl = getApiUrl();
  const urlInput = document.getElementById("api-url-input");
  if (urlInput && savedUrl) {
    urlInput.value = savedUrl;
  }
});

// 渲染分類按鈕
function renderCategoryTabs() {
  const container = document.getElementById("category-tabs-container");
  container.innerHTML = "";

  MENU_DATA.forEach((cat) => {
    const btn = document.createElement("button");
    btn.type = "button";
    btn.className = `tab-btn ${cat.category === currentCategory ? "active" : ""}`;
    btn.textContent = cat.category;
    btn.onclick = () => {
      currentCategory = cat.category;
      document.querySelectorAll(".tab-btn").forEach(b => b.classList.remove("active"));
      btn.classList.add("active");
      renderItemsGrid(currentCategory);
    };
    container.appendChild(btn);
  });
}

// 渲染餐點清單
function renderItemsGrid(categoryName) {
  const container = document.getElementById("items-grid-container");
  container.innerHTML = "";

  const category = MENU_DATA.find(c => c.category === categoryName);
  if (!category) return;

  category.items.forEach(item => {
    const card = document.createElement("div");
    card.className = "item-card";
    if (selectedItem && selectedItem.name === item.name) {
      card.classList.add("selected");
    }

    const tagHtml = item.tag ? `<span class="item-tag">${item.tag}</span>` : "";
    card.innerHTML = `
      <div>
        <div class="item-name">${item.name} ${tagHtml}</div>
        <div style="font-size: 0.8rem; color: var(--text-muted);">${item.tempOptions.join(" / ")}</div>
      </div>
      <div style="margin-top: 10px; display: flex; justify-content: space-between; align-items: baseline;">
        <span class="item-price">NT$ ${item.price}</span>
        <span style="font-size: 0.75rem; color: var(--brand-green); font-weight: 600;">選擇</span>
      </div>
    `;

    card.onclick = () => {
      selectItem(item, categoryName);
      document.querySelectorAll(".item-card").forEach(c => c.classList.remove("selected"));
      card.classList.add("selected");
    };

    container.appendChild(card);
  });
}

// 點選品項
function selectItem(item, categoryName) {
  selectedItem = { ...item, category: categoryName };
  selectedTempSize = item.tempOptions[0]; // 預設第一個規格
  selectedToppings = [];

  // 清空複選加料框
  document.querySelectorAll("#toppings-container input").forEach(cb => cb.checked = false);

  updateCustomizationVisibility(item.isDrink);
  renderTempSizeOptions(item.tempOptions);
  updatePriceCalculation();
}

// 根據品項是否為飲料，顯示/隱藏甜度與冰量
function updateCustomizationVisibility(isDrink) {
  const sweetnessGroup = document.getElementById("sweetness-group");
  const iceGroup = document.getElementById("ice-group");
  const toppingsGroup = document.getElementById("toppings-group");

  if (isDrink) {
    sweetnessGroup.style.display = "block";
    iceGroup.style.display = "block";
    toppingsGroup.style.display = "block";
  } else {
    // 雞蛋糕不需要甜度與冰量
    sweetnessGroup.style.display = "none";
    iceGroup.style.display = "none";
    toppingsGroup.style.display = "none";
  }
}

// 渲染規格/溫層選項
function renderTempSizeOptions(options) {
  const container = document.getElementById("temp-size-container");
  container.innerHTML = "";

  options.forEach((opt, idx) => {
    const id = `temp-size-${idx}`;
    const wrap = document.createElement("div");
    wrap.className = "pill-option";
    wrap.innerHTML = `
      <input type="radio" id="${id}" name="temp-size" value="${opt}" ${idx === 0 ? "checked" : ""}>
      <label for="${id}">${opt}</label>
    `;
    wrap.querySelector("input").onchange = (e) => {
      selectedTempSize = e.target.value;
    };
    container.appendChild(wrap);
  });
}

// 渲染自訂選項（甜度、冰量、加料）
function renderCustomizationOptions() {
  // 甜度
  const sweetContainer = document.getElementById("sweetness-container");
  sweetContainer.innerHTML = "";
  SWEETNESS_OPTIONS.forEach((opt, idx) => {
    const id = `sweet-${idx}`;
    const wrap = document.createElement("div");
    wrap.className = "pill-option";
    wrap.innerHTML = `
      <input type="radio" id="${id}" name="sweetness" value="${opt}" ${idx === 0 ? "checked" : ""}>
      <label for="${id}">${opt}</label>
    `;
    wrap.querySelector("input").onchange = (e) => {
      selectedSweetness = e.target.value;
    };
    sweetContainer.appendChild(wrap);
  });

  // 冰量
  const iceContainer = document.getElementById("ice-container");
  iceContainer.innerHTML = "";
  ICE_OPTIONS.forEach((opt, idx) => {
    const id = `ice-${idx}`;
    const wrap = document.createElement("div");
    wrap.className = "pill-option";
    wrap.innerHTML = `
      <input type="radio" id="${id}" name="ice" value="${opt}" ${idx === 1 ? "checked" : ""}>
      <label for="${id}">${opt}</label>
    `;
    wrap.querySelector("input").onchange = (e) => {
      selectedIce = e.target.value;
    };
    iceContainer.appendChild(wrap);
  });

  // 加料
  const toppingContainer = document.getElementById("toppings-container");
  toppingContainer.innerHTML = "";
  TOPPING_OPTIONS.forEach((top, idx) => {
    const id = `top-${idx}`;
    const wrap = document.createElement("div");
    wrap.className = "pill-option";
    wrap.innerHTML = `
      <input type="checkbox" id="${id}" value="${top.name}" data-price="${top.price}">
      <label for="${id}">+${top.price}元 ${top.name}</label>
    `;
    wrap.querySelector("input").onchange = () => {
      selectedToppings = [];
      document.querySelectorAll("#toppings-container input:checked").forEach(cb => {
        selectedToppings.push({
          name: cb.value,
          price: Number(cb.dataset.price)
        });
      });
      updatePriceCalculation();
    };
    toppingContainer.appendChild(wrap);
  });
}

// 即時計算價格 (單品價格 + 加料合計) * 數量
function updatePriceCalculation() {
  if (!selectedItem) return;

  const basePrice = selectedItem.price;
  const toppingsPrice = selectedToppings.reduce((sum, item) => sum + item.price, 0);
  const unitPrice = basePrice + toppingsPrice;
  const qtyInput = document.getElementById("item-quantity");
  quantity = Math.max(1, parseInt(qtyInput.value) || 1);
  const totalPrice = unitPrice * quantity;

  // 更新右側價格明細
  document.getElementById("summary-item-name").textContent = selectedItem.name;
  document.getElementById("summary-base-price").textContent = `NT$ ${basePrice}`;
  document.getElementById("summary-toppings-price").textContent = `+ NT$ ${toppingsPrice}`;
  document.getElementById("summary-unit-price").textContent = `NT$ ${unitPrice}`;
  document.getElementById("summary-quantity").textContent = `${quantity} 份`;
  document.getElementById("summary-total-price").textContent = `NT$ ${totalPrice}`;
}

// 事件監聽
function setupEventListeners() {
  const qtyInput = document.getElementById("item-quantity");
  qtyInput.addEventListener("input", updatePriceCalculation);

  // 儲存 API 網址按鈕
  const saveApiBtn = document.getElementById("save-api-url-btn");
  if (saveApiBtn) {
    saveApiBtn.onclick = () => {
      const val = document.getElementById("api-url-input").value;
      setApiUrl(val);
      alert("Google Apps Script 網址已儲存！");
    };
  }

  // 送出點餐
  const submitBtn = document.getElementById("submit-order-btn");
  submitBtn.addEventListener("click", handleOrderSubmit);
}

// 處理送出點餐
async function handleOrderSubmit() {
  const nameInput = document.getElementById("customer-name");
  const name = nameInput.value.trim();
  const alertBox = document.getElementById("submit-alert");

  if (!name) {
    showAlert("請先輸入您的姓名或座號！", "error");
    nameInput.focus();
    return;
  }

  if (!selectedItem) {
    showAlert("請選擇您要點購的餐點！", "error");
    return;
  }

  const toppingsPrice = selectedToppings.reduce((sum, item) => sum + item.price, 0);
  const unitPrice = selectedItem.price + toppingsPrice;
  const totalPrice = unitPrice * quantity;
  const note = document.getElementById("item-note").value.trim();

  const orderData = {
    name: name,
    category: selectedItem.category,
    item: selectedItem.name,
    tempSize: selectedTempSize,
    sweetness: selectedItem.isDrink ? selectedSweetness : "-",
    ice: selectedItem.isDrink ? selectedIce : "-",
    toppings: selectedToppings.map(t => t.name).join(", ") || "無",
    note: note || "無",
    unitPrice: unitPrice,
    quantity: quantity,
    totalPrice: totalPrice,
    timestamp: new Date().toLocaleString("zh-TW", { hour12: false })
  };

  const submitBtn = document.getElementById("submit-order-btn");
  submitBtn.disabled = true;
  submitBtn.textContent = "正在送出訂單...";

  try {
    const res = await submitOrder(orderData);
    showAlert(`🎉 點餐成功！【${orderData.name}】點了 ${orderData.item}，金額 NT$ ${totalPrice}。`, "success");
    
    // 重設部分欄位
    document.getElementById("item-note").value = "";
    document.getElementById("item-quantity").value = 1;
    document.querySelectorAll("#toppings-container input").forEach(cb => cb.checked = false);
    selectedToppings = [];
    updatePriceCalculation();

  } catch (err) {
    showAlert("送出失敗，請稍後再試", "error");
  } finally {
    submitBtn.disabled = false;
    submitBtn.innerHTML = "<span>確認送出點餐</span>";
  }
}

function showAlert(msg, type) {
  const alertBox = document.getElementById("submit-alert");
  alertBox.className = `alert-box alert-${type}`;
  alertBox.textContent = msg;
  alertBox.style.display = "block";
  setTimeout(() => {
    alertBox.style.display = "none";
  }, 5000);
}
