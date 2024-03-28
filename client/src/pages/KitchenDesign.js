import React, { useState, useRef } from "react";
import Layouts from "../components/Layout/Layouts";
import Toggler from "../components/Layout/Toggler";
import Header from "../components/Layout/header";
import Footer from "../components/Layout/footer";
import { useAuth } from "../context/auth";
import toast from "react-hot-toast";
import ConsultationPage from "./ConsultationPage";
const KitchenDesign = () => {
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
		<Layouts title={"Kitchen-Designs"}>
			<div className="Navbar-sticky">
				<Header data={FaqScroll} />
			</div>
			<div>
				<div className="toggler-sticky">
					{" "}
					<Toggler />
				</div>
				<form className="modular-kitchen">
					<div className="header">
						<h1>Modular Kitchen Designs</h1>
						<p> Check out popular modular kitchen interior designs.</p>
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
												src="modular-kitchen/blue-and-white-modular-kitchen-design.jpg"
												height="350px"
												width="600px"
											/>
										</div>
										<div className="carousel-item">
											<img
												src="modular-kitchen/oil-spice-pull-out-drawer-blue-white-kitchen-design.jpg"
												height="350px"
												width="600px"
											/>
										</div>
										<div className="carousel-item">
											<img
												src="modular-kitchen/bi-fold-lift-up-blue-white-kitchen-design-images.jpg"
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
										<h3>A Bold Navy Blue And White Modular Kitchen Design</h3>
										<span>
											This royal blue and white modular kitchen with floral
											tiles is for those who want to make a statement. This
											kitchen design with clever storage options makes working
											easier and much cleaner.
										</span>
										<br></br>
										{a && (
											<div>
												<h5>Special Features</h5>
												<li>An oil and spice pull out.</li>
												<li>Bi-fold lift up kitchen wall module.</li>
												<li>A tall unit with in-built microwave and grill.</li>
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
					</div>
					<div className="B">
						<div className="row">
							<div className="col-lg-6">
								<div className="details">
									<section>
										<h3>Vibrant Red and Yellow Parallel Kitchen Design</h3>
										<span>
											This kitchen is designed in vibrant shades of red and
											yellow for a youthful vibe. The modular storage mechanisms
											give you a comfortable cooking experience, while the
											laundry utilises the space beautifully, making it a
											multifunctional area.
										</span>
										<br></br>
										{b && (
											<div>
												<h5>Special Features</h5>
												<li>
													A parallel kitchen designed in bright red and yellow
													colour combination for a cheerful vibe.
												</li>
												<li>A microwave unit to free up your counter space.</li>
												<li>
													A laundry area on the side makes maximum use of
													available space
												</li>
												<li>
													In-built hob with three wired drawers to store your
													utensils of different sizes neatly.
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
												src="modular-kitchen/parallel-kitchen-design-in-red-and-yellow.jpg"
												height="350px"
												width="600px"
											/>
										</div>
										<div className="carousel-item">
											<img
												src="modular-kitchen/small-space-parallel-kitchen-design-with-laundry-area.jpg"
												height="350px"
												width="600px"
											/>
										</div>
										<div className="carousel-item">
											<img
												src="modular-kitchen/parallel-kitchen-with-mops-and-brooms-sliding-unit.jpg"
												height="350px"
												width="600px"
											/>
										</div>
										<div className="carousel-item">
											<img
												src="modular-kitchen/parallel-modular-kitchen-open-and-closed-cabinets.jpg"
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
									</div>
									<div className="carousel-inner">
										<div className="carousel-item active">
											<img
												src="modular-kitchen/g-shaped-kitchen-design-in-pink-and-white.jpg"
												height="350px"
												width="600px"
											/>
										</div>
										<div className="carousel-item">
											<img
												src="modular-kitchen/g-shaped-kitchen-with-patterned-floor-tiles.jpg"
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
										<h3>G Shaped Kitchen Design In Blush Pink And White</h3>
										<span>
											This G shaped kitchen looks pretty with its blush pink
											with white colour scheme. A quartz countertop, a tiled
											backsplash and patterned floor tiles add an element of fun
											to this kitchen's interiors.
										</span>
										<br></br>
										{c && (
											<div>
												<h5>Special Features</h5>
												<li>A quartz countertop in white.</li>
												<li>
													Blush pink and white base and top cabinets for a
													balanced look.
												</li>
												<li>
													A under the sink cabinet with a pullout dustbin.
												</li>
												<li>A multicoloured tiled backsplash.</li>
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
										<h3>A Modular Island Kitchen Design With An Accent Wall</h3>
										<span>
											Island kitchen design featuring a modular layout and a
											striking accent wall. Yellow and grey cabinets along with
											an accent wall make this kitchen look stylish and chic.
										</span>
										<br></br>
										{d && (
											<div>
												<h5>Special Features</h5>
												<li>
													An island in the centre with a hob unit and chimney
													above to cook and eat together.
												</li>
												<li>
													Handleless cabinets in yellow and grey blend together
													beautifully.
												</li>
												<li>
													An accent wall in textured paint brings in character
													to the space.
												</li>
												<li>
													A tiled backsplash breaks the monotony of solid
													colours.
												</li>
												<li>
													Two upholstered high chairs with gold legs have been
													placed as seating options at the island.
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
								<div className=" carousel carousel-inner">
									<img
										src="modular-kitchen/modular-kitchen-design-in-island-shaped-with-yellow-and-grey-cabinets.jpg"
										height="350px"
										width="600px"
									/>
								</div>
							</div>
						</div>
					</div>
					<div className="E">
						<div className="row">
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
									</div>
									<div className="carousel-inner">
										<div className="carousel-item active">
											<img
												src="modular-kitchen/50.jpg"
												height="350px"
												width="600px"
											/>
										</div>
										<div className="carousel-item">
											<img
												src="modular-kitchen/51.jpg"
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

							<div className="col-lg-6">
								<div className="details">
									<section>
										<h3>An L-Shaped Kitchen With A Breakfast Counter</h3>
										<span>
											A petit kitchen in a Duco finish with multiple storage
											units makes it a perfect choice for small apartments. The
											light colour makes the space look bigger and provides a
											soothing vibe, whereas the breakfast counter makes the
											kitchen area look stylish.
										</span>
										<br></br>
										{e && (
											<div>
												<h5>Special Features</h5>
												<li>
													An L-shaped kitchen with pastel colour cabinets for an
													airy vibe.
												</li>
												<li>
													A patterned tile backsplash gives the space a charming
													look.
												</li>
												<li>
													Combination or open and closed storage in the overhead
													area to store and display your pantry essentials.
												</li>
												<li>
													A wooden breakfast counter with two tall chairs to
													enjoy quick meals with friends and family.
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
										<h3>A U-Shaped Classic Styled Kitchen Design In Green</h3>
										<span>
											This kitchen in pastel green is designed for large,
											spacious homes. Ample storage option with cabinets and
											drawers help with better organisation.
										</span>
										<br></br>
										{f && (
											<div>
												<h5>Special Features</h5>
												<li>
													An inbuilt cutlery tray in the drawer for clean
													organisation
												</li>
												<li>50 Kg tandem drawer for storing heavy groceries</li>
												<li>
													Built-in dustbin under the sink that saves space
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
												src="modular-kitchen/60.jpg"
												height="350px"
												width="600px"
											/>
										</div>
										<div className="carousel-item">
											<img
												src="modular-kitchen/61.jpg"
												height="350px"
												width="600px"
											/>
										</div>
										<div className="carousel-item">
											<img
												src="modular-kitchen/62.jpg"
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
				</form>

				<div className="faqs" ref={FAQS}>
					<h5>FAQs on Modular Kitchen Designs</h5>
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
			</div>
			{/* -----------------------------contact form-------------------------------------- */}
			{contact && (
				<ConsultationPage setContact={setContact} contact={contact} />
			)}
			<Footer data={FaqScroll} />
		</Layouts>
	);
};

const data = [
	{
		Question: "1. What is the cost of a modular kitchen?",
		Answer: (
			<p>
				<span style={{ fontWeight: 400 }}>
					The cost of a modular kitchen can vary between 2.5 Lakh and go right
					up to 4 Lakh depending on the materials, finishes and accessories you
					choose.
				</span>
			</p>
		),
	},
	{
		Question:
			"2. Whats the difference between a modular kitchen and a carpenter-made kitchen?",
		Answer: (
			<p>
				<span style={{ fontWeight: 400 }}>
					Modular kitchens are exactly what they say they are - kitchens divided
					into ergonomic modules, each with a specialised role. Carpenter-made
					kitchens, conversely, aren't always perfectly optimised to the space
					available, risking cramping your style and space. Explore the detailed
					guide to the difference between Modular Kitchen vs Civil Kitchen
				</span>
			</p>
		),
	},
	{
		Question: "3. What modular kitchen design styles do you offer?",
		Answer: (
			<p>
				<span style={{ fontWeight: 400 }}>
					We cater to a plethora of kitchen styles and designs. We have
					custom-designed kitchens for many homeowners. Speak to our designers
					to translate your dream kitchen into your home. Check some of our
					popular modular kitchen design styles
				</span>
			</p>
		),
	},
	{
		Question: "4. Can you customise a design to any kitchen shape?",
		Answer: (
			<p>
				<span style={{ fontWeight: 400 }}>
					Yes, we can customise a design to any kitchen shape or size. Butterfly
					interior is one of the best modular kitchen designers in India and has
					won multiple awards for its designs.Check out kitchen customisation
					options at Butterfly interior.
				</span>
			</p>
		),
	},
	{
		Question: "5. What is the life of a modular kitchen?",
		Answer: (
			<p>
				<span style={{ fontWeight: 400 }}>
					There's no easy answer to this question. The life of your kitchen
					rests on how well you treat it, and the materials you choose. The more
					resilient the materials, and the better your care and maintenance, the
					longer your kitchen will last. Our modular kitchen packages are
					tailor-made to your requirements. Let us know what you need, and we'll
					create an accessories suite to your liking!
				</span>
			</p>
		),
	},
];

export default KitchenDesign;
