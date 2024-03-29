import React, { useState, useEffect, useRef } from "react";
import { NavLink, useNavigate, useLocation, Link } from "react-router-dom";
import { useAuth } from "../../context/auth";
import toast from "react-hot-toast";
import ConsultationPage from "../../pages/ConsultationPage";
import LoginPage from "../../pages/LoginPage";
import ForgotPasswordPage from "../../pages/ForgotPasswordPage";
import SignUpPage from "../../pages/SignUpPage";

const Header = (props) => {
	const [hideNavReviews, setHideNavReviews] = useState(true);
	const [hideNavFaqs, setHideNavFaqs] = useState(true);
	const location = useLocation();

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
	// ------------to-hide-buttons------------------
	const [signBtn, setSignUpBtn] = useState(true);
	const [auth, setAuth] = useAuth();
	const navigate = useNavigate();
	const handleLogout = () => {
		setAuth({
			...auth,
			user: null,
			token: "",
		});
		navigate("/");
		localStorage.removeItem("auth");
		toast.success("Logout Successfully");
		setUserDropdown(false);
	};

	//---------------------to-show-userName------------------------
	const [userDropdown, setUserDropdown] = useState(false);
	const userDropdownHide = useRef();

	// -----------to hide and show forms-------------
	const [contact, setContact] = useState(false);
	const [signup, setSignUp] = useState(false);
	const [login, setLogin] = useState(false);
	const [forgotPassword, setForgotPassword] = useState(false);

	const showContuctUs = () => {
		!auth.user
			? toast.error("Please login before contacting us!")
			: setContact(!contact);
	};

	const [isMobile, setIsMobile] = useState(false);

	useEffect(() => {
		const handleResize = () => {
			setIsMobile(window.innerWidth <= 640);
		};

		// Initial check
		handleResize();

		window.addEventListener("resize", handleResize);

		return () => window.removeEventListener("resize", handleResize);
	}, []);

	return (
		<div>
			<nav className="navbar navbar-expand-lg">
				<div className="container-fluid p-0">
					{/* Navbar content */}
					<ul className="logo" onClick={() => navigate("/")}>
						<div className="col-md-2">
							<table>
								<tr>
									<td>
										<div className="logo-image"></div>
									</td>
									<td>
										<div className="Name">
											<p className="heading">interiors</p>
										</div>
										<div>
											<p></p>
											<h5>BUTTERFLY</h5>
											<p />
										</div>
									</td>
								</tr>
							</table>
						</div>
					</ul>
					<button
						className="navbar-toggler collapsed"
						type="button"
						data-bs-toggle="collapse"
						data-bs-target="#navbarSupportedContent"
						aria-controls="navbarSupportedContent"
						aria-expanded="false"
						aria-label="Toggle navigation"
					>
						<span className="navbar-toggler-icon"></span>
					</button>
					<div className="navbar-collapse collapse" id="navbarSupportedContent">
						<ul className="navbar-nav">
							{location.pathname !== "/" ? (
								<li className="nav-item">
									<NavLink
										className="nav-link nav-link-texts"
										to="/"
										style={{ color: "#189BA6" }}
									>
										Home
									</NavLink>
								</li>
							) : (
								""
							)}
							<li className="nav-item dropdown">
								<Link
									className="dropdown-toggle nav-link"
									style={{ color: "#189BA6" }}
									data-bs-toggle="dropdown"
								>
									Design Gallery
								</Link>
								<ul className="dropdown-menu">
									<NavLink
										to="/kitchen-design"
										style={{ color: "#189BA6" }}
										className="nav-link nav-link-texts "
									>
										Modular Kitchen Designs{" "}
									</NavLink>
									<NavLink
										to="/wardrobe-design"
										style={{ color: "#189BA6" }}
										className="nav-link nav-link-texts dropdownItems"
									>
										Wardrobe Designs
									</NavLink>
									<NavLink
										to="/bedroom-design"
										style={{ color: "#189BA6" }}
										className="nav-link nav-link-texts dropdownItems"
									>
										Bedroom Designs
									</NavLink>
									<NavLink
										to="/livingroom-design"
										style={{ color: "#189BA6" }}
										className="nav-link nav-link-texts dropdownItems"
									>
										Living Room Designs
									</NavLink>
									<NavLink
										to="/diningroom-design"
										style={{ color: "#189BA6" }}
										className="nav-link nav-link-texts dropdownItems"
										href="dining-room.html"
									>
										Dining Room Designs
									</NavLink>
									<NavLink
										to="/bathroom-design"
										style={{ color: "#189BA6" }}
										className="nav-link nav-link-texts dropdownItems"
										href="bathroom.html"
									>
										Bathroom Design
									</NavLink>
								</ul>
							</li>
							<li className="nav-item">
								<NavLink
									className="nav-link nav-link-texts"
									to="/recent-projects"
								>
									Recent Projects
								</NavLink>
							</li>
							{hideNavReviews && (
								<li className="nav-item">
									<NavLink
										{...(isMobile && {
											"data-bs-toggle": "collapse",
											"data-bs-target": "#navbarSupportedContent",
										})}
										className="nav-link nav-link-texts"
										onClick={props.data1}
										style={{ color: "#189BA6" }}
									>
										Reviews
									</NavLink>
								</li>
							)}
							<li className="nav-item dropdown">
								<Link
									className="dropdown-toggle nav-link"
									style={{ color: "#189BA6" }}
									data-bs-toggle="dropdown"
								>
									Cities
								</Link>
								<ul className="dropdown-menu">
									<NavLink
										className="nav-link nav-link-texts"
										style={{ color: "#189BA6" }}
										to="/city-banglore"
									>
										Banglore
									</NavLink>
								</ul>
							</li>
							<li className="nav-item">
								<a
									data-bs-toggle="collapse"
									data-bs-target="#navbarSupportedContent"
									className="nav-link nav-link-texts Btn-contact"
									onClick={showContuctUs}
									style={{ cursor: "pointer" }}
								>
									Contact Us
								</a>
							</li>
							{hideNavFaqs && (
								<li className="nav-item">
									<NavLink
										{...(isMobile && {
											"data-bs-toggle": "collapse",
											"data-bs-target": "#navbarSupportedContent",
										})}
										className="nav-link nav-link-texts"
										onClick={props.data}
										style={{ color: "#189BA6" }}
									>
										FAQs
									</NavLink>
								</li>
							)}
							<li className="nav-item">
								<NavLink to="/About" className="nav-link nav-link-texts">
									About
								</NavLink>
							</li>
						</ul>
						<div>
							{!auth.user ? (
								<div className="nav-controls">
									<button
										{...(isMobile && {
											"data-bs-toggle": "collapse",
											"data-bs-target": "#navbarSupportedContent",
										})}
										id="btn-login"
										className="btn btn-outline me-2"
										onClick={() => setLogin(!login)}
									>
										Login
									</button>
									{signBtn && (
										<button
											{...(isMobile && {
												"data-bs-toggle": "collapse",
												"data-bs-target": "#navbarSupportedContent",
											})}
											id="btn-signup"
											className="btn nav-link-btn"
											onClick={() => setSignUp(!signup)}
										>
											Sign-up
										</button>
									)}
								</div>
							) : (
								<div className="auth-dashboard">
									<div
										className="user-dropdown"
										onClick={() => setUserDropdown(!userDropdown)}
									>
										<li></li>
										<li></li>
										<li></li>
									</div>
									<div className="userName">
										<span>{auth?.user?.name}</span>
									</div>
								</div>
							)}
							{/* <!--user menu --> */}
							{userDropdown && (
								<div className="user-dropdown-content" ref={userDropdownHide}>
									<NavLink
										className={"user-dropdown-dashboard-btn"}
										to={`/dashboard/${
											auth?.user?.role === 1 ? "admin" : "user"
										}`}
									>
										<i className="fa-solid fa-user"></i> Profile
									</NavLink>
									<ul
										{...(isMobile && {
											"data-bs-toggle": "collapse",
											"data-bs-target": "#navbarSupportedContent",
										})}
										onClick={handleLogout}
										style={{ cursor: "pointer" }}
									>
										<i className="fa-solid fa-right-from-bracket"></i> LogOut
									</ul>
								</div>
							)}
						</div>
					</div>
				</div>
			</nav>
			{/* -----------------------------contact form-------------------------------------- */}
			{contact && (
				<ConsultationPage setContact={setContact} contact={contact} />
			)}
			{/* -----------------------------login form-------------------------------------- */}
			{login && (
				<LoginPage
					setLogin={setLogin}
					login={login}
					setSignUp={setSignUp}
					signup={signup}
					setForgotPassword={setForgotPassword}
					forgotPassword={forgotPassword}
				/>
			)}
			{/* -----------------------------forgot password form-------------------------------------- */}
			{forgotPassword && (
				<ForgotPasswordPage
					setForgotPassword={setForgotPassword}
					setLogin={setLogin}
					login={login}
				/>
			)}
			{/* -----------------------------signup form-------------------------------------- */}
			{signup && (
				<SignUpPage
					setSignUp={setSignUp}
					signup={signBtn}
					setLogin={setLogin}
					login={login}
					setSignUpBtn={setSignUpBtn}
				/>
			)}
		</div>
	);
};

export default Header;
