import { Header } from "../Lib/Header";
// import '../../assets/CSS/Home.css'
import aboutUs from '../../../public/Images/aboutUsImg/aboutUs.png';
import vision from '../../../public/Images/aboutUsImg/vision.jpg';
import history from '../../../public/Images/aboutUsImg/history.jpg';
import team from '../../../public/Images/aboutUsImg/Team.png';
import joinUs from '../../../public/Images/aboutUsImg/joinUs.jpg';
import { Feature } from "../Lib/feature";
import { Container } from "react-bootstrap";

export const AboutUs = () => {
  return (

   <Container>
     <Header titleLeft="About" titleRight="Us" subTitle="Welcome to Shine Library.." desc= "At Shine Library, we believe that libraries are the heart of the community – a place where knowledge, culture, and connection come together. Our mission is to provide a welcoming and resource-rich environment that supports learning, creativity, and personal growth for all our visitors." headerImgSrc={aboutUs}></Header>
      
    
      <Feature fTitle="Our Mission" desc='Our mission is to foster a love for reading and lifelong learning by offering access to diverse resources, creating opportunities for community engagement, and providing a tranquil space for study and contemplation. We are committed to enriching the lives of our patrons through comprehensive services and innovative programs.' imgSrc={vision}>
      </Feature>
  
      <Feature fTitle="Our History" desc='Founded in 2023 , Shine Library has grown from a small community resource to a modern facility serving thousands of visitors each year. Our journey has been guided by a passion for education and a commitment to meeting the evolving needs of our community. Over the years, we have expanded our collections, upgraded our facilities, and introduced new services to better serve our patrons.' imgSrc={history} reverse={true}>
      </Feature>

      <Feature fTitle="Our Team" desc='Our dedicated team of librarians, staff, and volunteers is passionate about providing exceptional service and creating a welcoming atmosphere for all visitors. We are here to help you find the resources you need, answer your questions, and make your library experience as enjoyable as possible.' imgSrc={team}>
      </Feature>

      <Feature fTitle="Join Us" desc='Become a member of Shine Library and take advantage of our full range of services and benefits. Enjoy priority access to events, discounts on workshops, and extended borrowing privileges. We invite you to join our vibrant community and explore all that Shine Library has to offer..' imgSrc={joinUs} reverse={true}>
      </Feature>
   </Container>
  )
}
