import React from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import { BrowserRouter as Router,Route, Link, Redirect } from 'react-router-dom';
import Home from "./Home";


class App extends React.Component {
    constructor(){
        super()
    }
    render(){
       
     return(
       <div>
           <Router>
               <div><ol>
                 <li>
                 <Link to="/home">Login with google</Link>
                 </li>
               </ol>

               <Route path="/home" Component={Home}/>
           </div>
          </Router></div>
       )
 }
}

/*
function Home(){
    return(
      
        <Form>
            <h1>gefg</h1>
        <Form.Group controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control type="email" placeholder="Enter email" />
          <Form.Text className="text-muted">
            We'll never share your email with anyone else.
          </Form.Text>
        </Form.Group>
      
        <Form.Group controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control type="password" placeholder="Password" />
        </Form.Group>
        <Form.Group controlId="formBasicChecbox">
          <Form.Check type="checkbox" label="Check me out" />
        </Form.Group>
        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>  
       <h1>homedf</h1>
         );
}*/
export default App;
