import React, { useEffect, useRef, useState } from 'react'
import { NavLink, useLocation } from 'react-router-dom';
import contactImg from "./images/pop-img.jpg";
import { useAuth } from '../../context/auth';
import toast from "react-hot-toast";
import emailjs from '@emailjs/browser';
const Footer = (props) => {
  //---------------------contact-----------------------------------------
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
  //----------------------------------------------------------------------------
  const contactHide = useRef();
  const [contact, setContact] = useState(false);
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (contactHide.current && !contactHide.current.contains(event.target)) {
        setContact(!contact);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    }
  });
  //-----------------------------------------------------------------------
  const [auth, setAuth] = useAuth();
  const showContuctUs = () => {
    !auth.user ? toast.error("Please login before contacting us!") : setContact(!contact);
  }
  //--------------------------Book-consoltation-------------------------------
  const consultation = useRef();
  const sendEmail = (e) => {
    e.preventDefault();
    emailjs.sendForm('service_mcsan74', 'template_2hne65o', consultation.current, 'q0YpF476IzzUw41dx')
      .then(() => {
        e.target.reset();
        setContact(!contact);
        toast.success("Your consoltation booked successfully!");
      }, (error) => {

      });
  };
  //---------------------for-phone-name-validation---------------
  const [name, setName] = useState("");
  const [number, setNumber] = useState("");
  const handlePhoneInput = (e) => {
    const regex = /^[0-9\b]+$/;
    if (e.target.value === "" || regex.test(e.target.value)) {
      setNumber(e.target.value);
    }
  };
  const handleNameInput = (e) => {
    const regex = /^[A-Za-z\s]+$/;
    if (e.target.value === "" || regex.test(e.target.value)) {
      setName(e.target.value);
    }
  };
  //-----------------------------------------------------------------------
  return (
    <>
      <div className="footer">
        <h1>Ready To Design Your Dream Home?</h1>
        <a className="btn btn-primary Btn-contact" onClick={showContuctUs}>Book Free Consultation</a>
        <table style={{ marginRight: "100px" }}>
          <tbody>
            <tr className='row'>
              <td className='col-lg-3 col-md-3'>

                <li><NavLink className="footer-NavText" to="/">Home</NavLink></li>
                {hideNavFaqs && <li><NavLink className="footer-NavText qs" onClick={props.data}>FAQs</NavLink></li>}
                {hideNavReviews && <li><NavLink className="footer-NavText" onClick={props.data1}>Reviews</NavLink></li>}

              </td>
              <td className='col-lg-3 col-md-3'>

                <li><NavLink className="footer-NavText" to="/recent-projects">Recent Projects</NavLink></li>
                <li><NavLink className="footer-NavText" to="/about">About Us</NavLink></li>
                <li><NavLink className="footer-NavText Btn-contact" onClick={showContuctUs}>Contact Us</NavLink></li>

              </td>
              <td className='col-lg-3 col-md-3'>

                <li><NavLink className="footer-NavText" to="/kitchen-design" >Kitchen Designs </NavLink></li>
                <li><NavLink className="footer-NavText" to="/wardrobe-design" >Wardrobe Designs</NavLink></li>
                <li><NavLink className="footer-NavText" to="/bedroom-design" >Bedroom Designs</NavLink></li>

              </td>
              <td className='col-lg-3 col-md-3'>

                <li><NavLink className="footer-NavText" to="/livingroom-design" >Living Room Designs</NavLink></li>
                <li><NavLink className="footer-NavText" to="/diningroom-design" >Dining Room Designs</NavLink></li>
                <li><NavLink className="footer-NavText" to="/bathroom-design" >Bathroom Design</NavLink></li>

              </td>
            </tr>
          </tbody></table>
        <div className="footer-copiright">
          <p>
            © Copyright 2023 Laxman Pvt. Ltd. All rights reserved.
          </p>
        </div>
      </div>
      {/* -----------------------------contact form-------------------------------------- */}
      {/* The Modal contact */}
      {
        contact &&
        <div id="myModal-contact" className="modal">
          {/* Modal content */}
          <div className="modal-content" ref={contactHide} x>
            <span className="close" onClick={() => setContact(!contact)}>x</span>

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
                        <input type="text" value={name} onChange={handleNameInput} placeholder="Name" name="client_name" className="text-input text-input-name" autoComplete="off" maxLength={"15"} style={{ paddingLeft: "5px", boxShadow: "none" }} />
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
                              <input value={number} onChange={handlePhoneInput} type="tel" style={{ paddingLeft: "2px" }} placeholder="Mobile Number" name="mob_number" id="popup-phone" className="mobile-phone-ext text-input" autoComplete="off" maxLength={"10"} />
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
    </>
  )
}

export default Footer