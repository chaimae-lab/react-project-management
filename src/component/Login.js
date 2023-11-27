import React , { useState }  from 'react'
import axios from 'axios';

 
import { Link } from 'react-router-dom';

export default function Login() {
 
/*useState definit l value de champs de  formulaire , ex :au debut(name est vide ) 
   et apres l'ecriture(setName)permet de modifier le valeur de name*/


const [email, setEmail] = useState('')
const  [password, setPassword] = useState('')








//function submit ,enregister 


function  handleSubmit(e){

    e.preventDefault() ;

    

    //api 

       // Ajouter une condition  obligatoire pour déclencher l'appel à l'API
       
       // Ajouter une condition  obligatoire pour déclencher l'appel à l'API
if (

  password.length < 8 

  
   ) {
 
 
    axios.post('https://reqres.in/api/login' ,{
 
    email:email,
    password:password,
   
     })
    .then(function (response) { 
       let token = response.data.token;
        //on stocke token in local storage
        localStorage.setItem("token" ,token)
        //use state  
       setEmail('');
       setPassword('');
        console.log(response);
        console.log(response.data);
        console.log(response.data.token);
        //aller au page home 
        window.location.pathname="/user"
       
       
     })
     .catch(function (error) {
       console.log(error);
       console.log("email ou password n'existe pas ");
       alert("Email or password does not exist")
     });
   
 }else {
 console.log("error")
 }
 
  
          
    
    }
      
  

     

      
      
      
    




  return (
    <div  className="login-box">
      <form  onSubmit={ handleSubmit}>
      
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
<Link to="/header">Sign-up </Link>
</p>


      </form>

    </div>




  )
}
