import React,{useState} from "react";
import "./TestFrom.scss";

const TestFrom = () => {
 const[firstName,setFirstName]=useState()
 const[lastName,setLastName]=useState()
 const[password,setPassword]=useState()
 const[Email,setEmail]=useState()
 
 const handFn =(e)=>{
     console.log(e.target.value)
     setFirstName(e.target.value)
 }
 const handLn =(e)=>{
  console.log(e.target.value)
  setLastName(e.target.value)
}

const handPs =(e)=>{
  console.log(e.target.value)
  setPassword(e.target.value)
}

const handEmail =(e)=>{
  console.log(e.target.value)
  setEmail(e.target.value)
}


const handFrom = (e)=>{
  e.preventDefault()

  const proFrom = {
    firstName,
    lastName,
    password,
    Email
  }
  console.log(proFrom)
  
}


  return (
    <form className="conten" onSubmit={handFrom}>
      <div className="firstName">
        <p>firstName</p>
        <input className='fn--ip' placeholder='firstName'onInput={handFn} ></input>
      </div>
      <div className="lastName">
      <p>LastName</p>
        <input className='ln--ip' placeholder='LastName' onInput={ handLn}></input>
      </div>
      <div className="password">
      <p>Password</p>
        <input type='Password' className='pw--ip' placeholder='Password' onInput={handPs}></input>
      </div>
      <div className="email">
      <p>Email</p>
        <input className='email--ip' placeholder='Email'onInput={handEmail}></input>
      </div>
      <div className="btn">
        <button>Đăng Ký</button>
      </div>
    </form>
  );
};

export default TestFrom;
