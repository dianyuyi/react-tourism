import axios from "axios";
import qs from "qs";

const getTDXAuthHeader = async (cookies) => {
  let accessToken = "";
  if (cookies.get("TDX_TOKEN")) {
    accessToken = cookies.get("TDX_TOKEN");
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
        cookies.set("TDX_TOKEN", res.data.access_token, { maxAge: res.data.expires_in });
        accessToken = res.data;
      })
      .catch((error) => {
        console.log(error);
      });
  }

  return accessToken;
};

export default getTDXAuthHeader;
