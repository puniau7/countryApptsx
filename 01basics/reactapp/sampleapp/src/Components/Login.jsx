/* eslint-disable no-fallthrough */
import React, { useReducer } from "react";
import { login } from "../utils";
import { loginReducer, initialState } from "../loginReducer";
import { useDataLayerValue } from "../DataLayer";

// const initialState = {
//   data: {
//     user: "",
//     password: "",
//   },
//   loading: false,
//   isValid: false,
//   status: null,
//   message: null,
// };

function Login() {
  // const [state, dispatch] = useReducer(loginReducer, initialState);
  // const { username, password, error, isLoggedIn, isLoading } = state;
  const [
    { username, password, error, isLoggedIn, isLoading },
    dispatch,
  ] = useDataLayerValue();

  const onSubmit = async (e) => {
    e.preventDefault();
    dispatch({ type: "login" });
    try {
      await login({ username, password });
      dispatch({ type: "success" });
    } catch (error) {
      console.log(error);
      dispatch({ type: "error" });
    }
  };
  return (
    <div>
      {isLoggedIn ? (
        <>
          <h1> Welcome {username}!</h1>
          <button onClick={() => dispatch({ type: "logout" })}>Log Out</button>
        </>
      ) : (
        <form onSubmit={onSubmit}>
          {error && "username password error"}
          <input
            type="text"
            placeholder="username"
            value={username}
            name="user"
            onChange={(e) => {
              dispatch({
                type: "field",
                fieldName: "username",
                payload: e.currentTarget.value,
              });
            }}
          />
          <input
            type="password"
            placeholder="password"
            name="password"
            onChange={(e) => {
              dispatch({
                type: "field",
                fieldName: "password",
                payload: e.currentTarget.value,
              });
            }}
          />

          <button type="submit">
            {isLoading ? "Logging in..." : "Log In"}
          </button>
        </form>
      )}
    </div>
  );
}

export default Login;
