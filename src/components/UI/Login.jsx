

import { Button, Col, Container, Form, Image, Row } from 'react-bootstrap';
import loginImg from '../../../public/Images/LoginImg/loginImg.png';
import '../../assets/CSS/login.css'
import { useEffect, useState } from 'react';
import { LinkContainer } from 'react-router-bootstrap';
import { FORGOT_PASSWORD_ROUTE, USER_SIGNUP_ROUTE } from '../../Constants/AppRoute';
import { getIdOfUser, getToken, storeID, storeToken, userLogin } from '../../servicesBooking/services/UserServies';
import { useNavigate } from 'react-router-dom';




export const Login = () => {

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [errors, setErrors] = useState({});
    const [credentials, setCredentials] = useState({});
      const navigate = useNavigate();
    useEffect(() => {
        if (getToken()) {
          navigate("/home");
        }
      }, []);

    const validateUsername = (username) => {
        if (typeof username !== 'string' || username.trim() === '') {
            return 'Username required';
        }
        if (username.length < 5) {
            return 'Username must be at least 6 characters long'
        }
        return null;
    };

    const validatePassword = (password) => {
        if (password.length < 6) {
            return 'Password must be at least 6 characters long.';
        }
        if (!/\d/.test(password)) {
            return 'Password must contain at least one number.';
        }
        if (!/[!@#$%^&*(),.?":{}|<>]/.test(password)) {
            return 'Password must contain at least one special character.';
        }
        return null;
    };

    // const handleSubmit = async(e) => {
    //     e.preventDefault();
    //         try {
    //             setCredentials({
    //                 username:username,
    //                 password:password
    //             })
    //             console.log(credentials);
    //             const response = await userLogin(credentials);
    //             if (response.status === 200) {
    //                 console.log(response.data.token);
    //                 console.log(response.data.userid);
    //                 storeToken(response.data.token);
    //                 storeID(response.data.userid);
    //                 console.log("getToken", getToken());
    //                 console.log("getToken", getIdOfUser());
    //                     setErrors({});
    //                     console.log('Form submitted:', { username, password });
    //                 navigate("/userProfile");
    //               }
    //         } catch (error) {
    //             setErrors({
    //                 username: usernameError,
    //                 password: passwordError,
    //             });
    //             if (error.response.status === 400) {
    //                 console.log(error.response.data.message);
    //               }   
    //         }
            
    //         // Handle actual form submission logic here, like making an API call
    //     // }
    // };

    const handleSubmit = async (e) => {
        e.preventDefault();
        const usernameError = validateUsername(username);
        const passwordError = validatePassword(password);

        if (usernameError || passwordError) {
            setErrors({
                username: usernameError,
                password: passwordError,
            });
        } else {
            setErrors({});
            const credentials = { username, password };

            try {
                const response = await userLogin(credentials);
                if (response.status === 200) {
                    storeToken(response.data.token);
                    storeID(response.data.userid);
                    navigate("/userProfile");
                }
            } catch (error) {
                if (error.response && error.response.status === 400) {
                    console.log(error.response.data.message);
                    setErrors({ login: 'Invalid credentials. Please try again.' });
                } else {
                    setErrors({ login: 'An unexpected error occurred. Please try again later.' });
                }
            }
        }
    };



    return (


        <Container className='p-3 mt-5' id='loginContainer'>
            <Row>
                <Col lg={6}>
                    <Image src={loginImg} className='img-fluid' style={{ width: "100%", height: "auto" }}></Image>
                </Col>
                <Col id='leftHomeCol' lg={6} className='p-5'>
                    <Row className='loginHeading text-center'>
                        <h6 style={{ opacity: "0.7", fontSize: "20px" }}>Welcome to Shine Library</h6>
                        <h4 id='logintxt'>Login</h4>
                    </Row>
                    <Row>
                        <Form id='loginForm' onSubmit={handleSubmit}>
                            <Form.Group controlId="username">
                                <Form.Label className='formLabel'>Username</Form.Label>
                                <Form.Control id='formInput'
                                    type="text"
                                    value={username}
                                    onChange={(e) => setUsername(e.target.value)}
                                    isInvalid={!!errors.username}
                                    placeholder='username'
                                />
                                {errors.username && (
                                    <Form.Control.Feedback type="invalid">
                                        {errors.username}
                                    </Form.Control.Feedback>
                                )}
                            </Form.Group>

                            <Form.Group controlId="password">
                                <Form.Label className='formLabel'>Password</Form.Label>
                                <Form.Control
                                    type="password"
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                    isInvalid={!!errors.password}
                                    placeholder='password'
                                />
                                {errors.password && (
                                    <Form.Control.Feedback type="invalid">
                                        {errors.password}
                                    </Form.Control.Feedback>
                                )}
                                <Row className='mt-2'>
                                    <LinkContainer to={FORGOT_PASSWORD_ROUTE}>
                                        <a id='forgotPassword' className='anchor'>Forgot Password ?</a>
                                    </LinkContainer>
                                </Row>
                            </Form.Group>

                            <Button className='mt-4' id='loginBtn' type="submit">
                                Login
                            </Button>

                        </Form>
                        <LinkContainer className='mt-4' to={USER_SIGNUP_ROUTE}>
                            <Row className='text-center'>
                                <h6>Don't have an account ?<a className='signUp'> SignUp</a></h6>
                            </Row>
                        </LinkContainer>
                    </Row>
                </Col>
            </Row>

        </Container>
    )
}





//why  it sending empty response on first click 
// import { Button, Col, Container, Form, Image, Row } from 'react-bootstrap';
// import loginImg from '../../../public/Images/LoginImg/loginImg.png';
// import '../../assets/CSS/login.css'
// import { useEffect, useState } from 'react';
// import { LinkContainer } from 'react-router-bootstrap';
// import { FORGOT_PASSWORD_ROUTE, USER_SIGNUP_ROUTE } from '../../Constants/AppRoute';
// import { getIdOfUser, getToken, storeID, storeToken, userLogin } from '../../servicesBooking/services/UserServies';
// import { useNavigate } from 'react-router-dom';




// export const Login = () => {

//     const [username, setUsername] = useState('');
//     const [password, setPassword] = useState('');
//     const [errors, setErrors] = useState({});
//     const [credentials, setCredentials] = useState({});
//       const navigate = useNavigate();
//     useEffect(() => {
//         if (getToken()) {
//           navigate("/home");
//         }
//       }, []);

//     const validateUsername = (username) => {
//         if (typeof username !== 'string' || username.trim() === '') {
//             return 'Username required';
//         }
//         if (username.length < 5) {
//             return 'Username must be at least 6 characters long'
//         }
//         return null;
//     };

//     const validatePassword = (password) => {
//         if (password.length < 6) {
//             return 'Password must be at least 6 characters long.';
//         }
//         if (!/\d/.test(password)) {
//             return 'Password must contain at least one number.';
//         }
//         if (!/[!@#$%^&*(),.?":{}|<>]/.test(password)) {
//             return 'Password must contain at least one special character.';
//         }
//         return null;
//     };

//     const handleSubmit = async(e) => {
//         e.preventDefault();
//         const usernameError = validateUsername(username);
//         const passwordError = validatePassword(password);
        
        
//         // const response = await userLogin(credentials);

//         // console.log('new data',credentials);

//         if (usernameError || passwordError) {
//             setErrors({
//                 username: usernameError,
//                 password: passwordError,
//             });
//         } else {
//             try {
//                 // setCredentials({
//                 //     username:username,
//                 //     password:password
//                 // })
//                 console.log(credentials);
//                 const response = await userLogin(credentials);
//                 if (response.status === 200) {
//                     console.log(response.data.token);
//                     console.log(response.data.userid);
//                     storeToken(response.data.token);
//                     storeID(response.data.userid);
//                     console.log("getToken", getToken());
//                     console.log("getToken", getIdOfUser());
//                         setErrors({});
//                         console.log('Form submitted:', { username, password });
//                     navigate("/userProfile");
//                   }
//             } catch (error) {
//                 setErrors({
//                     username: usernameError,
//                     password: passwordError,
//                 });
//                 if (error.response.status === 400) {
//                     console.log(error.response.data.message);
//                   }   
//             }
            
//             // Handle actual form submission logic here, like making an API call
//         }
//     };
    


//     return (


//         <Container className='p-3 mt-5' id='loginContainer'>
//             <Row>
//                 <Col lg={6}>
//                     <Image src={loginImg} className='img-fluid' style={{ width: "100%", height: "auto" }}></Image>
//                 </Col>
//                 <Col id='leftHomeCol' lg={6} className='p-5'>
//                     <Row className='loginHeading text-center'>
//                         <h6 style={{ opacity: "0.7", fontSize: "20px" }}>Welcome to Shine Library</h6>
//                         <h4 id='logintxt'>Login</h4>
//                     </Row>
//                     <Row>
//                         <Form id='loginForm' onSubmit={handleSubmit}>
//                             <Form.Group controlId="username">
//                                 <Form.Label className='formLabel'>Username</Form.Label>
//                                 <Form.Control id='formInput'
//                                     type="text"
//                                     value={username}
//                                     onChange={(e) => setUsername(e.target.value)}
//                                     isInvalid={!!errors.username}
//                                     placeholder='username'
//                                 />
//                                 {errors.username && (
//                                     <Form.Control.Feedback type="invalid">
//                                         {errors.username}
//                                     </Form.Control.Feedback>
//                                 )}
//                             </Form.Group>

//                             <Form.Group controlId="password">
//                                 <Form.Label className='formLabel'>Password</Form.Label>
//                                 <Form.Control
//                                     type="password"
//                                     value={password}
//                                     onChange={(e) => setPassword(e.target.value)}
//                                     isInvalid={!!errors.password}
//                                     placeholder='password'
//                                 />
//                                 {errors.password && (
//                                     <Form.Control.Feedback type="invalid">
//                                         {errors.password}
//                                     </Form.Control.Feedback>
//                                 )}
//                                 <Row className='mt-2'>
//                                     <LinkContainer to={FORGOT_PASSWORD_ROUTE}>
//                                         <a id='forgotPassword' className='anchor'>Forgot Password ?</a>
//                                     </LinkContainer>
//                                 </Row>
//                             </Form.Group>

//                             <Button className='mt-4' id='loginBtn' type="submit">
//                                 Login
//                             </Button>

//                         </Form>
//                         <LinkContainer className='mt-4' to={USER_SIGNUP_ROUTE}>
//                             <Row className='text-center'>
//                                 <h6>Don't have an account ?<a className='signUp'> SignUp</a></h6>
//                             </Row>
//                         </LinkContainer>
//                     </Row>
//                 </Col>
//             </Row>

//         </Container>
//     )
// }





// import { Button, Col, Container, Form, Image, Row } from 'react-bootstrap';
// import loginImg from '../../../public/Images/LoginImg/loginImg.png';
// import '../../assets/CSS/login.css'
// import { useEffect, useState } from 'react';
// import { LinkContainer } from 'react-router-bootstrap';
// import { FORGOT_PASSWORD_ROUTE, USER_SIGNUP_ROUTE } from '../../Constants/AppRoute';
// import { getIdOfUser, getToken, storeID, storeToken, userLogin } from '../../servicesBooking/services/UserServies';
// import { useNavigate } from 'react-router-dom';




// export const Login = () => {

//     // const [username, setUsername] = useState('');
//     // const [password, setPassword] = useState('');
//     const [errors, setErrors] = useState({});
//     const [credentials, setCredentials] = useState({
//         username: "",
//         password: "",
//       });
//       const navigate = useNavigate();
//     useEffect(() => {
//         if (getToken()) {
//           navigate("/home");
//         }
//       }, []);

//     const validateUsername = (username) => {
//         if (typeof username !== 'string' || username.trim() === '') {
//             return 'Username required';
//         }
//         if (username.length < 5) {
//             return 'Username must be at least 6 characters long'
//         }
//         return null;
//     };

//     const validatePassword = (password) => {
//         if (password.length < 6) {
//             return 'Password must be at least 6 characters long.';
//         }
//         if (!/\d/.test(password)) {
//             return 'Password must contain at least one number.';
//         }
//         if (!/[!@#$%^&*(),.?":{}|<>]/.test(password)) {
//             return 'Password must contain at least one special character.';
//         }
//         return null;
//     };
//     const handleFieldChange = (e) => {
//         setCredentials({ ...credentials, [e.target.name]: e.target.value });
//       };
//     const handleSubmit = async(e) => {
//         e.preventDefault();
//         const usernameError = validateUsername(credentials.username);
//         const passwordError = validatePassword(credentials.password);
        
        
//         // const response = await userLogin(credentials);

//         // console.log('new data',credentials);

//         if (usernameError || passwordError) {
//             setErrors({
//                 username: usernameError,
//                 password: passwordError,
//             });
//         } else {
//             try {
//                 // setCredentials({
//                 //     username:username,
//                 //     password:password
//                 // })
//                 console.log(credentials);
//                 const response = await userLogin(credentials);
//                 if (response.status === 200) {
//                     console.log(response.data.token);
//                     console.log(response.data.userid);
//                     storeToken(response.data.token);
//                     storeID(response.data.userid);
//                     console.log("getToken", getToken());
//                     console.log("getToken", getIdOfUser());
//                         // setErrors({});
//                         // console.log('Form submitted:', { username, password });
//                     navigate("/userProfile");
//                   }
//             } catch (error) {
//                 setErrors({
//                     username: usernameError,
//                     password: passwordError,
//                 });
//                 if (error.response.status === 400) {
//                     console.log(error.response.data.message);
//                   }   
//             }
            
//             // Handle actual form submission logic here, like making an API call
//         }
//     };
    


//     return (


//         <Container className='p-3 mt-5' id='loginContainer'>
//             <Row>
//                 <Col lg={6}>
//                     <Image src={loginImg} className='img-fluid' style={{ width: "100%", height: "auto" }}></Image>
//                 </Col>
//                 <Col id='leftHomeCol' lg={6} className='p-5'>
//                     <Row className='loginHeading text-center'>
//                         <h6 style={{ opacity: "0.7", fontSize: "20px" }}>Welcome to Shine Library</h6>
//                         <h4 id='logintxt'>Login</h4>
//                     </Row>
//                     <Row>
//                         <Form id='loginForm' onSubmit={handleSubmit}>
//                             <Form.Group controlId="username">
//                                 <Form.Label className='formLabel'>Username</Form.Label>
//                                 <Form.Control id='formInput'
//                                     type="text"
//                                     name="username"
//                                     onChange={handleFieldChange}
//                                     isInvalid={!!errors.username}
//                                     placeholder='username'
//                                 />
//                                 {errors.username && (
//                                     <Form.Control.Feedback type="invalid">
//                                         {errors.username}
//                                     </Form.Control.Feedback>
//                                 )}
//                             </Form.Group>

//                             <Form.Group controlId="password">
//                                 <Form.Label className='formLabel'>Password</Form.Label>
//                                 <Form.Control
//                                     type="password"
//                                     name="password"
//                                     onChange={handleFieldChange}
//                                     isInvalid={!!errors.password}
//                                     placeholder='password'
//                                 />
//                                 {errors.password && (
//                                     <Form.Control.Feedback type="invalid">
//                                         {errors.password}
//                                     </Form.Control.Feedback>
//                                 )}
//                                 <Row className='mt-2'>
//                                     <LinkContainer to={FORGOT_PASSWORD_ROUTE}>
//                                         <a id='forgotPassword' className='anchor'>Forgot Password ?</a>
//                                     </LinkContainer>
//                                 </Row>
//                             </Form.Group>

//                             <Button className='mt-4' id='loginBtn' type="submit">
//                                 Login
//                             </Button>

//                         </Form>
//                         <LinkContainer className='mt-4' to={USER_SIGNUP_ROUTE}>
//                             <Row className='text-center'>
//                                 <h6>Don't have an account ?<a className='signUp'> SignUp</a></h6>
//                             </Row>
//                         </LinkContainer>
//                     </Row>
//                 </Col>
//             </Row>

//         </Container>
//     )
// }
