import React, { useEffect, useRef, useState } from "react";
import { NavLink, useLocation } from "react-router-dom";
import { useAuth } from "../../context/auth";
import ConsultationPage from "../../pages/ConsultationPage";
import toast from "react-hot-toast";
const Footer = (props) => {
	//---------------------contact-----------------------------------------
	const [hideNavReviews, setHideNavReviews] = useState(true);
	const [hideNavFaqs, setHideNavFaqs] = useState(true);
	const location = useLocation();
	const [contact, setContact] = useState(false);
	const [auth, setAuth] = useAuth();

	const showContuctUs = () => {
		!auth.user
			? toast.error("Please login before contacting us!")
			: setContact(!contact);
	};

	useEffect(() => {
		if (location.pathname !== "/") {
			setHideNavReviews(false);
			setHideNavFaqs(false);
		}
		if (
			location.pathname === "/kitchen-design" ||
			location.pathname === "/wardrobe-design" ||
			location.pathname === "/bedroom-design" ||
			location.pathname === "/livingroom-design" ||
			location.pathname === "/diningroom-design" ||
			location.pathname === "/bathroom-design" ||
			location.pathname === "/city-banglore"
		) {
			setHideNavFaqs(true);
		}
	});

	//-----------------------------------------------------------------------
	return (
		<>
			<div className="footer">
				<h1>Ready To Design Your Dream Home?</h1>
				<a className="btn btn-primary Btn-contact" onClick={showContuctUs}>
					Book Free Consultation
				</a>
				<table style={{ marginRight: "100px" }}>
					<tbody>
						<tr className="row">
							<td className="col-lg-3 col-md-3">
								<li>
									<NavLink className="footer-NavText" to="/">
										Home
									</NavLink>
								</li>
								{hideNavFaqs && (
									<li>
										<NavLink className="footer-NavText qs" onClick={props.data}>
											FAQs
										</NavLink>
									</li>
								)}
								{hideNavReviews && (
									<li>
										<NavLink className="footer-NavText" onClick={props.data1}>
											Reviews
										</NavLink>
									</li>
								)}
							</td>
							<td className="col-lg-3 col-md-3">
								<li>
									<NavLink className="footer-NavText" to="/recent-projects">
										Recent Projects
									</NavLink>
								</li>
								<li>
									<NavLink className="footer-NavText" to="/about">
										About Us
									</NavLink>
								</li>
								<li>
									<NavLink
										className="footer-NavText Btn-contact"
										onClick={showContuctUs}
									>
										Contact Us
									</NavLink>
								</li>
							</td>
							<td className="col-lg-3 col-md-3">
								<li>
									<NavLink className="footer-NavText" to="/kitchen-design">
										Kitchen Designs{" "}
									</NavLink>
								</li>
								<li>
									<NavLink className="footer-NavText" to="/wardrobe-design">
										Wardrobe Designs
									</NavLink>
								</li>
								<li>
									<NavLink className="footer-NavText" to="/bedroom-design">
										Bedroom Designs
									</NavLink>
								</li>
							</td>
							<td className="col-lg-3 col-md-3">
								<li>
									<NavLink className="footer-NavText" to="/livingroom-design">
										Living Room Designs
									</NavLink>
								</li>
								<li>
									<NavLink className="footer-NavText" to="/diningroom-design">
										Dining Room Designs
									</NavLink>
								</li>
								<li>
									<NavLink className="footer-NavText" to="/bathroom-design">
										Bathroom Design
									</NavLink>
								</li>
							</td>
						</tr>
					</tbody>
				</table>
				<div className="footer-copiright">
					<p>© Copyright 2023 Laxman Pvt. Ltd. All rights reserved.</p>
				</div>
			</div>
			{/* -----------------------------contact form-------------------------------------- */}
			{contact && (
				<ConsultationPage setContact={setContact} contact={contact} />
			)}
		</>
	);
};

export default Footer;
