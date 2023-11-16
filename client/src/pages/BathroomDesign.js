import React, { useState, useEffect, useRef } from 'react';
import contactImg from "../components/Layout/images/pop-img.jpg";
import Layouts from '../components/Layout/Layouts';
import Toggler from "../components/Layout/Toggler";
import Header from '../components/Layout/header';
import Footer from '../components/Layout/footer';
import { useAuth } from '../context/auth';
import toast from "react-hot-toast";
import emailjs from '@emailjs/browser';
const BathroomDesign = () => {
    //--------------------contact-----------------------------------------
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
        <Layouts title={"Bathroom-Designs"}>
            <div className='Navbar-sticky'><Header data={FaqScroll} /></div>
            <div className="toggler-sticky"> <Toggler /></div>
            <div>
                <form className="modular-kitchen">
                    <div className="header row">
                        <h1 className='col-lg-12'>Bathroom Designs</h1>
                        <p className='col-lg-12'>Check out popular Bathroom Designs.</p>
                    </div>
                    <div className="A">
                        <div className='row'>
                            <div className='col-lg-6'>
                                <div id="carouselExampleIndicators" className="carousel DG slide" data-bs-ride="carousel">
                                    <div className="carousel-indicators">
                                        <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to={0} className="active" aria-current="true" aria-label="Slide 1" />
                                        <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to={1} aria-label="Slide 2" />
                                    </div>
                                    <div className="carousel-inner">
                                        <div className="carousel-item active">
                                            <img src="bathroom-design/a1.jpg" height="350px" width="100%" />
                                        </div>
                                        <div className="carousel-item">
                                            <img src="bathroom-design/a2.jpg" height="350px" width="100%" />
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
                                            A Small Modern Organic Bathroom Design With Marble Tiles
                                        </h3>
                                        <span>This classy looking bathroom is designed with a white and brown colour scheme. Marble
                                            tiles add a luxue touch to the space and a custom designed vanity provides ample
                                            storage.</span>
                                        <br></br>
                                        {a && <div>
                                            <h5>Special Features</h5>
                                            <li>A full-length custo mised vanity with handleless drawers, cabinets and a laundry section.</li>
                                            <li>A shower area with a glass partition and wall niches to store essentials.</li>
                                            <li>A marble countertop with mirror back lighting.</li>
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
                                            A Minimalistic Style Bathroom Design In Grey Tones With Wood Finishes
                                        </h3>
                                        <span>This elegant bathroom is designed with on the principles of minimalism. The colour
                                            scheme is grey for the tiles and wood finishes on cabinets add a touch of warmth to this
                                            space. Rose-gold coloured lighting adds a soft glow.</span>
                                        <br></br>
                                        {b && <div>
                                            <h5>Special Features</h5>
                                            <li>A floating vanity with drawers.</li>
                                            <li>A laundry unit.</li>
                                            <li>Open shelf storage near the sink to store personal care essentials.</li>
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
                                            <img src="bathroom-design/b1.jpg" height="350px" width="600px" />
                                        </div>
                                        <div className="carousel-item">
                                            <img src="bathroom-design/b2.jpg" height="350px" width="600px" />
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
                                        <button type="button" data-bs-target="#carouselExampleIndicators2" data-bs-slide-to={2} aria-label="Slide 3" />
                                    </div>
                                    <div className="carousel-inner">
                                        <div className="carousel-item active">
                                            <img src="bathroom-design/c1.jpg" height="350px" width="600px" />
                                        </div>
                                        <div className="carousel-item">
                                            <img src="bathroom-design/c2.jpg" height="350px" width="600px" />
                                        </div>
                                        <div className="carousel-item">
                                            <img src="bathroom-design/c3.jpg" height="350px" width="600px" />
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
                                            A Small Bathroom Design With Slate Tiles And A Space Saving Vanity Unit
                                        </h3>
                                        <span>This sleek, stylish bathroom features charcoal coloured slate tiles with a smart space
                                            saving vanity unit. Storage options have been custom designed to suit lifestyle and
                                            budget of the user.</span>
                                        <br></br>
                                        {c && <div>
                                            <h5>Special Features</h5>
                                            <li>A tall customised vanity unit with cabinets, drawers, and an overhead loft storage.
                                            </li>
                                            <li>A pull-out unit with the vanity makes use of corner space against the wall.</li>
                                            <li>Mirror back lighting.</li>
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
                                            A Fun Bathroom Design With Yellow Patterned Tiles And A Wooden Vanity
                                        </h3>
                                        <span>This fun mix of a sunny yellow and walnut finished cabinets add a bright pop of colour
                                            in an otherwise white bathroom. An inviting bathroom design like this is perfect for a
                                            kids' or guest bathroom.
                                        </span>
                                        <br></br>
                                        {d && <div>
                                            <h5>Special Features</h5>
                                            <li>A vanity with marble counter top, a bowl sink, and mirror back lighting.</li>
                                            <li>A wall mounted storage units floor space.</li>
                                            <li>A shower area with bright yellow patterned tiles and a glass partition.</li>
                                            <li>Use of marble tiles on the floor and walls.</li>
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
                                            <img src="bathroom-design/d1.jpg" height="350px" width="600px" />
                                        </div>
                                        <div className="carousel-item">
                                            <img src="bathroom-design/d2.jpg" height="350px" width="600px" />
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
                                            <img src="bathroom-design/e1.jpg" height="350px" width="600px" />
                                        </div>
                                        <div className="carousel-item">
                                            <img src="bathroom-design/e2.jpg" height="350px" width="600px" />
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
                                            An Understated Modern Bathroom Design With Ample Storage And A Laundry Area
                                        </h3>
                                        <span>This modern utilitarian bathroom design combines the functionality of a bathroom and a
                                            laundry area.</span>
                                        <br></br>
                                        {e && <div>
                                            <h5>Special Features</h5>
                                            <li>A customised laundry section in light wood with a variety of storage solutions.</li>
                                            <li>A floating vanity designed with a wood finish and twin drawers.</li>
                                            <li>Shower unit with a glass partition along with wall niches for shower essentials.
                                            </li>
                                            <li>Anti-slip tiles for flooring.</li>
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
                                            A Modern Classical Bathroom With A Blue Eggshell Wall Finish And Ceramic Tiles
                                        </h3>
                                        <span>A modern classical bathroom designed in white and navy make this space look chic and
                                            classy. Ample storage options makes it a functional bathroom where you can neatyl
                                            organise all your bathing and personal care essentials.</span>
                                        <br></br>
                                        {f && <div>
                                            <h5>Special Features</h5>
                                            <li>A vanity with dual-drawers and open shelf for storage.</li>
                                            <li>A shower area with glass partition and wall niches to store essentials.</li>
                                            <li>Ceramic tiles for the flooring and walls.</li>
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
                                            <img src="bathroom-design/f1.jpg" height="350px" width="600px" />
                                        </div>
                                        <div className="carousel-item">
                                            <img src="bathroom-design/f2.jpg" height="350px" width="600px" />
                                        </div>
                                        <div className="carousel-item">
                                            <img src="bathroom-design/f3.jpg" height="350px" width="600px" />
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
                    <h5>FAQs on Bathroom Designs</h5>
                    <div className='QNA'>
                        {QNA.map((item, i) => (
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
            <Footer data={FaqScroll} />
        </Layouts>
    )
}
const QNA = [
    {
        Question: "1. What should every bathroom have?",
        Answer: <p><span style={{ fontWeight: 400 }}>Every bathroom needs the
            following basic elements to make it functional: A
            toilet, a countertop with a sink, a vanity unit, anti
            skid flooring, shower fixtures, good lighting, corner
            shelves, cabinets, towel rods, and shower niches.</span></p>,
    },
    {
        Question: "2. How can I make my bathroom look luxurious?",
        Answer: <p><span style={{ fontWeight: 400 }}>Even the most simple bathroom
            can be made to look expensive and luxurious with the
            right design hacks. Use marble for your countertop or
            bathtub as this natural stones lends a luxurious appeal
            to it. Further you can incorporate patterned tiled
            flooring with gold fixtures and accents to add a
            luxurious touch.</span></p>,
    },
    {
        Question: "3. What kind of toilet do I choose for my bathroom?",
        Answer: <p><span style={{ fontWeight: 400 }}>This is the first piece of
            sanitary ware you need to work on as you plan the
            plumbing requirements for your bathroom. Although it
            will be the last to be installed in your bathroom it is
            important to work out where you want it placed as you
            start planning your bathroom interiors. Toilet designs
            have evolved from the standard and western style to
            several advanced ones. So as a homeowner you will be
            spoilt for choice even with the most basic element
            needed in every bathroom. The options these days include
            wall-mounted, floor-standing, rimless, close-coupled,
            and one-piece toilets. You can pick the right one based
            on your personal needs and comfort. For instance, if the
            user of the bathroom is an elderly person or a kid, a
            wall-mounted or rimmed seat will be an ideal pick. This
            is because wall-mounted toilets can be fixed to your
            preference while rimmed toilet seats avoid the risk of
            slipping.</span></p>,
    },
    {
        Question: "4. What colors are good for a bathroom?",
        Answer: <p><span style={{ fontWeight: 400 }}>The best colours for a
            bathroom are white and navy, white and beige, grey and
            white, white, pink and copper, green, white and gold,
            black and white, all white, white and gold, muave, red
            and rose gold. Check out Bathroom Color Ideas For 2020.</span></p>,
    },
    {
        Question: "5. What are the different types of flooring materials available for a bathroom?",
        Answer: <p><span style={{ fontWeight: 400 }}>Picking the right material
            for your bathroom floor is much more than choosing a
            colour scheme or just some shiny tiles. The idea is to
            design a floor that is durable, low on maintenance,
            resistant to moisture and looks stylish too. There's a
            variety of bathroom flooring materials you can choose from. Some
            popular ones are porcelain, ceramic, marble, anti slip
            tiles, vitrified tiles, granite, and slate tiles.</span>
        </p>,
    },
    {
        Question: "6. How much does it cost to remodel a small bathroom?",
        Answer: <p><span style={{ fontWeight: 400 }}>The cost to remodel a bathroom purely depends on the types of
            material and finishes you use for the cabinets and shelves.
            Also, if you choose you redo floor and wall tiling then your
            costs will go up significantly.</span></p>,
    }
]
export default BathroomDesign