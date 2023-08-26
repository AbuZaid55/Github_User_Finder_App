import { useContext } from "react"
import { actionContext } from "./Context/action.js"
import { userContext } from "./Context/user"
import useDebounce from "./useDebounce/useDebounce.js"
const Home = () => {

  const { action, actionDispatch } = useContext(actionContext)
  const { users } = useContext(userContext)
  const debounceCallBack = useDebounce((e) => { actionDispatch({ type: "setSearch", payload: { string: e.target.value } }) })
  return (
    <div>
      <div className='my-10 flex items-center justify-center'><input onChange={debounceCallBack} className='px-2 py-3 outline-none border-2 border-gray-700 max-w-[30rem] w-full' type="text" placeholder='Enter User Name' /></div>
      <div className='flex flex-wrap justify-evenly min-h-[70vh]'>
        {
          users.items.map((user) => {
            return <div key={user.id} className=' w-72 h-72 relative m-4 shadow-2xl rounded-xl overflow-hidden hover:scale-110 transition-all'>
              <img className='w-full h-full' src={user.avatar_url} alt="UserPic" />
              <p className='absolute bottom-5 left-0 bg-white px-2 py-1 rounded-r-md font-semibold'>{user.login}</p>
            </div>
          })
        }
      </div>

      <div className='flex items-center justify-between m-4'>
        <button className="bg-gray-700 text-white border-2 border-white px-5 py-3 text-xl" onClick={() => { actionDispatch({ type: "pre", payload: { totalCount: users.totalCount } }) }}> &#8592;</button>
        <div className='flex bg-gray-700 text-white px-5 py-3 text-xl border-2 border-white rounded-full'>
          <p>{action.page}</p>
          <span>/</span>
          <p>{Math.ceil(users.totalCount / action.limit)}</p>
        </div>
        <button className="bg-gray-700 text-white border-2 border-white px-5 py-3 text-xl" onClick={() => { actionDispatch({ type: "next", payload: { totalCount: users.totalCount } }) }}> &#8594;</button>
      </div>
    </div>
  )
}

export default Home
