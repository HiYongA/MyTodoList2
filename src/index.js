import React from "react";
import ReactDOM from "react-dom/client";
import "./styles/reset.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import store from "./redux/config/configStore";
import { Provider } from "react-redux";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  // App컴포넌트가 Provider 지배권 안으로 들어오게 된다.
  // 이제 App 컴포넌트 + 하부 컴포넌트 모두 store를 사용할 수 있다.
  <Provider store={store}>
    <App />
  </Provider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
