const getHash=()=>{
   const res =  location.hash.slice(2,location.hash.length).toLocaleLowerCase() || '/';
   return res;
}
export default getHash;