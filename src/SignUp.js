import React , { useState }  from 'react'
import axios from 'axios';

export default function SignUp() {

/*useState definit l value de champs de  formulaire , ex :au debut(name est vide ) 
   et apres l'ecriture(setName)permet de modifier le valeur de name*/


const [email, setEmail] = useState('')
const  [password, setPassword] = useState('')

const [emailExists, setEmailExists] = useState(false); 



const checkEmailExists = async () => {
  try {
    const response = await axios.get(`'https://reqres.in/api/login?email=${email}`);
    setEmailExists(response.data.length > 0); 
    console.log("get tous les emails");
  
  
  } catch (error) {
    console.error('problem:', error);
  }
};



//function submit ,enregister 


function Submit(e){

    e.preventDefault() ;



  
    checkEmailExists();

  

    // Ajouter une condition  obligatoire pour déclencher l'appel à l'API
if (

 password.length < 8 &&
 !emailExists
 
  ) {


   axios.post('https://reqres.in/api/login' ,{

   email:email,
   password:password,
  
    })
   .then(function (response) {
      console.log(response);
      console.log("compte creer");
    })
    .catch(function (error) {
      console.log(error);
      console.log(error);
      
    });
  
}else {
console.log("email deja existe")
}

 
    
      
      
      
    
}



  return (
    <div  className="login-box">
      <form onSubmit={Submit}>
      <h4>Create a new account</h4>
    <div className="user-box">
<input id="email" type="email" placeholder="email" name=""  value={email} onChange={(e)=>setEmail( e.target.value)} required/>   

<br/>
</div>

<div className="user-box">
<input id="password" type="password" placeholder="password" name=""   value={password} onChange={(e)=>setPassword( e.target.value)} />   
 {password.length >8 && <h5 className ="error">Le mot de passe doit contenir  moins de 8 caractères.</h5>}
<br/>
</div>



<button style={{ marginBottom: '10px' }} type="submit"> Register </button>



      </form>

    </div>




  )
}
