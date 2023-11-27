import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import { Modal, Button ,Form} from 'react-bootstrap';


import axios from 'axios';

export default function Users() {


//form
  const [email, setEmail] = useState('')
  const  [name, setName] = useState('')

// Utilisation de l'état local pour gérer l'affichage du modal
  const [show, setShow] = useState(false);
  

//array vide users mni kndiro setUser kn7oto fih data de backend 
  const [users ,setUsers]  =       useState([]);
     
/*au debut=0 
sans role pour refrecher page apres suppresion ,ajout.
si sa valeur change appel au useEffect pour get les utilisateurs (refreche),
sa valeur change lorsque je clique sur button delele*/
  const [runUseEffect ,setRun] = useState(0);

  


// Fonction pour afficher le modal
const handleShow = () => setShow(true);

// Fonction pour fermer le modal
const handleClose = () => setShow(false);




///////// //get users 
   
useEffect( ()=>{

  fetch('https://jsonplaceholder.typicode.com/users')
  //ktjib response 3la chkl object json 
.then(response => response.json())
   //j'ai donne le nom (data) au response 
.then(data=> { console.log(data)
            //maintenant array users contient la valeur de data  
            //item object backend 
                                          //pour appeler use effect si la valeur runUseEffect change de 0
               setUsers(data)})  } ,       [runUseEffect])


               
               
//////////delete user 

async function  deleteUser(id){
      /*on utilise async , try pour ne pa passer au ligne 2 sauf si ligne 1 est execute */
  try{  
const res = await axios.put('http://localhost:3000/user/${id}');
   //je change la valeur de runUseeffect si l'utilisateur est supprimer de base de donnes
    if (res.status===200) {
         setRun((prev)=>prev+1);
    
    }

    }catch{
         console.log("error")
     }

}
              

               
/////////  create user 


const handleSave = () => {
  
  fetch('https://jsonplaceholder.typicode.com/users', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      email,
      name,
    }),
  })
    .then(response => response.json())
    .then(data => {
      console.log('Nouvel utilisateur ajouté :', data);
      
      // Fermer le modal après avoir effectué les actions nécessaires
      handleClose();

       // Incrémentez runUseEffect pour déclencher un nouveau chargement des utilisateurs,ajouter au table
       setRun(prev => prev + 1);
       setName('');
       setEmail('');
    })
    .catch(error => {
      console.error('Erreur lors de l\'ajout de l\'utilisateur :', error);
     
    });
};

     /////////update user 

     ////////delete user 

    
  
     


  return (
   <div className='container my-4'>
    

    <div className='d-flex justify-content-start'>
        <button onClick={handleShow} type='button' className='btn btn-light'>
          Ajouter
        </button>
      </div>

      <table className="table my-1">
  <thead>
    <tr>
 
      <th class="col-5 " scope="col">name</th>
      <th class="col-5 " scope="col">email</th>
      
      <th class="col-5 " scope="col">action</th>
    </tr>
  </thead>



  <tbody>
    {users.map((item, index)=>(
    <tr>
      
      
      <td>{item.name}</td>
      <td>{item.email}</td>
   
      <td>        
          
      <Link to={`/${item.id}`}> <i className="bi bi-pencil"></i>  </Link>
           
           <i  onClick={()=>deleteUser(item.id)} className="bi bi-trash"> </i>        
                      
      </td>

      
    </tr>))}
 
  </tbody>
</table>







      {/* Modal */}
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>New User</Modal.Title>
        </Modal.Header>
        <Modal.Body>
      
        <Form>
            <Form.Group controlId="formBasicEmail">
              <Form.Label>Email address</Form.Label>
              <Form.Control
                type="email"
                placeholder="Enter email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </Form.Group>

            <Form.Group controlId="formBasicName">
              <Form.Label>Name</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter name"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </Form.Group>
          </Form>


        </Modal.Body>
        <Modal.Footer>
          {/* Bouton pour fermer le modal */}
          <Button variant="secondary" onClick={handleClose}>
            Fermer
          </Button>
          {/* Bouton pour ajouter */}
          <Button variant="secondary" onClick={handleSave}>
            Enregistrer 
          </Button>
        </Modal.Footer>
      </Modal>
   
</div>






  )

}
