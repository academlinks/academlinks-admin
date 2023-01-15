import { useAppDispatch } from "../../store/hooks";
import { useContext } from "react";

import { IoContext } from "../../store/IoProvider";

import { login, logOut, getAppBadges } from "../../store/reducers/adminReducer";

import { AuthCredentialsT } from "../../interface/reducers/authReducer.types";

export default function useAdminQuery() {
  const { socket, socket_name_placeholders } = useContext(IoContext);

  const dispatch = useAppDispatch();

  function loginQuery({ password, userName }: AuthCredentialsT) {
    dispatch(login({ password, userName }));
  }

  function logoutQuery() {
    dispatch(logOut());
    socket?.emit(socket_name_placeholders.userDisconnection);
  }

  function getAppBadgesQuery() {
    dispatch(getAppBadges());
  }

  return { loginQuery, logoutQuery, getAppBadgesQuery };
}
