import React from 'react'

export default function SignUp() {


//permet de bloquer l'enregistrement de donnees de register  ,pour le  verifier ,, e:event
function Submit(e){
    e.preventDefault() ;
}



  return (
    <div  className="login-box">
      <form onSubmit={Submit}>
      <h2> Form</h2>
      <div className="user-box">   
<input id="name" type="text" placeholder="name" name="" />    
<br/>
    </div>
      
    <div className="user-box">
<input id="email" type="email" placeholder="email" name=""  required/>   
<br/>
</div>

<div className="user-box">
<input id="password" type="password" placeholder="password" name=""  />   
<br/>
</div>

<div className="user-box">
<input id="repeat" type="password" placeholder="RepeatPassword" name=""  />   
<br/>
</div>

<button  type="submit"> Register </button>



      </form>

    </div>




  )
}
