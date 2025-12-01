 export default function User({user}){

   console.log(user)
   const {name,email,website} = user
    return(

      <div className="card"> 
         <p>Name:{name}</p>
         <p>Email:{email}</p>
         <p>Website:{website}</p>
      </div>
    )
 }