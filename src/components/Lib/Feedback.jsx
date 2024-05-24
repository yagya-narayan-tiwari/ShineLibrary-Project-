import { Col, Row } from "react-bootstrap"
// import { propTypes } from "react-bootstrap/esm/Image"
import PropTypes from 'prop-types';
import { FaRegStarHalfStroke } from "react-icons/fa6"
import { IoIosStar } from "react-icons/io"

export const Feedback = (props) => {
  return (
    <>
    
    <Col lg={3}  className='px-4 py-5 review' >
                        
                        <blockquote className='d-flex flex-column'>
                            <p>{props.msg} </p>
                         <Row>
                         <h6 className='mt-auto'>{props.name}</h6>
                         </Row>
                         <Row>
                         <Col lg={12}>
                        <div style={{opacity:"0.6"}}>
                        <IoIosStar />
                        <IoIosStar />
                        <IoIosStar />
                        <IoIosStar />
                        <FaRegStarHalfStroke />
                        </div>
                         </Col>
                         </Row>
                        </blockquote>
                       
                    </Col>
    
    
    
    </>
  )
}
Feedback.propTypes = {
    msg: PropTypes.string.isRequired,
    name: PropTypes.string, // Not required
  };