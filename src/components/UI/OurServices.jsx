import {   Container } from "react-bootstrap"
// import { Header } from "../Lib/Header"
// import { Feature } from "../Lib/feature"
// import { Footer } from "./Footer"
// import { Header } from "../Lib/Header"
import serviceImg from '../../../public/Images/FeaturesImgs/service1.jpg'
import cabinImg from '../../../public/Images/FeaturesImgs/cabin.jpg'
import newsPaper from '../../../public/Images/FeaturesImgs/newsPaper.jpg'
import bathroom from '../../../public/Images/FeaturesImgs/bathroomr.jpg'
import drinkingWater from '../../../public/Images/FeaturesImgs/drinkingWater.png'
import wifi from '../../../public/Images/FeaturesImgs/wifi.png'
import chargering from '../../../public/Images/FeaturesImgs/chargering.jpg'
import { Feature } from "../Lib/feature"
import { Header } from "../Lib/Header"

export const OurServices = () => {
    return (
        <Container>
            <Header titleLeft="Our" titleRight="Services" subTitle="From personalized study spaces to digital resources, our library offers a wide range of services to support your educational and recreational needs" desc= "At Shine Library, we are dedicated to providing a wide array of services that cater to the diverse needs of our community. Whether you’re a student, researcher, professional, or casual reader, our services are designed to support and enrich your learning journey. Explore our offerings and discover how we can assist you in achieving your goals." headerImgSrc={serviceImg}></Header>
        

            <Feature fTitle="Private Study Cabins" desc='Experience ultimate focus and tranquility in our soundproof private study cabins. Equipped with comfortable seating, ample lighting, and high-speed Wi-Fi, these cabins offer the perfect environment for studying, researching, or working without distractions. Book your cabin online and enjoy a dedicated space tailored to your needs.' imgSrc={cabinImg}>
            </Feature>

            <Feature fTitle="News Paper Availability" desc='At Shine Library, we understand the importance of staying updated with current events and trends. That’s why we offer a comprehensive collection of local, national, and international newspapers. Our newspaper availability feature ensures that you have access to the latest news and information, all in one convenient location.' imgSrc={newsPaper} reverse={true}>
            </Feature>

            <Feature fTitle="Seperate Washroom for girls and boys" desc='At Shine Library, we prioritize the comfort and well-being of our visitors, which is why we take great pride in maintaining clean and hygienic washroom facilities. Our commitment to cleanliness ensures that your visit to our library is not only enjoyable but also refreshing and rejuvenating.' imgSrc={bathroom} reverse={false}>
            </Feature>

            <Feature fTitle="Fresh Drinking Water" desc='At Shine Library, we understand the importance of staying hydrated, especially during long study sessions or leisurely reading marathons. That’s why we provide access to fresh and clean drinking water throughout our facilities, ensuring that you can stay refreshed and energized during your visit.' imgSrc={drinkingWater} reverse={true}>
            </Feature>

            <Feature fTitle="Free High-Speed WiFi" desc='At Shine Library, we understand the importance of staying connected, whether you’re researching, studying, or simply browsing the web. That’s why we provide complimentary access to high-speed WiFi throughout our facilities, ensuring that you can stay connected and productive during your visit.' imgSrc={wifi} reverse={false}>
            </Feature>
            
            <Feature fTitle="Accessible Power Outlets" desc='At Shine Library, we understand the importance of staying powered up and connected, especially in today’s digital age. That’s why we provide accessible power outlets throughout our facilities, ensuring that you can stay charged and connected during your visit.' imgSrc={chargering} reverse={true}>

            </Feature>

        </Container>

    )
}
