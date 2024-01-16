import { Result,Res } from "../interfaces/data";
import getData from "../utils/getData";
const Home = async()=>{
    const data = await getData();
    if(!(typeof data ==="string")){
        const result:Result[] = data.data ;
        const res = `
        <div class="characters">
            ${result.map(item=>
                `<a href="#/${item.id}/" class="characters-item">
                    <img src=${item.image} alt="${item.name}">
                </a>`).join('')
            }
        </div>
        `;
        return res
        
    }
    return'';
}
export default Home;