import { Col, Container, Image, Row } from 'react-bootstrap'
import PropTypes from 'prop-types';
import '../../assets/CSS/feature.css'



export const Feature = ({ fTitle, desc, imgSrc, reverse }) => {
  return (
    <Container>
      <Row className='mt-5'>
        {reverse ? (
          <>
            <Col lg={6} className='d-flex justify-content-center order-lg-1'>
              <Image src={imgSrc} className='img-fluid featureImg' style={{ width: '50%', height: 'auto' }} />
            </Col>
            <Col id='leftHomeCol' lg={6} className='p-5 order-lg-2'>
              <h4 style={{color:" #361db7"}}>{fTitle}</h4>
              <p>{desc}</p>
            </Col>
          </>
        ) : (
          <>
            <Col id='leftHomeCol' lg={6} className='p-5 order-lg-1'>
            <h4 style={{color:" #361db7"}}>{fTitle}</h4>
              <p>{desc}</p>
            </Col>
            <Col lg={6} className='d-flex justify-content-center order-lg-2'>
              <Image src={imgSrc} className='img-fluid featureImg' style={{ width: '50%', height: 'auto' }} />
            </Col>
          </>
        )}
      </Row>
    </Container>
  );
};

Feature.propTypes = {
  fTitle: PropTypes.string.isRequired,
  desc: PropTypes.string, // Not required
  imgSrc: PropTypes.string,
  reverse: PropTypes.bool, // Optional prop to reverse order
};

Feature.defaultProps = {
  desc: 'Default description text', // Optional default value
  imgSrc: '', // Optional default value for image source
  reverse: false, // Default value for reverse
};

