import { useAppDispatch } from "../../store/hooks";

import {
  login,
  logOut,
  getAppBadges,
} from "../../store/reducers/authenticationReducer";

import { AuthCredentialsT } from "../../interface/reducers/authReducer.types";

export default function useAdminQuery() {
  const dispatch = useAppDispatch();

  function loginQuery({ password, userName }: AuthCredentialsT) {
    dispatch(login({ password, userName }));
  }

  function logoutQuery() {
    dispatch(logOut());
  }

  function getAppBadgesQuery() {
    dispatch(getAppBadges());
  }

  return { loginQuery, logoutQuery, getAppBadgesQuery };
}
