import axioss from "axios";
import decode from "jwt-decode";

function getJWT() {
  return localStorage.getItem("academind_admin_passport")
    ? JSON.parse(localStorage.getItem("academind_admin_passport"))
    : null;
}

const refresher = axioss.create({
  baseURL: `${process.env.REACT_APP_API_END_POINT}/authentication/refresh`,
  withCredentials: true,
  method: "GET",
});

export const axiosQuery = axioss.create({
  baseURL: process.env.REACT_APP_API_END_POINT,
  withCredentials: true,
});

export const axiosFormDataQuery = axioss.create({
  baseURL: process.env.REACT_APP_API_END_POINT,
  withCredentials: true,
  headers: {
    "content-type": "multipart/form-data",
  },
});

export const axios = axioss.create({
  baseURL: process.env.REACT_APP_API_END_POINT,
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
      refreshTokenPromise = refresher().then(({ data }) => {
        refreshTokenPromise = null;
        return data.accessToken;
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
