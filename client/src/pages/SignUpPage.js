import React, { useEffect, useRef, useState } from "react";
import signupImg from "../components/Layout/images/login-bg1.jpg";
import { Icon } from "react-icons-kit";
import { eyeOff } from "react-icons-kit/feather/eyeOff";
import { eye } from "react-icons-kit/feather/eye";
import axios from "axios";
import toast from "react-hot-toast";
import { NavLink } from "react-router-dom";

const SignUpPage = ({ signup, setSignUp, login, setLogin, setSignUpBtn }) => {
	const [name, setName] = useState("");
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const [number, setNumber] = useState("");
	const [answer, setAnser] = useState("");
	const [type, setType] = useState("password");
	const [icon, setIcon] = useState(eyeOff);
	const signupHide = useRef();

	const handleToggle = () => {
		if (type === "password") {
			setIcon(eye);
			setType("text");
		} else {
			setIcon(eyeOff);
			setType("password");
		}
	};

	const hidesignup = () => {
		setName("");
		setEmail("");
		setPassword("");
		setAnser("");
		setNumber("");
		setSignUp(!signup);
	};

	//---------------------for-phone-name-answer-validation---------------
	const handlePhoneInput = (e) => {
		const validationMessage = document.getElementById("validationPhoneInput");
		const regex = /^[0-9\b]+$/;
		if (e.target.value === "" || regex.test(e.target.value)) {
			setNumber(e.target.value);
			validationMessage.textContent = "";
		} else {
			validationMessage.textContent = "Only numbers are allowed.";
			e.preventDefault(); // Prevent the invalid character from being entered
		}
	};
	const handleNameInput = (e) => {
		const validationMessage = document.getElementById("validationNameInput");
		const regex = /^[A-Za-z\s]+$/;
		if (e.target.value === "" || regex.test(e.target.value)) {
			setName(e.target.value);
			validationMessage.textContent = "";
		} else {
			validationMessage.textContent =
				"Only alphabets and whitespace are allowed.";
			e.preventDefault(); // Prevent the invalid character from being entered
		}
	};
	const handleAnswerInput = (e) => {
		const validationMessage = document.getElementById("validationAnswer");
		const regex = /^[A-Za-z\s]+$/;
		if (e.target.value === "" || regex.test(e.target.value)) {
			setAnser(e.target.value);
			validationMessage.textContent = "";
		} else {
			validationMessage.textContent =
				"Only alphabets and whitespace are allowed.";
			e.preventDefault(); // Prevent the invalid character from being entered
		}
	};
	//-----------------------------------------------------------
	const handleSubmit = async (e) => {
		e.preventDefault();
		try {
			const res = await axios.post(
				`${process.env.REACT_APP_API_BASE_URL}/api/v1/auth/signup`,
				{
					name,
					email,
					password,
					number,
					answer,
				}
			);
			if (res && res.data.success) {
				toast.success(res.data.message);
				setSignUp(!signup);
				setLogin(!login);
				setSignUpBtn(false);
			} else {
				toast.error(res.data.message);
			}
		} catch (error) {
			toast.error("Invalid Email and Password");
		}
		setName("");
		setEmail("");
		setPassword("");
		setAnser("");
		setNumber("");
	};

	useEffect(() => {
		const handleClickOutside = (event) => {
			if (signupHide.current && !signupHide.current.contains(event.target)) {
				setName("");
				setEmail("");
				setPassword("");
				setAnser("");
				setNumber("");
				setSignUp(!signup);
			}
		};
		document.addEventListener("mousedown", handleClickOutside);
		return () => {
			document.removeEventListener("mousedown", handleClickOutside);
		};
	});

	return (
		<div id="myModal-signup" className="modal-signup">
			<div className="modal-content-signup " ref={signupHide}>
				<div>
					<img className="banner-img1" src={signupImg} />
				</div>
				<div className="v-line" />
				<div className="signup-wlc-txt">
					<h1 className="wlc-title">Welcome!</h1>
					<p className="signup-wlc-para">
						Register your self to get notifications for exciting offers which
						helps your dream home come true!
					</p>
				</div>
				<span className="close close2" onClick={hidesignup}>
					x
				</span>
				<table className="signup-tb">
					<tbody>
						<tr>
							<td>
								<div className="wrapper1">
									<div className="title">
										<h1>Sign-Up</h1>
									</div>
									<form onSubmit={handleSubmit}>
										<div className="field">
											<input
												type="text"
												value={name}
												onChange={handleNameInput}
												maxLength={"25"}
												required
											/>
											<p
												id="validationNameInput"
												style={{
													position: "absolute",
													color: "red",
													paddingLeft: "0px",
													top: "95%",
												}}
											></p>
											<span />
											<label>Full name</label>
										</div>
										<div className="field">
											{/* Email input */}
											<input
												type="email"
												value={email}
												onChange={(e) => setEmail(e.target.value)}
												required
											/>
											<span />
											<label>Email address</label>
										</div>
										<div
											className="field"
											style={{
												display: "flex",
												justifyContent: "space-between",
											}}
										>
											{/* Password input */}
											<input
												type={type}
												value={password}
												onChange={(e) => setPassword(e.target.value)}
												maxLength={"15"}
												required
											/>
											<span
												class="flex justify-around items-center"
												onClick={handleToggle}
											>
												<Icon
													class="absolute mr-10"
													icon={icon}
													size={20}
													style={{
														color: "#bebebe",
														marginRight: "10px",
														marginTop: "10px",
													}}
												/>
											</span>
											<span />
											<label>Password</label>
										</div>
										<div className="field">
											<input
												type="text"
												value={number}
												onChange={handlePhoneInput}
												maxLength="10"
												minLength="10"
												required
											/>
											<span />
											<label>Mobile Number</label>
											<p
												id="validationPhoneInput"
												style={{
													position: "absolute",
													color: "red",
													paddingLeft: "0px",
													top: "95%",
												}}
											></p>
										</div>
										<div className="field">
											<input
												type="text"
												value={answer}
												onChange={handleAnswerInput}
												maxLength={"15"}
												required
											/>
											<span />
											<label>Who is your Hero?</label>
											<p
												id="validationAnswer"
												style={{
													position: "absolute",
													color: "red",
													paddingLeft: "0px",
													top: "93%",
												}}
											></p>
										</div>
										<div>
											{/* Submit button */}
											<button type="submit" className="submit">
												Sign-up
											</button>
										</div>
										<div className="signup-link">
											Allready signedUp ?
											<NavLink
												className={"signup-link1"}
												onClick={() => {
													setSignUp(!signup);
													setLogin(!login);
												}}
											>
												Login now
											</NavLink>
										</div>
									</form>
								</div>
							</td>
						</tr>
					</tbody>
				</table>
			</div>
		</div>
	);
};

export default SignUpPage;
