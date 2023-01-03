import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import Table from 'react-bootstrap/Table';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import User from '../api/User';

const UUID = require('uuid-int');
const id = 0;
const generator = UUID(id);


export const CreateUserForm =({userDataToList}) => {
  
  const navigate = useNavigate();
  const nameState = {
    first:"",
    last:"",
    middle:"",
  };
  const userPhoneState = {
    id:"",
    type:"",
    number:""
  };
  const userEmailState = {
    id:"",
    type:"",
    address:""
  };

  const [name, setName] = useState(nameState);
  const [userName, setuserName] = useState("");
  const [userPhone, setuserPhone] = useState({});
  const [userEmail, setuserEmail] = useState({});
  const [userPhones, setuserPhones] = useState([]);
  const [userEmails, setuserEmails] = useState([]);

  const nameChangeHandler = (e) => {
    setName({...name, [e.target.name]: e.target.value});
    console.log(name);
 }
  
  const addPhoneNumber = (e) =>{
    alert("phone number added");
    setuserPhones([...userPhones,userPhone]);
    setuserPhone(userPhoneState);
    e.preventDefault();
  }

  const addEmail = (e) =>{
    alert("email added");
    setuserEmails([...userEmails,userEmail]);
    setuserEmail(userEmailState);
    e.preventDefault();
  }

  const addUser = (e) => {
    e.preventDefault();
    const uuid = generator.uuid();
    console.log(uuid);
    var data ={
      id:uuid,
      username:userName,
      name:name,
      contactNumber: userPhones,
      email:userEmails};
    console.log(JSON.stringify(data));
    User.registerUser(data);
    userDataToList();
    navigate("/");
  }

  const RemoveEmail= (id) => {
    if (window.confirm('Do you want to remove?')) {
      try{
        console.log(typeof(userEmails));
        const index = userEmails.findIndex(prop => prop.id ===id)
        userEmails.splice(index,1);
        navigate("/");
      }catch(e){
        alert(e);
      }
    }
  }

  const RemoveNumber= (id) => {
    if (window.confirm('Do you want to remove?')) {
      try{
        console.log(typeof(userPhones));
        const index = userPhones.findIndex(prop => prop.id ===id)
        userPhones.splice(index,1);
        navigate("/");
      }catch(e){
        alert(e);
      }
    }
  }

  return(
    <div className="container mt-3">
      <div className="card">
        <div className="card-body">
        <Form>
          <Row>
            <Col sm={12} lg={3}>
              <Form.Group className="input-group-sm mb-3" controlId="first">
                <Form.Label>First Name</Form.Label>
                <Form.Control 
                  className='xs-2 lg-2 md-2' 
                  type="text"
                  name="first"
                  placeholder="Enter First Name"
                  aria-label="First Name"
                  aria-describedby="first"
                  onChange={nameChangeHandler} />
              </Form.Group>
            </Col>
            <Col sm={12} lg={3}>
              <Form.Group className="input-group-sm mb-3" controlId="middle">
                <Form.Label>Middle Name</Form.Label>
                <Form.Control 
                  className='xs-2 lg-2 md-2' 
                  type="text"
                  name="middle"
                  aria-label="Middle Name"
                  aria-describedby="middle"
                  onChange={nameChangeHandler}
                  placeholder="Enter Middle Name" />
              </Form.Group>
            </Col>
            <Col sm={12} lg={3}>
              <Form.Group className="input-group-sm mb-3" controlId="last">
                <Form.Label>Last Name</Form.Label>
                <Form.Control 
                  className='xs-2 lg-2 md-2' 
                  type="text"
                  name="last"
                  aria-label="Last Name"
                  aria-describedby="last"
                  onChange={nameChangeHandler}
                  placeholder="Enter Last Name" />
              </Form.Group>
            </Col>
            <Col sm={12} lg={3}>
              <Form.Group className="input-group-sm mb-3" controlId="username">
                <Form.Label>Username</Form.Label>
                <InputGroup className="input-group-sm mb-3">
                  <InputGroup.Text id="username">@</InputGroup.Text>
                  <Form.Control
                    type="text"
                    name="username"
                    aria-label="User Name"
                    aria-describedby="username"
                    onChange={(e)=>{setuserName(e.target.value); console.log(userName)}}
                    placeholder="Enter username"
                  />
                </InputGroup>
              </Form.Group>
            </Col>
          </Row>
          <Row>
            <Col sm={12} md={6} className="square border border-1">
              <Row>
                <Form.Label>Email address</Form.Label>
                <Col lg={4}>
                  <Form.Group className="input-group-sm mb-3" controlId="emailType">
                      <InputGroup className="input-group-sm mb-3">
                        <InputGroup.Text id="basic-addon1">Type</InputGroup.Text>
                        <Form.Control
                        value={userEmail.type}
                        name="emailType"
                        aria-label="emailType"
                        aria-describedby="emailType"
                        onChange={(e)=>{
                          setuserEmail({
                            ...userEmail,
                            id:Date.now(),
                            type: e.target.value,
                            address: userEmail.address,
                          });
                          console.log(userEmail);
                      }}
                        className='xs-2 lg-2 md-2'
                        placeholder="Enter type of email"/>
                      </InputGroup>
                    </Form.Group>
                </Col>
                <Col lg={8}>
                  <Form.Group className="input-group-sm mb-3" controlId="email">
                    <InputGroup className="input-group-sm mb-3">
                      <InputGroup.Text id="basic-addon1">email</InputGroup.Text>
                      <Form.Control 
                      value={userEmail.address}
                      type="email"
                      name="email"
                      aria-label="email"
                      aria-describedby="email"
                      onChange={(e)=>{
                        setuserEmail({
                          ...userEmail,
                          id:Date.now(),
                          type: userEmail.type,
                          address: e.target.value,
                        });
                        console.log(userEmail);
                      }}
                      className='xs-2 lg-2 md-2'
                      placeholder="Enter email"/>
                      <Button variant="primary" type="submit" className='btn-sm' onClick={addEmail}>
                    Add
                  </Button>
                    </InputGroup>
                  </Form.Group>
                </Col>
              </Row>
              <Row>
                <Col>
                  <Table striped bordered hover responsive size={"sm"}>
                      <thead>
                          <tr>
                              <th width={'23%'}>Type</th>
                              <th width={'57%'}>Email</th>
                              <th width={'20%'} className="text-center">Action</th>
                          </tr>
                      </thead>
                      <tbody>
                          {userEmails && userEmails.length > 0 ?
                              userEmails.map(item => {
                                  return (
                                  <tr key={item.id}>
                                      <td>{item.type} </td>
                                      <td>
                                          {item.address}
                                      </td>
                                      <td className="d-flex justify-content-center">
                                      <button type="button" onClick={() => { RemoveEmail(item.id) }} className="btn btn-outline-danger btn-sm">Remove</button>
                                      </td>
                                  </tr>
                                  )
                              })
                              :
                              <tr>
                                  <td colSpan={4}>
                                      <center>No Data Available</center>
                                  </td>
                              </tr>
                          }
                      </tbody>
                  </Table>
                </Col>
              </Row>
            </Col>
            <Col sm={12} md={6} className="square border border-1">
              <Row>
                <Form.Label>Contact Number</Form.Label>
                <Col lg={4}>
                  <Form.Group className="input-group-sm mb-3" controlId="numberType">
                      <InputGroup className="input-group-sm mb-3">
                        <InputGroup.Text id="basic-addon1">Type</InputGroup.Text>
                        <Form.Control
                        value={userPhone.type}
                        name="numberType"
                        aria-label="numberType"
                        aria-describedby="numberType"
                        onChange={(e)=>{
                          setuserPhone({
                            ...userPhone,
                            id:Date.now(),
                            type: e.target.value,
                            number: userPhone.number,
                          });
                          console.log(userPhone);
                        }}
                        className='xs-2 lg-2 md-2'
                        placeholder="Enter type of email"/>
                      </InputGroup>
                    </Form.Group>
                </Col>
                <Col lg={8}>
                  <Form.Group className="input-group-sm mb-3" controlId="number">
                    <InputGroup className="input-group-sm mb-3">
                      <InputGroup.Text id="basic-addon1">Number</InputGroup.Text>
                      <Form.Control   
                      value={userPhone.number}
                      type="number"
                      name="number"
                      aria-label="number"
                      aria-describedby="number"
                      onChange={(e) =>{
                        setuserPhone({
                          ...userPhone,
                          id:Date.now(),
                          type: userPhone.type,
                          number: e.target.value,
                        });
                        console.log(userPhone);
                      }}
                      className='xs-2 lg-2 md-2'
                      placeholder="Enter contact number" />
                      <Button variant="primary" type="submit" className='btn-sm' onClick={addPhoneNumber}>Add</Button>
                    </InputGroup>
                  </Form.Group> 
                </Col>
              </Row>
              <Row>
                <Col>
                  <Table striped bordered hover responsive size={"sm"}>
                      <thead>
                          <tr>
                              <th width={'23%'}>Type</th>
                              <th width={'57%'}>Number</th>
                              <th width={'20%'} className="text-center">Action</th>
                          </tr>
                      </thead>
                      <tbody>
                          {userPhones && userPhones.length > 0 ?
                              userPhones.map(item => {
                                  return (
                                  <tr key={item.id}>
                                      <td>{item.type} </td>
                                      <td>
                                          {item.number}
                                      </td>
                                      <td className="d-flex justify-content-center">
                                      <button type="button" onClick={() => { RemoveNumber(item.id) }} className="btn btn-outline-danger btn-sm">Remove</button>
                                      </td>
                                  </tr>
                                  )
                              })
                              :
                              <tr>
                                  <td colSpan={4}>
                                      <center>No Data Available</center>
                                  </td>
                              </tr>
                          }
                      </tbody>
                  </Table>
                </Col>
              </Row>
            </Col>
          </Row>
          <Button variant="primary" type="submit" className='btn-sm mt-2' onClick={addUser}>
            Submit
          </Button>
        </Form>
        </div>
      </div>
    </div>
  );
};


export default CreateUserForm;