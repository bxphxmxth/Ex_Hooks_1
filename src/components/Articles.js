import React from "react";

function Articles({donnee}) {
     return (
         <div>
           <h1>Marque : {donnee.marque}, model :{donnee.model}</h1>  
         </div>
     )
 }

export default Articles;