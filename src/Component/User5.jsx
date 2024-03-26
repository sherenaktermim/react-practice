import { useEffect, useState } from "react";
import '../css/User5.css'
import User10 from "./User10";


const User5 = () => {

    const[users, setUsers]= useState([])

    useEffect (()=>{
      fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      .then(data =>setUsers (data))
    },[])


    return (
        <div className="card-container">
        { 
        users.map((user)=>(

        
               <User10 key={user.id}  user1={user}/>
            
        ))
        
    }
    </div>
    );
};

export default User5;






// const User2 = ({user}) => {
//     const[username, name, phone]=user
//     return (
       
//             <div className="cards">
//                    <h1 > {username} </h1>
//                    <h2> {name} </h2>
//                    <h3> {phone} </h3>
//                 </div>
       
//     );
// };

// export default User2;