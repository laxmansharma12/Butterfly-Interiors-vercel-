import React, { useState, useEffect, useRef } from 'react';
import Layouts from '../components/Layout/Layouts'
import Toggler from '../components/Layout/Toggler'
import contactImg from "../components/Layout/images/pop-img.jpg";
import Header from '../components/Layout/header';
import Footer from '../components/Layout/footer';
import { useAuth } from '../context/auth';
import toast from "react-hot-toast"
import emailjs from '@emailjs/browser';
const LivingRoomDesign = () => {
    //---------------------------contact-----------------------------------
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
    const [selected, setSelected] = useState();
    const [a, setA] = useState(false);
    const [b, setB] = useState(false);
    const [c, setC] = useState(false);
    const [d, setD] = useState(false);
    const [e, setE] = useState(false);
    const [f, setF] = useState(false);
    const toggle = (i) => {
        if (selected === i) {
            return setSelected(null);
        }
        setSelected(i);
    }
    //-----------------------------FAQS-SCROLL----------------------------------------------
    const FAQS = useRef(null);
    const FaqScroll = () => {
        FAQS.current?.scrollIntoView({ behavior: 'smooth', block: "center" });
    };
    //-----------------------------------------------------------------------
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
    //--------------------------------------------------------
    return (
        <Layouts title={"LivingRoom-Designs"}>
            <div className='Navbar-sticky'><Header data={FaqScroll} /></div>
            <div>
                <div className="toggler-sticky"> <Toggler /></div>
                <form className="modular-kitchen">
                    <div className="header">
                        <h1>Living Room Designs</h1>
                        <p>Check out popular Living Room Designs.</p>
                    </div>
                    <div className="A">
                        <div className='row'>
                            <div className='col-lg-6'>
                                <div id="carouselExampleIndicators" className="carousel slide" data-bs-ride="carousel">
                                    <div className="carousel-indicators">
                                        <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to={0} className="active" aria-current="true" aria-label="Slide 1" />
                                        <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to={1} aria-label="Slide 2" />
                                        <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to={2} aria-label="Slide 3" />
                                    </div>
                                    <div className="carousel-inner">
                                        <div className="carousel-item active">
                                            <img src="living-room/a1.jpg" height="350px" width="600px" />
                                        </div>
                                        <div className="carousel-item">
                                            <img src="living-room/a2.jpg" height="350px" width="600px" />
                                        </div>
                                        <div className="carousel-item">
                                            <img src="living-room/a3.jpg" height="350px" width="600px" />
                                        </div>
                                    </div>
                                    <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
                                        <span className="carousel-control-prev-icon" aria-hidden="true" />
                                        <span className="visually-hidden">Previous</span>
                                    </button>
                                    <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
                                        <span className="carousel-control-next-icon" aria-hidden="true" />
                                        <span className="visually-hidden">Next</span>
                                    </button>
                                </div>
                            </div>
                            <div className='col-lg-6'>
                                <div className="details">
                                    <section>
                                        <h3>
                                            An Industrial Rustic Living Room In Soothing Earthy Tones
                                        </h3>
                                        <span>This is a spacious, orderly living room setup in a neutral colour scheme with a pop of
                                            yellow. The living room is equipped with a TV unit finished in dark wood laminate and
                                            storage cabinets at the bottom. A white brick wall brings in a mix of textures to the
                                            space.</span>
                                        <br></br>
                                        {a && <div>
                                            <h5>Special Features</h5>
                                            <li>The TV unit has a TV unit finished in dark wood and white laminate with handleless
                                                drawer storage.</li>
                                            <li>A large sectional sofa in beige makes this space feel comfortable and warm.</li>
                                            <li>A foldable centre table completes the look of this space.</li>
                                        </div>
                                        }
                                        <span className='myBtn' onClick={() => setA(!a)}>{a == 1 ? "Explore Less" : "Explore More"}</span>
                                    </section>
                                    <a className="btn btn-primary Btn-contact" onClick={showContuctUs}>Get Quote</a>
                                </div>
                            </div>
                        </div>

                    </div>
                    <div className="B">
                        <div className='row'>
                            <div className='col-lg-6'>
                                <div className="details">
                                    <section>
                                        <h3>
                                            A Modern Minimalist Living Room With TV Unit And Bookshelf
                                        </h3>
                                        <span>Designed in neutral tones of beige and cream, this living room boasts modern luxury
                                            and cosiness. The grand living space features a lovely TV unit with a cabinet as well as
                                            a wall-mounted bookshelf for leisurely evenings.</span>
                                        <br></br>
                                        {b && <div>
                                            <h5>Special Features</h5>
                                            <li>The TV unit is designed with a sleek cabinet below with open shelves and drawers at
                                                the bottom. It is complemented with a floating shelf above.</li>
                                            <li>The living room comprises of a geometric 3D wall on the accent wall and the adjacent
                                                bookshelf wall as well.</li>
                                        </div>
                                        }
                                        <span className='myBtn' onClick={() => setB(!b)}>{b == 1 ? "Explore Less" : "Explore More"}</span>
                                    </section>
                                    <a className="btn btn-primary Btn-contact" onClick={showContuctUs}>Get Quote</a>
                                </div>
                            </div>
                            <div className='col-lg-6'>
                                <div id="carouselExampleIndicators1" className="carousel slide" data-bs-ride="carousel">
                                    <div className="carousel-indicators">
                                        <button type="button" data-bs-target="#carouselExampleIndicators1" data-bs-slide-to={0} className="active" aria-current="true" aria-label="Slide 1" />
                                        <button type="button" data-bs-target="#carouselExampleIndicators1" data-bs-slide-to={1} aria-label="Slide 2" />
                                    </div>
                                    <div className="carousel-inner">
                                        <div className="carousel-item active">
                                            <img src="living-room/b1.jpg" height="350px" width="600px" />
                                        </div>
                                        <div className="carousel-item">
                                            <img src="living-room/b2.jpg" height="350px" width="600px" />
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
                            </div>
                        </div>

                    </div >
                    <div className="C">
                        <div className='row'>
                            <div className='col-lg-6'>
                                <div id="carouselExampleIndicators2" className="carousel slide" data-bs-ride="carousel">
                                    <div className="carousel-indicators">
                                        <button type="button" data-bs-target="#carouselExampleIndicators2" data-bs-slide-to={0} className="active" aria-current="true" aria-label="Slide 1" />
                                        <button type="button" data-bs-target="#carouselExampleIndicators2" data-bs-slide-to={1} aria-label="Slide 2" />
                                        <button type="button" data-bs-target="#carouselExampleIndicators2" data-bs-slide-to={2} aria-label="Slide 3" />
                                    </div>
                                    <div className="carousel-inner">
                                        <div className="carousel-item active">
                                            <img src="living-room/c1.jpg" height="350px" width="600px" />
                                        </div>
                                        <div className="carousel-item ">
                                            <img src="living-room/c2.jpg" height="350px" width="600px" />
                                        </div>
                                        <div className="carousel-item">
                                            <img src="living-room/c3.jpg" height="350px" width="600px" />
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
                            </div>
                            <div className='col-lg-6'>
                                <div className="details">
                                    <section>
                                        <h3>
                                            A WFH Friendly Living Room For Working Professionals
                                        </h3>
                                        <span>This contemporary living room boasts a striking combination of whites, blues and greys
                                            to create the perfect atmosphere. It works as a multi-functional room with bookshelves,
                                            study and work unit alongside a TV unit, perfect for young urban couples and working
                                            professionals.</span>
                                        <br></br>
                                        {c && <div>
                                            <h5>Special Features</h5>
                                            <li>A contemporary living room with mid-century furnishing.
                                            </li>
                                            <li>The seating features a 3-seater sofa, a comfortable accent chair and two-tiered
                                                wooden round coffee table in mid-century design.</li>
                                            <li>The study/work unit comprises a desk with a pull-to-open drawers and an EAMES chair
                                                with a comfortable backrest.
                                            </li>
                                        </div>
                                        }
                                        <span className='myBtn' onClick={() => setC(!c)}>{c == 1 ? "Explore Less" : "Explore More"}</span>
                                    </section>
                                    <a className="btn btn-primary Btn-contact" onClick={showContuctUs}>Get Quote</a>
                                </div>
                            </div>
                        </div>
                    </div >
                    <div className="D">
                        <div className='row'>
                            <div className='col-lg-6'>
                                <div className="details">
                                    <section>
                                        <h3>
                                            An Industrial Style Living Room Design
                                        </h3>
                                        <span>This spacious living room design is a perfect blend of raw and refined interiors. The
                                            space incorporates a combination of exposed brick wall, rustic finish and stylish matte
                                            black, setting a stage for a dramatic aesthetic.
                                        </span>
                                        <br></br>
                                        {d && <div>
                                            <h5>Special Features</h5>
                                            <li>Rustic finish L-shaped TV unit with a mix of open shelves and drawers</li>
                                            <li>Leather sectional sofa with matte black legs</li>
                                            <li>Industrial-style wall art and centre table to complement the sofa</li>
                                        </div>
                                        }
                                        <span className='myBtn' onClick={() => setD(!d)}>{d == 1 ? "Explore Less" : "Explore More"}</span>
                                    </section>
                                    <a className="btn btn-primary Btn-contact" onClick={showContuctUs}>Get Quote</a>
                                </div>
                            </div>
                            <div className='col-lg-6'>
                                <div id="carouselExampleIndicators3" className="carousel slide" data-bs-ride="carousel">
                                    <div className="carousel-indicators">
                                        <button type="button" data-bs-target="#carouselExampleIndicators3" data-bs-slide-to={0} className="active" aria-current="true" aria-label="Slide 1" />
                                        <button type="button" data-bs-target="#carouselExampleIndicators3" data-bs-slide-to={1} aria-label="Slide 2" />
                                    </div>
                                    <div className="carousel-inner">
                                        <div className="carousel-item active">
                                            <img src="living-room/d1.jpg" height="350px" width="600px" />
                                        </div>
                                        <div className="carousel-item">
                                            <img src="living-room/d2.jpg" height="350px" width="600px" />
                                        </div>
                                    </div>
                                    <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators3" data-bs-slide="prev">
                                        <span className="carousel-control-prev-icon" aria-hidden="true" />
                                        <span className="visually-hidden">Previous</span>
                                    </button>
                                    <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators3" data-bs-slide="next">
                                        <span className="carousel-control-next-icon" aria-hidden="true" />
                                        <span className="visually-hidden">Next</span>
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div >
                    <div className="E">
                        <div className='row'>
                            <div className='col-lg-6'>
                                <div id="carouselExampleIndicators5" className="carousel slide" data-bs-ride="carousel">
                                    <div className="carousel-indicators">
                                        <button type="button" data-bs-target="#carouselExampleIndicators5" data-bs-slide-to={0} className="active" aria-current="true" aria-label="Slide 1" />
                                        <button type="button" data-bs-target="#carouselExampleIndicators5" data-bs-slide-to={1} aria-label="Slide 2" />
                                    </div>
                                    <div className="carousel-inner">
                                        <div className="carousel-item active">
                                            <img src="living-room/e1.jpg" height="350px" width="600px" />
                                        </div>
                                        <div className="carousel-item">
                                            <img src="living-room/e2.jpg" height="350px" width="600px" />
                                        </div>
                                    </div>
                                    <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators5" data-bs-slide="prev">
                                        <span className="carousel-control-prev-icon" aria-hidden="true" />
                                        <span className="visually-hidden">Previous</span>
                                    </button>
                                    <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators5" data-bs-slide="next">
                                        <span className="carousel-control-next-icon" aria-hidden="true" />
                                        <span className="visually-hidden">Next</span>
                                    </button>
                                </div>
                            </div>
                            <div className='col-lg-6'>
                                <div className="details">
                                    <section>
                                        <h3>
                                            A Modern Living Room With A Japandi Vibe
                                        </h3>
                                        <span>This minimalistic living room design, adorned in neutral tones, has the power to
                                            transform any small space into a charming haven. The inclusion of simple wooden
                                            furniture, complemented by a soothing blue, evokes a relaxing and zen-like
                                            ambiance.</span>
                                        <br></br>
                                        {e && <div>
                                            <h5>Special Features</h5>
                                            <li>A modular TV unit in white with a combination of open box shelves and drawers</li>
                                            <li>A floating box shelf for displaying books and decor</li>
                                            <li>The TV unit extends into an open storage unit that utilises corner space</li>
                                        </div>
                                        }
                                        <span className='myBtn' onClick={() => setE(!e)}>{e == 1 ? "Explore Less" : "Explore More"}</span>
                                    </section>
                                    <a className="btn btn-primary Btn-contact" onClick={showContuctUs}>Get Quote</a>
                                </div>
                            </div>
                        </div>
                    </div >
                    <div className="F">
                        <div className='row'>
                            <div className='col-lg-6'>
                                <div className="details">
                                    <section>
                                        <h3>
                                            A Modern Living Room With A Spacious TV Unit
                                        </h3>
                                        <span>This uber cool living room in gray and sage green with delightful pops of peach
                                            features an elaborate entertainment unit as the focal point. The perfect combination of
                                            ample storage and seating space creates an entertainment hub for hosting friends and
                                            family.
                                        </span>
                                        <br></br>
                                        {f && <div>
                                            <h5>Special Features</h5>
                                            <li>A TV unit in grey with open shelves above and beneath for displaying art and
                                                electronics.</li>
                                            <li>Identical storage cabinets on both sides of the TV unit with shutter units, drawers
                                                and an open shelf.</li>
                                            <li>A comfortable sofa and a bench in green with comfortable cushions adding a pop of
                                                colour.</li>
                                        </div>
                                        }
                                        <span className='myBtn' onClick={() => setF(!f)}>{f == 1 ? "Explore Less" : "Explore More"}</span>
                                    </section>
                                    <a className="btn btn-primary Btn-contact" onClick={showContuctUs}>Get Quote</a>
                                </div>
                            </div>
                            <div className='col-lg-6'>
                                <div id="carouselExampleIndicators4" className="carousel slide" data-bs-ride="carousel">
                                    <div className="carousel-indicators">
                                        <button type="button" data-bs-target="#carouselExampleIndicators4" data-bs-slide-to={0} className="active" aria-current="true" aria-label="Slide 1" />
                                        <button type="button" data-bs-target="#carouselExampleIndicators4" data-bs-slide-to={1} aria-label="Slide 2" />
                                        <button type="button" data-bs-target="#carouselExampleIndicators4" data-bs-slide-to={2} aria-label="Slide 3" />
                                    </div>
                                    <div className="carousel-inner">
                                        <div className="carousel-item active">
                                            <img src="living-room/f1.jpg" height="350px" width="600px" />
                                        </div>
                                        <div className="carousel-item">
                                            <img src="living-room/f2.jpg" height="350px" width="600px" />
                                        </div>
                                    </div>
                                    <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators4" data-bs-slide="prev">
                                        <span className="carousel-control-prev-icon" aria-hidden="true" />
                                        <span className="visually-hidden">Previous</span>
                                    </button>
                                    <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators4" data-bs-slide="next">
                                        <span className="carousel-control-next-icon" aria-hidden="true" />
                                        <span className="visually-hidden">Next</span>
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div >
                </form >
                <div className="faqs" ref={FAQS}>
                    <h5>FAQs on Living Room Designs</h5>
                    <div className='QNA'>
                        {data.map((item, i) => (
                            <div className='item'>
                                <div className='Question' onClick={() => toggle(i)}>
                                    <h6>{item.Question}</h6>
                                    <span>{selected === i ? "-" : "+"}</span>
                                </div>
                                <div className={selected === i ? "Answer show" : "Answer"}>{item.Answer}</div>
                            </div>
                        ))}
                    </div>
                </div>
            </div >
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
            <Footer data={FaqScroll} />
        </Layouts >
    )
}
const data = [
    {
        Question: "1. What are the different living room styles?",
        Answer: <p><span style={{ fontWeight: 400 }}>The most common interior design styles for living room
            include: modern, minimalistic, eclectic, rustic, industrial, traditional, Scandinavian,
            Mid Century and Asian styles.</span></p>,
    },
    {
        Question: "2. What are best colors for living room?",
        Answer: <p><span style={{ fontWeight: 400 }}>Living room colour combinations include class blue, white and
            grey, lavender and white, all white, black and white, white and beige, yellow and
            white.</span></p>,
    },
    {
        Question: "3. What should I put on my living room walls?",
        Answer: <p><span style={{ fontWeight: 400 }}>Living room walls must not be left bland or boring! You can
            style your living room walls with decor, art/ painting, wallpaper, shelves, a vertical
            garden with indoor plants, wall paint or wall textures, mirrors, murals, objects (like
            your old bike!) or mount that TV set!</span></p>,
    },
    {
        Question: "4. How can I make my living room look bigger?",
        Answer: <p><span style={{ fontWeight: 400 }}>A few common interior design tricks to make a living room is
            to use a lot of white on the walls or even furnishings. Mirrors lend the illusion of
            space too so mount some on one wall. Use corners well and place furniture strategically
            here. Also, choose the right furniture such as an L shaped sofa that gives more seating
            and takes up less space.</span></p>,
    },
    {
        Question: "5. How do you arrange furniture in a small living room?",
        Answer: <p><span style={{ fontWeight: 400 }}>Small living rooms require multifunctional furniture that saves
            space.
            To utilise small living rooms well consider leg-free pieces of furniture and attach units
            directly to the wall. We are talking about wall mounted shelves. Also opt for tables with lean
            exposed legs and tight-back sofas as they are friendlier in spaces that are small.</span></p>,
    },
    {
        Question: "6. How can I make my living room beautiful?",
        Answer: <p><span style={{ fontWeight: 400 }}>A living room can be made to look beautiful in multiple ways. Apart
            from decor, artwork, paintings and furnishings other elements like lighting fixtures, flooring,
            wall paint/ textures, ceiling design and furniture play an important role in beautifying a
            space. Also, how you place and arrange everything together makes all the difference too.</span>
        </p>,
    }]

export default LivingRoomDesign