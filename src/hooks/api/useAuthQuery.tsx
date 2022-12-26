import { useAppDispatch } from "../../store/hooks";

import { login, logOut } from "../../store/reducers/authenticationReducer";

import { AuthCredentialsT } from "../../interface/reducers/authReducer.types";

export default function useAuthQuery() {
  const dispatch = useAppDispatch();

  function loginQuery({ password, userName }: AuthCredentialsT) {
    dispatch(login({ password, userName }));
  }

  function logoutQuery() {
    dispatch(logOut());
  }

  return { loginQuery, logoutQuery };
}
