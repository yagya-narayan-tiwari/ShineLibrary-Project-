import { Col, Container, Image, Row } from 'react-bootstrap'
import PropTypes from 'prop-types';

export const Header = (props) => {
  return (

    <Container>
    <Row>
        <Col id='leftHomeCol' lg={6} className='p-5'>
            <h1 style={{textAlign:"left"}}>{props.titleLeft} <span>{props.titleRight} </span></h1>
            <h5>{props.subTitle} </h5>
            <p>{props.desc} </p>
        </Col>
        <Col lg={6}>
            <Image src={props.headerImgSrc} className='img-fluid' style={{ width: "100%", height: "auto" }}></Image>
        </Col>
    </Row>
</Container>
  )
}
Header.propTypes = {
  titleLeft: PropTypes.string.isRequired,
  titleRight: PropTypes.string.isRequired,
  subTitle: PropTypes.string.isRequired,
  desc: PropTypes.string, // Not required
  headerImgSrc: PropTypes.string,
};
