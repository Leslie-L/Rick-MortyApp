import { Result,Res } from "../interfaces/data";
import ButtonMore from "../templates/ButtonMore";
import getData from "../utils/getData";
let res= '';
let next =''
function addMore(result:Result[]) {
    return result.map(item=>
        `<a href="#/${item.id}/" class="characters-item">
            <img src=${item.image} alt="${item.name}">
        </a>`).join('')
}
async function  actionAdd() {
    const data = await getData(next);
    if(!(typeof data ==="string")){
        const content = document.querySelector('.characters') ||null 
        if(content){
            content.innerHTML+=addMore(data.data)
        }
        if(data.next){
            next  = data.next
        }
    }  
    
}
function controlFooter(){
    const bnt = document.querySelector('footer');
    if(bnt){
        bnt.innerHTML = ButtonMore()
        bnt.addEventListener('click',actionAdd)
    }
    
}
const Home = async()=>{
    const data = await getData();
    if(!(typeof data ==="string")){
        const result:Result[] = data.data ;
        if(data.next){
            next  = data.next
            controlFooter();
        }
        res = `
        <div class="characters">
            ${addMore(result)}
        </div>
        `;
        
            
        return res
        
    }
    return'';
}
export default Home;