import { Col, Container, Image, Row } from 'react-bootstrap';
import '../../assets/CSS/Home.css'
import myImg from '../../../public/Images/HomePageImg/Home1.png';

import { Feedback } from '../Lib/Feedback';
// import { QUOTE_API_URL, QUOTE_BASE_API_URL, RNDM_QUOTE_API_URL } from '../../Constants/ApiConstants';
// import Feedback from 'react-bootstrap/esm/Feedback';


export const Home = () => {
/*
const [qoute , setQuote] = useState({[]});

const getRandomQuote = async () =>{
        const res = await axios.get(RNDM_QUOTE_API_URL);
            console.log(res.data[0]);
            setQuote(res.data[0]);
}

useEffect(()=>{
    getRandomQuote();
} , [])

*/
    return (
        <Container className=' p-5'>
            <Container>
                <Row>
                    <Col id='leftHomeCol' lg={6} className='p-5'>
                        <h1>Welcome to <span>Shine Library</span></h1>
                        <h5>"Discover, Learn, and Grow with Us – Your Journey Begins Here."</h5>
                        <p>We are thrilled to welcome you to a sanctuary of knowledge and tranquility. Our library is designed with you in mind, offering private cabins and a serene environment perfect for focused study and contemplation. Whether you’re preparing for exams, conducting research, or simply seeking a quiet place to read, you’ll find the peace and privacy you need here.</p>
                    </Col>
                    <Col lg={6}>
                        <Image src={myImg} className='img-fluid' style={{ width: "100%", height: "auto" }}></Image>
                    </Col>
                </Row>
            </Container>
{/*             
            <Container className='mt-4'>
                <Row>
                    <h3><span>Quote</span> of the Day !!</h3>
                </Row>
                <Row className='text-center mt-5'>
                    <h4>{qoute[0].content} </h4>
                    <h5>-{qoute[0].author} </h5>
                </Row>
            </Container> */}

            <Container className='mt-5'>
                <Row className=''>
                    <h3 style={{fontWeight:"600" , marginBottom:"15px"}}>What Our Users <span style={{color:" #361db7"}}>Say</span></h3>
                    <p style={{fontSize:"20px"}}>Read what our community members have to say about their experiences at Shine Library</p>
                </Row>
            <Row id='reviews'  className='mt-5 align-center'>
                <Feedback msg="A perfect place for studying in peace. The private cabins are amazing!" name="Jone Singh">
                </Feedback>
                <Feedback msg="A perfect place for studying in peace. The private cabins are amazing!" name="Vivek Singh">
                </Feedback>
                <Feedback msg="A perfect place for studying in peace. The private cabins are amazing!" name="Rohan Sharma">
                </Feedback>
                
                 
                </Row>

            </Container>
        </Container>


    )
}
