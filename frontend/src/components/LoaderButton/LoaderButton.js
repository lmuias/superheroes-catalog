import { jsx as _jsx } from "react/jsx-runtime";
import style from './LoaderButton.module.scss';
export const LoaderButton = () => (_jsx("button", { type: 'button', className: style.button, "data-cy": "Loader", children: _jsx("div", { className: style.content }) }));
