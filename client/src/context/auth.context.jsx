import React, { useState, useEffect } from "react";
import authService from "../services/auth.service";
import { dateInfo } from "./Currentweek";

import useMediaQuery from "./MediaQuery.ts";
import { changeDirection, festDirection } from "./ChangeDirection.ts";
import { useSelector, useDispatch } from "react-redux";
import { changeLanguage, changeMode } from "../redux/globleSlice.js";
import { darkStyles } from "./globleStyle.dark.js";
import { lightStyles } from "./globleStyle.light.js";
import { switchTheme, festTheme } from "./ChangeTheme.ts";
const AuthContext = React.createContext();

function AuthProviderWrapper(props) {
  const [currentDate] = useState(dateInfo);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [user, setUser] = useState(null);

  //// Redux state management
  const dispatch = useDispatch();

  /// 1 - destructing states
  const { language, stly, bootstrapp, mode } = useSelector(
    (state) => state.globle
  );
  const { arCss, enCss } = stly;
  const { rtlHREF, rtlIGT, ltrHREF, ltrIGT } = bootstrapp;

  /// 2 - conditional states
  const styles = mode === "light" ? lightStyles : darkStyles;
  const contentValue = useSelector((state) => state.globle.content);
  const content =
    language === "en" ? contentValue.English : contentValue.Arabic;


  //// store user tokenization && ensure authentication
  const storeToken = (token) => {
    localStorage.setItem("authToken", token);
  };
  const authenticateUser = () => {
    // Get the stored token from the localStorage
    const storedToken = localStorage.getItem("authToken");
    if (storedToken) {
      authService
        .verify()
        .then((response) => {
          // If the server verifies that JWT token is valid ✅
          const user = response.data;
          // Update state variables
          setIsLoggedIn(true);
          setIsLoading(false);
          setUser(user);
        })
        .catch((error) => {
          // If the server sends an error response (invalid token) ❌
          // Update state variables
          setIsLoggedIn(false);
          setIsLoading(false);
          setUser(null);
        });
    } else {
      // If the token is not available
      setIsLoggedIn(false);
      setIsLoading(false);
      setUser(null);
    }
  };
  const removeToken = () => {
    localStorage.removeItem("authToken");
  };
  const logOutUser = () => {
    // Upon logout, remove the token from the localStorage
    removeToken();
    authenticateUser();
  };
  // important -- * * --
  const callChangeDirection = () => {
    changeDirection(
      language,
      arCss,
      rtlHREF,
      rtlIGT,
      enCss,
      ltrHREF,
      ltrIGT,
      dispatch,
      changeLanguage
    );
  }

  const callFestDirection = () => {
    festDirection(
      language,
      arCss,
      rtlHREF,
      rtlIGT,
      enCss,
      ltrHREF,
      ltrIGT,
      dispatch,
      changeLanguage
    );
  }
  function changeTheme() {
    switchTheme(mode,dispatch,changeMode)
  }
  useEffect(() => {
   callFestDirection()
    festTheme(mode);
    authenticateUser();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [currentDate.week]);
  return (
    <AuthContext.Provider value={{
      isLoggedIn,
      isLoading,
      user,
      currentDate,
      language,
      content,
      mode,
      styles,
      changeDirection,
      callChangeDirection,
      storeToken,
      authenticateUser,
      logOutUser,
      useMediaQuery,
      changeTheme,
    }}>
      {props.children}
    </AuthContext.Provider>
  );
}

export { AuthProviderWrapper, AuthContext };