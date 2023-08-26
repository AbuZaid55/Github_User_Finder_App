export async function fetchUser (search='ab',page=1,limit=20){
    try {
        const response = await fetch(`https://api.github.com/search/users?q=${search}&page=${page}&per_page=${limit}`,{method:"GET"})
        const userData = await response.json()
        if(userData.total_count && userData.items){
            return {totalCount:userData.total_count, items:userData.items}
        }else{
            return {totalCount:0 , items:[]}
        }
    } catch (error) {
        console.log(error)
        return {totalCount:0 , items:[]}
    }
}