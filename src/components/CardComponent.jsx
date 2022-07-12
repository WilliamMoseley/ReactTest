import { useEffect, useState } from "react"
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Heading from "./Heading";
import SubHeading from "./SubnHeading";
import InputComponent from "./InputComponent";
import ButtonComponent from "./ButtonComponent";

const CardComponent = ({backgroundColor, setBackgroundColor}) => {
  const [form, setForm] = useState({
    name: "",
    surname: "",
    email: "",
    age: "",
    color: ""
  })
  const [disable, setDisable] = useState(true);

  const handleCheck = () => {
    toast('Receive the notification')
  }

  const handleCancel = (e) => {
    e.preventDefault();
    setForm({
      name: "",
      surname: "",
      email: "",
      age: "",
      color: ""
    })
  }

  useEffect(() => {
    if(form.name != "" && form.age != "" && form.color != "" && form.surname != "" && form.email != "") {
      setDisable(false)
    }
  }, [form])

  const handleOk = (e) => {
    e.preventDefault();
    let color = "#" + Math.floor(Math.random()*16777215).toString(16);
    alert(color)
    setBackgroundColor(color)
    setForm({
      name: "",
      surname: "",
      email: "",
      age: "",
      color: ""
    })
  }

  return (
    <div>
      {console.log(form)}
      <div className='card-style' style={{ width: "18rem", background: backgroundColor}}>
          <Heading />
          <form>
              <SubHeading />
            <div>
              <InputComponent id={0} label="name" placeholder="name" pattern="[a-zA-Z]+" value={form.name} onChange={e => {setForm({...form, name: e.target.value})}}/>
              <InputComponent id={1} label="surname" placeholder="surname" pattern="[a-zA-Z]+" value={form.surname} onChange={e => {setForm({...form, surname: e.target.value})}} />
              <InputComponent id={2} label="email" placeholder="email" type="email" value={form.email} onChange={e => {setForm({...form, email: e.target.value})}}/>
              <InputComponent id={3} label="age" placeholder="age" type="text" pattern="^[1-9][0-9]*$" value={form.age} onChange={e => {setForm({...form, age: e.target.value})}}/>
              <InputComponent id={4} label="favourite color" placeholder="favourite color" pattern="[a-zA-Z]+" value={form.color} onChange={e => {setForm({...form, color: e.target.value})}}/>
            </div>
            <div>
              <label>Male</label>
              <input type="radio" name="radio"/>
              <label>Female</label>
              <input type="radio" name="radio"/>
            </div>
            <div>
              <label>Receive the notification</label>
              <input type="checkbox" onChange={handleCheck}/>
            </div>

            <ButtonComponent color={"yellow"} backgroundColor={"green"} buttonText={"OK"} disabled={disable} onClick={handleOk} />
            <ButtonComponent color={"white"} backgroundColor={"red"} buttonText={"Cancel"} onClick={handleCancel} />
          </form>
      </div>
      <ToastContainer />
    </div>
  );
};

export default CardComponent;
