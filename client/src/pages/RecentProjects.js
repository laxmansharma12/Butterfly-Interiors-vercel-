import React, { useState, useEffect, useRef } from 'react';
import contactImg from "../components/Layout/images/pop-img.jpg";
import Layouts from '../components/Layout/Layouts'
import Header from '../components/Layout/header'
import Footer from '../components/Layout/footer'
import { useAuth } from '../context/auth';
import toast from "react-hot-toast"
import emailjs from '@emailjs/browser';
const RecentProjects = () => {
    //--------------------contact-----------------------------------------
    const contactHide = useRef();
    const [contact, setContact] = useState(false);
    useEffect(() => {
        // window.scrollTo(0, 0);
        // window.history.scrollRestoration = 'manual'
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
    const [b, setB] = useState(false);
    const [a, setA] = useState(false);
    const [auth, setAuth] = useAuth();
    const showContuctUs = () => {
        !auth.user ? toast.error("Please login before contacting us!") : setContact(!contact);
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
    return (
        <Layouts title={"About-Us"}>
            <div className='Navbar-sticky'><Header /></div>
            <div className='recent-project row'>
                <div className="row RP-top-bar">
                    <div className="col-lg-12 col-sm-12">
                        <div className="bg-text-title">
                            <h2>Recent Projects</h2>
                        </div>
                    </div>
                </div>

                <div className="detail-reviews col-lg-12">
                    <div id="carouselExampleIndicators1" className="carousel slide" data-bs-ride="carousel">
                        <div className="carousel-indicators">
                            <button type="button" data-bs-target="#carouselExampleIndicators1" data-bs-slide-to={0} className="active" aria-current="true" aria-label="Slide 1" />
                            <button type="button" data-bs-target="#carouselExampleIndicators1" data-bs-slide-to={1} aria-label="Slide 2" />
                            <button type="button" data-bs-target="#carouselExampleIndicators1" data-bs-slide-to={2} aria-label="Slide 3" />
                        </div>
                        <div className="carousel-inner">
                            <div className="carousel-item active">
                                <img src="bedroom-design/e1.jpg" height="400px" width="100%" />
                            </div>
                            <div className="carousel-item">
                                <img src="modular-kitchen/50.jpg" height="400px" width="100%" />
                            </div>
                            <div className="carousel-item">
                                <img src="living-room/e1.jpg" height="400px" width="100%" />
                            </div>
                        </div>
                        <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators1" data-bs-slide="prev">
                            <span className="carousel-control-prev-icon" aria-hidden="true" />
                            <span className="visually-hidden">Previous</span>
                        </button>
                        <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators1" data-bs-slide="next">
                            <span className="carousel-control-next-icon" aria-hidden="true" />
                            <span className="visually-hidden">Next</span>
                        </button>
                    </div>

                    <div className=" rp-details">
                        <section>
                            <div className='customers-heading'>
                                <h4>Mrs. Deepa Rajesh's 3 BHK Home In Bengaluru</h4>
                                <a className="btn btn-primary Btn-contact" onClick={showContuctUs}>Get Quote</a>
                            </div>
                            <br></br>
                            <p><span className='title'>Designed By:- </span><span className='name'>Laxman Sharma</span></p>
                            {a && <div style={{ display: 'block' }}>
                                <div className="project-detail-main-title">
                                    <h5>Project Details</h5>
                                </div>
                                <div className="project-detail-grid">
                                    <table>
                                        <tr>
                                            <td>
                                                <div className="project-detail-list">
                                                    <h5>Property Area</h5>
                                                    <p>Bengaluru</p>
                                                </div>
                                            </td>
                                            <td>
                                                <div style={{ margin: '10px' }}>
                                                    <h5>Property Type</h5>
                                                    <p>3 BHK</p>
                                                </div>
                                            </td>
                                        </tr>
                                    </table>
                                </div>

                                <div className="">
                                    <h5>Client Feedback</h5>
                                </div>
                                <span class="quote-mark">“</span>
                                <div className='review'>
                                    <span>Butterfly Interior's designs were very good. High quality products are used
                                        overall in the project. Feedbacks and concerns if any were solved immediately.
                                        The final outcome is great and suitable to every family member.
                                    </span>
                                </div>
                            </div>
                            }
                            <span className='myBtn-1' onClick={() => setA(!a)}>{a == 1 ? "Less Details" : "More Details.."}</span>
                        </section>
                    </div>
                </div >
                <br></br>
                <br></br>

                <div className="detail-reviews">
                    <div id="carouselExampleIndicators2" className="carousel slide" data-bs-ride="carousel">
                        <div className="carousel-indicators">
                            <button type="button" data-bs-target="#carouselExampleIndicators2" data-bs-slide-to={0} className="active" aria-current="true" aria-label="Slide 1" />
                            <button type="button" data-bs-target="#carouselExampleIndicators2" data-bs-slide-to={1} aria-label="Slide 2" />
                            <button type="button" data-bs-target="#carouselExampleIndicators2" data-bs-slide-to={2} aria-label="Slide 3" />
                        </div>
                        <div className="carousel-inner">
                            <div className="carousel-item active">
                                <img src="bedroom-design/f1.jpg" height="400px" width="100%" />
                            </div>
                            <div className="carousel-item ">
                                <img src="modular-kitchen/60.jpg" height="400px" width="100%" />
                            </div>
                            <div className="carousel-item">
                                <img src="living-room/b1.jpg" height="400px" width="100%" />
                            </div>
                        </div>
                        <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators2" data-bs-slide="prev">
                            <span className="carousel-control-prev-icon" aria-hidden="true" />
                            <span className="visually-hidden">Previous</span>
                        </button>
                        <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators2" data-bs-slide="next">
                            <span className="carousel-control-next-icon" aria-hidden="true" />
                            <span className="visually-hidden">Next</span>
                        </button>
                    </div>

                    <div className="rp-details">
                        <section>
                            <div className='customers-heading'>
                                <h4>Bhavana Thuppada's 2 BHK Home In Bengaluru</h4>
                                <a className="btn btn-primary Btn-contact" onClick={showContuctUs}>Get Quote</a>
                            </div>
                            <br></br>
                            <p><span className='title'>Designed By:- </span><span className='name'>Laxman Sharma</span></p>
                            {b && <div style={{ display: 'block' }}>
                                <div className="project-detail-main-title">
                                    <h5>Project Details</h5>
                                </div>
                                <div className="project-detail-grid">
                                    <table>
                                        <tr>
                                            <td>
                                                <div className="project-detail-list">
                                                    <h5>Property Area</h5>
                                                    <p>Bengaluru</p>
                                                </div>
                                            </td>
                                            <td>
                                                <div style={{ margin: '10px' }}>
                                                    <h5>Property Type</h5>
                                                    <p>3 BHK</p>
                                                </div>
                                            </td>
                                        </tr>
                                    </table>
                                </div>

                                <div className="">
                                    <h5>Client Feedback</h5>
                                </div>
                                <span class="quote-mark">“</span>
                                <div className='review'>
                                    <span>I recommend Butterfly interior to who all reading my review because they use High quality products in the project.
                                        Their services are very good and behavior really friendly.
                                    </span>
                                </div>
                            </div>
                            }
                            <span className='myBtn-1' onClick={() => setB(!b)}>{b == 1 ? "Less Details" : "More Details.."}</span>
                        </section>
                    </div>
                </div >
                <br></br>
                <br></br>
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
            <Footer />
        </Layouts >
    )
}

export default RecentProjects