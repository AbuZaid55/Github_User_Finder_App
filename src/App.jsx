import { useEffect, useReducer } from "react"
import Home from "./Home.jsx"
import { userReduser } from "./Ruducer/action.js"
import {userContext} from './Context/user.js'
import {actionContext} from './Context/action.js'
import { fetchUser } from "./fetchUser/fetchUser.js"
import { setUser } from "./Ruducer/setUser.js"
function App() {
  const [action,actionDispatch] = useReducer(userReduser,{search:"ab",page:1,limit:20})
  const [users,userDispatch] = useReducer(setUser,{totalCount:0 , items:[]})
  useEffect(()=>{
    (async()=>{
      const {totalCount,items} = await fetchUser(action.search,action.page,action.limit)
      userDispatch({type:"setUsers",payload:{totalCount:totalCount,items:items}})
    })()
  },[action])
  return (
    <userContext.Provider value={{users}}>
      <actionContext.Provider value={{action,actionDispatch}}>
        <Home/>
      </actionContext.Provider>
    </userContext.Provider>
  )
}

export default App
