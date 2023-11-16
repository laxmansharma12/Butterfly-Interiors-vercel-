import React, { useState, useEffect, useRef } from 'react';
import contactImg from "../components/Layout/images/pop-img.jpg";
import Layouts from '../components/Layout/Layouts'
import Toggler from '../components/Layout/Toggler'
import Header from '../components/Layout/header';
import Footer from '../components/Layout/footer';
import { useAuth } from '../context/auth';
import toast from "react-hot-toast"
import emailjs from '@emailjs/browser';
const DesignWardrobe = () => {
    //---------------------contact------------------------------------------
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
        <Layouts title={"Wardrobe-Designs"}>
            <div className='Navbar-sticky'><Header data={FaqScroll} /></div>
            <div>
                <div className="toggler-sticky"> <Toggler /></div>
                <form className="modular-kitchen">
                    <div className="header">
                        <h1>Wardrobe Designs</h1>
                        <p>Check out popular wardrobe designs.</p>
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
                                            <img src="wardrobe-design/a1.jpg" height="350px" width="600px" />
                                        </div>
                                        <div className="carousel-item ">
                                            <img src="wardrobe-design/a2.jpg" height="350px" width="600px" />
                                        </div>
                                        <div className="carousel-item ">
                                            <img src="wardrobe-design/a3.jpg" height="350px" width="600px" />
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
                                            A Wardrobe With Attached Study-Cum-Dressing Unit
                                        </h3>
                                        <span>This floor-to-ceiling wardrobe is finished with a combination of walnut wood and white
                                            laminate.
                                            The wardrobe has a plethora of modular storage compartments. </span>
                                        <br></br>
                                        {a && <div>
                                            <h5>Special Features</h5>
                                            <li>
                                                This modern wardrobe is finished with walnut wood and white laminate.</li>
                                            <li>The wardrobe has separate types of compartments to maintain a clutter-free look.
                                            </li>
                                            <li>The four-door wardrobe has a combination of glass-front and handleless drawers for a
                                                modern appeal.</li>
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
                                            Sliding Door Wardrobe With An Attached Dresser Unit
                                        </h3>
                                        <span>This charming floor-to-ceiling ivory wardrobe has an uber-cool appeal to it.
                                            Its sliding-door mechanism provides a clutter-free and clean design that create
                                            a long-lasting impression.</span>
                                        <br></br>
                                        {b && <div>
                                            <h5>Special Features</h5>
                                            <li>An ivory wardrobe with a cutting-edge sliding doors mechanism.</li>
                                            <li>The wardrobe comes with a variety of compartments such as handleless drawers.</li>
                                            <li>The black mirrored glass strip adds a glamorous touch to the wardrobe.</li>
                                            <li>The wardrobe also comes with loft storage that efficiently uses space.</li>
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
                                        <button type="button" data-bs-target="#carouselExampleIndicators1" data-bs-slide-to={2} aria-label="Slide 3" />
                                    </div>
                                    <div className="carousel-inner">
                                        <div className="carousel-item active">
                                            <img src="wardrobe-design/b1.jpg" height="350px" width="600px" />
                                        </div>
                                        <div className="carousel-item ">
                                            <img src="wardrobe-design/b2.jpg" height="350px" width="600px" />
                                        </div>
                                        <div className="carousel-item ">
                                            <img src="wardrobe-design/b3.jpg" height="350px" width="600px" />
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
                    </div>
                    <div className="C">
                        <div className='row'>
                            <div className='col-lg-6'>
                                <div id="carouselExampleIndicators2" className="carousel slide" data-bs-ride="carousel">
                                    <div className="carousel-indicators">
                                        <button type="button" data-bs-target="#carouselExampleIndicators2" data-bs-slide-to={0} className="active" aria-current="true" aria-label="Slide 1" />
                                        <button type="button" data-bs-target="#carouselExampleIndicators2" data-bs-slide-to={1} aria-label="Slide 2" />
                                    </div>
                                    <div className="carousel-inner">
                                        <div className="carousel-item active">
                                            <img src="wardrobe-design/c1.jpg" height="350px" width="600px" />
                                        </div>
                                        <div className="carousel-item">
                                            <img src="wardrobe-design/c2.jpg" height="350px" width="600px" />
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
                                            A Wardrobe Designed With An In-built TV Unit
                                        </h3>
                                        <span>A white and brown wardrobe with sliding doors,
                                            a TV unit and hidden storage. This wardrobe is
                                            designed for a small bedroom.</span>
                                        <br></br>
                                        {c && <div>
                                            <h5>Special Features</h5>
                                            <li>A flip up TV panel with hidden storage behind.</li>
                                            <li>Push to open drawers take make storage simple and neat.</li>
                                            <li>Sliding doors lend a seamless look and is perfect for small rooms.</li>
                                        </div>
                                        }
                                        <span className='myBtn' onClick={() => setC(!c)}>{c == 1 ? "Explore Less" : "Explore More"}</span>
                                    </section>
                                    <a className="btn btn-primary Btn-contact" onClick={showContuctUs}>Get Quote</a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="D">
                        <div className='row'>
                            <div className='col-lg-6'>
                                <div className="details">
                                    <section>
                                        <h3>
                                            A Stunning Wardrobe Design That Comes With An Attached Workstation
                                        </h3>
                                        <span>This pink and white wardrobe boasts of a modern design with space-saving features.
                                            The sliding-door mechanism helps you save room while various drawers and racks help
                                            you efficiently organise your belongings.
                                        </span>
                                        <br></br>
                                        {d && <div>
                                            <h5>Special Features</h5>
                                            <li>A wardrobe design with a pink doors and a zig-zag pattern.</li>
                                            <li>The wardrobe has a sliding door mechanism to save space in the bedroom.</li>
                                            <li>Various drawers, shelves and racks help you neatly organise your stuff.</li>
                                            <li>The wardrobe has an attached study desk with an open box unit above to store books.
                                            </li>
                                            <li>The study desk in turn has an attached tall unit on one side with open shelves for
                                                extra display/storage space.</li>
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
                                            <img src="wardrobe-design/d1.jpg" height="350px" width="600px" />
                                        </div>
                                        <div className="carousel-item">
                                            <img src="wardrobe-design/d2.jpg" height="350px" width="600px" />
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
                    </div>
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
                                            <img src="wardrobe-design/e1.jpg" height="350px" width="600px" />
                                        </div>
                                        <div className="carousel-item">
                                            <img src="wardrobe-design/e2.jpg" height="350px" width="600px" />
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
                                            A Multi-Door Wardrobe With Smart Storage Options
                                        </h3>
                                        <span>A handleless three-door wardrobe in orange adds a pop of colour to the space.
                                            The intelligent storage option inside enhances the functionality of the room.</span>
                                        <br></br>
                                        {e && <div>
                                            <h5>Special Features</h5>
                                            <li>A functional three-door handleless wardrobe with a peppy orange front adds a chic
                                                touch to the space.</li>
                                            <li>The wardrobe has a portion with lots of vertical space to hang clothes.</li>
                                            <li>A sequence of closed drawers helps organise the room neatly without any clutter.
                                            </li>
                                        </div>
                                        }
                                        <span className='myBtn' onClick={() => setE(!e)}>{e == 1 ? "Explore Less" : "Explore More"}</span>
                                    </section>
                                    <a className="btn btn-primary Btn-contact" onClick={showContuctUs}>Get Quote</a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="F">
                        <div className='row'>
                            <div className='col-lg-6'>
                                <div className="details">
                                    <section>
                                        <h3>
                                            A Frosty White And Wooden Wardrobe With A Dressing Unit
                                        </h3>
                                        <span>This premium wardrobe design flaunts an impeccable combination of glossy frost
                                            white laminate and classic walnut. The floor-to-ceiling wardrobe has a four-door
                                            design with loft storage.</span>
                                        <br></br>
                                        {f && <div>
                                            <h5>Special Features</h5>
                                            <li>The wardrobe is finished with a combination of glossy ivory and classic walnut
                                                laminate.</li>
                                            <li>It has various types of storage compartments including an accessory tray.</li>
                                            <li>The wardrobe has an attached dressing unit with drawers.</li>
                                            <li>There are loft cabinets that provide more storage.</li>
                                            <li>The wardrobe has mesh baskets to keep linen.</li>
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
                                            <img src="wardrobe-design/f1.jpg" height="350px" width="600px" />
                                        </div>
                                        <div className="carousel-item">
                                            <img src="wardrobe-design/f2.jpg" height="350px" width="600px" />
                                        </div>
                                        <div className="carousel-item">
                                            <img src="wardrobe-design/f3.jpg" height="350px" width="600px" />
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
                    </div>
                </form>
                <div className="faqs" ref={FAQS}>
                    <h5>FAQs on Wardrobe Designs</h5>
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
        Question: "1. What is a modular wardrobe?",
        Answer: <p><span style={{ fontWeight: 400 }}>Modular wardrobes as the name suggests are easy fit storage
            spaces, can be made and dismantled easily, are sleek and run unobtrusively against
            walls. Unlike heavy wooden, almirahs that rarely deviated from a standard design,
            today's wardrobes are outfitted with glass, chrome and metal, in colours as varied as
            white to red and styles that go from L-shaped to parallel designs. Some of these
            contemporary modular wardrobes also have enhanced functionalities - retrofitted with a
            folding bed or table as a space-saving measure or floor to ceiling to maximise storage
            space.</span></p>,
    },
    {
        Question: "2. What are the most popular bedroom wardrobe designs today?",
        Answer: <p><span style={{ fontWeight: 400 }}>Contemporary designs are definitely the ones that are trendy.
            They can be found in most homes and complement interiors and design. Be it all glass,
            with sleek/rimless frames or a combination of textures, you can get creative to make
            your wardrobe an elegant statement piece. Wardrobes aren't just functional but reflect
            the design aesthetics of a homeowner. We do also find a taste for classical and early
            modernist designs, with trims and wood finish that work well for people who love these
            styles.</span></p>,
    },
    {
        Question: "3. Are walking closets/ wardrobes still popular? How does one go about designing it?",
        Answer: <p><span style={{ fontWeight: 400 }}>Closet wardrobes are popular, though it depends on the space
            one has. You can either choose a fully open wardrobe with a door to the walk-in closet
            or create a perception of a walk-in wardrobe by having closed units in space.</span></p>,
    },
    {
        Question: "4. How do I choose a wardrobe for my bedroom?",
        Answer: <p><span style={{ fontWeight: 400 }}>Wardrobes are essential pieces of bedroom furniture, that
            come a close second to your bed. Choosing one is not as easy as walking into a store or
            picking an idea of the internet. There are several factors to note before you choose a
            wardrobe for your bedroom. What it requires is a carefully thought out style and
            structure based on your requirements and lifestyle.</span></p>,
    },
    {
        Question: "5. How do you design a wardrobe?",
        Answer: <p><span style={{ fontWeight: 400 }}>There are several types of wardrobes you can design
            today based on your individual requirements and the type and size of the bedroom
            it will be placed in. However, one thing that is common, irrespective of the
            bedroom it is used in, is that wardrobes are frequently used. And every bedroom
            in your house needs a wardrobe that is easy to access, offers ample storage
            space, and blends in with the overall interior design of your bedroom.</span>
        </p>,
    },
    {
        Question: "6. How do I build a wardrobe for my bedroom?",
        Answer: <p><span style={{ fontWeight: 400 }}>There are several types of wardrobes you can
            design today based on your individual requirements and the type and size of
            the bedroom it will be placed in. However, one thing that is common,
            irrespective of the bedroom it is used in, is that wardrobes are frequently
            used. And every bedroom in your house needs a wardrobe that is easy to
            access, offers ample storage space, and blends in with the overall interior
            design of your bedroom. You can also look at our guide to wardrobe designs
            for different types of bedroom</span>
        </p>,
    }]

export default DesignWardrobe