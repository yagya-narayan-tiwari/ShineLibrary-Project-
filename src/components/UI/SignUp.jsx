import { Button, Col, Container, Form, Image, Row } from "react-bootstrap"
import signUpImg from '../../../public/Images/signUpImg/signUp1.png';
import { useEffect, useState } from "react";
import '../../assets/CSS/signUp.css'
import { addUser, getToken } from "../../servicesBooking/services/UserServies";
import { useNavigate } from "react-router-dom";








export const SignUp = () => {
  

    const [username, setUsername] = useState('');
    const [name, setname] = useState('');
    const [password, setPassword] = useState('');
    const [phone, setPhone] = useState('');
    const [email, setEmail] = useState('');
    const [errors, setErrors] = useState({});
    const [credentials, setCredentials] = useState({});
      const navigate = useNavigate();
    useEffect(() => {
        if (getToken()) {
          navigate("/home");
        }
      }, []);
    const validateName = (name) => {
        if (typeof name !== 'string' || name.trim() === '') {
            return 'name required';
        }
        if (name.length < 3) {
            return 'enter valid name';
        }
        if(/\d/.test(name) || /[!@#$%^&*(),.?":{}|<>]/.test(name) ){
            return 'enter valid name';
        }
        return null;
    };
    const validateEmail = (email) => {
        const re = /\S+@\S+\.\S+/;

        if (typeof email !== 'string' || email.trim() === '') {
            return 'email required';
        }
        if(!re.test(email) ){
            return 'enter valid email';
        }
        return null;
    };
    const validatePhone = (phone) => {
        if (typeof phone !== 'string' || phone.trim() === '') {
            return 'phone  required';
        }
        if (phone.length !=10) {
            return 'enter valid phone number';
        }
        if(!/\d/.test(phone)){
            return 'enter valid phone number';
        }
        return null;
    };
    const validateUsername = (username) => {
        if (typeof username !== 'string' || username.trim() === '') {
            return 'username required';
        }
        if (username.length < 5) {
            return 'username must be at least 6 characters long'
        }
        return null;
    };

    const validatePassword = (password) => {
        if (typeof password !== 'string' || password.trim() === '') {
            return 'password required';
        }
        if (password.length < 6) {
            return 'password must be at least 6 characters long.';
        }
        if (!/\d/.test(password)) {
            return 'password must contain at least one number.';
        }
        if (!/[!@#$%^&*(),.?":{}|<>]/.test(password)) {
            return 'password must contain at least one special character.';
        }
        return null;
    };

    const handleSubmit = async(e) => {
        e.preventDefault();
        const usernameError = validateUsername(username);
        const passwordError = validatePassword(password);
        const nameError = validateName(name);
        const phoneError = validatePhone(phone);
        const emailError = validateEmail(email);

        if (usernameError || passwordError || nameError || phoneError) {
            setErrors({
                username: usernameError,
                password: passwordError,
                name: nameError,
                phone: phoneError,
                email:emailError,
            });
        } else {
            try {
                const credentials={
                    fullname:name,
                    username:username,
                    password:password,
                    email:email,
                    phone:phone
                }
                console.log('the credentials are',credentials);
                const response = await addUser(credentials);
                console.log(response);
                if (response.status === 200) {
                  console.log(response.data.message);
                  setErrors({});
                  console.log('Form submitted:', {name ,  username, password , phone , email });
                  navigate("/login");
                }
              } catch (error) {
                console.log(error);
                if (error.response.status === 400) {
                  console.log(error.response.data.message);
                }
              }
            
            // Handle actual form submission logic here, like making an API call
        }
    };







    return (




        <Container className=' mt-4' id='signUpContainer'>
        <Row>
            <Col lg={6} md={6}>
                <Image src={signUpImg} className='img-fluid mt-5' style={{ width: "100%", height: "auto" }}></Image>
            </Col>
            <Col id='leftHomeCol' lg={6} md={6} className='p-4'>
                <Row className='loginHeading text-center'>
                    <h6 style={{ opacity: "0.7", fontSize: "20px" }}>Welcome to Shine Library</h6>
                    <h4 id='logintxt'>Sign Up</h4>
                </Row>
                <Row>
                    <Form id='loginForm' onSubmit={handleSubmit}>
                        <Form.Group controlId="name">
                            <Form.Label className='formLabel'>Name</Form.Label>
                            <Form.Control id='formInput'
                                type="text"
                                value={name}
                                onChange={(e) => setname(e.target.value)}
                                isInvalid={!!errors.name}
                                placeholder='name'
                            />
                            {errors.name && (
                                <Form.Control.Feedback type="invalid">
                                    {errors.name}
                                </Form.Control.Feedback>
                            )}
                        </Form.Group>
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
                        <Form.Group controlId="email">
                            <Form.Label className='formLabel'>Email</Form.Label>
                            <Form.Control id='formInput'
                                type="text"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                isInvalid={!!errors.email}
                                placeholder='email'
                            />
                            {errors.email && (
                                <Form.Control.Feedback type="invalid">
                                    {errors.email}
                                </Form.Control.Feedback>
                            )}
                        </Form.Group>
                        <Form.Group controlId="phone">
                            <Form.Label className='formLabel'>Phone</Form.Label>
                            <Form.Control id='formInput'
                                type="text"
                                value={phone}
                                onChange={(e) => setPhone(e.target.value)}
                                isInvalid={!!errors.phone}
                                placeholder='phone'
                            />
                            {errors.phone && (
                                <Form.Control.Feedback type="invalid">
                                    {errors.phone}
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
                          
                        </Form.Group>

                        <Button className='mt-4' id='signUpBtn' type="submit">
                            Sign Up
                        </Button>

                    </Form>
                  
                </Row>
            </Col>
        </Row>

    </Container>
    )
}
