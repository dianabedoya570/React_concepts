import React, { useState } from "react";

import Input from "./components/class/Input";

import "./App.css";

function App() {
  const [name, setName] = useState("default"); //Programacion Funcional hooks
  const [lastName, setLastName] = useState("default");
  //  const handleChange = (event) => {
  //    setState(event.target.value);
  //  };
  return (
    <div
      className="App"
      style={{
        color: "red",
        textAlign: "center",
      }}
    >
      Nombre: <Input placeholder="Escriba aqui Nombre" setValue={setName} />{" "}
      <br />
      Apellido:{" "}
      <Input placeholder="Escriba aqui Apellido" setValue={setLastName} />{" "}
      <br />
      Edad: <Input placeholder="Escriba aqui edad" type="number" /> <br />
      <h1>Nombre:{name}</h1>
      <h1>Apellido:{lastName}</h1>
    </div>
  );
}

export default App;
