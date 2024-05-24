import { Button, Col, Container, Form, Row } from 'react-bootstrap'
import { Feature } from '../Lib/feature'
import forgotPassword from '../../../public/Images/LoginImg/forgotPassword.jpg';

export const ForgotPassword = () => {
  return (
    <Container>


<Feature fTitle="Oops! Forgot Your Password?" desc='No worries! It happens to the best of us. Please enter your email address below, and we’ll send you instructions to reset your password. You’ll be back to exploring Shine Library in no time!' imgSrc={forgotPassword} reverse={false}>
      </Feature>
      <Container>
        <Row className='d-flex justify-content-start align-items-center'>
       <Col lg={6} >
       <Form >
      <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
        <Form.Label>Email address</Form.Label>
        <Form.Control type="email" placeholder="enter email" />
      </Form.Group>
    </Form>
       </Col>
       <Col lg={4} >
       <Button style={{padding:"8px 20px" ,backgroundColor:"  #361db7" , position:"relative" , top:"8px"}}>Submit</Button>{' '}
       </Col>
        </Row>
      </Container>

    </Container>
  )
}
