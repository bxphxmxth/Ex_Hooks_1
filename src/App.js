import logo from './logo.svg';
import Personnages from "./components/Personnages"
import './App.css';
import Articles from "./components/Articles"
import {useState} from "react";

function App() {

  let [data, setData] = useState({
    prenom: "naz",
    nom: "aala",
    age:24,
    commune:"laeken",
  });

  let rename = () =>{
    setData({
    prenom: "Kim",
    nom: "Kardashian",
    age:32,
    commune:"California",

    })
  }

  // deuxième state

  let [article] = useState([
    {marque:"audi", model:"a6"},
    {marque:"bmw", model: "m3"},
    {marque:"audi", model: "a4"},
    {marque:"bmw", model: "m5"},
    {marque:"audi", model: "a3"},
  ])

  return (
    <div className="App">
    
    <Personnages nasila={data} rename={rename}/>

    {/* boucle sur article*/}
    {article.map( (el, i) => {
        return <Articles key={i} donnee={el}/>
      })}
    </div>
  );
}

export default App;
