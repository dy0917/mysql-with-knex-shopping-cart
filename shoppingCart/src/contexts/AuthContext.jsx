import { createContext, useEffect, useReducer } from "react";
import { getLoginedUser } from "../API/authAPI";

export const AuthContext = createContext();

function reducer(state, action) {
  if (action.type === "logined") {
    console.log("asdfasdf");
    if (action.payload.token){
      sessionStorage.setItem("token", action.payload.token);
    }
    return { ...state, ...action.payload, isLogin: true };
  }
  if (action.type === "logout") {
    sessionStorage.removeItem("token");
    return { user: null, token: null };
  }
  return state;
}

export const AuthProvider = (props) => {
  const [auth, dispatch] = useReducer(reducer, { user: null, token: null });

  useEffect(() => {
    const autoLogin = async () => {
      const token = sessionStorage.getItem("token");
      if (token) {
        const user = await getLoginedUser();
        console.log('user', user)
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
