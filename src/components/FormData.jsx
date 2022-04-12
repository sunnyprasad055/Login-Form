import React, {useState} from 'react';
import { Container, Form, Button, Row, Col }  from 'react-bootstrap';







function FormData() {

    const [formValues, setFormValues] = useState({
        fname: "",
        designation: "",
        select: {
          contact: {
            contactType: "",
            phnNum: "",
        },
          contact: {
            contactType: "",
            phnNum: "",
        },
    }

    })

    
console.log (formValues)

function handleChange(event) {
    setFormValues(preFormValues => {
        return{
            ...preFormValues,
            [event.target.name]: event.target.value,
            
        }
    })

}



function handleSubmit(event) {
    event.preventDefault();

}

  return (
      <Container className='content'>
            <Form onSubmit={handleSubmit} action= "">
                    <Form.Group   controlId="formGridEmail">
                    <Form.Label>Name</Form.Label>
                    <Form.Control
                    type="text" 
                    placeholder="Enter your Name"
                    onChange={handleChange}
                    name = "fname"
                    value= {formValues.fname}  />
                    </Form.Group>
                   <Form.Group   controlId="formHorizontaltext">
                    <Form.Label column sm={3}>Designation</Form.Label>
                    <Form.Control 
                    type="text" 
                    placeholder="Enter your Role"
                    onChange={handleChange}
                    name= "designation"
                    value= {formValues.designation}  />
                    </Form.Group>
                    {formValues.select.map((values, index) => {
                        return(
                    <Row className="mb-3" key={index}>
                   <Form.Group as={Col} controlId="formGridState">
                    <Form.Label>Contact</Form.Label>
                    <Form.Select 
                    onChange={handleChange}
                    value = {values.contact.contactType}
                    name= "contact">
                        <option value="">Choose...</option>
                        <option value="Primary">Primary</option>
                        <option value="Seconday">Seconday</option>
                        <option value="Emergency">Emergency</option>
                    </Form.Select>
                    </Form.Group>
                     <Form.Group as={Col}   controlId="formGridEmail">
                    <Form.Label>Number</Form.Label>
                    <Form.Control
                     type="number"
                     placeholder="Enter Phone number"
                     name="phnNum"
                     value={values.contact.phnNum}
                     onChange={handleChange} />
                    </Form.Group>
                    <Button as= {Col} variant='secondary' className='btn-1' type='button'>Add Another Number</Button>
                    <Button as= {Col} variant='secondary' className='btn-1' type='button'>Remove Number</Button>
                    </Row>)
                    })}
                    
                    
                    <Row className="mb-2">
                    <Form.Group as={Col} controlId="formGridZip">
                    <Form.Label>Skills</Form.Label>
                    <Form.Control type="text" placeholder="Enter your skills" />
                    </Form.Group>
                    <Button as= {Col} variant='secondary' className='btn-1' type='button'>Add Another Skill</Button>
                    </Row>
                     <Form.Group as={Col}   controlId="formGridEmail">
                    <Form.Label>Date of Birth</Form.Label>
                    <Form.Control type="date" placeholder="Enter email" />
                    </Form.Group>
               

                <Button variant="primary" type="submit" className='btn-1'>
                 Submit
                </Button>
            </Form>
    </Container>

  )
}

export default FormData