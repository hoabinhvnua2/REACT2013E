import React,{useState} from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

const Fromtest = () => {
    const [email,setEmail] = useState();
    const [password,setPassword] = useState();
    const [hand,setHand] = useState([]);

    const handemail =(e)=>{
     
       
        const { value } = e.target;
        setEmail(value);
     
    }
    const handpassword =(e)=>{
        const {value} = e.target;
        setPassword(value);
        
    }
    const hando =(e)=>{
      const { value } = e.target;
     
     setHand(value)
       
       
        
    }


  const checkFrom = (e) => {
      e.preventDefault()
     
      const hienThi = {
          email,
          password
      };
      console.log(hand[0])
  
  };

  return (
    <div>
      <Form onSubmit={checkFrom}>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control type="email" placeholder="Enter email" onInput ={hando} />
          <Form.Text className="text-muted">
            We'll never share your email with anyone else.
          </Form.Text>
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control type="password" placeholder="Password"  onInput = {hando}/>
        </Form.Group>

        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
    </div>
  );
};

export default Fromtest;
