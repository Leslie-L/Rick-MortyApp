import { Nota,Res } from "../interfaces/data";

const API='https://rickandmortyapi.com/api/character/';

const getData=async( id?: string):Promise<Res|string>=>{
    const link = id ? API+id+"/" : API;
    try {
        const src = await fetch(link)
        const data:Nota = await src.json();
        
        return {
            data:data.results,
            next: data.info?.next || undefined,
        }
        
    } catch (error) {
        return "error";
    }
}
export default getData