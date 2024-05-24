/* eslint-disable react/jsx-key */
import { Col, Container, Row } from "react-bootstrap"
import { Header } from "../Lib/Header";
import blogHeaderImg from '../../../public/Images/BlogImgs/blogHeader.jpg'
import albert from '../../../public/Images/BlogImgs/albertE.jpeg'
import vivekananda from '../../../public/Images/BlogImgs/swamiViveka.jpeg'
import apj from '../../../public/Images/BlogImgs/download.jpeg'
import { useEffect, useState } from "react";
import axios from "axios";
import { QUOTE_API_URL } from "../../Constants/ApiConstants";
import { Feature } from "../Lib/feature";

export const Blogs = () => {

    const [quotes, setQuotes] = useState([]);

    const getQuotes = async () => {
        const res = await axios.get(QUOTE_API_URL);
        console.log(res.data.results);
        setQuotes(res.data.results);
    }
    useEffect(() => {
        getQuotes();
    }, [])

    return (

        <Container>


            <Header titleLeft="Our" titleRight="Blogs" subTitle="Empower Your Journey with Words of Wisdom" desc="Welcome to our Inspiration Hub, where you can find a treasure trove of motivational quotes, insights, and uplifting stories to inspire and energize your day. Dive into our collection of thought-provoking content and discover the power of positivity and personal growth." headerImgSrc={blogHeaderImg}></Header>

            <Container className="mt-4">
                <Row>
                    <h3 style={{ fontWeight: "600" }} className="mb-5">Inspirational <span style={{ color: " #361db7" }}>Quotes</span></h3>
                </Row>

                <Row className=" text-center d-flex justify-content-center">
                    {
                        quotes.map((quote) => {
                            return (


                                <Col lg={3} style={{ margin: "5px", padding: "40px", color: "black", borderRadius: "10px" }}>
                                    <h5>"{quote.content}"</h5>

                                    <h6 style={{ color: "  #361db7", maxHeight: "auto", marginTop: "8px" }}>- {quote.author}</h6>
                                </Col>


                            )
                        })
                    }
                </Row>
            </Container>

            <Container className="mt-5">
                <Row>
                    <h3 style={{ fontWeight: "600" }} className="mb-5">Inspirational <span style={{ color: " #361db7" }}>Messages</span></h3>
                </Row>
                <Row>
                    <Feature fTitle="Imagination is more important than knowledge. For knowledge is limited, whereas imagination embraces the entire world, stimulating progress, giving birth to evolution. " desc='In these words, Einstein invites us to explore the boundless realm of imagination—a realm where creativity knows no bounds and where innovation flourishes. He reminds us that while knowledge is essential, it is our imagination that propels us forward, driving us to seek new solutions, envision new possibilities, and embark on new adventures.' imgSrc={albert} reverse={false}>
                    </Feature>
                    <Feature fTitle="Arise, awake, and stop not until the goal is reached. " desc="In these simple yet powerful words, Swami Vivekananda encapsulates the essence of determination, perseverance, and unwavering commitment to one's goals. He reminds us that success is not achieved through mere wishful thinking or idle dreaming, but through relentless effort, unyielding resolve, and steadfast dedication to our aspirations. " imgSrc={vivekananda} reverse={true}>
                    </Feature>
                    <Feature fTitle="Dream, dream, dream. Dreams transform into thoughts, and thoughts result in action." desc="In these words, Dr. Kalam underscores the power of dreams as catalysts for change and transformation. He reminds us that dreams are not merely idle fantasies but powerful forces that shape our perceptions, beliefs, and actions. When we dare to dream, we tap into our limitless potential and ignite the spark of creativity and innovation within us." imgSrc={apj} reverse={false}>
                    </Feature>
                </Row>
            </Container>





        </Container>
    )
}

