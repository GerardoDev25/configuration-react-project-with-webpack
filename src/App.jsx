import { useState } from "react";
import "./App.css";
import "./App.scss";
import icon from "./favicon.ico";
const App = () => {
   const [name, setname] = useState("");

   const handleName = ({ target }) => {
      setname(target.value);
   };

   return (
      <div className="app">
         <h1>hola React</h1>
         <h2>goodbye world yet dd</h2>
         <img src={icon} alt="iconpp" />
         <p>{name}</p>
         <div>
            <label htmlFor="name"></label>
            <input
               type="text"
               id="name"
               value={name}
               onChange={handleName}
            />
         </div>
      </div>
   );
};

export default App;
