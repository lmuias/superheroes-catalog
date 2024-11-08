import { jsx as _jsx } from "react/jsx-runtime";
import { Outlet } from 'react-router-dom';
import style from './App.module.scss';
export const App = () => {
    return (_jsx("main", { className: style.main, children: _jsx(Outlet, {}) }));
};
