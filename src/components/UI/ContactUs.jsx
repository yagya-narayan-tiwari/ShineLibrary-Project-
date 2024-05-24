import { Accordion, Button, Card, Col, Container, Image, Row } from "react-bootstrap"
import { Header } from "../Lib/Header"
import contactUs from '../../../public/Images/contactUs/contact.jpg';
import fnq from '../../../public/Images/contactUs/faq.jpg';
import member1 from '../../../public/Images/contactUs/member1.jpeg';
import member2 from '../../../public/Images/contactUs/member2.png';
import member3 from '../../../public/Images/contactUs/member3.png';
import feedback from '../../../public/Images/contactUs/fb.jpg';

import '../../assets/CSS/contactUs.css'
import Form from 'react-bootstrap/Form';
import { addFeadback } from "../../servicesBooking/FeedbackServies";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

export const ContactUs = () => {
    const [newFeedback, setFeedback] = useState({
        name: "",
        feedback: "",
      });
      const navigate = useNavigate();

      const handleFieldChange = (e) => {
        setFeedback({ ...newFeedback, [e.target.name]: e.target.value });
      };

      const handleSubmit = async (e) => {
        e.preventDefault();
        try {
          console.log(newFeedback);
          const response = await addFeadback(newFeedback);
          console.log(response);
          if (response.status === 200) {
            
            navigate("/home");
          }
        } catch (error) {
          console.log(error);
        //   if (error.response.status === 400) {
        //     console.log(error.response.data.message);
        //   }
        }
      };
    return (
        <Container>

            <Header titleLeft="Contact" titleRight="Us" subTitle="We’re Here to Help!" desc="At Shine Library, we value our patrons and are always here to assist you. Whether you have a question about our services, need help with a research project, or want to provide feedback, our team is ready to support you." headerImgSrc={contactUs}></Header>
            <Container>
                <Row>

                    <Col lg={6} className='d-flex justify-content-center order-lg-1'>
                        <Image src={fnq} className='img-fluid featureImg' style={{ width: '50%', height: '100%' }} />
                    </Col>


                    <Col id='leftHomeCol' lg={6} className='p-5 order-lg-2'>
                        <Row id="faqTitle">
                            <h4 style={{ color: " #361db7" }}>FAQs</h4>
                            <p>Check out our FAQ Page for answers to common questions about our services, memberships, and more. If you don’t find the answer you’re looking for, feel free to contact us directly.</p>
                        </Row>

                        <Row>
                            <Accordion defaultActiveKey="0">
                                <Accordion.Item eventKey="0">
                                    <Accordion.Header>What are the library’s opening hours?</Accordion.Header>
                                    <Accordion.Body>
                                        Our library is open from :
                                        Monday to Saturaday: [8:00 AM] - [10:00PM]
                                        Sunday: [10:00 AM] - [7:00 PM]
                                    </Accordion.Body>
                                </Accordion.Item>
                                <Accordion.Item eventKey="1">
                                    <Accordion.Header>How can I reserve a private study cabin?</Accordion.Header>
                                    <Accordion.Body>
                                        You can reserve a private study cabin online through our Reservations Page or by visiting the front desk at the library. Reservations can be made by the hour, half-day, or full-day.
                                    </Accordion.Body>
                                </Accordion.Item>
                                <Accordion.Item eventKey="2">
                                    <Accordion.Header> Does the library have digital resources available?</Accordion.Header>
                                    <Accordion.Body>
                                        Yes, our digital library includes e-books, audiobooks, and access to various online databases. You can access these resources by logging into our Digital Library Portal with your library membership credentials.
                                    </Accordion.Body>
                                </Accordion.Item>
                                <Accordion.Item eventKey="3">
                                    <Accordion.Header>How do I access the library’s Wi-Fi?</Accordion.Header>
                                    <Accordion.Body>
                                        Our library offers free Wi-Fi for all visitors. Simply connect to the network named and enter the password if prompted. If facing any issue feel free to contact to our management team.
                                    </Accordion.Body>
                                </Accordion.Item>

                            </Accordion>
                        </Row>

                    </Col>
                </Row>


            </Container>
            <Container>
                <Row className="mt-5 d-flex justify-content-center touchBox">
                    <h4 >Get In Touch</h4>
                    <Row className="mt-4">
                        <Container className="cardContainer">
                            <Col lg={3} md={6} >
                                <Card className=" h-100 d-flex flex-column" style={{ width: '18rem' }}>
                                    <Card.Img variant="top" src={member1} />
                                    <Card.Body className="d-flex flex-column">
                                        <Card.Title id="names">Yagya Narayan Tiwari</Card.Title>
                                        <Card.Subtitle className="mb-2 text-muted">CDAC Kharghar , Mumbai</Card.Subtitle>
                                        <Card.Text id="contactDetails">
                                            Phone : +91-7879685959 <br></br>
                                            Email : yagya@gmail.com
                                        </Card.Text>

                                    </Card.Body>
                                </Card>
                            </Col>
                            <Col lg={3} md={6} >
                                <Card className=" h-100 d-flex flex-column" style={{ width: '18rem' }}>
                                    <Card.Img variant="top" src={member2} />
                                    <Card.Body className="d-flex flex-column">
                                        <Card.Title id="names">Akshay Gadekar</Card.Title>
                                        <Card.Subtitle className="mb-2 text-muted">CDAC Kharghar , Mumbai</Card.Subtitle>
                                        <Card.Text id="contactDetails">
                                            Phone : +91-7879685959<br></br>
                                            Email : Akshay@gmail.com
                                        </Card.Text>

                                    </Card.Body>
                                </Card>
                            </Col>
                            <Col lg={3} md={6} >
                                <Card className=" h-100 d-flex flex-column" style={{ width: '18rem' }}>
                                    <Card.Img variant="top" src={member3} />
                                    <Card.Body className="d-flex flex-column">
                                        <Card.Title id="names">Saurabh Dadhe</Card.Title>
                                        <Card.Subtitle className="mb-2 text-muted">CDAC Juhu , Mumbai</Card.Subtitle>
                                        <Card.Text className="mt-auto" id="contactDetails">
                                            Phone : +91-7879685959<br></br>
                                            Email : Sourabh@gmail.com
                                        </Card.Text>

                                    </Card.Body>
                                </Card>
                            </Col>
                        </Container>

                    </Row>

                </Row>
            </Container>
            <Container className='p-3 mt-5'>
                <Row>
                    <h4 className="mb-4" style={{color:" #361db7" , fontWeight:"600"}}>Give Us Your Feedback</h4>
                </Row>
                <Row>
                    <Col lg={6}>
                        <Image src={feedback} className='img-fluid' style={{ width: "100%", height: "auto" }}></Image>
                    </Col>
                    <Col id='leftHomeCol' lg={6} className='p-5'>
                        <Row className='loginHeading'>
                            <h4 id='logintxt'>We Value Your Feedback!</h4>
                            <p>"Let’s Make Shine Library Better Together"
</p>
                        </Row>
                        <Row>
                            <Form onSubmit={handleSubmit}>
                                <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                                    <Form.Label>Name</Form.Label>
                                    <Form.Control type="text" placeholder="enter name " name="name" onChange={handleFieldChange} />
                                </Form.Group>
                                <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                                    <Form.Label>Tell Us How We're Doing</Form.Label>
                                    <Form.Control as="textarea" name="feedback" rows={3} onChange={handleFieldChange} />
                                </Form.Group>
                                <Button className='mt-4' id='loginBtn' type="submit">
                                Submit Feedback
                            </Button>
                            </Form>
                        </Row>
                    </Col>
                </Row>

            </Container>
        </Container>

    )
}
