import React from "react";

class Personnages extends React.Component{

     render(){
          return(
               <div>
                    <p>{this.props.nasila.prenom}</p>
               </div>
          )
     }
}

export default Personnages;