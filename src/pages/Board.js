import React from "react";
import CardGroup from 'react-bootstrap/CardGroup'

import {Navbar, Button, Col, Form, Row, Container, Nav, NavDropdown, Card} from 'react-bootstrap';
import { MDBCard, MDBCardBody, MDBCardTitle, MDBCardText, MDBCardImage, MDBBtn } from 'mdb-react-ui-kit';

function Board() {
  return (
    <div style={{display: 'flow',  justifyContent:'center', alignItems:'center', height: '80vh', width:'150vh'}}>

<Card style={{ width: '18rem' }}>
  
  <Card.Body>
    <Card.Title>Card Title</Card.Title>
    <Card.Text>
      
    </Card.Text>
    <Button variant="primary">Go somewhere</Button>
  </Card.Body>
</Card>


    </div>
    
  )
}

export default Board;