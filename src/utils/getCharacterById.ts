import { Result } from "../interfaces/data";

const getCharaterById = async (id:string):Promise<string|Result> =>{
    const API = `https://rickandmortyapi.com/api/character/${id}`
    try {
        const src = await fetch(API);
        const data= await src.json();
        return data;
        
    } catch (error) {
        return "Error"
    }
}
export default getCharaterById;