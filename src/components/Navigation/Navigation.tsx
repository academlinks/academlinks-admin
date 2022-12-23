import React, { useContext } from "react";
import { ThemeContext } from "../../Theme";
import { tester } from "../../store/reducers/registrationReducer";
import { useAppDispatch, useAppSelector } from "../../store/hooks";

const Navigation: React.FC = () => {
  const { changeThemeHandler } = useContext(ThemeContext);
  const dispatch = useAppDispatch();
  const testCount = useAppSelector((state) => state.registration.testCount);

  return (
    <div>
      <button onClick={() => dispatch(tester({ id: "1", count: 3 }))}>
        tester {testCount}
      </button>
      <button onClick={() => changeThemeHandler()}>change theme</button>
    </div>
  );
};

export default Navigation;
