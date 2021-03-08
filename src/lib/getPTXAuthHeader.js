import jsSHA from "jssha";

const getPTXAuthHeader = () => {
  var AppID = process.env.REACT_APP_PTA_USER_ID;
  var AppKey = process.env.REACT_APP_PTA_USER_KEY;
  // var AppID = "FFFFFFFF-FFFF-FFFF-FFFF-FFFFFFFFFFFF";
  // var AppKey = "FFFFFFFF-FFFF-FFFF-FFFF-FFFFFFFFFFFF";
  var GMTString = new Date().toGMTString();
  var ShaObj = new jsSHA("SHA-1", "TEXT");
  // var ShaObj = sha256("SHA-1", "TEXT");
  ShaObj.setHMACKey(AppKey, "TEXT");
  ShaObj.update("x-date: " + GMTString);
  var HMAC = ShaObj.getHMAC("B64");
  var Authorization =
    'hmac username="' +
    AppID +
    '", algorithm="hmac-sha1", headers="x-date", signature="' +
    HMAC +
    '"';
  return {
    Authorization: Authorization,
    "X-Date": GMTString,
    // "Accept-Encoding": "gzip",
    "Access-Control-Allow-Origin": "*",
    Accept: "*/*",
  };
  //如果要將js運行在伺服器，可額外加入 'Accept-Encoding': 'gzip'，要求壓縮以減少網路傳輸資料量
};

export default getPTXAuthHeader;
