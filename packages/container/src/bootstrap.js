import { jsx as _jsx } from "react/jsx-runtime";
import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
const element = document.getElementById("root");
const root = ReactDOM.createRoot(element);
root.render(_jsx(React.StrictMode, { children: _jsx(App, {}) }));
