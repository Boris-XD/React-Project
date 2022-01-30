import { useState } from "react";
import "./style.css";
import Form from "./components/Form";
import Input from "./components/Input";
import Select from "./components/Select";

function App() {

  const [ data, setData] = useState({ img:"", head:"", resp:""});

  let [ contador, setContador] = useState(0);

  const onChanges = event => {
    const value = event.target.value;
  
    console.log(data);
    console.log(event.target.value);
    const total = contador + 1;
    setContador(total);
    setData({
      ...data,
      [event.target.name] : value
    });
  };

  const sendInformation = ( event ) => {
    event.preventDefault();
    console.log(data);
  }

  return (
    <div>
      <Form submit = { sendInformation }>
        
      <Select
          id = "img"
          name = "img"
          label = "Imagen"
          change = { onChanges} 
        />
        <Input
          name = "head"
          id = "head"
          content = "title"
          change = { onChanges }
        /><br/>
        <Input
          name = "resp"
          id = "resp"
          content = "description"
          change = { onChanges }
        /><br/>
        <button >Boton</button>
      </Form>
      <div className="meme">
        <span>{data.head}</span>
        <span>{data.resp}</span>
        <img src = { "/img/" + data.img + ".jpg" } alt=""></img>
      </div>
      <span>{contador}</span>
    </div>
  );
}

export default App;
