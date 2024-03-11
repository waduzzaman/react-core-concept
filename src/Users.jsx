import { useEffect, useState } from "react"
import User from "./User"

export default function Users(){

    const [users, setUsers]= useState([]) //array of users
    
    useEffect(()=>{
        fetch('https://jsonplaceholder.typicode.com/users')  
            .then(response => response.json()) 
            // .then(data=>console.log(data)) 
            .then (data => setUsers(data))  
            
        
    },[])
    //componentDidMount



    return(
        <div style={{ border: '2px solid green', borderRadius: '15px' }}>
        <h2>Users: {users.length}</h2>
        {users.map((user) => (
          <User key={user.id} user={user} />
        ))}
      </div>
        
    )

}