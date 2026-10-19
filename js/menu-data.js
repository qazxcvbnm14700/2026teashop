/**
 * 完整菜單資料 (根據 menu.jpg plantica × TP TEA 聯名菜單)
 */
const MENU_DATA = [
  {
    category: "暢銷排行",
    items: [
      { name: "蜜香紅茶 / 珍珠", price: 45, isDrink: true, tempOptions: ["冰(22oz)", "熱(16oz)"], tag: "" },
      { name: "粉粿蕎麥四季春", price: 60, isDrink: true, tempOptions: ["冰(22oz)"], tag: "" },
      { name: "翡翠檸檬", price: 65, isDrink: true, tempOptions: ["冰(22oz)"], tag: "" },
      { name: "蜜柑鐵觀音", price: 65, isDrink: true, tempOptions: ["冰(22oz)"], tag: "推" },
      { name: "觀音拿鐵 / 珍珠", price: 70, isDrink: true, tempOptions: ["冰(22oz)", "熱(16oz)"], tag: "" },
      { name: "紅豆拿鐵 / 珍珠", price: 75, isDrink: true, tempOptions: ["冰(22oz)", "熱(16oz)"], tag: "" }
    ]
  },
  {
    category: "雅韻烏龍",
    items: [
      { name: "四季春 / 珍珠", price: 40, isDrink: true, tempOptions: ["冰(22oz)", "熱(16oz)"], tag: "" },
      { name: "碳燒鐵觀音", price: 40, isDrink: true, tempOptions: ["冰(22oz)", "熱(16oz)"], tag: "" },
      { name: "冬瓜鐵觀音", price: 50, isDrink: true, tempOptions: ["冰(22oz)", "熱(16oz)"], tag: "" },
      { name: "金桂觀音", price: 55, isDrink: true, tempOptions: ["冰(22oz)", "熱(16oz)"], tag: "" },
      { name: "鐵觀音奶茶 / 珍珠", price: 60, isDrink: true, tempOptions: ["冰(22oz)", "熱(16oz)"], tag: "" },
      { name: "冬瓜檸檬鐵觀音", price: 60, isDrink: true, tempOptions: ["冰(22oz)"], tag: "" },
      { name: "QQ檸檬四季春", price: 70, isDrink: true, tempOptions: ["冰(22oz)"], tag: "" },
      { name: "冬瓜觀音拿鐵 / 珍珠", price: 70, isDrink: true, tempOptions: ["冰(22oz)", "熱(16oz)"], tag: "" },
      { name: "四季春蜂蜜拿鐵 / 珍珠", price: 75, isDrink: true, tempOptions: ["冰(22oz)", "熱(16oz)"], tag: "" },
      { name: "金桂觀音拿鐵 / 珍珠", price: 75, isDrink: true, tempOptions: ["冰(22oz)", "熱(16oz)"], tag: "" },
      { name: "觀音雙Q拿鐵", price: 75, isDrink: true, tempOptions: ["冰(22oz)"], tag: "" }
    ]
  },
  {
    category: "玫瑰醋系列",
    items: [
      { name: "四季春玫瑰醋飲", price: 80, isDrink: true, tempOptions: ["冰(22oz)"], tag: "" },
      { name: "荔枝翡翠玫瑰醋飲", price: 80, isDrink: true, tempOptions: ["冰(22oz)"], tag: "推" }
    ]
  },
  {
    category: "蜜柑系列",
    items: [
      { name: "蜜柑愛玉鐵觀音 (含愛玉風味凍)", price: 75, isDrink: true, tempOptions: ["冰(22oz)"], tag: "推" },
      { name: "蜜柑寒天鐵觀音", price: 75, isDrink: true, tempOptions: ["冰(22oz)"], tag: "推" },
      { name: "蜜柑咖啡凍鐵觀音", price: 75, isDrink: true, tempOptions: ["冰(22oz)"], tag: "推" }
    ]
  },
  {
    category: "焙茶系列",
    items: [
      { name: "焙茶拿鐵 / 珍珠", price: 85, isDrink: true, tempOptions: ["冰(22oz)", "熱(16oz)"], tag: "" },
      { name: "焙茶觀音雙Q奶茶", price: 85, isDrink: true, tempOptions: ["冰(22oz)"], tag: "推" }
    ]
  },
  {
    category: "清爽綠茶",
    items: [
      { name: "特級翡翠綠", price: 40, isDrink: true, tempOptions: ["冰(22oz)", "熱(16oz)"], tag: "" },
      { name: "金桂茉莉", price: 55, isDrink: true, tempOptions: ["冰(22oz)"], tag: "推" },
      { name: "蜂蜜綠茶", price: 55, isDrink: true, tempOptions: ["冰(22oz)"], tag: "" },
      { name: "特級茉莉奶綠 / 珍珠", price: 55, isDrink: true, tempOptions: ["冰(22oz)", "熱(16oz)"], tag: "" },
      { name: "百香綠茶", price: 60, isDrink: true, tempOptions: ["冰(22oz)"], tag: "" },
      { name: "水果茶", price: 65, isDrink: true, tempOptions: ["冰(22oz)", "熱(16oz)"], tag: "" },
      { name: "翡翠拿鐵 / 珍珠", price: 70, isDrink: true, tempOptions: ["冰(22oz)", "熱(16oz)"], tag: "" }
    ]
  },
  {
    category: "香醇紅茶",
    items: [
      { name: "蔗香紅茶 (錫蘭烏瓦紅茶)", price: 35, isDrink: true, tempOptions: ["冰(22oz)", "熱(16oz)"], tag: "" },
      { name: "功夫紅茶", price: 40, isDrink: true, tempOptions: ["冰(22oz)", "熱(16oz)"], tag: "" },
      { name: "豆漿紅茶", price: 45, isDrink: true, tempOptions: ["冰(22oz)"], tag: "" },
      { name: "蔗香奶茶 (錫蘭烏瓦奶茶)", price: 55, isDrink: true, tempOptions: ["冰(22oz)", "熱(16oz)"], tag: "" },
      { name: "豆漿奶茶", price: 55, isDrink: true, tempOptions: ["冰(22oz)"], tag: "" },
      { name: "珍珠奶茶", price: 55, isDrink: true, tempOptions: ["冰(22oz)", "熱(16oz)"], tag: "" },
      { name: "蜜香奶茶 / 珍珠", price: 60, isDrink: true, tempOptions: ["冰(22oz)", "熱(16oz)"], tag: "" },
      { name: "錫蘭烏瓦檸檬紅茶", price: 65, isDrink: true, tempOptions: ["冰(22oz)"], tag: "推" },
      { name: "功夫茶拿鐵 / 珍珠", price: 70, isDrink: true, tempOptions: ["冰(22oz)", "熱(16oz)"], tag: "" },
      { name: "紅茶拿鐵 / 珍珠", price: 70, isDrink: true, tempOptions: ["冰(22oz)", "熱(16oz)"], tag: "" }
    ]
  },
  {
    category: "蕎麥系列",
    items: [
      { name: "黃金蕎麥 (無茶)", price: 45, isDrink: true, tempOptions: ["冰(22oz)", "熱(16oz)"], tag: "" },
      { name: "蕎麥四季春 (含茶)", price: 50, isDrink: true, tempOptions: ["冰(22oz)", "熱(16oz)"], tag: "推" },
      { name: "金桂蕎麥 (無茶)", price: 55, isDrink: true, tempOptions: ["冰(22oz)"], tag: "" }
    ]
  },
  {
    category: "無茶也歡",
    items: [
      { name: "檸檬冬瓜", price: 60, isDrink: true, tempOptions: ["冰(22oz)"], tag: "" },
      { name: "檸檬蜜", price: 65, isDrink: true, tempOptions: ["冰(22oz)"], tag: "" },
      { name: "拿鐵冬瓜", price: 70, isDrink: true, tempOptions: ["冰(22oz)"], tag: "" }
    ]
  },
  {
    category: "季節限定",
    items: [
      { name: "養樂多綠茶", price: 60, isDrink: true, tempOptions: ["冰(22oz)"], tag: "" },
      { name: "布丁奶茶", price: 60, isDrink: true, tempOptions: ["冰(22oz)"], tag: "" },
      { name: "愛文芒果綠茶", price: 70, isDrink: true, tempOptions: ["冰(22oz)"], tag: "" },
      { name: "果果四季春", price: 75, isDrink: true, tempOptions: ["冰(22oz)"], tag: "" },
      { name: "愛文芒果椰果綠茶", price: 75, isDrink: true, tempOptions: ["冰(22oz)"], tag: "推" },
      { name: "愛文芒果愛玉綠茶 (含愛玉風味凍)", price: 75, isDrink: true, tempOptions: ["冰(22oz)"], tag: "" }
    ]
  },
  {
    category: "雞蛋糕 (5入)",
    items: [
      { name: "原味雞蛋糕", price: 50, isDrink: false, tempOptions: ["現烤出爐(5入)"], tag: "" },
      { name: "卡士達雞蛋糕", price: 55, isDrink: false, tempOptions: ["現烤出爐(5入)"], tag: "" },
      { name: "珍珠卡士達雞蛋糕", price: 55, isDrink: false, tempOptions: ["現烤出爐(5入)"], tag: "" },
      { name: "濃香花生雞蛋糕", price: 65, isDrink: false, tempOptions: ["現烤出爐(5入)"], tag: "" },
      { name: "紅豆卡士達雞蛋糕", price: 65, isDrink: false, tempOptions: ["現烤出爐(5入)"], tag: "推" },
      { name: "濃香芝麻雞蛋糕", price: 65, isDrink: false, tempOptions: ["現烤出爐(5入)"], tag: "" },
      { name: "經典綜合雞蛋糕 (原味1顆+卡士達2顆+珍珠卡士達2顆)", price: 55, isDrink: false, tempOptions: ["現烤出爐(5入)"], tag: "" },
      { name: "花生好事綜合雞蛋糕 (原味1顆+卡士達2顆+花生2顆)", price: 60, isDrink: false, tempOptions: ["現烤出爐(5入)"], tag: "" },
      { name: "復刻紅豆綜合雞蛋糕 (原味1顆+卡士達2顆+紅豆卡士達2顆)", price: 60, isDrink: false, tempOptions: ["現烤出爐(5入)"], tag: "" },
      { name: "懷舊芝麻綜合雞蛋糕 (原味1顆+卡士達2顆+芝麻2顆)", price: 60, isDrink: false, tempOptions: ["現烤出爐(5入)"], tag: "推" }
    ]
  }
];

// 加料選項
const TOPPING_OPTIONS = [
  { name: "愛玉風味凍", price: 10 },
  { name: "紅豆", price: 10 },
  { name: "檸檬", price: 10 },
  { name: "寒天晶球", price: 10 },
  { name: "椰果", price: 10 },
  { name: "波霸", price: 10 },
  { name: "珍珠", price: 10 },
  { name: "粉粿", price: 15 },
  { name: "布丁", price: 15 },
  { name: "咖啡凍", price: 15 }
];

// 甜度選項
const SWEETNESS_OPTIONS = ["正常糖 (標準)", "八分糖", "半糖", "微糖", "無糖"];

// 冰量選項
const ICE_OPTIONS = ["多冰", "正常冰 (標準)", "微冰", "去冰", "溫熱 (限熱飲品項)"];

if (typeof module !== "undefined" && module.exports) {
  module.exports = {
    MENU_DATA,
    TOPPING_OPTIONS,
    SWEETNESS_OPTIONS,
    ICE_OPTIONS
  };
}

