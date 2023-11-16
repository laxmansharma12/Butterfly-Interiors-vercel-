import React, { useState, useEffect, useRef } from 'react';
import contactImg from "./images/pop-img.jpg";
import loginImg from "./images/login-bg.jpg";
import passwordResetImg from "./images/forgot-password1.jpg"
import ResetIcon from "./images/password-reset.png"
import signupImg from "./images/login-bg1.jpg";
import { NavLink, useNavigate, useLocation, Navigate, Link } from "react-router-dom";
import { useAuth } from '../../context/auth';
import axios from "axios";
import toast from 'react-hot-toast';
import emailjs from '@emailjs/browser';
import { Icon } from 'react-icons-kit';
import { eyeOff } from 'react-icons-kit/feather/eyeOff';
import { eye } from 'react-icons-kit/feather/eye'

const Header = (props) => {
  const [hideNavReviews, setHideNavReviews] = useState(true);
  const [hideNavFaqs, setHideNavFaqs] = useState(true);
  const location = useLocation();
  useEffect(() => {
    if (location.pathname !== "/") {
      setHideNavReviews(false);
      setHideNavFaqs(false);

    }
    if (location.pathname === "/kitchen-design" ||
      location.pathname === "/wardrobe-design" ||
      location.pathname === "/bedroom-design" ||
      location.pathname === "/livingroom-design" ||
      location.pathname === "/diningroom-design" ||
      location.pathname === "/bathroom-design" ||
      location.pathname === "/city-banglore") {
      setHideNavFaqs(true);
    }
  })
  // ------------to-hide-buttons------------------
  const [signBtn, setSignUpBtn] = useState(true);
  const [auth, setAuth] = useAuth();
  const navigate = useNavigate();
  const handleLogout = () => {
    setAuth({
      ...auth,
      user: null,
      token: ''
    })
    navigate("/");
    localStorage.removeItem('auth');
    toast.success("Logout Successfully");
    setUserDropdown(false);

  }
  //---------------------to-show-userName------------------------
  const [userDropdown, setUserDropdown] = useState(false);
  const userDropdownHide = useRef();
  // const [uname, setUname] = useState(true);
  // -----------to hide and show forms-------------
  const [contact, setContact] = useState(false);
  const [login, setLogin] = useState(false);
  const [signup, setSignUp] = useState(false);
  const [forgotPassword, setForgotPassword] = useState(false);
  const contactHide = useRef();
  const loginHide = useRef();
  const signupHide = useRef();
  const forgotPasswordHide = useRef();

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (contactHide.current && !contactHide.current.contains(event.target)) {
        setName("");
        setNumber("");
        setContact(!contact);
      }
      if (loginHide.current && !loginHide.current.contains(event.target)) {
        setEmail("");
        setPassword("");
        setLogin(!login);
      }
      if (signupHide.current && !signupHide.current.contains(event.target)) {
        setName("");
        setEmail("");
        setPassword("");
        setAnser("");
        setNumber("");
        setSignUp(!signup);
      }
      if (forgotPasswordHide.current && !forgotPasswordHide.current.contains(event.target)) {
        setEmail("");
        setNewPassword("");
        setAnser("");
        setForgotPassword(!forgotPassword);
      }
      // if (userDropdownHide.current && !userDropdownHide.current.contains(event.target)) {
      //   setUserDropdown(false);
      // }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    }
  });

  const hideContact = () => {
      setName("");
      setNumber("");
      setContact(!contact);
  }
  const hideLogin=()=>{
      setEmail("");
      setPassword("");
      setLogin(!login);
  }
    const hidesignup=()=>{
      setName("");
      setEmail("");
      setPassword("");
      setAnser("");
      setNumber("");
      setSignUp(!signup);
    }

  const hideFP=()=>{
      setEmail("");
      setNewPassword("");
      setAnser("");
      setForgotPassword(!forgotPassword);
    }

  //-----------------------------------------------------------------------

  const showContuctUs = () => {
    !auth.user ? toast.error("Please login before contacting us!") : setContact(!contact);
  }
  // --------------------signup----------------------
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [number, setNumber] = useState("");
  const [answer, setAnser] = useState("");
  //---------------------for-phone-name-answer-validation---------------
   const handlePhoneInput = (e) => {
     const validationMessage = document.getElementById("validationPhoneInput");
    const regex = /^[0-9\b]+$/;
    if (e.target.value === "" || regex.test(e.target.value)) {
      setNumber(e.target.value);
      validationMessage.textContent = "";
    } else {
      validationMessage.textContent = "Only numbers are allowed.";
      e.preventDefault(); // Prevent the invalid character from being entered
    }
  };
  const handleNameInput = (e) => {
    const validationMessage = document.getElementById("validationNameInput");
    const regex = /^[A-Za-z\s]+$/;
    if (e.target.value === "" || regex.test(e.target.value)) {
      setName(e.target.value);
      validationMessage.textContent = "";
    }else{
      validationMessage.textContent = "Only alphabets and whitespace are allowed.";
      e.preventDefault(); // Prevent the invalid character from being entered
    }
  };
  const handleAnswerInput = (e) => {
    const validationMessage = document.getElementById("validationAnswer");
    const regex = /^[A-Za-z\s]+$/;
    if (e.target.value === "" || regex.test(e.target.value)) {
      setAnser(e.target.value);
      validationMessage.textContent = "";
    } else {
      validationMessage.textContent = "Only alphabets and whitespace are allowed.";
      e.preventDefault(); // Prevent the invalid character from being entered
    }
  };
  //-----------------------------------------------------------
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post("/api/v1/auth/signup", { name, email, password, number, answer });
      if (res && res.data.success) {
        toast.success(res.data.message);
        setSignUp(!signup);
        setLogin(!login);
        setSignUpBtn(false);
      } else {
        toast.error(res.data.message);
      }
    } catch (error) {
      toast.error("Invalid Email and Password");
    }
    setName("");
    setEmail("");
    setPassword("");
    setAnser("");
    setNumber("");
  }
  //=======================login-----------------------------------------------
  const handleSubmitlogin = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post("/api/v1/auth/login", { email, password });
      if (res && res.data.success) {
        toast.success(res.data.message);
        setAuth({
          ...auth,
          user: res.data.user,
          token: res.data.token,
        });
        localStorage.setItem('auth', JSON.stringify(res.data))
        setLogin(!login);
        setSignUp(false);
        setEmail("");
        setPassword("");
        setAnser("");
      } else {
        toast.error(res.data.message);
      }
    } catch (error) {
      toast.error("Somehting went wrong");
    }
    setEmail("");
    setPassword("");
  }
  //----------------------------------------------------------------------------
  //--------------------------------forgotPassword--------------------------------------------
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword,setConfirmPassword]=useState("");
  const handleSubmitResetPassword = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post("/api/v1/auth/forgot-password", { email, newPassword, answer });
      if(confirmPassword === newPassword){
      if (res && res.data.success) {
        toast.success(res.data.message);
        setLogin(!login);
        setForgotPassword(false);
      } else {
        toast.error(res.data.message);
      }
    }else{
        toast.error("Password Missmatch!!");
        setConfirmPassword("");
        setNewPassword("");
    }
    } catch (error) {
      toast.error("Your Answer is Wrong!!");
      setAnser("");
    }
  }
  //--------------------------Book-consultation-------------------------------
  const consultation = useRef();
  const sendEmail = (e) => {
    e.preventDefault();
    emailjs.sendForm('service_mcsan74', 'template_2hne65o', consultation.current, 'q0YpF476IzzUw41dx')
      .then(() => {
        e.target.reset();
        setContact(!contact);
        toast.success("Your consultation booked successfully!");
      }, (error) => {
      });
  };
  //----------------hide/show/password------------------------
  const [type, setType] = useState('password');
  const [icon, setIcon] = useState(eyeOff);
  const handleToggle = () => {
    if (type === 'password') {
      setIcon(eye);
      setType('text')
    } else {
      setIcon(eyeOff)
      setType('password')
    }
  }
  //----------------------------------------------------------
  return (
    <div>
      <nav className="navbar navbar-expand-lg">
        <div className="container-fluid p-0" >
          {/* Navbar content */}
          <ul className="logo">
            <div className="col-md-2">
              <table>
                <tr>
                  <td>
                    <div className='logo-image'></div>
                  </td>
                  <td>
                    <div className="Name">
                      <p className="heading">interiors</p>
                    </div>
                    <div>
                      <p>
                      </p><h5>BUTTERFLY</h5>
                      <p />
                    </div>
                  </td>
                </tr>
              </table>
            </div>
          </ul>
          <button className="navbar-toggler collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="navbar-collapse collapse" id="navbarSupportedContent"  >
            <ul className="navbar-nav">
              {location.pathname !== "/" ? <li className='nav-item'><NavLink className="nav-link nav-link-texts" to="/" style={{ color: "#189BA6" }}>Home</NavLink></li> : ""}
              <li className="nav-item dropdown">
                <Link className="dropdown-toggle nav-link" style={{ color: "#189BA6" }} data-bs-toggle="dropdown">Design Gallery</Link>
                <ul className="dropdown-menu">
                  <NavLink to="/kitchen-design" style={{ color: "#189BA6" }} className="nav-link nav-link-texts ">Modular Kitchen Designs </NavLink>
                  <NavLink to="/wardrobe-design" style={{ color: "#189BA6" }} className="nav-link nav-link-texts dropdownItems">Wardrobe Designs</NavLink>
                  <NavLink to="/bedroom-design" style={{ color: "#189BA6" }} className="nav-link nav-link-texts dropdownItems">Bedroom Designs</NavLink>
                  <NavLink to="/livingroom-design" style={{ color: "#189BA6" }} className="nav-link nav-link-texts dropdownItems">Living Room Designs</NavLink>
                  <NavLink to="/diningroom-design" style={{ color: "#189BA6" }} className="nav-link nav-link-texts dropdownItems" href="dining-room.html">Dining Room Designs</NavLink>
                  <NavLink to="/bathroom-design" style={{ color: "#189BA6" }} className="nav-link nav-link-texts dropdownItems" href="bathroom.html">Bathroom Design</NavLink>
                </ul>
              </li>
              <li className="nav-item"><NavLink className="nav-link nav-link-texts" to="/recent-projects">Recent Projects</NavLink></li>
              {hideNavReviews && <li className='nav-item'><NavLink className="nav-link nav-link-texts" onClick={props.data1} style={{ color: "#189BA6" }}>Reviews</NavLink></li>}
              <li className="nav-item dropdown">
                <Link className="dropdown-toggle nav-link" style={{ color: "#189BA6" }} data-bs-toggle="dropdown">Cities</Link>
                <ul className="dropdown-menu">
                  <NavLink className="nav-link nav-link-texts" style={{ color: "#189BA6" }} to="/city-banglore">Banglore</NavLink>
                </ul>
              </li>
              <li className="nav-item"><a className="nav-link nav-link-texts Btn-contact" onClick={showContuctUs} style={{ cursor: "pointer" }}>Contact Us</a></li>
              {hideNavFaqs && <li className='nav-item'><NavLink className="nav-link nav-link-texts" onClick={props.data} style={{ color: "#189BA6" }}>FAQs</NavLink></li>}
              <li className='nav-item'><NavLink to="/About" className="nav-link nav-link-texts">About</NavLink></li>
            </ul>
            <div>
              {
                !auth.user ?
                  <div className='nav-controls'>
                    <button id="btn-login" className="btn btn-outline me-2" onClick={() => setLogin(!login)}>Login</button>
                    {signBtn && <button id="btn-signup" className="btn nav-link-btn" onClick={() => setSignUp(!signup)}>Sign-up</button>}
                  </div>
                  :
                  <div className='auth-dashboard'>
                    <div className='user-dropdown' onClick={() => setUserDropdown(!userDropdown)}>
                      <li></li>
                      <li></li>
                      <li></li>
                    </div>
                    <div className='userName'><span>{auth?.user?.name}</span></div>
                  </div>
              }
              {/* <!--user menu --> */}
              {userDropdown && <div className="user-dropdown-content" ref={userDropdownHide}>
                <NavLink className={"user-dropdown-dashboard-btn"} to={`/dashboard/${auth?.user?.role === 1 ? 'admin' : 'user'}`}><i class="fa-solid fa-user"></i> Profile</NavLink>
                <ul onClick={handleLogout} style={{ cursor: "pointer" }}><i class="fa-solid fa-right-from-bracket"></i> LogOut</ul>
              </div>
              }

            </div>
          </div>
        </div>
      </nav>
      {/* -----------------------------contact form-------------------------------------- */}
      {/* The Modal contact */}
      {
        contact &&
        <div id="myModal-contact" className="modal">
          {/* Modal content */}
          <div className="modal-content" ref={contactHide} x>
              <span className="close" onClick={hideContact}>x</span>

            <table>
              <tbody>
                <tr>
                  <td className="image">
                    <img className="contact-img" src={contactImg} width={510} height={488} alt='' />
                  </td>
                  <td className="submit-wraper">
                    <form ref={consultation} onSubmit={sendEmail}>
                      <h2>Get A Free Consultation</h2>
                      <p className="paras question">Tell us about your home</p>
                      <div className="container  btn-group" role="group">
                        <div className="row">
                          <div className="col-sm-auto">
                            <input type="radio" className="btn-check" value={"1 BHK"} name='home_type' id="btn1-check-outlined" autoComplete="off" />
                            <label className="btn btn-outline-primary" htmlFor="btn1-check-outlined">1 BHK</label>
                          </div>
                          <div className="middle col-sm-auto">
                            <input type="radio" className="btn-check" value={"2 BHK"} name='home_type' id="btn2-check-outlined" autoComplete="off" />
                            <label className="btn btn-outline-primary" htmlFor="btn2-check-outlined">2 BHK</label>
                          </div>
                          <div className="col-sm-auto">
                            <input type="radio" className="btn-check" value={"3 BHK"} name='home_type' id="btn3-check-outlined" autoComplete="off" />
                            <label className="btn btn-outline-primary" htmlFor="btn3-check-outlined">3 BHK</label>
                          </div>
                          <div className="middle col-sm-auto">
                            <input type="radio" className="btn-check" value={"Duplex"} name='home_type' id="btn4-check-outlined" autoComplete="off" />
                            <label className="btn btn-outline-primary" htmlFor="btn4-check-outlined">Duplex</label>
                          </div>
                          <div className="col-sm-auto">
                            <input type="radio" className="btn-check" value={"Villa"} name='home_type' id="btn5-check-outlined" autoComplete="off" />
                            <label className="btn btn-outline-primary" htmlFor="btn5-check-outlined">Villa</label>
                          </div>
                        </div>
                      </div>
                      <p className="paras">Which city is this home in?</p>
                      <div className="container btn-group" role="group">
                        <div className="row">
                          <div className="col-sm-auto">
                            <input type="radio" className="btn-check" value={"Banglore"} name="city" id="btn6-check-outlined" autoComplete="off" />
                            <label className="btn btn-outline-primary" htmlFor="btn6-check-outlined">Banglore</label>
                          </div>
                          <div className="middle col-sm-auto">
                            <input type="radio" className="btn-check" value={"Hyderabad"} name="city" id="btn7-check-outlined" autoComplete="off" />
                            <label className="btn btn-outline-primary" htmlFor="btn7-check-outlined">Hyderabad</label>
                          </div>
                          <div className="col-sm-auto">
                            <input type="radio" className="btn-check" value={"Chennai"} name="city" id="btn8-check-outlined" autoComplete="off" />
                            <label className="btn btn-outline-primary" htmlFor="btn8-check-outlined">Chennai</label>
                          </div>
                          <div className="middle col-sm-auto">
                            <input type="radio" className="btn-check" value={"Mysore"} name="city" id="btn9-check-outlined" autoComplete="off" />
                            <label className="btn btn-outline-primary" htmlFor="btn9-check-outlined">Mysore</label>
                          </div>
                          <div className="col-sm-auto">
                            <input type="radio" className="btn-check" value={"Pune"} name="city" id="btn10-check-outlined" autoComplete="off" />
                            <label className="btn btn-outline-primary" htmlFor="btn10-check-outlined">Pune</label>
                          </div>
                        </div>
                      </div>
                      <p className="paras"><span>What is your name?</span></p>
                      <p>Mr/Mrs
                        <input type="text" value={name} onChange={handleNameInput} placeholder="Name" name="client_name" className="text-input text-input-name" autoComplete="off" maxLength={"25"} style={{ paddingLeft: "5px", boxShadow: "none" }} />
                          <p id="validationNameInput" style={{position:"absolute",color:"red",paddingLeft:"50px",top:"68%"}}></p>
                      </p>
                      <p className="paras">Tell us your mobile number, so we can fix your appointment</p>
                      <table>
                        <tbody>
                          <tr>
                            <td>
                              <p className="text-input-title" style={{ fontSize: '12pt', textAlign: 'center', margin: '0 0 2px 5px' }}>
                                +91</p>
                            </td>
                            <td>
                              <input value={number} onChange={handlePhoneInput} type="tel" style={{ paddingLeft: "2px" }} placeholder="Mobile Number" name="mob_number" id="popup-phone" className="mobile-phone-ext text-input" autoComplete="off" minLength={"10"} maxLength={"10"} />
                                <p id="validationPhoneInput" style={{ position: "absolute", color: "red", paddingLeft: "0px", top:"83%"}}></p>
                            </td>
                          </tr>
                        </tbody>
                      </table>
                      <div>
                      </div>
                      <button type="submit" className="btn btn-primary btn-submit" style={{ margin: "20px", paddingLeft: "50px", paddingRight: "50px" }}>Submit</button>
                    </form>
                  </td>
                </tr>
              </tbody>
            </table>

          </div>
        </div>
      }
      {/* -----------------------------login form-------------------------------------- */}
      {
        login &&
        <div id="myModal-login" className="modal-login">
          <div className="modal-content-login " ref={loginHide}>
            <div>
              <img className="banner-img" src={loginImg}/>
            </div>
              <span className="close close1" onClick={hideLogin}>x</span><table className="login-tb">
              <tbody><tr>
                <td>
                  <div className="wrapper">
                    <div className="title">
                      Login Form
                    </div>
                    <form onSubmit={handleSubmitlogin}>
                      <div className="field">
                        {/* Email input */}
                        <input style={{color:"black"}} type="email" value={email} onChange={(e) => setEmail(e.target.value)} required />
                        <span />
                        <label style={{color:"black"}}>Email address</label>
                      </div>
                        <div className="field" style={{ display: "flex", justifyContent: "space-between" }}>
                        {/* Password input */}
                          <input style={{color:"black"}} type={type} value={password} onChange={(e) => setPassword(e.target.value)} maxLength={"15"} required />
                          <span class="flex justify-around items-center" onClick={handleToggle}>
                            <Icon class="absolute mr-10" icon={icon} size={20} style={{marginRight:"10px",marginTop:"10px"}} />
                          </span>
                          <span/>
                        <label style={{color:"black"}}>Password</label>
                        </div>
                        <button type='submit' className='submit'>Login</button>    
                        <div className="fpLabel" style={{ color: "black" }}>Forgot password? <NavLink className={"pass-link"} onClick={() => { setLogin(!login); setForgotPassword(!forgotPassword); setAnser("");setNewPassword("");setConfirmPassword(""); }} >Reset</NavLink>
                      </div>
                        <div className="signup-link" style={{ color: "black" }}>
                        Not a member? <NavLink className={"signup-link1"} onClick={() => { setLogin(!login); setSignUp(!signup); }}>Signup now</NavLink>
                      </div>
                    </form>
                  </div>
                </td>
              </tr>
              </tbody></table>
          </div>
        </div>
      }
      {/* -----------------------------forgot password form-------------------------------------- */}
      {
        forgotPassword &&
        <div id="myModal-login" className="modal-login">
          <div className="modal-content-forgotPassword  " ref={forgotPasswordHide}>
            <div>
              <img className="banner-img-forgotPassword" src={passwordResetImg} alt='' />
            </div>
            <div className='fp-icon'>
              <img src={ResetIcon} alt='' style={{ height: '200px', width: '200px' }} />
            </div>
            <span className='goback' onClick={() => { setLogin(!login); hideFP(); }}><i class="fa-solid fa-arrow-left"></i></span>
            <span className="close close1" onClick={() => setForgotPassword(!forgotPassword)}>x</span><table className="login-tb">
              <tbody><tr>
                <td>
                  <div className="wrapper wrapper-forgotPassword">
                    <div className="title">
                      Reset Password
                    </div>
                    <form onSubmit={handleSubmitResetPassword}>
                        <div className="field">
                          {/* Email input */}
                          <input style={{ color: "black" }} type="email" value={email} onChange={(e) => setEmail(e.target.value)} required />
                          <span />
                          <label style={{ color: "black"}}>Email address</label>
                        </div>
                      <div className="field">
                        {/* answer input */}
                          <input style={{ color: "black" }} type="text" value={answer} onChange={handleAnswerInput} maxLength={"15"} required />
                          <p id="validationAnswer" style={{ position: "absolute", color: "red", paddingLeft: "0px", top: "93%" }}></p>
                        <span />
                        <label style={{color:"black"}}>Who is your Hero?</label>
                      </div>
                         <div className="field" style={{ display: "flex", justifyContent: "space-between" }}>
                            {/* Password input */}
                            <input type={type} style={{ color: "black" }} value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} maxLength={"15"} required />
                             <span class="flex justify-around items-center" onClick={handleToggle}>
                              <Icon class="absolute mr-10" icon={icon} size={20} style={{ marginRight: "10px", marginTop: "10px" }} />
                            </span>
                            <span />
                            <label style={{ color: "black" }}>New Password</label>
                          </div>
                        <div className="field">
                        <input style={{color:"black"}} type="text" value={newPassword} onChange={(e) => setNewPassword(e.target.value)} maxLength={"15"} required />
                        <span />
                        <label style={{color:"black"}}>Confirm Password</label>
                      </div>
                      <div>
                        <button type='submit' className='submit'>RESET</button>
                      </div>
                    </form>
                  </div>
                </td>
              </tr>
              </tbody></table>
          </div>
        </div>
      }
      {/* -----------------------------signup form-------------------------------------- */}
      {
        signup &&
        <div id="myModal-signup" className="modal-signup">
          <div className="modal-content-signup " ref={signupHide}>
            <div>
              <img className="banner-img1" src={signupImg} />
            </div>
            <div className="v-line" />
            <div className="signup-wlc-txt">
              <h1 className="wlc-title">Welcome!</h1>
              <p className="signup-wlc-para">Register your self to get notifications for exciting offers which helps your
                dream home come true!</p>
            </div>
            <span className="close close2" onClick={hidesignup}>x</span><table className="signup-tb">
              <tbody><tr>
                <td>
                  <div className="wrapper1">
                    <div className="title">
                      <h1>Sign-Up</h1>
                    </div>
                    <form onSubmit={handleSubmit}>
                      <div className="field">
                        <input type="text" value={name} onChange={handleNameInput} maxLength={"25"} required />
                          <p id="validationNameInput" style={{ position: "absolute", color: "red", paddingLeft: "0px", top: "95%" }}></p>
                        <span />
                        <label>Full name</label>
                      </div>
                      <div className="field">
                        {/* Email input */}
                        <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} required />
                        <span />
                        <label>Email address</label>
                      </div>
                        <div className="field" style={{ display: "flex", justifyContent: "space-between" }}>
                        {/* Password input */}
                        <input type={type} value={password} onChange={(e) => setPassword(e.target.value)} maxLength={"15"} required />
                          <span class="flex justify-around items-center" onClick={handleToggle}>
                            <Icon class="absolute mr-10" icon={icon} size={20} style={{ color: "#bebebe", marginRight: "10px", marginTop: "10px" }} />
                          </span>
                        <span />
                        <label>Password</label>
                      </div>
                      <div className="field">
                        <input type="text" value={number} onChange={handlePhoneInput} maxLength="10" minLength="10" required />
                        <span />
                        <label>Mobile Number</label>
                          <p id="validationPhoneInput" style={{ position: "absolute", color: "red", paddingLeft: "0px", top: "95%" }}></p>
                      </div>
                      <div className="field">
                        <input type="text" value={answer} onChange={handleAnswerInput} maxLength={"15"} required />
                        <span />
                        <label>Who is your Hero?</label>
                          <p id="validationAnswer" style={{ position: "absolute", color: "red", paddingLeft: "0px", top: "93%" }}></p>
                      </div>
                      <div>
                        {/* Submit button */}
                          <button type='submit' className='submit'>Sign-up</button>
                      </div>
                      <div className="signup-link">
                        Allready signedUP? <NavLink style={{color:"white"}} className={"signup-link1"} onClick={() => { setSignUp(!signup); setLogin(!login); }}>Login now</NavLink>
                      </div>
                      {/* Register buttons */}
                      {/* <div className="jump-pass">
                        <p>or sign up with:</p>
                        <button type="button" className="btn btn-link btn-floating mx-1">
                          <i className="fab fa-facebook-f" />
                        </button>
                        <button type="button" className="btn btn-link btn-floating mx-1">
                          <i className="fab fa-google" />
                        </button>
                        <button type="button" className="btn btn-link btn-floating mx-1">
                          <i className="fab fa-twitter" />
                        </button>
                        <button type="button" className="btn btn-link btn-floating mx-1">
                          <i className="fab fa-github" />
                        </button>
                      </div>*/}
                    </form>
                  </div></td>
              </tr>
              </tbody></table>
          </div>
        </div>
      }
    </div >


  )
}

export default Header