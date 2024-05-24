import { Col, Container, Nav, Row } from "react-bootstrap"
import { LinkContainer } from "react-router-bootstrap"
import { LIB_ABOUTUS_ROUTE, LIB_BLOGS_ROUTE, LIB_CONTACTUS_ROUTE, LIB_HOME_ROUTE, LIB_OURSERVICES_ROUTE } from "../../Constants/AppRoute"
import { FaFacebook, FaGithub, FaLinkedin, FaRegCopyright, FaTwitter } from "react-icons/fa6"
import { RiInstagramFill } from "react-icons/ri";
import '../../assets/CSS/Footer.css'

export const Footer = () => {
    return (

        <Container fluid className="mt-5 p-4 " id="footerContainer" style={{ backgroundColor:'#361DB7' }}>

            <Container className="m-auto p-3" style={{ color:"white" }}>
                <Row>
                    <Col lg={4} style={{padding:"20px"}}>
                        <Row >
                            <h3 id="logo1">Shine<span>Library</span></h3>
                        </Row>
                        <Row className=" desc">
                            <Col lg={12} className="mb-3">
                                Step inside, and let your journey begin. Welcome to your library, where every page is a new adventure!
                            </Col>
                        </Row>
                        <Row>
                            <Col lg={12} className="opacity-75 add">
                                Address : Chandak Chouk Katni , M.P. 483501<br></br>
                                Phone : +91-7869484893,+91-9585837343<br></br>
                                email : shinelibrary@gmail.com

                            </Col>
                        </Row>
                    </Col>
                    <Col lg={8} md={6}  className="d-flex footerBox2">
                        <Col lg={6} md={4} className="text-center mt-4 aboutIcon">
                            <h6>About</h6>
                            <LinkContainer to={LIB_HOME_ROUTE}>
                                <Nav.Link  id="home1">Home</Nav.Link>
                            </LinkContainer>

                            <LinkContainer to={LIB_ABOUTUS_ROUTE}>
                                <Nav.Link id="about1">About Us</Nav.Link>
                            </LinkContainer>

                            <LinkContainer to={LIB_OURSERVICES_ROUTE}>
                                <Nav.Link id="ser1">Our Services</Nav.Link>
                            </LinkContainer>

                            <LinkContainer to={LIB_BLOGS_ROUTE}>
                                <Nav.Link id="blog1" >Blogs</Nav.Link>
                            </LinkContainer>

                            <LinkContainer to={LIB_CONTACTUS_ROUTE}>
                                <Nav.Link id="contact1" >Contact Us</Nav.Link>
                            </LinkContainer>
                        </Col>

                
                    <Col lg={6} md={6}  className="d-flex justify-content-flex-start flex-column align-items-center mt-4 socialIcon">
                        <h6 className="mb-4">Social</h6>
                      <div id="icons">
                      <FaFacebook className="icn" />
                      <FaGithub  className="icn"/>
                      <RiInstagramFill className="icn" />
                      <FaTwitter className="icn" />
                      <FaLinkedin className="icn" />
                      </div>
                    </Col>

                    </Col>
                </Row>
            </Container>

            <Row className="rowWidth m-auto mt-3 text-center">
               <p><FaRegCopyright /> All rights reserved | 2024 | Terms & conditions</p>
            </Row>












        </Container>





    )
}
