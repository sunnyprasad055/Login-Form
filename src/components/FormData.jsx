import React, {useState} from 'react';
import { Container, Form, Button, Row, Col }  from 'react-bootstrap';







function FormData() {

    const [formValues, setFormValues] = useState({
        firstName: "",
        designation: "",
        contact: "",
        phnNum: "",
        skills: "", 
        dob: "",
    })

    


function handleChange(event) {
    setFormValues(preFormValues => {
        return{
            ...preFormValues,
            [event.target.name]: event.target.value,
            
        }
    })

}

//connetion with firebase

const handleSubmit = async (event) => {
    event.preventDefault();
    const {firstName, designation, contact, phnNum, skills, dob} = formValues;
    const res = await fetch('https://employee-data-f79ab-default-rtdb.asia-southeast1.firebasedatabase.app/Employee-data.json', {
    method: "POST",
    headers: {
        "Content-type": "application/json"
    },
    body: JSON.stringify({
        firstName, designation, contact, phnNum, skills, dob
    })
 
    });
    if (res) {
        setFormValues({
        firstName: "",
        designation: "",
        contact: "",
        phnNum: "",
        skills: "", 
        dob: "",
        })
        alert("Info recevied ")
    }else {
        alert("Please provide all the info required")
    }

}



  return (
      <Container className='content'>
            <Form onSubmit={handleSubmit} action= "">

                    <Form.Group controlId="formGridEmail">
                    <Form.Label>Name*</Form.Label>
                    <Form.Control
                    type="text" 
                    placeholder="Enter your Name"
                    onChange={handleChange}
                    name = "firstName"
                    value= {formValues.firstName}
                    required  />
                    </Form.Group>

                   <Form.Group   controlId="formHorizontaltext">
                    <Form.Label column sm={3}>Designation*</Form.Label>
                    <Form.Control 
                    type="text" 
                    placeholder="Enter your Role"
                    onChange={handleChange}
                    name= "designation"
                    value= {formValues.designation}
                    required  />
                    </Form.Group>

                    
                    <Row className="mb-3">
                   <Form.Group as={Col} controlId="formGridState">
                    <Form.Label>Contact*</Form.Label>
                    <Form.Select 
                    onChange={handleChange}
                    value = {formValues.contact}
                    name= "contact" 
                    required>
                        <option value="">Choose...</option>
                        <option value="Primary">Primary</option>
                        <option value="Seconday">Seconday</option>
                        <option value="Emergency">Emergency</option>
                    </Form.Select>
                    </Form.Group>
                    <Form.Group as={Col}   controlId="formGridEmail">
                    <Form.Label>Number*</Form.Label>
                    <Form.Control
                     type="number"
                     placeholder="Enter Phone number"
                     name="phnNum"
                     value={formValues.phnNum}
                     onChange={handleChange}
                     minLength={10}
                     required />
                    </Form.Group>
                    <Button as= {Col} variant='secondary' className='btn-1' type='button'>Add Another Number</Button>
                    <Button as= {Col} variant='secondary' className='btn-1' type='button'>Remove Number</Button>
                    </Row>
                    
                    
                    
                    <Row className="mb-2">
                    <Form.Group as={Col} controlId="formGridZip">
                    <Form.Label>Skills*</Form.Label>
                    <Form.Control type="text"
                    placeholder="Enter your skills"
                    onChange={handleChange}
                    name='skills'
                    value={formValues.skills}
                    required />
                    </Form.Group>
                    <Button as= {Col} variant='secondary' className='btn-1' type='button'>Add Another Skill</Button>
                    </Row>
                     <Form.Group as={Col}   controlId="formGridEmail">
                    <Form.Label>Date of Birth*</Form.Label>
                    <Form.Control type="date"
                    placeholder="Enter email"
                    onChange={handleChange}
                    name='dob'
                    value={formValues.dob}
                    required />
                    </Form.Group>
               

                <Button variant="primary" type="submit" className='btn-1'>
                 Submit
                </Button>
            </Form>
    </Container>

  )
}

export default FormData