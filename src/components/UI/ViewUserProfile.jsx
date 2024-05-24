import { Button, Card, Col, Container, Row } from "react-bootstrap";
import profileImg from "../../../public/Images/profileImg/profile.jpg";
import "../../assets/CSS/profile.css";
import { useEffect, useState } from "react";
import { ConfirmDialog } from "../Lib/ConfirmDialog";
import { useNavigate } from "react-router-dom";
import {
  FetchUserData,
  getIdOfUser,
} from "../../servicesBooking/services/UserServies";
import {
  cancelBooking,
  fetchBooking,
} from "../../servicesBooking/services/SeatServies";
import { USER_SIGNUP_ROUTE } from "../../Constants/AppRoute";

export const ViewUserProfile = () => {
  // export function UserDashboard() {
  const navigate = useNavigate();
  const [userData, setUserData] = useState({});
  const [bookingData, setBookingData] = useState([]);

  const [seat , setSeat] = useState(0);
 
  useEffect(() => {
    // if (getToken()) {
    getdata();
    getBooking();
    //   }
  }, []);
  useEffect(() => {}, [bookingData]);

  const getdata = async () => {
    const userid = getIdOfUser();
    console.log("inside ud", getIdOfUser());
    try {
      const response = await FetchUserData(userid);
      console.log("the data is", response);
      setUserData(response.data);
      console.log("User Data", userData);
    } catch (error) {
      console.log(error);
    }
  };
  const getBooking = async () => {
    const userid = getIdOfUser();
    console.log("inside ud", getIdOfUser());
    try {
      const response = await fetchBooking(userid);
      console.log("the booking is", response);
      setBookingData(response.data);
      console.log("booking data", bookingData);
    } catch (error) {
      console.log(error);
    }
  };
  //   if (getToken()) {
  //     const res = getdata();
  //     const booking = getBooking();
  //   }
  const handelCancelBooking = async() => {
    // e.preventDefault();
    // setShowModal(true)
    
    // console.log(e.target);
    // const seatno = e.target.value;
    const res = await cancelBooking(seat);
    console.log(res);
    if (res.status === 200) {
        closeModal();
        getBooking();

    }
    console.log("delete seat is",seatno);
    
  };

//   const handelCancelBooking = async(e) => {
//     e.preventDefault();
//     // setShowModal(true)
    
//     console.log(e.target);
//     const seatno = e.target.value;
//     const res = await cancelBooking(seatno);
//     console.log(res);
//     if (res.status ===200) {
//         closeModal();
//         getBooking();

//     }
//     console.log("delete seat is",seatno);
    
//   };

  // --------------------------------------------------------
  // confirmation dialag

  const [showModal, setShowModal] = useState(false);


  // handin to confimation methods

  const closeModal = () => {
    setShowModal(false);
  };

  const handleSubmit = () => {
    console.log("yes runned");
  };

  // -------------------------------------------------------------
// ---------------------------------------

const handleUpdate=()=>{
  const id = getIdOfUser();
// navigate(STUDENT_EDIT_FORM_ROUTE);
navigate(`/editProfile/${id}`);
}



  return (
    <Container className="mt-5">
      <Container className="p-5">
        <Row id="profileHeader" className="text-center d-flex flex-column g-3">
          <h1 id="profileHeading">
            Hello <span id="userProfile">{userData.fullname}</span> , Welcome to
            Shine Library !
          </h1>
          <p>
            We’re delighted to have you as a valued member of Shine Library.
            Here, you can easily manage your account, check your borrowing
            history, renew books, and explore personalized recommendations. Stay
            connected with us and make the most of your library experience!
          </p>
          <h4 id="profileHeading" style={{ opacity: "0.8" }}>
            Your Journey of Discovery and Learning Awaits!
          </h4>
        </Row>
      </Container>
      <Container className="mt-5 ">
        <Row>
          <h4 id="userProfile">Your Profile Details</h4>
          <Col lg={10} className="m-auto p-5">
            <Card id="card">
              <Col lg={4} className="m-auto p-3">
                <Card.Img
                  style={{ width: "14rem" }}
                  variant="top"
                  src={profileImg}
                />
              </Col>
              <Col lg={8} style={{ height: "auto" }}>
                <Card.Body id="cardBody">
                  <Card.Title className="mb-4" id="username">
                    {userData.fullname}
                  </Card.Title>
                  <Card.Text>
                    <Row>
                      <p id="details">
                        Username :&nbsp;&nbsp;&nbsp; {userData.username}
                      </p>
                      <p id="details">
                        Email
                        :&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{" "}
                        {userData.email}
                      </p>
                      <p id="details">
                        Phone
                        :&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{" "}
                        {userData.phone}
                      </p>
                    </Row>
                  </Card.Text>
                  <Button  id="updateProfileBtn" onClick={handleUpdate}>Update Profile</Button>
                </Card.Body>
              </Col>
            </Card>

            <Row className="mt-4">
              <h5 id="bookingStatus">Your Bookings are : </h5>

              {/* <Row className=" m-2 booked">
                          <Col lg={6} className="m-auto ">
                                <h5>Your booked seat no  : &nbsp;&nbsp;&nbsp;&nbsp; 56</h5>
                            </Col>
                            <Col lg={4}>
                                <Button variant="danger">Cancel Booking</Button>{' '}
                            </Col>
                          </Row> */}
              {bookingData.map((b) => {
                return (
                  <Row className="m-2 booked">
                    <Col lg={6} className="m-auto ">
                      <h5>
                        Your booked seat no : &nbsp;&nbsp;&nbsp;&nbsp;{" "}
                        {b.seatno}
                      </h5>
                    </Col>
                    <Col lg={4}>
                      <Button
                        variant="danger"
                        value={b.seatno}
                        onClick={()=>{
                            setShowModal(true);
                            setSeat(b.seatno);
                        }
                      
                        }
                      >
                        Cancel Booking
                      </Button>
                    </Col>
                  </Row>
                );
              })}
            </Row>
          </Col>
        </Row>
        <ConfirmDialog
          show={showModal}
          onHide={closeModal}
          message="Do you want to cancel the seat ? "
          onYes={handelCancelBooking}
        ></ConfirmDialog>
      </Container>
    </Container>
  );
};
