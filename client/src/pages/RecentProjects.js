import React, { useState } from "react";
import Layouts from "../components/Layout/Layouts";
import Header from "../components/Layout/header";
import Footer from "../components/Layout/footer";
import { useAuth } from "../context/auth";
import toast from "react-hot-toast";
import ConsultationPage from "./ConsultationPage";
const RecentProjects = () => {
	const [contact, setContact] = useState(false);
	const [b, setB] = useState(false);
	const [a, setA] = useState(false);
	const [auth, setAuth] = useAuth();

	const showContuctUs = () => {
		!auth.user
			? toast.error("Please login before contacting us!")
			: setContact(!contact);
	};

	return (
		<Layouts title={"Recent Projects"}>
			<div className="Navbar-sticky">
				<Header />
			</div>
			<div className="recent-project row">
				<div className="row RP-top-bar">
					<div className="col-lg-12 col-sm-12">
						<div className="bg-text-title">
							<h2>Recent Projects</h2>
						</div>
					</div>
				</div>

				<div className="detail-reviews col-lg-12">
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
						<button
							className="carousel-control-prev"
							type="button"
							data-bs-target="#carouselExampleIndicators1"
							data-bs-slide="prev"
						>
							<span className="carousel-control-prev-icon" aria-hidden="true" />
							<span className="visually-hidden">Previous</span>
						</button>
						<button
							className="carousel-control-next"
							type="button"
							data-bs-target="#carouselExampleIndicators1"
							data-bs-slide="next"
						>
							<span className="carousel-control-next-icon" aria-hidden="true" />
							<span className="visually-hidden">Next</span>
						</button>
					</div>

					<div className=" rp-details">
						<section>
							<div className="customers-heading">
								<h4>Mrs. Deepa Rajesh's 3 BHK Home In Bengaluru</h4>
								<a
									className="btn btn-primary Btn-contact"
									onClick={showContuctUs}
								>
									Get Quote
								</a>
							</div>
							<br></br>
							<p>
								<span className="title">Designed By:- </span>
								<span className="name">Laxman Sharma</span>
							</p>
							{a && (
								<div style={{ display: "block" }}>
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
													<div style={{ margin: "10px" }}>
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
									<div className="review">
										<span>
											Butterfly Interior's designs were very good. High quality
											products are used overall in the project. Feedbacks and
											concerns if any were solved immediately. The final outcome
											is great and suitable to every family member.
										</span>
									</div>
								</div>
							)}
							<span className="myBtn-1" onClick={() => setA(!a)}>
								{a == 1 ? "Less Details" : "More Details.."}
							</span>
						</section>
					</div>
				</div>
				<br></br>
				<br></br>

				<div className="detail-reviews">
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
								<img src="bedroom-design/f1.jpg" height="400px" width="100%" />
							</div>
							<div className="carousel-item ">
								<img src="modular-kitchen/60.jpg" height="400px" width="100%" />
							</div>
							<div className="carousel-item">
								<img src="living-room/b1.jpg" height="400px" width="100%" />
							</div>
						</div>
						<button
							className="carousel-control-prev"
							type="button"
							data-bs-target="#carouselExampleIndicators2"
							data-bs-slide="prev"
						>
							<span className="carousel-control-prev-icon" aria-hidden="true" />
							<span className="visually-hidden">Previous</span>
						</button>
						<button
							className="carousel-control-next"
							type="button"
							data-bs-target="#carouselExampleIndicators2"
							data-bs-slide="next"
						>
							<span className="carousel-control-next-icon" aria-hidden="true" />
							<span className="visually-hidden">Next</span>
						</button>
					</div>

					<div className="rp-details">
						<section>
							<div className="customers-heading">
								<h4>Bhavana Thuppada's 2 BHK Home In Bengaluru</h4>
								<a
									className="btn btn-primary Btn-contact"
									onClick={showContuctUs}
								>
									Get Quote
								</a>
							</div>
							<br></br>
							<p>
								<span className="title">Designed By:- </span>
								<span className="name">Laxman Sharma</span>
							</p>
							{b && (
								<div style={{ display: "block" }}>
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
													<div style={{ margin: "10px" }}>
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
									<div className="review">
										<span>
											I recommend Butterfly interior to who all reading my
											review because they use High quality products in the
											project. Their services are very good and behavior really
											friendly.
										</span>
									</div>
								</div>
							)}
							<span className="myBtn-1" onClick={() => setB(!b)}>
								{b == 1 ? "Less Details" : "More Details.."}
							</span>
						</section>
					</div>
				</div>
				<br></br>
				<br></br>
			</div>
			{/* -----------------------------contact form-------------------------------------- */}
			{contact && (
				<ConsultationPage setContact={setContact} contact={contact} />
			)}
			<Footer />
		</Layouts>
	);
};

export default RecentProjects;
