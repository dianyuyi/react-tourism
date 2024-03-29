# 台灣各縣市觀光景點查詢

DEMO 頁：[連結](https://react-tourism.netlify.app)

**2022/11/01更新**

由於PTX即將失效，將API金鑰轉移到統合的TDX平台上

在不改動主架構的情況下增加了token存入cookie的存取機制


## 簡易功能介紹

### 首頁/搜尋頁

<img src="https://github.com/dianyuyi/react-tourism/blob/master/public/other/index.jpg?raw=true" alt="index" style="max-width:500px;">

・送出關鍵字後，會自動跳轉至/scenicSpot/:city 的頁面，
搜尋資料欄位中的 DescriptionDetail 是否包含關鍵字，並回傳符合值。

### 景點列表頁

<img src="https://github.com/dianyuyi/react-tourism/blob/master/public/other/scenicSpot.jpg?raw=true" alt="index" style="max-width:500px;">

・透過搜尋頁/桌機版 Navbar/手機版 Sidenav 來切換，依照路由的城市名稱動態渲染頁面內容。為了精簡分類依序分成全台、東、西、南、北、離島。分類方式參考台灣觀光局的做法。

### 景點列表頁/詳細說明視窗

<img src="https://github.com/dianyuyi/react-tourism/blob/master/public/other/modal.jpg?raw=true" alt="index" style="max-width:500px;">

・在景點列表點選單一景點時，會跳出小視窗顯示該景點的詳細說明。包含名稱、圖片、詳細描述、位置及旅遊資訊。

### 資料來源

・串接 API：TDX OAS3 API V2 / Tourism

・首頁影片：Pixels

提供全台觀光景點的位置及簡易預覽。API 的使用方式及相關連結請參照官方範例說明。

[TDX OAS3 API V2 / Tourism](https://tdx.transportdata.tw/api-service/swagger/basic/cd0226cf-6292-4c35-8a0d-b595f0b15352#/Tourism/)
[TDX 平台](https://tdx.transportdata.tw/)
