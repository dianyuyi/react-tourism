import jsSHA from "./sha1";

const getPTXAuthHeader = () => {
  var AppID = "FFFFFFFF-FFFF-FFFF-FFFF-FFFFFFFFFFFF";
  var AppKey = "FFFFFFFF-FFFF-FFFF-FFFF-FFFFFFFFFFFF";
  var GMTString = new Date().toGMTString();
  var ShaObj = new jsSHA("SHA-1", "TEXT");
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
    "Accept-Encoding": "gzip",
  };
  //如果要將js運行在伺服器，可額外加入 'Accept-Encoding': 'gzip'，要求壓縮以減少網路傳輸資料量
};

export default getPTXAuthHeader;
