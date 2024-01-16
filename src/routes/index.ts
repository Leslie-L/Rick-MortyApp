import Header from "../templates/Header";
import ButtonMore from "../templates/ButtonMore";
import Character from "../pages/Character";
import Home from "../pages/Home";
import NotFound from "../pages/NotFound";
import getHash from "../utils/getHash";
import getResolveRoutes from "../utils/getResolveRoutes";


const routes:{[index: string]: ()=>string}={
    "/": Home,
    "/:id":Character,
}
const route =async ()=>{
    const header = null || document.querySelector('header');
    const content = null || document.querySelector('.container')
    if(header)
        header.innerHTML = await Header()

    const hash = getHash();
    const validate = getResolveRoutes(hash);
    const render =  routes[validate] ? routes[validate] : NotFound;
    if(content)
        content.innerHTML = await render();
}
export default route;