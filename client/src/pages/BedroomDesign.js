import React, { useState, useRef } from "react";
import Layouts from "../components/Layout/Layouts";
import Toggler from "../components/Layout/Toggler";
import Header from "../components/Layout/header";
import Footer from "../components/Layout/footer";
import { useAuth } from "../context/auth";
import toast from "react-hot-toast";
import ConsultationPage from "./ConsultationPage";
const BedroomDesign = () => {
	const [contact, setContact] = useState(false);
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
	};
	//-----------------------------FAQS-SCROLL----------------------------------------------
	const FAQS = useRef(null);
	const FaqScroll = () => {
		FAQS.current?.scrollIntoView({ behavior: "smooth", block: "center" });
	};
	//-----------------------------------------------------------------------
	const [auth, setAuth] = useAuth();
	const showContuctUs = () => {
		!auth.user
			? toast.error("Please login before contacting us!")
			: setContact(!contact);
	};

	return (
		<Layouts title={"Bedroom-Designs"}>
			<div className="Navbar-sticky">
				<Header data={FaqScroll} />
			</div>
			<div>
				<div className="toggler-sticky">
					<Toggler />
				</div>
				<form className="modular-kitchen">
					<div className="header">
						<h1>Bedroom Designs</h1>
						<p>Check out popular Bedroom Designs.</p>
					</div>
					<div className="A">
						<div className="row">
							<div className="col-lg-6">
								<div
									id="carouselExampleIndicators"
									className="carousel slide"
									data-bs-ride="carousel"
								>
									<div className="carousel-indicators">
										<button
											type="button"
											data-bs-target="#carouselExampleIndicators"
											data-bs-slide-to={0}
											className="active"
											aria-current="true"
											aria-label="Slide 1"
										/>
										<button
											type="button"
											data-bs-target="#carouselExampleIndicators"
											data-bs-slide-to={1}
											aria-label="Slide 2"
										/>
										<button
											type="button"
											data-bs-target="#carouselExampleIndicators"
											data-bs-slide-to={2}
											aria-label="Slide 3"
										/>
									</div>
									<div className="carousel-inner">
										<div className="carousel-item active">
											<img
												src="bedroom-design/a1.jpg"
												height="350px"
												width="600px"
											/>
										</div>
										<div className="carousel-item">
											<img
												src="bedroom-design/a2.jpg"
												height="350px"
												width="600px"
											/>
										</div>
										<div className="carousel-item">
											<img
												src="bedroom-design/a3.jpg"
												height="350px"
												width="600px"
											/>
										</div>
									</div>
									<button
										className="carousel-control-prev"
										type="button"
										data-bs-target="#carouselExampleIndicators"
										data-bs-slide="prev"
									>
										<span
											className="carousel-control-prev-icon"
											aria-hidden="true"
										/>
										<span className="visually-hidden">Previous</span>
									</button>
									<button
										className="carousel-control-next"
										type="button"
										data-bs-target="#carouselExampleIndicators"
										data-bs-slide="next"
									>
										<span
											className="carousel-control-next-icon"
											aria-hidden="true"
										/>
										<span className="visually-hidden">Next</span>
									</button>
								</div>
							</div>
							<div className="col-lg-6">
								<div className="details">
									<section>
										<h3>Modern Blue and White Bedroom Interior Design</h3>
										<span>
											This modern bedroom dominated by a blue and white colour
											palette is large and spacious. Glass sliding door wardrobe
											built across the source of natural light make this room
											appear spacious.
										</span>
										<br></br>
										{a && (
											<div>
												<h5>Special Features</h5>
												<li>
													A five-door modular wardrobe with separate his and her
													section.
												</li>
												<li>
													A padded cushion headboard which adds comfort of the
													space.
												</li>
											</div>
										)}
										<span className="myBtn" onClick={() => setA(!a)}>
											{a == 1 ? "Explore Less" : "Explore More"}
										</span>
									</section>
									<a
										className="btn btn-primary Btn-contact"
										onClick={showContuctUs}
									>
										Get Quote
									</a>
								</div>
							</div>
						</div>
						<div className="B">
							<div className="row">
								<div className="col-lg-6">
									<div className="details">
										<section>
											<h3>An Industrial Style Bedroom Design</h3>
											<span>
												An industrial style bedroom with an exposed brick wall
												and pops of colour. An all black, sleek sliding door
												wardrobe lends an edgy look to this space.
											</span>
											<br></br>
											{b && (
												<div>
													<h5>Special Features</h5>
													<li>
														A sliding door wardrobe with multiple compartments.
													</li>
													<li>
														A study table adjoins the wardrobe built with
														overhead cabinets and shelves.
													</li>
													<li>
														A walk in dresser unit with tall shelves on the
														side.
													</li>
												</div>
											)}
											<span className="myBtn" onClick={() => setB(!b)}>
												{b == 1 ? "Explore Less" : "Explore More"}
											</span>
										</section>
										<a
											className="btn btn-primary Btn-contact"
											onClick={showContuctUs}
										>
											Get Quote
										</a>
									</div>
								</div>
								<div className="col-lg-6">
									<div
										id="carouselExampleIndicators1"
										className="carousel slide"
										data-bs-ride="carousel"
									>
										<div className="carousel-indicators">
											<button
												type="button"
												data-bs-target="#carouselExampleIndicators1"
												data-bs-slide-to={0}
												className="active"
												aria-current="true"
												aria-label="Slide 1"
											/>
											<button
												type="button"
												data-bs-target="#carouselExampleIndicators1"
												data-bs-slide-to={1}
												aria-label="Slide 2"
											/>
											<button
												type="button"
												data-bs-target="#carouselExampleIndicators1"
												data-bs-slide-to={2}
												aria-label="Slide 3"
											/>
											<button
												type="button"
												data-bs-target="#carouselExampleIndicators1"
												data-bs-slide-to={3}
												aria-label="Slide 4"
											/>
										</div>
										<div className="carousel-inner">
											<div className="carousel-item active">
												<img
													src="bedroom-design/b1.jpg"
													height="350px"
													width="600px"
												/>
											</div>
											<div className="carousel-item">
												<img
													src="bedroom-design/b2.jpg"
													height="350px"
													width="600px"
												/>
											</div>
											<div className="carousel-item">
												<img
													src="bedroom-design/b3.jpg"
													height="350px"
													width="600px"
												/>
											</div>
											<div className="carousel-item">
												<img
													src="bedroom-design/b4.jpg"
													height="350px"
													width="600px"
												/>
											</div>
										</div>
										<button
											className="carousel-control-prev"
											type="button"
											data-bs-target="#carouselExampleIndicators1"
											data-bs-slide="prev"
										>
											<span
												className="carousel-control-prev-icon"
												aria-hidden="true"
											/>
											<span className="visually-hidden">Previous</span>
										</button>
										<button
											className="carousel-control-next"
											type="button"
											data-bs-target="#carouselExampleIndicators1"
											data-bs-slide="next"
										>
											<span
												className="carousel-control-next-icon"
												aria-hidden="true"
											/>
											<span className="visually-hidden">Next</span>
										</button>
									</div>
								</div>
							</div>
						</div>
						<div className="C">
							<div className="row">
								<div className="col-lg-6">
									<div
										id="carouselExampleIndicators2"
										className="carousel slide"
										data-bs-ride="carousel"
									>
										<div className="carousel-indicators">
											<button
												type="button"
												data-bs-target="#carouselExampleIndicators2"
												data-bs-slide-to={0}
												className="active"
												aria-current="true"
												aria-label="Slide 1"
											/>
											<button
												type="button"
												data-bs-target="#carouselExampleIndicators2"
												data-bs-slide-to={1}
												aria-label="Slide 2"
											/>
											<button
												type="button"
												data-bs-target="#carouselExampleIndicators2"
												data-bs-slide-to={2}
												aria-label="Slide 3"
											/>
										</div>
										<div className="carousel-inner">
											<div className="carousel-item active">
												<img
													src="bedroom-design/c1.jpg"
													height="350px"
													width="600px"
												/>
											</div>
											<div className="carousel-item">
												<img
													src="bedroom-design/c2.jpg"
													height="350px"
													width="600px"
												/>
											</div>
											<div className="carousel-item">
												<img
													src="bedroom-design/c3.jpg"
													height="350px"
													width="600px"
												/>
											</div>
										</div>
										<button
											className="carousel-control-prev"
											type="button"
											data-bs-target="#carouselExampleIndicators2"
											data-bs-slide="prev"
										>
											<span
												className="carousel-control-prev-icon"
												aria-hidden="true"
											/>
											<span className="visually-hidden">Previous</span>
										</button>
										<button
											className="carousel-control-next"
											type="button"
											data-bs-target="#carouselExampleIndicators2"
											data-bs-slide="next"
										>
											<span
												className="carousel-control-next-icon"
												aria-hidden="true"
											/>
											<span className="visually-hidden">Next</span>
										</button>
									</div>
								</div>
								<div className="col-lg-6">
									<div className="details">
										<section>
											<h3>
												An Off White Bedroom With An Hydraulic Lift Space-Saving
												Bed
											</h3>
											<span>
												This bedroom exhibits a calm and soothing vibe thanks to
												a neutral colour scheme used across the space. The main
												highlight of this bedroom is a hydraulic bed designed
												with a tufted headboard in white. The bed has space for
												storage and helps keep the room clutter-free at all
												times.
											</span>
											<br></br>
											{c && (
												<div>
													<h5>Special Features</h5>
													<li>
														A bedroom designed with a neutral colour scheme for
														a soothing vibe.
													</li>
													<li>A grey floor rug ties the look together.</li>
													<li>
														The bedroom wall is decorated with artwork to bring
														in character to the space.
													</li>
												</div>
											)}
											<span className="myBtn" onClick={() => setC(!c)}>
												{c == 1 ? "Explore Less" : "Explore More"}
											</span>
										</section>
										<a
											className="btn btn-primary Btn-contact"
											onClick={showContuctUs}
										>
											Get Quote
										</a>
									</div>
								</div>
							</div>
						</div>
						<div className="D">
							<div className="row">
								<div className="col-lg-6">
									<div className="details">
										<section>
											<h3>A Modern Bedroom With A Separate Study Area</h3>
											<span>
												This bedroom, designed in gray and wood, creates an
												elegant yet bold statement. While the smart design
												blends style and functionality, the multifunctional
												furniture pieces make the space ideal for millennial
												working couples.
											</span>
											<br></br>
											{d && (
												<div>
													<h5>Special Features</h5>
													<li>
														A king-sized bed with twin bedside cabinets and an
														accent wall.
													</li>
													<li>
														A four-door lightwood laminate wardrobe with
														separate His and Her section.
													</li>
													<li>
														An ergonomic study area separated by a partition
														with a wall-mounted desk and overhead cabinets.
													</li>
													<li>
														The study table comes with two handleless drawers to
														arrange your books and stationaries in a
														clutter-free manner.
													</li>
												</div>
											)}
											<span className="myBtn" onClick={() => setD(!d)}>
												{d == 1 ? "Explore Less" : "Explore More"}
											</span>
										</section>
										<a
											className="btn btn-primary Btn-contact"
											onClick={showContuctUs}
										>
											Get Quote
										</a>
									</div>
								</div>
								<div className="col-lg-6">
									<div
										id="carouselExampleIndicators3"
										className="carousel slide"
										data-bs-ride="carousel"
									>
										<div className="carousel-indicators">
											<button
												type="button"
												data-bs-target="#carouselExampleIndicators3"
												data-bs-slide-to={0}
												className="active"
												aria-current="true"
												aria-label="Slide 1"
											/>
											<button
												type="button"
												data-bs-target="#carouselExampleIndicators3"
												data-bs-slide-to={1}
												aria-label="Slide 2"
											/>
											<button
												type="button"
												data-bs-target="#carouselExampleIndicators3"
												data-bs-slide-to={2}
												aria-label="Slide 3"
											/>
										</div>
										<div className="carousel-inner">
											<div className="carousel-item active">
												<img
													src="bedroom-design/d1.jpg"
													height="350px"
													width="600px"
												/>
											</div>
											<div className="carousel-item">
												<img
													src="bedroom-design/d2.jpg"
													height="350px"
													width="600px"
												/>
											</div>
											<div className="carousel-item">
												<img
													src="bedroom-design/d3.jpg"
													height="350px"
													width="600px"
												/>
											</div>
										</div>
										<button
											className="carousel-control-prev"
											type="button"
											data-bs-target="#carouselExampleIndicators3"
											data-bs-slide="prev"
										>
											<span
												className="carousel-control-prev-icon"
												aria-hidden="true"
											/>
											<span className="visually-hidden">Previous</span>
										</button>
										<button
											className="carousel-control-next"
											type="button"
											data-bs-target="#carouselExampleIndicators3"
											data-bs-slide="next"
										>
											<span
												className="carousel-control-next-icon"
												aria-hidden="true"
											/>
											<span className="visually-hidden">Next</span>
										</button>
									</div>
								</div>
							</div>
						</div>
						<div className="E">
							<div className="row">
								<div className="col-lg-6">
									<div
										id="carouselExampleIndicators31"
										className="carousel slide"
										data-bs-ride="carousel"
									>
										<div className="carousel-indicators">
											<button
												type="button"
												data-bs-target="#carouselExampleIndicators31"
												data-bs-slide-to={0}
												className="active"
												aria-current="true"
												aria-label="Slide 1"
											/>
											<button
												type="button"
												data-bs-target="#carouselExampleIndicators31"
												data-bs-slide-to={1}
												aria-label="Slide 2"
											/>
											<button
												type="button"
												data-bs-target="#carouselExampleIndicators31"
												data-bs-slide-to={2}
												aria-label="Slide 3"
											/>
										</div>
										<div className="carousel-inner">
											<div className="carousel-item active">
												<img
													src="bedroom-design/e1.jpg"
													height="350px"
													width="600px"
												/>
											</div>
											<div className="carousel-item">
												<img
													src="bedroom-design/e2.jpg"
													height="350px"
													width="600px"
												/>
											</div>
											<div className="carousel-item">
												<img
													src="bedroom-design/e3.jpg"
													height="350px"
													width="600px"
												/>
											</div>
										</div>
										<button
											className="carousel-control-prev"
											type="button"
											data-bs-target="#carouselExampleIndicators31"
											data-bs-slide="prev"
										>
											<span
												className="carousel-control-prev-icon"
												aria-hidden="true"
											/>
											<span className="visually-hidden">Previous</span>
										</button>
										<button
											className="carousel-control-next"
											type="button"
											data-bs-target="#carouselExampleIndicators31"
											data-bs-slide="next"
										>
											<span
												className="carousel-control-next-icon"
												aria-hidden="true"
											/>
											<span className="visually-hidden">Next</span>
										</button>
									</div>
								</div>
								<div className="col-lg-6">
									<div className="details">
										<section>
											<h3>A Bright Bedroom With A Study Unit</h3>
											<span>
												Designed with a white and orange colour pallette, this
												bedroom has a minimalistic yet charming look. The study
												unit accentuates the functionality of the room, while
												the decorous accent wall makes this room soothing to the
												eye. The perfect combination of aesthetics and
												functionality makes this bedroom one of a kind.
											</span>
											<br></br>
											{e && (
												<div>
													<h5>Special Features</h5>
													<li>
														A queen-sized bed with and side cabinet for extra
														storage.
													</li>
													<li>
														A pendant light above the side cabinet for some mood
														lighting.
													</li>
													<li>
														LED-lit back wooden wall panelling to create a cosy
														vibe in your bedroom.
													</li>
												</div>
											)}
											<span className="myBtn" onClick={() => setE(!e)}>
												{e == 1 ? "Explore Less" : "Explore More"}
											</span>
										</section>
										<a
											className="btn btn-primary Btn-contact"
											onClick={showContuctUs}
										>
											Get Quote
										</a>
									</div>
								</div>
							</div>
						</div>
						<div className="F">
							<div className="row">
								<div className="col-lg-6">
									<div className="details">
										<section>
											<h3>A Modern Bedroom With A Compact Study Corner</h3>
											<span>
												This bedroom in muted colours and patterned wallpaper
												exudes an elegant yet youtful vibe. The study nook and
												the window bay seater make the bedroom perfect for
												working as well as spending some leisure time. The
												wood-finish laminates lend a sense of warmth to the
												bedroom, making it perfect for urban couples who love
												simple and minimal aesthetics in their space.
											</span>
											<br></br>
											{f && (
												<div>
													<h5>Special Features</h5>
													<li>
														A queen-size bed with an extended headboard with
														golden borders for a luxurious appeal.
													</li>
													<li>
														Two bedside cabinets with drawers on either side for
														extra storage options.
													</li>
													<li>
														A wardrobe with sliding doors to keep all your
														clothes and other essentials.
													</li>
												</div>
											)}
											<span className="myBtn" onClick={() => setF(!f)}>
												{f == 1 ? "Explore Less" : "Explore More"}
											</span>
										</section>
										<a
											className="btn btn-primary Btn-contact"
											onClick={showContuctUs}
										>
											Get Quote
										</a>
									</div>
								</div>
								<div className="col-lg-6">
									<div
										id="carouselExampleIndicators4"
										className="carousel slide"
										data-bs-ride="carousel"
									>
										<div className="carousel-indicators">
											<button
												type="button"
												data-bs-target="#carouselExampleIndicators4"
												data-bs-slide-to={0}
												className="active"
												aria-current="true"
												aria-label="Slide 1"
											/>
											<button
												type="button"
												data-bs-target="#carouselExampleIndicators4"
												data-bs-slide-to={1}
												aria-label="Slide 2"
											/>
											<button
												type="button"
												data-bs-target="#carouselExampleIndicators4"
												data-bs-slide-to={2}
												aria-label="Slide 3"
											/>
										</div>
										<div className="carousel-inner">
											<div className="carousel-item active">
												<img
													src="bedroom-design/f1.jpg"
													height="350px"
													width="600px"
												/>
											</div>
											<div className="carousel-item">
												<img
													src="bedroom-design/f2.jpg"
													height="350px"
													width="600px"
												/>
											</div>
											<div className="carousel-item">
												<img
													src="bedroom-design/f3.jpg"
													height="350px"
													width="600px"
												/>
											</div>
										</div>
										<button
											className="carousel-control-prev"
											type="button"
											data-bs-target="#carouselExampleIndicators4"
											data-bs-slide="prev"
										>
											<span
												className="carousel-control-prev-icon"
												aria-hidden="true"
											/>
											<span className="visually-hidden">Previous</span>
										</button>
										<button
											className="carousel-control-next"
											type="button"
											data-bs-target="#carouselExampleIndicators4"
											data-bs-slide="next"
										>
											<span
												className="carousel-control-next-icon"
												aria-hidden="true"
											/>
											<span className="visually-hidden">Next</span>
										</button>
									</div>
								</div>
							</div>
						</div>
					</div>
				</form>
				<div className="faqs" ref={FAQS}>
					<h5>FAQs on Bedroom Designs</h5>
					<div className="QNA">
						{data.map((item, i) => (
							<div className="item">
								<div className="Question" onClick={() => toggle(i)}>
									<h6>{item.Question}</h6>
									<span>{selected === i ? "-" : "+"}</span>
								</div>
								<div className={selected === i ? "Answer show" : "Answer"}>
									{item.Answer}
								</div>
							</div>
						))}
					</div>
				</div>

				{/* -----------------------------contact form-------------------------------------- */}
				{contact && (
					<ConsultationPage setContact={setContact} contact={contact} />
				)}
			</div>
			<Footer data={FaqScroll} />
		</Layouts>
	);
};
const data = [
	{
		Question: "1. What is the best way to design a bedroom?",
		Answer: (
			<p>
				<span style={{ fontWeight: 400 }}>
					Furniture, wall art, cabinets, shelves, cupboards, colours and
					decorative pieces are must-haves for any bedroom. Every bedroom needs
					furniture, storage solutions, lighting apart from accessories like
					rugs, throw pillows, a good display case, a nightstand to complete the
					look.
				</span>
			</p>
		),
	},
	{
		Question: "2. Which color is best for bedroom?",
		Answer: (
			<p>
				<span style={{ fontWeight: 400 }}>
					The colour of your bedroom depends on your personal style and taste.
					While there are endless colour combinations you cna choose from some
					of the popular ones these days are: Classic blue and white, Pink,
					Yellow And Beige, bottle green and brown, pink and white, grey and
					teal, red and copper, peach and olive green, lime green and yellow,
					shades of brown, white an beige, blue and brown, coral and white among
					others. Check out Bedroom Colour Combinations from Butterfly interior
					guides section.
				</span>
			</p>
		),
	},
	{
		Question: "3. Do you provide customised bedrooms or pre-designed bedrooms?",
		Answer: (
			<p>
				<span style={{ fontWeight: 400 }}>
					Our bedrooms are fully customised and completely manufactured
					in-house.
				</span>
			</p>
		),
	},

	{
		Question: "4. Is every Butterfly interior bedroom different?",
		Answer: (
			<p>
				<span style={{ fontWeight: 400 }}>
					We believe each bedroom ought to have its own spirit and character.
					It's why we design each one independently, as a unique labour of love.
				</span>
			</p>
		),
	},
	{
		Question: "5. Can I offer suggestions during the bedroom design process?",
		Answer: (
			<p>
				<span style={{ fontWeight: 400 }}>
					Our bedroom designs are inspired by the personality, hobbies,
					interests, tastes and preferences of the people that call it home.
					Before we take on your bedroom design project, we'll get to know you
					personally in order to infuse pieces of your personality into your
					bedroom aesthetic. We welcome your suggestions throughout the design
					process!
				</span>
			</p>
		),
	},
];
export default BedroomDesign;
