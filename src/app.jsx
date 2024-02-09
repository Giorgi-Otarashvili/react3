import { useEffect,  useState } from "react"

function generateUsers () {
return   ["user1","user2","user3","user4","user5","user6","user7","user8","user9","user10"]
}



const AppComponent = () => {

const [users , setUsers] = useState(()=> generateUsers())

function deleteUser (button) {
    if (button) {
        const updatedUsers = [...users]
        const randomIndex = Math.floor(Math.random()*updatedUsers.length)
        updatedUsers.splice(randomIndex, 1)
        setUsers(updatedUsers)
        // usersLeft = updatedUsers.length
        // document.head.title = "left" + usersLeft + "user"
}
}

useEffect (()=> {
    console.log("component mounted")
},[])


return (
<div>
    <ul>
          {users.map((user, index) => (
          <li key={index}>{user}</li>
        ))}
    </ul>
    <button onClick={deleteUser}>delete user</button>
</div>
)
}




export default AppComponent

