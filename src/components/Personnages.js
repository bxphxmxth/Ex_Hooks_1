import React from "react";

class Personnages extends React.Component{

     render(){
          return(
               <div>
                    <p>Je m'appelle {this.props.nasila.prenom} {this.props.nasila.nom} , j'ai {this.props.nasila.age} ans et j'habite {this.props.nasila.commune}   </p>
                    <button onClick={this.props.rename}>Rename</button>
               </div>
          )
     }
}

export default Personnages;