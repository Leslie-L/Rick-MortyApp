import { Nota,Res } from "../interfaces/data";

const API='https://rickandmortyapi.com/api/character/?name=';

const getCharacterByQuery=async(query:string,next?:string):Promise<Res|string>=>{
    const ref = next?next:API+query;
    try {
        const src = await fetch(ref)
        const data:Nota = await src.json();
        
        return {
            data:data.results,
            next: data.info?.next || undefined,
        }
        
    } catch (error) {
        return "error";
    }
}

export default getCharacterByQuery;
