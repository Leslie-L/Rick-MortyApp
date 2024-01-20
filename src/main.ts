import './style.css'
//setupCounter(document.querySelector<HTMLButtonElement>('#counter')!)

import route from "./routes";

window.addEventListener('load',route);
window.addEventListener('hashchange',route);
window.addEventListener('submit',(e)=>{
    e.preventDefault();
    const query = e.target.search.value;
    e.target.search.value="";
    location.hash='/search/'+query+"/";
})