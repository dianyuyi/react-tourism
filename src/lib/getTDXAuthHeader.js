import axios from "axios";
import qs from "qs";

const getTDXAuthHeader = async (cookies, setCookie) => {
  let accessToken = "";
  if (cookies.TDX_TOKEN) {
    accessToken = cookies.TDX_TOKEN;
  } else {
    const config = {
      method: "post",
      url: "https://tdx.transportdata.tw/auth/realms/TDXConnect/protocol/openid-connect/token",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
        "Cache-Control": "max-age=7200",
      },
      data: qs.stringify({
        grant_type: "client_credentials",
        client_id: process.env.REACT_APP_TDX_USER_ID,
        client_secret: process.env.REACT_APP_TDX_USER_SECRET,
      }),
    };

    await axios(config)
      .then((res) => {
        setCookie("TDX_TOKEN", res.data, [{ maxAge: res.data.expires_in }]);
        accessToken = res.data;
        // return res.data;
      })
      .catch((error) => {
        console.log(error);
      });
  }

  return accessToken;
};

export default getTDXAuthHeader;
