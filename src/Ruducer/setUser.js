export function setUser(state,action){
   if(action.type==='setUsers'){
    state.totalCount = action.payload.totalCount 
    state.items = action.payload.items
   }
    return  {...state}
}