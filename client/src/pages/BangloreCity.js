import React, { useState, useRef } from "react";
import Layouts from "../components/Layout/Layouts";
import Header from "../components/Layout/header";
import Footer from "../components/Layout/footer";
import { useAuth } from "../context/auth";
import toast from "react-hot-toast";
import ConsultationPage from "./ConsultationPage";
const BangloreCity = () => {
	const [contact, setContact] = useState(false);
	const [selected, setSelected] = useState();
	const [auth, setAuth] = useAuth();
	const FAQS = useRef(null);

	const toggle = (i) => {
		if (selected === i) {
			return setSelected(null);
		}
		setSelected(i);
	};

	const FaqScroll = () => {
		FAQS.current?.scrollIntoView({ behavior: "smooth", block: "center" });
	};

	const showContuctUs = () => {
		!auth.user
			? toast.error("Please login before contacting us!")
			: setContact(!contact);
	};

	return (
		<Layouts>
			<div className="Navbar-sticky">
				<Header data={FaqScroll} />
			</div>
			{/* --------------image------------------- */}
			<div className="box1">
				<div className="centered">
					<div className="first">
						<h3>Best Home Interior Designers In Bengaluru</h3>
					</div>
					<div className="third">
						<h5>Dream Homes At Dream Budgets &amp; 10,000 Happy Customers</h5>
					</div>
					<div className="cta">
						<a className="cta-button" onClick={showContuctUs}>
							Book A Free Consultation
						</a>
					</div>
				</div>
			</div>

			<div className=" box1-banner">
				<div className="row">
					<div className="col-lg-4">
						<div className="subbanner-img">
							<img
								className="img-fluid"
								src="https://media.designcafe.com/wp-content/uploads/2022/07/27114426/interior-designers-in-bangalore-personalised-designs.png"
								alt="Interior designers in bangalore for personalised designs"
							/>
						</div>
						<div className="subbanner-text">
							<p>Personalised Designs</p>
						</div>
					</div>
					<div className="col-lg-4">
						<div className="subbanner-img">
							<img
								className="img-fluid"
								src="https://media.designcafe.com/wp-content/uploads/2022/07/27114423/interior-design-company-bangalore-with-space-saving-desings.png"
								alt="Leading interior design company in bangalore provides 20% extra storage"
							/>
						</div>
						<div className="subbanner-text">
							<p>20% Extra Storage</p>
						</div>
					</div>
					<div className="col-lg-4">
						<div className="subbanner-img">
							<img
								className="img-fluid"
								src="https://media.designcafe.com/wp-content/uploads/2022/07/27114420/home-interiors-bangalore-durable-modular-furniture.png"
								alt="Home interiors bangalore with a sustainable modular furniture"
							/>
						</div>
						<div className="subbanner-text">
							<p>Modular Furniture</p>
						</div>
					</div>
				</div>
			</div>

			<div className="grid-DG-dining">
				<h1 className="gridDesignTexts">
					Designs For Every Budget And Lifestyle
				</h1>
				<h5>Smart Modular Kitchen Designs</h5>
				<div
					id="carouselExampleIndicators1"
					className="carousel slide home-carousel"
					data-bs-ride="carousel"
				>
					<div className="carousel-inner">
						<div className="carousel-item active">
							<div className="slide-DG">
								<figure className="effect-zoe a">
									<img src="modular-kitchen/60.jpg" />
									<figcaption>
										<p className="description">
											A U-Shaped Classic Styled Kitchen Design In Green
										</p>
										<p className="des-subText">
											This kitchen in pastel green is designed for large,
											spacious homes.
										</p>
									</figcaption>
								</figure>
								<div className="d-none d-md-block">
									<figure className="effect-zoe">
										<img src="modular-kitchen/50.jpg" />
										<figcaption>
											<p className="description">
												An L-Shaped Kitchen With A Breakfast Counter
											</p>
											<p className="des-subText">
												A petit kitchen in a Duco finish with multiple storage
												units makes it a perfect choice for small apartments.
											</p>
										</figcaption>
									</figure>
								</div>
							</div>
						</div>
					</div>
				</div>
				<div className="cta">
					<a
						href="#contactUsModal"
						onClick={showContuctUs}
						data-toggle="modal"
						data-target="#contactUsModal"
						className="cta-button"
						title="Book A Free Consultation"
					>
						Meet Our Kitchen Experts
					</a>
				</div>
			</div>

			<div className="grid-DG-dining">
				<h4 className="gridDesignTexts">
					Bedroom Interiors For Comfort And Style
				</h4>
				<div
					id="carouselExampleIndicators1"
					className="carousel slide home-carousel"
					data-bs-ride="carousel"
				>
					<div className="carousel-inner">
						<div className="carousel-item active">
							<div className="slide-DG">
								<figure className="effect-zoe a">
									<img src="bedroom-design/f1.jpg" />
									<figcaption>
										<p className="description">
											A Modern Bedroom With A Compact Study Corner
										</p>
										<p className="des-subText">
											This bedroom in muted colours and patterned wallpaper
											exudes an elegant yet youtful vibe.
										</p>
									</figcaption>
								</figure>
								<div className="d-none d-md-block">
									<figure className="effect-zoe">
										<img src="bedroom-design/e1.jpg" />
										<figcaption>
											<p className="description">
												A Bright Bedroom With A Study Unit
											</p>
											<p className="des-subText">
												Designed with a white and orange colour pallette, this
												bedroom has a minimalistic yet charming look.
											</p>
										</figcaption>
									</figure>
								</div>
							</div>
						</div>
					</div>
				</div>
				<div className="cta">
					<a
						href="#contactUsModal"
						onClick={showContuctUs}
						data-toggle="modal"
						data-target="#contactUsModal"
						className="cta-button"
						title="Book A Free Consultation"
					>
						Meet Our Designers
					</a>
				</div>
			</div>

			<div className="grid-DG-dining">
				<h4 className="gridDesignTexts">
					Living Room Interiors For A Fabulous First Impression
				</h4>
				<div
					id="carouselExampleIndicators1"
					className="carousel slide home-carousel"
					data-bs-ride="carousel"
				>
					<div className="carousel-inner">
						<div className="carousel-item active">
							<div className="slide-DG">
								<figure className="effect-zoe a">
									<img src="living-room/b1.jpg" />
									<figcaption>
										<p className="description">
											A Modern Minimalist Living Room With TV Unit And
											Bookshelner
										</p>
										<p className="des-subText">
											Designed in neutral tones of beige and cream, this living
											room boasts modern luxury and cosine
										</p>
									</figcaption>
								</figure>
								<div className="d-none d-md-block">
									<figure className="effect-zoe">
										<img src="living-room/e1.jpg" />
										<figcaption>
											<p className="description">
												A Modern Living Room With A Japandi Vibe
											</p>
											<p className="des-subText">
												This minimalistic living room design, adorned in neutral
												tones, has the power to transform any small space into a
												charming haven.
											</p>
										</figcaption>
									</figure>
								</div>
							</div>
						</div>
					</div>
				</div>
				<div className="cta">
					<a
						href="#contactUsModal"
						onClick={showContuctUs}
						data-toggle="modal"
						data-target="#contactUsModal"
						className="cta-button"
						title="Book A Free Consultation"
					>
						Book A Free Consultation
					</a>
				</div>
			</div>

			<div className="faqs" ref={FAQS}>
				<h5>FAQs On Home Interiors And Designers In Bengaluru</h5>
				<div className="QNA">
					{QNA.map((item, i) => (
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
			<Footer data={FaqScroll} />
		</Layouts>
	);
};
const QNA = [
	{
		Question:
			"1. What sets Butterfly interior apart from other interior design companies in Bengaluru?",
		Answer: (
			<p>
				<span style={{ fontWeight: 400 }}>
					Butterfly interior is an upstanding quality code, with in-house
					interior designers, intelligent designs and functionality-first
					protocols!.
				</span>
			</p>
		),
	},
	{
		Question: "2. What is the cost of interior design in Bengaluru?",
		Answer: (
			<p>
				<span style={{ fontWeight: 400 }}>
					The interior design cost in Bengaluru can vary as per the kind of
					interior theme you choose. For example, a minimalistic design theme
					will cost you way less than a royal design theme with luxury materials
					and finishes. Again, the cost will vary as per the size of your house.
				</span>
			</p>
		),
	},
	{
		Question: "3. What is interior cost for 3bhk apartment in bengaluru?",
		Answer: (
			<p>
				<span style={{ fontWeight: 400 }}>
					The interior cost of a 3BHK apartment in Bengaluru can start from Rs
					7-12 lakh. But keep in mind that this price is not standard as it
					depends on the kind of interior design you want. For example, for a
					simple, minimalistic 3BHK apartment, the interiors will cost even less
					than those of a 2BHK house. This, of course, depends on many factors,
					including the materials, upholstery, lighting, colour palette and
					furnishings. The cost can, therefore, vary with the choices you make.
					The best way to estimate the price of a 3HK interior is to select the
					type of interiors you want and then discuss your budget with the
					designer to understand the possibilities.
				</span>
			</p>
		),
	},
	{
		Question: "4. How much interior design cost for 2bhk flat in bengaluru?",
		Answer: (
			<p>
				<span style={{ fontWeight: 400 }}>
					The cost of home interiors depends on several factors. Materials,
					finishes, furniture styles, etc., are some factors that determine the
					interior design cost. Therefore, the cost of designing a 2BHK home in
					Bengaluru can vary a lot. However, if you are going for modern design
					elements with not-so-specific themes and furniture, the cost may start
					from Rs 8-9 lakh. But in case you have a specific set of choices, the
					price may change. Thus, it is vital first to research the kind of
					interiors you want for your 2BHK home. For instance, if you are keen
					on minimalistic design, you might get your home interiors done at an
					affordable price. However, if you want lavish interiors with antique
					elements, the price will rise.
				</span>
			</p>
		),
	},
	{
		Question: "5. How do you price an interior design project?",
		Answer: (
			<p>
				<span style={{ fontWeight: 400 }}>
					Here are a few things to consider while hiring an interior designer:
					<li>
						Research and study the style the designers follow so that you get
						precisely the kind of house you are looking for.
					</li>
					<li>
						Make sure you specify your budget and choose a firm that can work
						according to your selected budget structure.
					</li>
					<li>
						Learn from your designers' customer reviews. This will help you
						understand their work.
					</li>
					<li>
						Have an estimated timeline and specify this to your designers so
						that you get your home as planned.
					</li>
					<li>
						Be open to your designers' creativity so that they get enough
						freedom to offer you the best designs.
					</li>
					<li>
						Be personally involved in design decisions and spare time for
						meetings with your designers so that you are never surprised by the
						reslit.
					</li>
				</span>
			</p>
		),
	},
	{
		Question: "6. How much do interior designers charge in Bengaluru?",
		Answer: (
			<p>
				<span style={{ fontWeight: 400 }}>
					Butterfly Interior's home interior design services starts from 3.5
					Lacs. The cost of interior design will depend on various factors
					including the size of your apartment, materials and finishes you
					choose, designs you select. Every Butterfly interior home is
					customised to the taste and budget of the customers. Talk to the
					designer to get the customised quote for your home.
				</span>
			</p>
		),
	},
];
export default BangloreCity;
