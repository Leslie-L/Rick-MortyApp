const getResolveRoutes = (route:string)=>{
    if(route.length <= 3){
        const valid = route==='/' || route===''? '/':'/:id'
        return valid
    }
    return "/"+route;
}
export default getResolveRoutes;