import { BrowserRouter, Route, Routes } from "react-router-dom"
import { NavigationBar } from "./components/UI/NavigationBar"
// import { LIB_ABOUTUS_ROUTE, LIB_BLOGS_ROUTE, LIB_CONTACTUS_ROUTE, LIB_HOME_ROUTE, LIB_OURSERVICES_ROUTE } from "./Constants/AppRoute"
import { Home } from "./components/UI/Home"
// import { LIB_HOME_ROUTE, LIB_OURSERVICES_ROUTE } from "./Constants/AppRoute"
import { Footer } from "./components/UI/Footer"
import { FORGOT_PASSWORD_ROUTE, LIB_ABOUTUS_ROUTE, LIB_BLOGS_ROUTE, LIB_CONTACTUS_ROUTE, LIB_HOME_ROUTE, LIB_OURSERVICES_ROUTE,  PROFILE_ROUTE,  SEATBOOKING_ROUTE, USER_EDIT_FORM_ROUTE, USER_LOGIN_ROUTE, USER_SIGNUP_ROUTE } from "./Constants/AppRoute"
import { OurServices } from "./components/UI/OurServices"
import { Blogs } from "./components/UI/Blogs"
import { Login } from "./components/UI/Login"
import { ForgotPassword } from "./components/UI/ForgotPassword"
import { SignUp } from "./components/UI/SignUp"
import SeatBooking from "./components/UI/SeatBooking"
import { AboutUs } from "./components/UI/AboutUs"
import { ContactUs } from "./components/UI/ContactUs"
import { ViewUserProfile } from "./components/UI/ViewUserProfile"
import { UpdateUser } from "./components/UI/UpdateUser"





function App() {

  return (
    <BrowserRouter>
    <NavigationBar></NavigationBar>
    

    <Routes>
      <Route path={LIB_HOME_ROUTE} element={<Home/>}></Route>
      <Route path={LIB_OURSERVICES_ROUTE} element={<OurServices/>}></Route>
      <Route path={LIB_ABOUTUS_ROUTE} element={<AboutUs></AboutUs>}></Route>
      <Route path={LIB_BLOGS_ROUTE} element={<Blogs></Blogs>}></Route>
      <Route path={LIB_CONTACTUS_ROUTE} element={<ContactUs></ContactUs>}></Route>
      <Route path={USER_LOGIN_ROUTE} element={<Login/>}></Route>
      <Route path={USER_SIGNUP_ROUTE} element={<SignUp/>}></Route>
      <Route path={FORGOT_PASSWORD_ROUTE} element={<ForgotPassword/>}></Route>
      <Route path={PROFILE_ROUTE} element={<ViewUserProfile></ViewUserProfile>}></Route>
      <Route path={SEATBOOKING_ROUTE} element={<SeatBooking/>}></Route>
      <Route path={USER_EDIT_FORM_ROUTE} element={<UpdateUser/>}></Route>
    </Routes>
    <Footer></Footer>
    </BrowserRouter>
  )
}

export default App
