
import { useState, useEffect } from "react";
import '../../assets/CSS/seatBooking.css'
// import { confirmAlert } from 'react-confirm-alert'; // Import
// import 'react-confirm-alert/src/react-confirm-alert.css'; // Import css


import { useNavigate } from "react-router-dom";
import PropTypes from 'prop-types'; // 
import { bookingSeat, fetchAllSeats } from "../../servicesBooking/services/SeatServies";
import { getToken } from "../../servicesBooking/services/UserServies";
import { Container, Row } from "react-bootstrap";
import { ConfirmDialog } from "../Lib/ConfirmDialog";




function SeatBooking() {
  const [seat, setSeat] = useState([]);
  const [seatAvailable, setSeatAvailable] = useState([]);
  const [seatReserved, setSeatReserved] = useState([]);
  const [seatSelected, setSeatSelected] = useState([]);

 
  const [showModal ,setShowModal] = useState(false);
  
  
     // handin to confimation methods 
   
     const closeModal = ()=>{
       setShowModal(false);
     }
  


  

  useEffect(() => {
    getAllSeats();
  }, []);
  const getAllSeats = async () => {
    try {
      const res = await fetchAllSeats();
      const seatData = res.data;
      setSeat(seatData.map((item) => item.seatno));
      setSeatAvailable(
        seatData.filter((item) => !item.booked).map((item) => item.seatno)
      );
      setSeatSelected(
        seatData.filter((item) => item.booked).map((item) => item.seatno)
      );
      setSeatReserved([]); // Or initialize with seats already selected by the user
    } catch (error) {
      console.error("Error fetching seat data:", error);
    }
  };

  const onClickData = (seat) => {
    if (seatReserved.includes(seat)) {
      setSeatAvailable([...seatAvailable, seat]);
      setSeatReserved(seatReserved.filter((res) => res !== seat));
    } else {
      setSeatReserved([...seatReserved, seat]);
      setSeatAvailable(seatAvailable.filter((res) => res !== seat));
    }
  };

  const checktrue = (row) => {
    return !seatSelected.includes(row);
  };
  const navigate = useNavigate();

  const handleSubmited = () => {
    if (getToken()) {
      if (setSeatReserved.length > 0) {
        
      setShowModal(true);
      // handleSubmit()
        // confirmAlert({
        //     title: 'Confirm to submit',
        //     message: 'Are you sure you want to save this thing into the database?',
        //     buttons: [
        //       {
        //         label: 'Yes',
        //         onClick: () => {
        //           // Save it!
        //           //console.log('Thing was saved to the database.');
        //           setSeatSelected([...seatSelected, ...seatReserved]);
        //           console.log(seatReserved.length);
        //           seatReserved.forEach(s => {
        //             // console.log('seat', s);
        //             bookingSeat(s);
        //           });
        //           setSeatReserved([]);
        //         }
        //       },
        //       {
        //         label: 'No',
        //         onClick: () => {
        //           // Do nothing!
        //           console.log('Thing was not saved to the database.');
        //         }
        //       }
        //     ]
        //   });

      }

    } else {
      alert("you need to login,we are sending you to login page");
      setTimeout(() => {
        setShowModal(false);
        closeModal();
        navigate("/login");
      }, 3000);
      
    }
  };
  const handleSubmit =()=>{
    console.log("yes runned")
      setSeatSelected([...seatSelected, ...seatReserved]);
        console.log(seatReserved.length);
        seatReserved.forEach(s => {
          console.log('seat',s);
          bookingSeat(s);
        });
      setSeatReserved([]);
      setShowModal(false)
  }

  return (
   <Container className="mt-5">
     {/* <div> */}
      <Row>
      <h1 className="heading">Library Seat System</h1>
      </Row>
      <Row>
        <p id="headingTxt">Welcome to our seat booking system! Secure your ideal study space in just a few clicks. Whether you need a quiet corner for intense focus or a cozy nook for casual reading, our library offers a variety of seating options to suit your needs. Book your spot now and enjoy a productive and comfortable study session at Shine Library.</p>
      </Row>
      <SeatSummary
        totalSeats={seat.length}
        availableSeats={seatAvailable.length}
        reservedSeats={seatReserved.length}
      />
      <DrawGrid
        seat={seat}
        available={seatAvailable}
        reserved={seatReserved}
        selected={seatSelected}
        onClickData={onClickData}
        checktrue={checktrue}
        handleSubmited={handleSubmited}
      />
      <AvailableSeats available={seatAvailable} />
    {/* </div> */}
   
   </Container>
  );
  function DrawGrid({
    seat,
    reserved,
    selected,
    onClickData,
    checktrue,
    handleSubmited,
  }) {
  // --------------------------------------------------------
     // confirmation dialag
  
   
    const onClickSeat = (seat) => {
      onClickData(seat);
    };
  
    
  
  // -------------------------------------------------------------
  
  
  
    return (
     <Container>
       <div className="container1 mt-5">
        <table className="grid1">
          <tbody>
            <tr>
              {seat.map((row, index) => (
                <td
                  key={index}
                  className={
                    selected.includes(row)
                      ? "reserved"
                      : reserved.includes(row)
                        ? "selected"
                        : "available"
                  }
                  onClick={checktrue(row) ? () => onClickSeat(row) : null}
                >
                  {row}
                </td>
              ))}
            </tr>
          </tbody>
        </table>
        <button
          type="button"
          className="btn-success btnmargin"
          onClick={()=>{
            handleSubmited();
            // setShowModal(true)
          }}
        >
          Confirm Booking
        </button>
      </div>
  
  {/* ---------------------------------------------------- */}
  
       <ConfirmDialog show={showModal} onHide={closeModal} message='Do you want to book the seat ? ' onYes={handleSubmit} ></ConfirmDialog>
  
  {/* ------------------------------------------- */}
     </Container>
    );
  }
  
  
  
  DrawGrid.propTypes = {
    seat: PropTypes.arrayOf(PropTypes.number).isRequired,
    available: PropTypes.arrayOf(PropTypes.number).isRequired,
    reserved: PropTypes.arrayOf(PropTypes.number).isRequired,
    selected: PropTypes.arrayOf(PropTypes.number).isRequired,
    onClickData: PropTypes.func.isRequired,
    checktrue: PropTypes.func.isRequired,
    handleSubmited: PropTypes.func.isRequired,
  };
  
  function AvailableSeats({ available }) {
    return (
      <Container>
        <div className="available-seats">
        <h2>Available Seats</h2>
        <ul>
          {available.map((seat) => (
            <li key={seat}>{seat}</li>
          ))}
        </ul>
      </div>
      </Container>
    );
  }
  
  AvailableSeats.propTypes = {
    available: PropTypes.arrayOf(PropTypes.number).isRequired,
  };
  
  
  
  function SeatSummary({ totalSeats, availableSeats, reservedSeats }) {
    return (
    <Container>
        <div className="seat-summary">
        <div className="summary-box">
          <h3>Total Seats</h3>
          <p>{totalSeats}</p>
        </div>
        <div className="summary-box">
          <h3>Available Seats</h3>
          <p>{availableSeats}</p>
        </div>
        <div className="summary-box">
          <h3>Reserved Seats</h3>
          <p>{reservedSeats}</p>
        </div>
      </div>
    </Container>
    );
  }
  
  SeatSummary.propTypes = {
    totalSeats: PropTypes.number.isRequired,
    availableSeats: PropTypes.number.isRequired,
    reservedSeats: PropTypes.number.isRequired,
  };
  
}








export default SeatBooking;
