import React from "react";

class Article extends React.Component{

     render(){
          return(
               <div>
               <h1>Marque : {this.props.donnee.marque}, model :{this.props.donnee.model}</h1>  
             </div>
          )
     }
}

export default Article;