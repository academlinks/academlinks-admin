import React, { useState } from "react";

import {
  AuthenticationContainer,
  Input,
} from "../components/Authentication/authentication.styles";
import { Button } from "../components/Layouts";
import { AiFillEye } from "react-icons/ai";

import { useAdminQuery } from "../hooks";

const AuthenticationPage: React.FC = () => {
  const [userName, setUserName] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [passwordFieldType, setPasswordFieldType] = useState<
    "password" | "text"
  >("password");

  const { loginQuery } = useAdminQuery();

  const [userNameError, setUserNameError] = useState({
    error: false,
    message: "",
  });

  function handleUserName(e: React.ChangeEvent<HTMLInputElement>) {
    if (userNameError.error)
      setUserNameError({
        error: false,
        message: "",
      });

    setUserName(e.target.value);
  }

  const [passwordError, setPasswordError] = useState({
    error: false,
    message: "",
  });

  function handlePassword(e: React.ChangeEvent<HTMLInputElement>) {
    if (passwordError.error)
      setPasswordError({
        error: false,
        message: "",
      });

    setPassword(e.target.value);
  }

  function handleSignIn(e: React.FormEvent) {
    e.preventDefault();

    if (!userName)
      setUserNameError({
        error: true,
        message: "please enter the username",
      });

    if (!password)
      setPasswordError({
        error: true,
        message: "please enter the password",
      });

    if (!userName || !password) return;

    loginQuery({ password, userName });

    setPassword("");
    setUserName("");
  }

  return (
    <AuthenticationContainer>
      <form className="authentication-form" onSubmit={handleSignIn}>
        <div>
          <Input
            onChange={handleUserName}
            value={userName}
            error={userNameError.error}
            type="text"
            placeholder="username"
            className="inp-field"
          />
          {userNameError.error && (
            <p className="error-msg">{userNameError.message}</p>
          )}
        </div>
        <div>
          <div className="password-field">
            <Input
              onChange={handlePassword}
              name="password"
              value={password}
              error={passwordError.error}
              type={passwordFieldType}
              placeholder="password"
              className="inp-field"
            />
            <button
              className="eye-btn"
              onClick={(e) => {
                e.preventDefault();
                setPasswordFieldType((prev) =>
                  prev === "password" ? "text" : "password"
                );
              }}
            >
              <AiFillEye />
            </button>
          </div>
          {passwordError.error && (
            <p className="error-msg">{passwordError.message}</p>
          )}
        </div>
        <Button label="sign in" className="submit-btn" type="submit" />
      </form>
    </AuthenticationContainer>
  );
};

export default AuthenticationPage;
