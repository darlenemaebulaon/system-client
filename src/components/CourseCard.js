import { useState } from "react";
import { Card, Button } from "react-bootstrap";


export default function CourseCard() {
    let [count, setCount] = useState(0);

    // function sayHi(){
    //     console.log("Hi!");
    // }

    function enroll(){
        if(count !== 30){
            setCount(count + 1);
        }else{
            alert("No slots available");
        }
    }

    return(
        <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src="holder.js/100px180" />
      <Card.Body>
        <Card.Title>Sample Course</Card.Title>
        <Card.Subtitle>Description</Card.Subtitle>
        <Card.Text>
          Sample Description
        </Card.Text>
        <Card.Subtitle>Price</Card.Subtitle>
        <Card.Text>
          10,000
        </Card.Text>
        <Card.Subtitle>Enrollees</Card.Subtitle>
        <Card.Text>
          {count}
        </Card.Text>
        <Button variant="primary" onClick={enroll}>Enroll</Button>
      </Card.Body>
    </Card>
    )
}