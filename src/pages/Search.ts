import { Result} from "../interfaces/data";
import ButtonMore from "../templates/ButtonMore";
import getCharacterByQuery from "../utils/getCharactersByQuery";
import getHash from "../utils/getHash";
let res= '';
let next =''
function addMore(result:Result[]) {
    return result.map(item=>
        `<a href="#/${item.id}/" class="characters-item">
            <img src=${item.image} alt="${item.name}">
        </a>`).join('')
}
async function  actionAdd2() {
    const data = await getCharacterByQuery("query",next);
    if(!(typeof data ==="string")){
        const content = document.querySelector('.characters') ||null 
        if(content){
            content.innerHTML+=addMore(data.data)
        }
        if(data.next){
            next  = data.next
        }else{
            const bnt = document.querySelector('footer');
            if(bnt)
            bnt.innerHTML=''
        }
    }  
    
}
function controlFooter(){
    const bnt = document.querySelector('footer');
    if(bnt){
        bnt.innerHTML = ButtonMore()
        bnt.addEventListener('click',actionAdd2)
    }
    
}
const Search= async()=>{
    const queryComplete = await getHash()
    const query = queryComplete.substring(7,queryComplete.length-1)
   
    const data = await getCharacterByQuery(query);
    if(!(typeof data ==="string")){
        const result:Result[] = data.data ;
        if(data.next){
            next  = data.next
            controlFooter();
        }
        res = `
        <h1 class="query"> Search 🔍: ${query}</h1>
        <div class="characters">
            
            ${addMore(result)}
        </div>
        `;
        
            
        return res
        
    }
    return'<h1>This is search</h1>';
}
export default Search;