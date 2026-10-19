// Google Apps Script (Code.gs)
// 請在 Google Sheet (名稱為「2026手搖飲點餐記錄」) 的「擴充功能」->「Apps Script」中貼上此程式碼

function initialSetup() {
  var sheet = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();
  if (sheet.getLastRow() === 0) {
    sheet.appendRow([
      "時間戳記", 
      "姓名", 
      "餐點類別", 
      "品項名稱", 
      "冷熱/尺寸", 
      "甜度", 
      "冰量", 
      "加料", 
      "備註", 
      "單價", 
      "數量", 
      "總金額"
    ]);
    sheet.setFrozenRows(1);
    sheet.getRange(1, 1, 1, 12).setBackground("#f2ede4").setFontWeight("bold");
  }
}

function doPost(e) {
  var lock = LockService.getScriptLock();
  lock.tryLock(10000);
  
  try {
    var sheet = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();
    initialSetup();
    
    var data;
    if (e.postData && e.postData.contents) {
      data = JSON.parse(e.postData.contents);
    } else {
      data = e.parameter;
    }
    
    var timestamp = new Date();
    var name = data.name || "";
    var category = data.category || "";
    var item = data.item || "";
    var tempSize = data.tempSize || "";
    var sweetness = data.sweetness || "";
    var ice = data.ice || "";
    var toppings = Array.isArray(data.toppings) ? data.toppings.join(", ") : (data.toppings || "");
    var note = data.note || "";
    var unitPrice = Number(data.unitPrice) || 0;
    var quantity = Number(data.quantity) || 1;
    var totalPrice = Number(data.totalPrice) || (unitPrice * quantity);

    sheet.appendRow([
      timestamp,
      name,
      category,
      item,
      tempSize,
      sweetness,
      ice,
      toppings,
      note,
      unitPrice,
      quantity,
      totalPrice
    ]);

    return ContentService.createTextOutput(JSON.stringify({
      status: "success",
      message: "點餐資料已成功存入！",
      row: sheet.getLastRow()
    })).setMimeType(ContentService.MimeType.JSON);

  } catch (error) {
    return ContentService.createTextOutput(JSON.stringify({
      status: "error",
      message: error.toString()
    })).setMimeType(ContentService.MimeType.JSON);
  } finally {
    lock.releaseLock();
  }
}

function doGet(e) {
  try {
    var sheet = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();
    initialSetup();
    var rows = sheet.getDataRange().getValues();
    
    if (rows.length <= 1) {
      return ContentService.createTextOutput(JSON.stringify({
        status: "success",
        data: []
      })).setMimeType(ContentService.MimeType.JSON);
    }

    var headers = rows[0];
    var data = [];

    for (var i = 1; i < rows.length; i++) {
      var row = rows[i];
      var entry = {
        timestamp: row[0],
        name: row[1],
        category: row[2],
        item: row[3],
        tempSize: row[4],
        sweetness: row[5],
        ice: row[6],
        toppings: row[7],
        note: row[8],
        unitPrice: row[9],
        quantity: row[10],
        totalPrice: row[11]
      };
      data.push(entry);
    }

    return ContentService.createTextOutput(JSON.stringify({
      status: "success",
      data: data
    })).setMimeType(ContentService.MimeType.JSON);

  } catch (error) {
    return ContentService.createTextOutput(JSON.stringify({
      status: "error",
      message: error.toString()
    })).setMimeType(ContentService.MimeType.JSON);
  }
}
