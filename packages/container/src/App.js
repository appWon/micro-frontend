import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import React from 'react';
const ServiceApp = React.lazy(() => import('remote_service1/App'));
function App() {
    return (_jsxs("div", { children: [_jsx("div", { children: "container" }), _jsx(React.Suspense, { fallback: _jsx("div", { children: "\uB85C\uB529\uC911" }), children: _jsx(ServiceApp, {}) })] }));
}
export default App;
