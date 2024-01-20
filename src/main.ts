import './style.css'
//setupCounter(document.querySelector<HTMLButtonElement>('#counter')!)

import route from "./routes";

window.addEventListener('load',route);
window.addEventListener('hashchange',route);
window.addEventListener('submit',(e)=>{
    if(e){
        e.preventDefault();
        const form = e.target as HTMLFormElement | null;
        if (form) {
            const queryInput = form.elements?.namedItem('search') as HTMLInputElement | null;
            
            if (queryInput) {
                const query = queryInput.value;
                queryInput.value = "";
                location.hash = '/search/' + query + "/";
            }
        }
    
    }
    
})