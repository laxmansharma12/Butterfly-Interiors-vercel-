import React, { useRef, useState } from "react";
import Layouts from "../components/Layout/Layouts";
import Header from "../components/Layout/header";
import Footer from "../components/Layout/footer";
import customer1Img from "../components/Layout/images/bhavana.jpg";
import customer2Img from "../components/Layout/images/deepaMaam.jpg";
import { NavLink } from "react-router-dom";
import toast from "react-hot-toast";
import { useAuth } from "../context/auth";
import heroImg from "../components/Layout/images/banner-image.jpg";
import ConsultationPage from "./ConsultationPage";
const HomePage = () => {
	const [contact, setContact] = useState(false);

	//-----------------------------------------------------------------------
	const [auth, setAuth] = useAuth();
	const showContuctUs = () => {
		!auth.user
			? toast.error("Please login before contacting us!")
			: setContact(!contact);
	};
	//-----------------------------FAQS-SCROLL----------------------------------------------
	const FAQS = useRef(null);
	const customer = useRef(null);
	const FaqScroll = () => {
		FAQS.current?.scrollIntoView({ behavior: "smooth", block: "center" });
	};
	const customerScroll = () => {
		customer.current?.scrollIntoView({ behavior: "smooth", block: "center" });
	};

	return (
		<Layouts>
			<div className="Navbar-sticky">
				<Header data={FaqScroll} data1={customerScroll} />
			</div>
			<div>
				<div className="box">
					<img src={heroImg} />
					<div
						className="inner-box"
						onClick={showContuctUs}
						style={{ cursor: "pointer" }}
					></div>
				</div>
				<div className="banner-strip">
					<div className="banner-strip-text">
						Up to 15% OFF on your Home Interiors. Limited Period Offer.{"   "}
						<span>
							<span
								style={{ textDecoration: "underline", cursor: "pointer" }}
								onClick={showContuctUs}
							>
								GET OFFER
							</span>
						</span>
					</div>
				</div>

				<div className="grid-DG">
					<h1 className="gridDesignTexts">Modular Kitchen Designs</h1>
					<div
						id="carouselExampleIndicators"
						className="carousel slide home-carousel"
						data-bs-ride="carousel"
					>
						<div className="carousel-inner">
							<div className="carousel-item active">
								<div className="slide-DG">
									<figure className="effect-zoe a">
										<img src="modular-kitchen/parallel-kitchen-design-in-red-and-yellow.jpg" />
										<figcaption>
											<p className="description">
												Vibrant Red and Yellow Parallel Kitchen Design
											</p>
											<p className="des-subText">
												This kitchen is designed in vibrant shades of red and
												yellow for a youthful vibe.
											</p>
										</figcaption>
									</figure>
									<div className="d-none d-md-block">
										<figure className="effect-zoe">
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
									</div>
								</div>
							</div>

							<div className="carousel-item">
								<div className="slide-DG">
									<figure className="effect-zoe a">
										<img src="modular-kitchen/g-shaped-kitchen-design-in-pink-and-white.jpg" />
										<figcaption>
											<p className="description">
												G Shaped Kitchen Design In Blush Pink And White
											</p>
											<p className="des-subText">
												This G shaped kitchen looks pretty with its blush pink
												with white colour scheme.
											</p>
										</figcaption>
									</figure>
									<div className="d-none d-md-block">
										<figure className="effect-zoe">
											<img src="modular-kitchen/blue-and-white-modular-kitchen-design.jpg" />
											<figcaption>
												<p className="description">
													A Bold Navy Blue And White Modular Kitchen Design
												</p>
												<p className="des-subText">
													This royal blue and white modular kitchen with floral
													tiles is for those who want to make a statement.
												</p>
											</figcaption>
										</figure>
									</div>
								</div>
							</div>

							<div className="carousel-item">
								<div className="slide-DG">
									<figure className="effect-zoe a">
										<img src="modular-kitchen/modular-kitchen-design-in-island-shaped-with-yellow-and-grey-cabinets.jpg" />
										<figcaption>
											<p className="description">
												A Modular Island Kitchen Design With An Accent Wall
											</p>
											<p className="des-subText">
												Island kitchen design featuring a modular layout and a
												striking accent wall.
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
						<a
							className="carousel-control-prev"
							data-bs-target="#carouselExampleIndicators"
							role="button"
							data-bs-slide="prev"
						>
							<span className="carousel-control-prev-icon" aria-hidden="true" />
							<span className="sr-only">Previous</span>
						</a>
						<a
							className="carousel-control-next"
							data-bs-target="#carouselExampleIndicators"
							role="button"
							data-bs-slide="next"
						>
							<span className="carousel-control-next-icon" aria-hidden="true" />
							<span className="sr-only">Next</span>
						</a>
					</div>
					<NavLink className="exploreMore-btn" to="/kitchen-design">
						Explore more
					</NavLink>
				</div>

				<div className="WUG">
					<h3 className="sub-head">What You Get</h3>
					<div className="container">
						<div className="row mt-4">
							<div className="col-lg-4 col-sm-6 ">
								<div className="img-box">
									<img
										alt="Living room interior design services"
										src="https://media.designcafe.com/wp-content/uploads/2022/02/16231713/living-room-interior-design-services.png"
										className="img-fluid lazyload"
									/>
								</div>
								<div className="text-box">
									<div className="text-box-head">Living/Dining Room</div>
									<div className="text-box-subhead">
										TV Unit, TV Back Panelling, Crockery Unit, Bar Unit,
										Bookshelf
									</div>
								</div>
							</div>
							<div className="col-lg-4 col-sm-6">
								<div className="img-box">
									<img
										alt="Bedroom interior design services"
										src="https://media.designcafe.com/wp-content/uploads/2022/02/16231700/bedroom-interior-design-services.png"
										className="img-fluid lazyload"
									/>
								</div>
								<div className="text-box">
									<div className="text-box-head">Bedroom</div>
									<div className="text-box-subhead">
										Wardrobes, TV Unit, Bed with Storage, Dressing Unit, Study
										Unit
									</div>
								</div>
							</div>
							<div className="col-lg-4 col-sm-6">
								<div className="img-box">
									<img
										alt="Modular kitchen interior design services"
										src="https://media.designcafe.com/wp-content/uploads/2022/02/16231716/modular-kitchen-interior-design-services.png"
										className="img-fluid lazyload"
									/>
								</div>
								<div className="text-box">
									<div className="text-box-head">Kitchen</div>
									<div className="text-box-subhead">
										Countertops, Backsplashes, Accessories, Shutters, Storage
									</div>
								</div>
							</div>
							<div className="col-lg-4 col-sm-6">
								<div className="img-box">
									<img
										alt="Innovate Storage Design Solutions"
										src="https://media.designcafe.com/wp-content/uploads/2022/02/16231706/innovative-storage-design-solutions.png"
										className="img-fluid lazyload"
									/>
								</div>
								<div className="text-box">
									<div className="text-box-head">Innovative Storage</div>
									<div className="text-box-subhead">
										Janitor Unit, Skirting Drawer, Pantry Pull Out, Appliance
										Garage, Hidden Bar Cabinet, Magic Corner
									</div>
								</div>
							</div>
							<div className="col-lg-4 col-sm-6">
								<div className="img-box">
									<img
										alt="Interior design services from Design Cafe"
										src="https://media.designcafe.com/wp-content/uploads/2022/02/16231709/interior-design-services.png"
										className="img-fluid lazyload"
									/>
								</div>
								<div className="text-box">
									<div className="text-box-head">Interior Design Services</div>
									<div className="text-box-subhead">
										False Ceiling, Wall Panelling, Decor Accents, Lighting,
										Furnishing, Appliances
									</div>
								</div>
							</div>
							<div className="col-lg-4 col-sm-6">
								<div className="img-box">
									<img
										alt="Home improvement services from Design Cafe"
										src="https://media.designcafe.com/wp-content/uploads/2022/02/16231703/home-improvement-services.png"
										className="img-fluid lazyload"
									/>
								</div>
								<div className="text-box">
									<div className="text-box-head">Home Improvement Services</div>
									<div className="text-box-subhead">
										Painting, Bathroom Remodelling, Tiling, Plumbing,
										Electrical, Civil Work, Deep Cleaning
									</div>
								</div>
							</div>
						</div>
					</div>
					<a className="WUG-button" onClick={showContuctUs}>
						Get Free Estimates
					</a>
				</div>

				<div className="Customers" ref={customer}>
					<h2 className="sub-head">Our Happy Customers</h2>
					<div className="container customer-reviews">
						<div className="row">
							<div className="col-lg-6">
								<table>
									<tr>
										<td>
											<div className="customer-head">
												<div className="customer-img-box">
													<img
														src={customer2Img}
														className="img-fluid lazyload"
														style={{ borderRadius: "50%" }}
														width="120px"
													/>
												</div>
												<div className="customer-text-box">
													<div className="text-box-head">Mrs. Deepa Rajesh</div>
													<div className="text-client-area">Bengaluru</div>
												</div>
											</div>
										</td>
									</tr>
									<tr>
										<td>
											<div className="customer-text-box-subhead">
												<p>
													Butterfly interior gave us a home we always wanted.
													The journey from idea to execution was smooth and
													having them on board transform our home was a great
													decision!
												</p>
											</div>
										</td>
									</tr>
								</table>
							</div>

							<div className="col-lg-6">
								<table>
									<tr>
										<td>
											<div className="customer-head">
												<div className="customer-img-box">
													<img
														src={customer1Img}
														className="img-fluid lazyload"
														style={{ borderRadius: "50%" }}
														width="120px"
													/>
												</div>

												<div className="customer-text-box">
													<div className="text-box-head">Bhavana Thuppada</div>
													<div className="text-client-area">Bengaluru</div>
												</div>
											</div>
										</td>
									</tr>
									<tr>
										<td>
											<div className="customer-text-box-subhead">
												<p>
													Overall an excellent job done by Butterfly interiors.
													Truly overwhelmed by the complete design and execution
													of the project. Love the storage solutions provided in
													the kitchen.
												</p>
											</div>
										</td>
									</tr>
								</table>
							</div>
						</div>
					</div>
					<button className="customer-button" onClick={showContuctUs}>
						Get Free Estimates
					</button>
				</div>

				<div className="grid-DG-dining">
					<h1 className="gridDesignTexts">Dining Room Designs</h1>
					<div
						id="carouselExampleIndicators1"
						className="carousel slide home-carousel"
						data-bs-ride="carousel"
					>
						<div className="carousel-inner">
							<div className="carousel-item active">
								<div className="slide-DG">
									<figure className="effect-zoe a">
										<img src="dining-room-design/a1.jpg" />
										<figcaption>
											<p className="description">
												Dining Room Design In Modern Minimal Style
											</p>
											<p className="des-subText">
												A modern minimal style dining room designed for wine
												connoisseurs.
											</p>
										</figcaption>
									</figure>
									<div className="d-none d-md-block">
										<figure className="effect-zoe">
											<img src="dining-room-design/c1.jpg" />
											<figcaption>
												<p className="description">
													Neo Classical Style Dining Room Interior Design
												</p>
												<p className="des-subText">
													This dining room uniquely blends colours of grey,
													emerald, beige and white.
												</p>
											</figcaption>
										</figure>
									</div>
								</div>
							</div>
							<div className="carousel-item">
								<div className="slide-DG">
									<figure className="effect-zoe a">
										<img src="dining-room-design/d1.jpg" />
										<figcaption>
											<p className="description">
												A Neo-Classical Dining Room With Space Saving Bar Unit
											</p>
											<p className="des-subText">
												This Neo-classical style dining room exhibits an elegant
												vibe.
											</p>
										</figcaption>
									</figure>
									<div className="d-none d-md-block">
										<figure className="effect-zoe">
											<img src="dining-room-design/e1.jpg" />
											<figcaption>
												<p className="description">
													A Gorgeous Neo Classical Dining Room In A Neutral
													Colour Scheme
												</p>
												<p className="des-subText">
													This neoclassical interiors exhibit a gorgeous
													periodic style dining setup.
												</p>
											</figcaption>
										</figure>
									</div>
								</div>
							</div>
							<div className="carousel-item">
								<div className="slide-DG">
									<figure className="effect-zoe a">
										<img src="dining-room-design/f1.jpg" />
										<figcaption>
											<p className="description">
												A Dining Room With An Elegant Crockery Unit Cum Showcase
											</p>
											<p className="des-subText">
												This dining area is set by a beautiful balcony that
												brings a natural vibe to the place.
											</p>
										</figcaption>
									</figure>
									<div className="d-none d-md-block">
										<figure className="effect-zoe">
											<img src="dining-room-design/b1.jpg" />
											<figcaption>
												<p className="description">
													A Dining Room In Grey And Pastel Blue
												</p>
												<p className="des-subText">
													The dining area exhibits a modern interior setup with
													a soothing mix of neutrals and pastel colour tones.{" "}
												</p>
											</figcaption>
										</figure>
									</div>
								</div>
							</div>
						</div>
						<a
							className="carousel-control-prev"
							data-bs-target="#carouselExampleIndicators1"
							role="button"
							data-bs-slide="prev"
						>
							<span className="carousel-control-prev-icon" aria-hidden="true" />
							<span className="sr-only">Previous</span>
						</a>
						<a
							className="carousel-control-next"
							data-bs-target="#carouselExampleIndicators1"
							role="button"
							data-bs-slide="next"
						>
							<span className="carousel-control-next-icon" aria-hidden="true" />
							<span className="sr-only">Next</span>
						</a>
					</div>
					<NavLink className="exploreMore-btn" to="/diningroom-design">
						Explore more
					</NavLink>
				</div>

				<div className="faqs" ref={FAQS}>
					<div className="why">
						<div className="container row">
							<div className="col-lg-12">
								<div className="section-top">
									<h4 className="sub-head">Why Choose Butterfly Interiors?</h4>
								</div>
							</div>
						</div>
						<div className="row">
							<div className="col-lg-3 col-md-6">
								<div className="section-1">
									<div className="section-img">
										<img
											alt="Best home interior designs personalised for you"
											src="https://media.designcafe.com/wp-content/uploads/2022/02/16230002/13.png"
											className="img-fluid lazyload"
										/>
									</div>
									<div className="section-text">Personalised Designs</div>
								</div>
							</div>
							<div className="col-lg-3 col-md-6">
								<div className="section-1">
									<div className="section-img">
										<img
											alt="20% Extra space-saving home interior storage solutions"
											src="https://media.designcafe.com/wp-content/uploads/2022/02/16225955/5.png"
											className="img-fluid lazyload"
										/>
									</div>
									<div className="section-text">20% EXTRA Storage</div>
								</div>
							</div>
							<div className="col-lg-3 col-md-6">
								<div className="section-1">
									<div className="section-img">
										<img
											alt="Best EMI available on your Design Cafe Home Interior Solutions"
											src="https://media.designcafe.com/wp-content/uploads/2022/02/16230006/15.png"
											className="img-fluid lazyload"
										/>
									</div>
									<div className="section-text">No Cost EMIs</div>
								</div>
							</div>
							<div className="col-lg-3 col-md-6">
								<div className="section-1">
									<div className="section-img">
										<img
											alt="Avail 10 years warranty on your Design Cafe Home Interiors"
											src="https://media.designcafe.com/wp-content/uploads/2022/02/16225958/7.png"
											className="img-fluid lazyload"
										/>
									</div>
									<div className="section-text">10 Year Warranty</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
			{/* -----------------------------contact form-------------------------------------- */}
			{contact && (
				<ConsultationPage setContact={setContact} contact={contact} />
			)}
			<Footer data={FaqScroll} data1={customerScroll} />
		</Layouts>
	);
};

export default HomePage;
