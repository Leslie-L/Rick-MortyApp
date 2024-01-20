const getResolveRoutes = (route:string)=>{
    if(route.length <= 3){
        const valid = route==='/' || route===''? '/':'/:id'
        return valid
    }
    if(route.startsWith('search')){
        return '/search'
    }
    return "/"+route;
}
export default getResolveRoutes;