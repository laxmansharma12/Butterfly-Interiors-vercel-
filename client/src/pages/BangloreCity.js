import React, { useState, useEffect, useRef } from 'react';
import Layouts from '../components/Layout/Layouts'
import Header from '../components/Layout/header'
import Footer from '../components/Layout/footer'
import contactImg from "../components/Layout/images/pop-img.jpg"
import { useAuth } from '../context/auth';
import toast from "react-hot-toast";
import emailjs from '@emailjs/browser';
const BangloreCity = () => {
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
    const [selected, setSelected] = useState();
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
    //--------------------------------------------------------
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
    return (
        <Layouts>
            <div className='Navbar-sticky'><Header data={FaqScroll} /></div>
            {/* --------------image------------------- */}
            <div className="box1" >
                <div className="centered">
                    <div className="first">
                        <h3>Best Home Interior Designers In Bengaluru</h3>
                    </div>
                    {/* <div class="first second">end-to-end home interiors</div> */}
                    <div className="third">
                        <h5>Dream Homes At Dream Budgets &amp; 10,000 Happy Customers</h5>
                    </div>
                    <div className="cta">
                        <a href="#contactUsModal" data-toggle="modal" data-target="#contactUsModal" className="cta-button" title="Book A Free Consultation" onClick={showContuctUs}>Book A Free Consultation</a>
                    </div>
                </div>

            </div>

            <div className=" box1-banner">
                <div className="row">
                    <div className="col-lg-4">
                        <div className="subbanner-img">
                            <img className="img-fluid" src="https://media.designcafe.com/wp-content/uploads/2022/07/27114426/interior-designers-in-bangalore-personalised-designs.png" alt="Interior designers in bangalore for personalised designs" />
                        </div>
                        <div className="subbanner-text">Personalised Designs</div>
                    </div>
                    <div className="col-lg-4">
                        <div className="subbanner-img">
                            <img className="img-fluid" src="https://media.designcafe.com/wp-content/uploads/2022/07/27114423/interior-design-company-bangalore-with-space-saving-desings.png" alt="Leading interior design company in bangalore provides 20% extra storage" />
                        </div>
                        <div className="subbanner-text">20% Extra Storage</div>
                    </div>
                    <div className="col-lg-4">
                        <div className="subbanner-img">
                            <img className="img-fluid" src="https://media.designcafe.com/wp-content/uploads/2022/07/27114420/home-interiors-bangalore-durable-modular-furniture.png" alt="Home interiors bangalore with a sustainable modular furniture" />
                        </div>
                        <div className="subbanner-text">Durable Modular Furniture</div>
                    </div>
                </div>
            </div>

            <div className='grid-DG-dining'>
                <h4 className='gridDesignTexts'>Designs For Every Budget And Lifestyle</h4>
                <h5>Smart Modular Kitchen Designs</h5>
                <div id="carouselExampleIndicators1" className="carousel slide home-carousel" data-bs-ride="carousel">
                    <div className="carousel-inner">
                        <div className="carousel-item active">
                            <div className="slide-DG">
                                <figure className="effect-zoe a">
                                    <img src="modular-kitchen/60.jpg" />

                                </figure>
                                <div className="d-none d-md-block">
                                    <figure className="effect-zoe">
                                        <img src="modular-kitchen/50.jpg" />
                                    </figure>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="cta">
                    <a href="#contactUsModal" onClick={showContuctUs} data-toggle="modal" data-target="#contactUsModal" className="cta-button" title="Book A Free Consultation">Meet Our Kitchen Experts</a>
                </div>
            </div>

            <div className='grid-DG-dining'>
                <h4 className='gridDesignTexts'>Bedroom Interiors For Comfort And Style</h4>
                <div id="carouselExampleIndicators1" className="carousel slide home-carousel" data-bs-ride="carousel">
                    <div className="carousel-inner">
                        <div className="carousel-item active">
                            <div className="slide-DG">
                                <figure className="effect-zoe a">
                                    <img src="bedroom-design/f1.jpg" />

                                </figure>
                                <div className="d-none d-md-block">
                                    <figure className="effect-zoe">
                                        <img src="bedroom-design/e1.jpg" />
                                    </figure>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="cta">
                    <a href="#contactUsModal" onClick={showContuctUs} data-toggle="modal" data-target="#contactUsModal" className="cta-button" title="Book A Free Consultation">Meet Our Designers</a>
                </div>
            </div>

            <div className='grid-DG-dining'>
                <h4 className='gridDesignTexts'>Living Room Interiors For A Fabulous First Impression</h4>
                <div id="carouselExampleIndicators1" className="carousel slide home-carousel" data-bs-ride="carousel">
                    <div className="carousel-inner">
                        <div className="carousel-item active">
                            <div className="slide-DG">
                                <figure className="effect-zoe a">
                                    <img src="living-room/b1.jpg" />

                                </figure>
                                <div className="d-none d-md-block">
                                    <figure className="effect-zoe">
                                        <img src="living-room/e1.jpg" />
                                    </figure>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="cta">
                    <a href="#contactUsModal" onClick={showContuctUs} data-toggle="modal" data-target="#contactUsModal" className="cta-button" title="Book A Free Consultation">Book A Free Consultation</a>
                </div>
            </div>

            <div className="faqs" ref={FAQS}>
                <h5>FAQs On Home Interiors And Designers In Bengaluru</h5>
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
const QNA = [
    {
        Question: "1. What sets Butterfly interior apart from other interior design companies in Bengaluru?",
        Answer: <p><span style={{ fontWeight: 400 }}>Butterfly interior is an upstanding quality code,
            with in-house interior designers, intelligent designs and functionality-first protocols!.</span></p>,
    },
    {
        Question: "2. What is the cost of interior design in Bengaluru?",
        Answer: <p><span style={{ fontWeight: 400 }}>The interior design cost in Bengaluru can vary
            as per the kind of interior theme you choose. For example,
            a minimalistic design theme will cost you way less than a royal
            design theme with luxury materials and finishes. Again,
            the cost will vary as per the size of your house.</span></p>,
    },
    {
        Question: "3. What is interior cost for 3bhk apartment in bengaluru?",
        Answer: <p><span style={{ fontWeight: 400 }}>The interior cost of a 3BHK apartment
            in Bengaluru can start from Rs 7-12 lakh. But keep in mind that this price is not standard
            as it depends on the kind of interior design you want. For example, for a simple,
            minimalistic 3BHK apartment, the interiors will cost even less than those of a 2BHK house.
            This, of course, depends on many factors, including the materials, upholstery, lighting,
            colour palette and furnishings. The cost can, therefore, vary with the choices you make.
            The best way to estimate the price of a 3HK interior is to select the type of interiors
            you want and then discuss your budget with the designer to understand the possibilities.</span></p>,
    },
    {
        Question: "4. How much interior design cost for 2bhk flat in bengaluru?",
        Answer: <p><span style={{ fontWeight: 400 }}>The cost of home interiors depends
            on several factors. Materials, finishes, furniture styles, etc., are some factors
            that determine the interior design cost. Therefore, the cost of designing a 2BHK home
            in Bengaluru can vary a lot. However, if you are going for modern design elements
            with not-so-specific themes and furniture, the cost may start from Rs 8-9 lakh.
            But in case you have a specific set of choices, the price may change. Thus,
            it is vital first to research the kind of interiors you want for your 2BHK home.
            For instance, if you are keen on minimalistic design, you might get your home
            interiors done at an affordable price. However, if you want lavish interiors with antique
            elements, the price will rise.</span></p>,
    },
    {
        Question: "5. How do you price an interior design project?",
        Answer: <p><span style={{ fontWeight: 400 }}>Here are a few things to consider while hiring an interior designer:
            <li>Research and study the style the designers follow so that you get precisely the kind of house you are looking for.</li>
            <li>Make sure you specify your budget and choose a firm that can work according to your selected budget structure.</li>
            <li>Learn from your designers' customer reviews. This will help you understand their work.</li>
            <li>Have an estimated timeline and specify this to your designers so that you get your home as planned.</li>
            <li>Be open to your designers' creativity so that they get enough freedom to offer you the best designs.</li>
            <li>Be personally involved in design decisions and spare time for meetings with your designers so that you are never surprised by the reslit.</li>
        </span>
        </p>,
    },
    {
        Question: "6. How much do interior designers charge in Bengaluru?",
        Answer: <p><span style={{ fontWeight: 400 }}>Butterfly Interior's home interior design
            services starts from 3.5 Lacs. The cost of interior design will depend on various
            factors including the size of your apartment, materials and finishes you choose,
            designs you select. Every Butterfly interior home is customised to the taste and budget of the customers.
            Talk to the designer to get the customised quote for your home.</span></p>,
    }
]
export default BangloreCity