
import getCharaterById from "../utils/getCharacterById";
import getHash from "../utils/getHash";

const Character = async ()=>{
    const footer = document.querySelector('footer')
    if(footer){
        if(!footer.classList.contains('hidden'))
            footer.classList.add('hidden')
    }
    const id = getHash()
    const info = await getCharaterById(id);
    if(info &&  typeof info !== 'string'){
    const view =`
        <div class="character">
            <article class="character-img">
                <img src=${info.image} alt=${info.name}>
            </article>

            <article class="character-card">
                <div class="character-card__container">
                    <h2>${info.name}</h2>
                    <div class="character-card__info">
                        <h3><b>Status:</b>  ${info.status}${info.status==='Alive'?'🟢':'🔴'}</h3>
                        <h3><b>Species:</b>  ${info.species}</h3>
                        <h3><b>Gender:</b>  ${info.gender}</h3>
                        <h3><b>Origin:</b>  ${info.origin.name}</h3>
                        <h3><b>Last Location:</b>  ${info.location.name}</h3>
                    </div>
                </div>

            </article>
        </div>
    `;
        return view
    }
    return "";
} 
export default Character;