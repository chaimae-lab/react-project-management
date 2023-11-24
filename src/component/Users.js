import React, { useEffect, useState } from 'react'


export default function Users() {
//array users
   const [users ,setUsers]  =       useState([]);

      ///////// //get users 
   
useEffect( ()=>{

  fetch('http://localhost:3000/user')
  //ktjib response 3la chkl object json 
.then(response => response.json())
   //j'ai donne le nom (data) au response 
.then(data=> { console.log(data)
            //maintenant array users contient la valeur de data  
            //item object
            
               setUsers(data)})  } ,       [])



      /////////create user 
     /////////update user 

     ////////delete user 

    
  
     


  return (
   <div className='container my-4'>
    

    <div className='d-flex justify-content-start'>
        <button type='button' className='btn btn-light'>
          Ajouter
        </button>
      </div>

      <table className="table my-1">
  <thead>
    <tr>
      <th scope="col">#</th>
      <th scope="col">name</th>
      <th scope="col">email</th>
      
      <th scope="col">action</th>
    </tr>
  </thead>



  <tbody>
    {users.map((item, index)=>(
    <tr>
      
      <td>{index}</td>
      <td>{item.nom}</td>
      <td>{item.email}</td>
   
      <td>        
           <i className="bi bi-pencil"></i> 
          <i className="bi bi-trash"> </i>   
                    
                      
      </td>

      
    </tr>))}
 
  </tbody>
</table>
</div>
  )

}
