export function userReduser(state,action){
    if(action.type==='setSearch'){
        if(action.payload.string===''){
            state.search = "ab"
        }else{
            state.search = action.payload.string
        }
    }
    if(action.type==='pre'){
        const totalCount = action.payload.totalCount
        if(state.page>1){
            state.page = state.page-1
        }
    }
    if(action.type==='next'){
        const totalCount = action.payload.totalCount
        if(state.page<Math.ceil(totalCount/state.limit)){
            state.page = state.page+1
        }
    }
    return  {...state}
}