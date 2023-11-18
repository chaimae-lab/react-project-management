import React , { useState }  from 'react'
import axios from 'axios';
import { Link } from 'react-router-dom';
export default function Login() {
 
/*useState definit l value de champs de  formulaire , ex :au debut(name est vide ) 
   et apres l'ecriture(setName)permet de modifier le valeur de name*/


const [email, setEmail] = useState('')
const  [password, setPassword] = useState('')


//etat qui realise des condition si el est true ,une fois que je clique enregister sa valeur change au true 
const [ accept, setAccept ]= useState(false)
// Nouvel état pour vérifier si l'email existe
const [emailExists, setEmailExists] = useState(false); 





//checkEmailExists function pour verifier si l'email deja exist 
const checkEmailExists = async () => {
  try {
    const response = await axios.get(`https://jsonplaceholder.typicode.com/users?email=${email}`);
    setEmailExists(response.data.length > 0); 
    console.log("get tous les emails");
  } catch (error) {
    console.error('problem:', error);
  }
};



//function submit ,enregister 


function Submit(e){

    e.preventDefault() ;

    //une fois je clique enregistrer accept=true , alors realiser les  condition
    setAccept(true);

    //api 

        // Vérifier l'existence de l'e-mail avant d'appeler l'API
     checkEmailExists();

  

       // Ajouter une condition  obligatoire pour déclencher l'appel à l'API
  if (
 
    password.length < 8 &&
    !emailExists
    
     ) {


      axios.post('https://jsonplaceholder.typicode.com/users' ,{

      email:email,
      username:password,
     
       })
      .then(function (response) {
         console.log(response);
       })
       .catch(function (error) {
         console.log(error);
       });
     
}else {
  console.log("error")
}
  
    
    
      
      
      
    
}



  return (
    <div  className="login-box">
      <form  onSubmit={Submit}>
      
    <div className="user-box">
<input id="email" type="email" placeholder="email" name=""  value={email} onChange={(e)=>setEmail( e.target.value)} required/>   

<br/>
</div>

<div className="user-box">
<input id="password" type="password" placeholder="password" name=""   value={password} onChange={(e)=>setPassword( e.target.value)} />   
 {password.length >8 && <h5 className ="error">Le mot de passe doit contenir  moins de 8 caractères.</h5>}
<br/>
</div>


<button  type="submit"> Register </button>
<p className='account'>Don't have an account
<Link to="/register">Sign-up </Link>
</p>


      </form>

    </div>




  )
}
