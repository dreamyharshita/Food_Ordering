import React from "react";
import { useNavigate } from "react-router-dom";
import './Welcome.css';
import { Card,Button } from "react-bootstrap";

const Welcome=()=>{
 const navigate=useNavigate();
    const goto=(e)=>{
        e.preventDefault();
       navigate("/app")
    }
    return <div className="welcome">
    <div >
    <Card className="card_welcome">
      <Card.Header style={{
        fontWeight:"bold",
        justifyContent:"center",
        alignItems:"center",
        marginLeft:"150px",
        fontSize:"30px",
        }}>React Meals</Card.Header>
      <Card.Body>
        
        <Card.Text style={{fontWeight:"normal",
        fontSize:"30px",
        color:"orangered",
        marginLeft:"80px"}}>
          Welcome to the Store
        </Card.Text>
        <Button variant="primary" size="lg" onClick={goto} style={{
            
            color:"white",
           background:"orange",
           marginLeft:"150px",
           padding:"10px",
           height:"3rem",
           width:"10rem",
           boxShadow:"initial"
        }}>
       GO TO THE MENU
      </Button>
      </Card.Body>
    </Card>
    </div>
    </div>
}

export default Welcome;