import './style.css'
//setupCounter(document.querySelector<HTMLButtonElement>('#counter')!)

import route from "./routes";

window.addEventListener('load',route);
window.addEventListener('hashchange',route);