import React, { useState, useEffect, useRef } from 'react';
import Layouts from '../components/Layout/Layouts'
import Toggler from '../components/Layout/Toggler'
import contactImg from "../components/Layout/images/pop-img.jpg";
import Header from '../components/Layout/header';
import Footer from '../components/Layout/footer';
import toast from "react-hot-toast"
import emailjs from '@emailjs/browser';
const DiningRoomDesign = () => {
    //---------------------contact-----------------------------------------
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
        <Layouts title={"DiningRoom-Designs"}>
            <div className='Navbar-sticky'><Header data={FaqScroll} /></div>
            <div>
                <div className="toggler-sticky"> <Toggler /></div>
                <form className="modular-kitchen">
                    <div className="header">
                        <h1>Dining Room Designs
                        </h1>
                        <p>Check out popular Dining Room Designs.</p>
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
                                            <img src="dining-room-design/a1.jpg" height="350px" width="600px" />
                                        </div>
                                        <div className="carousel-item">
                                            <img src="dining-room-design/a2.jpg" height="350px" width="600px" />
                                        </div>
                                        <div className="carousel-item">
                                            <img src="dining-room-design/a3.jpg" height="350px" width="600px" />
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
                                            Dining Room Design In Modern Minimal Style
                                        </h3>
                                        <span>A modern minimal style dining room designed for wine connoisseurs. A sleek bar/
                                            crockery unit doubles up as storage for crockery with tandem drawers for wine
                                            bottles.</span>
                                        <br></br>
                                        {a && <div>
                                            <h5>Special Features</h5>
                                            <li>A cluster of pendant lights puts the spotlight on your plate</li>
                                            <li>A crockery cum bar unit with ample storage</li>
                                            <li>Tandem drawers designed to store for wine bottles</li>
                                            <li>Handleless drawers to stackheavy crockery</li>
                                        </div>
                                        }
                                        <span className='myBtn' onClick={() => setA(!a)}>{a == 1 ? "Explore Less" : "Explore More"}</span>
                                    </section>
                                    <a className="btn btn-primary Btn-contact" onClick={() => setContact(!contact)}>Get Quote</a>
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
                                            A Dining Room In Grey And Pastel Blue
                                        </h3>
                                        <span>The dining area exhibits a modern interior setup with a soothing mix of neutrals and
                                            pastel colour tones. At the centre, there is a walnut dark wood dining table with a
                                            white marble top. The dining table for four comes with comfortable, uptown dining chairs
                                            in grey and blue upholstery. Behind the dining table there is a laminate finished
                                            crockery unit with seamless push-to-open drawers. The crockery unit also serves as a
                                            showcase to display decor. A grey accent wall and marble flooring complete the look of
                                            this area.</span>
                                        <br></br>
                                        {b && <div>
                                            <h5>Special Features</h5>
                                            <li>A dark walnut wood dining table with a white marble top.</li>
                                            <li>A dark grey shag rug compliments the colour scheme of this space.</li>
                                        </div>
                                        }
                                        <span className='myBtn' onClick={() => setB(!b)}>{b == 1 ? "Explore Less" : "Explore More"}</span>
                                    </section>
                                    <a className="btn btn-primary Btn-contact" onClick={() => setContact(!contact)}>Get Quote</a>
                                </div>
                            </div>
                            <div className='col-lg-6'>
                                <div className="carousel slide" data-bs-ride="carousel">
                                    <div className="carousel-inner">
                                        <div className="carousel-item active">
                                            <img src="dining-room-design/b1.jpg" height="350px" width="600px" />
                                        </div>
                                    </div>
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
                                        <button type="button" data-bs-target="#carouselExampleIndicators2" data-bs-slide-to={3} aria-label="Slide 4" />
                                    </div>
                                    <div className="carousel-inner">
                                        <div className="carousel-item active">
                                            <img src="dining-room-design/c1.jpg" height="350px" width="600px" />
                                        </div>
                                        <div className="carousel-item">
                                            <img src="dining-room-design/c2.jpg" height="350px" width="600px" />
                                        </div>
                                        <div className="carousel-item">
                                            <img src="dining-room-design/c3.jpg" height="350px" width="600px" />
                                        </div>
                                        <div className="carousel-item">
                                            <img src="dining-room-design/c4.jpg" height="350px" width="600px" />
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
                                            Neo Classical Style Dining Room Interior Design
                                        </h3>
                                        <span>This dining room uniquely blends colours of grey, emerald, beige and white. It has
                                            been designed with style and simplicity in equal measure. A smartly designed crockery
                                            unit to store dinnerware, cutlery and other dining related items is a clever addition to
                                            this area.</span>
                                        <br></br>
                                        {c && <div>
                                            <h5>Special Features</h5>
                                            <li>A crockery unit with tinted glass for an upscale look and easy visibility.</li>
                                            <li>Spacious tandem drawers to store large pieces of crockery.</li>
                                        </div>
                                        }
                                        <span className='myBtn' onClick={() => setC(!c)}>{c == 1 ? "Explore Less" : "Explore More"}</span>
                                    </section>
                                    <a className="btn btn-primary Btn-contact" onClick={() => setContact(!contact)}>Get Quote</a>
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
                                            A Neo-Classical Dining Room With Space Saving Bar Unit
                                        </h3>
                                        <span>This Neo-classical style dining room exhibits an elegant vibe. The white walls and
                                            marble flooring brings in a uber sleek look to the dining area, while the statement
                                            chandelier above the table amps up the style quotient of the space.
                                        </span>
                                        <br></br>
                                        {d && <div>
                                            <h5>Special Features</h5>
                                            <li>A wooden dining table with two chairs and a bench provide ample space to sit and
                                                enjoy meals with friends and family.</li>
                                            <li>A Neo-Classical dining room with a space-saving bar unit.</li>
                                        </div>
                                        }
                                        <span className='myBtn' onClick={() => setD(!d)}>{d == 1 ? "Explore Less" : "Explore More"}</span>
                                    </section>
                                    <a className="btn btn-primary Btn-contact" onClick={() => setContact(!contact)}>Get Quote</a>
                                </div>
                            </div>
                            <div className='col-lg-6'>
                                <div id="carouselExampleIndicators3" className="carousel slide" data-bs-ride="carousel">
                                    <div className="carousel-inner">
                                        <div className="carousel-item active">
                                            <img src="dining-room-design/d1.jpg" height="350px" width="600px" />
                                        </div>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                    <div className="E">
                        <div className='row'>
                            <div className='col-lg-6'>
                                <div id="carouselExampleIndicators3" className="carousel slide" data-bs-ride="carousel">
                                    <div className="carousel-inner">
                                        <div className="carousel-item active">
                                            <img src="dining-room-design/e1.jpg" height="350px" width="600px" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className='col-lg-6'>
                                <div className="details">
                                    <section>
                                        <h3>
                                            A Gorgeous Neo Classical Dining Room In A Neutral Colour Scheme
                                        </h3>
                                        <span>This neoclassical interiors exhibit a gorgeous periodic style dining setup. The table
                                            here is a round wooden table in white with cabriole legs. This dining room has a
                                            yesteryear vibe across the space that takes you back to your growing years. White is
                                            used in abundance across the space while light wood flooring adds a nice countryside
                                            vibe to this dining room. A wall is adorned with wallpaper to complete the vintage
                                            look.</span>
                                        <br></br>
                                        {e && <div>
                                            <h5>Special Features</h5>
                                            <li>A neo-classical white wooden round dining table with cabriole legs.</li>
                                        </div>
                                        }
                                        <span className='myBtn' onClick={() => setE(!e)}>{e == 1 ? "Explore Less" : "Explore More"}</span>
                                    </section>
                                    <a className="btn btn-primary Btn-contact" onClick={() => setContact(!contact)}>Get Quote</a>
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
                                            A Dining Room With An Elegant Crockery Unit Cum Showcase
                                        </h3>
                                        <span>This dining area is set by a beautiful balcony that brings a natural vibe to the
                                            place. The place has a dark coloured veneer finished dining table that looks both classy
                                            and minimalist. The dining room has an elegant appeal combined that si complemented with
                                            natural greens and lots of smart storage solutions.</span>
                                        <br></br>
                                        {f && <div>
                                            <h5>Special Features</h5>
                                            <li>A dining table finished in dark coloured veneer for four adds elegance to the place.
                                            </li>
                                        </div>
                                        }
                                        <span className='myBtn' onClick={() => setF(!f)}>{f == 1 ? "Explore Less" : "Explore More"}</span>
                                    </section>
                                    <a className="btn btn-primary Btn-contact" onClick={() => setContact(!contact)}>Get Quote</a>
                                </div>
                            </div>
                            <div className='col-lg-6'>
                                <div id="carouselExampleIndicators4" className="carousel slide" data-bs-ride="carousel">
                                    <div className="carousel-inner">
                                        <div className="carousel-item active">
                                            <img src="dining-room-design/f1.jpg" height="350px" width="600px" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </form>

                <div className="faqs" ref={FAQS}>
                    <h5>FAQs on Dining Room Designs</h5>
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
        Question: "1. What are the best ways to design a dining room space?",
        Answer: <p><span style={{ fontWeight: 400 }}>This heart of the home can be a place you show off your
            interior design style. Take into consideration the space, functionalities you want it to
            serve and then experiment with furniture, furnishings, colour palettes, and lighting for
            a perfect setting to host meals and create memories. Every dining room needs right sized
            table, with chairs that complement it, good lighting fixtures so you don't eat in the
            dark, crockery unit and side cabinets to store/ display dinnerware and decor to amp up
            the style.</span></p>,
    },
    {
        Question: "2. Which color is best for dining room?",
        Answer: <p><span style={{ fontWeight: 400 }}>The most common colour combinations for a dining room include white and
            beige, grey, red and white,
            yellow, blue and black, purple, yellow and white, black and gold, muted green and
            orange. White and blue, crimson red and white, mauve and green.</span></p>,
    },
    {
        Question: "3. What are the best styles of interior design for dining rooms?",
        Answer: <p><span style={{ fontWeight: 400 }}>Popular styles of interior design for dining rooms include
            minimalistic, eclectic, rustic, industrial and Indian.</span></p>,
    },
    {
        Question: "4. How do I choose a dining room table for a small home?",
        Answer: <p><span style={{ fontWeight: 400 }}>A newer design but one is becoming increasingly popular is
            the drop or foldable dining table design.This works well for tables that have to accommodate varying
            numbers of people from time to time. Converting a four-seater to six, making it concise
            and small when not in use, are many options for the expandable dining table. Many homes,
            especially apartments, are gravitating towards them, as they work well in small homes. A
            popular small dining table design is circular, supported by a central base. Although not
            seen in many homes, round tables add refined aesthetics to a place especially when
            designed in glass. It's easy to seat several people, fits into any kind of corner space
            including kitchen design with dining table and merges into the design of older
            homes.</span></p>,
    },
    {
        Question: "5. How do you divide a living room and dining room?",
        Answer: <p><span style={{ fontWeight: 400 }}>There are many smart design hacks you can use to separate a
            dining from living area. First you can add a partition or a screen. Next you can add a sectional
            sofa in one corner that will act as natural divider. Next you can try zooming.
            Carpets are a fool-proof way to zone areas - keeping them large ensures that furniture does
            not appear to float.</span></p>,
    },
    {
        Question: "6. What type of dining table should I get?",
        Answer: <p><span style={{ fontWeight: 400 }}> The dining table you get depends largely on the dimensions on the room you
            are placing it in.
            Round or square shaped tables work best in smaller spaces. You can even try a foldable or
            expandable dining table if you have a small apartment. For larger spaces you can try a
            rectangular or oval shaped table or even a large round shaped one. Also, a four, six or eighter
            seater depends on the number of members in your family. Further you can opt for metal or wooden
            tables or one with glass tops depending on your taste and budget.</span></p>,
    }]

export default DiningRoomDesign