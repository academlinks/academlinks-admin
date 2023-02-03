import axioss from "axios";
import decode from "jwt-decode";
import { getAPI_EndPoint } from "../lib/config";

function getJWT() {
  return localStorage.getItem("academind_admin_passport")
    ? JSON.parse(localStorage.getItem("academind_admin_passport"))
    : null;
}

const refresher = axioss.create({
  baseURL: `${getAPI_EndPoint()}/authentication/refresh`,
  withCredentials: true,
  method: "GET",
});

export const axiosQuery = axioss.create({
  baseURL: getAPI_EndPoint(),
  withCredentials: true,
});

export const axiosFormDataQuery = axioss.create({
  baseURL: getAPI_EndPoint(),
  withCredentials: true,
  headers: {
    "content-type": "multipart/form-data",
  },
});

export const axios = axioss.create({
  baseURL: getAPI_EndPoint(),
});

let refreshTokenPromise;

axiosQuery.interceptors.request.use(async (config) =>
  tokenExchange({ config })
);

axiosFormDataQuery.interceptors.request.use(async (config) =>
  tokenExchange({ config })
);

function tokenExchange({ config }) {
  const token = getJWT();

  const decodedUser = token && decode(token);
  const exp = decodedUser?.exp;

  if (Math.floor(Date.now() / 1000) > exp) {
    if (!refreshTokenPromise)
      refreshTokenPromise = refresher()
        .then(({ data }) => {
          refreshTokenPromise = null;
          return data.accessToken;
        })
        .catch((err) => {
          if (err.response.status === 401)
            localStorage.removeItem("academind_admin_passport");
          refreshTokenPromise = null;
          return "";
        });

    return refreshTokenPromise.then((token) => {
      localStorage.setItem("academind_admin_passport", JSON.stringify(token));
      config.headers.authorization = `Bearer ${token}`;
      return config;
    });
  } else {
    config.headers.authorization = `Bearer ${getJWT()}`;
  }

  return config;
}
