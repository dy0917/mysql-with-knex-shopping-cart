import { createContext, useEffect, useReducer } from "react";
import {
  getLoginedUser,
} from "../API/authAPI";

export const AuthContext = createContext();

function reducer(state, action) {
  if (action.type === "logined") {
    if (action.payload.accessToken) {
      console.log("asdfasdf", action.payload);
      sessionStorage.setItem("accessToken", action.payload.accessToken);
    }
    console.log("action.payload.refreshToken", action.payload.refreshToken);
    if (action.payload.refreshToken)
      sessionStorage.setItem("refreshToken", action.payload.refreshToken);
    return { ...state, ...action.payload, isLogin: true };
  }
  if (action.type === "logout") {
    sessionStorage.removeItem("accessToken");
    sessionStorage.removeItem("refreshToken");
    return { user: null, token: null };
  }
  return state;
}

export const AuthProvider = (props) => {
  const [auth, dispatch] = useReducer(reducer, { user: null, token: null });

  useEffect(() => {
    const autoLogin = async () => {
      const accessToken = sessionStorage.getItem("accessToken");
      if (accessToken) {
        const user = await getLoginedUser();
        dispatch({ type: "logined", payload: user });
      }
    };
    autoLogin();
  }, []);

  return (
    <AuthContext.Provider value={{ auth, authDispatch: dispatch }}>
      {props.children}
    </AuthContext.Provider>
  );
};
