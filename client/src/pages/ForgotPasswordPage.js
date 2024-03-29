import axios from "axios";
import React, { useEffect, useRef, useState } from "react";
import toast from "react-hot-toast";
import passwordResetImg from "../components/Layout/images/forgot-password1.jpg";
import ResetIcon from "../components/Layout/images/password-reset.png";
import { Icon } from "react-icons-kit";
import { eyeOff } from "react-icons-kit/feather/eyeOff";
import { eye } from "react-icons-kit/feather/eye";

const ForgotPasswordPage = ({
	forgotPassword,
	setForgotPassword,
	setLogin,
	login,
}) => {
	const [email, setEmail] = useState("");
	const [answer, setAnser] = useState("");
	const [newPassword, setNewPassword] = useState("");
	const [confirmPassword, setConfirmPassword] = useState("");
	const [type, setType] = useState("password");
	const [icon, setIcon] = useState(eyeOff);
	const forgotPasswordHide = useRef();

	const hideFP = () => {
		setEmail("");
		setNewPassword("");
		setAnser("");
		setForgotPassword(false);
	};

	const handleToggle = () => {
		if (type === "password") {
			setIcon(eye);
			setType("text");
		} else {
			setIcon(eyeOff);
			setType("password");
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

	const handleSubmitResetPassword = async (e) => {
		e.preventDefault();
		try {
			const res = await axios.post(
				`${process.env.REACT_APP_API_BASE_URL}/api/v1/auth/forgot-password`,
				{
					email,
					newPassword,
					answer,
				}
			);
			if (confirmPassword === newPassword) {
				if (res && res.data.success) {
					toast.success(res.data.message);
					setLogin(!login);
					setForgotPassword(false);
				} else {
					toast.error(res.data.message);
				}
			} else {
				toast.error("Password Missmatch!!");
				setConfirmPassword("");
				setNewPassword("");
			}
		} catch (error) {
			toast.error("Your Answer is Wrong!!");
			setAnser("");
		}
	};

	useEffect(() => {
		const handleClickOutside = (event) => {
			if (
				forgotPasswordHide.current &&
				!forgotPasswordHide.current.contains(event.target)
			) {
				setEmail("");
				setNewPassword("");
				setAnser("");
				setForgotPassword(false);
			}
		};
		document.addEventListener("mousedown", handleClickOutside);
		return () => {
			document.removeEventListener("mousedown", handleClickOutside);
		};
	});

	return (
		<div id="myModal-login" className="modal-login">
			<div className="modal-content-forgotPassword" ref={forgotPasswordHide}>
				<div>
					<img
						className="banner-img-forgotPassword"
						src={passwordResetImg}
						alt=""
					/>
				</div>
				<div className="fp-icon">
					<img
						src={ResetIcon}
						alt=""
						style={{ height: "200px", width: "200px" }}
					/>
				</div>
				<span
					className="goback"
					onClick={() => {
						setLogin(!login);
						hideFP();
					}}
				>
					<i class="fa-solid fa-arrow-left"></i>
				</span>
				<span
					className="close close1"
					onClick={() => setForgotPassword(!forgotPassword)}
				>
					x
				</span>
				<table className="login-tb">
					<tbody>
						<tr>
							<td>
								<div className="wrapper wrapper-forgotPassword">
									<div className="title">Reset Password</div>
									<form onSubmit={handleSubmitResetPassword}>
										<div className="field">
											{/* Email input */}
											<input
												style={{ color: "black" }}
												type="email"
												value={email}
												onChange={(e) => setEmail(e.target.value)}
												required
											/>
											<span />
											<label style={{ color: "black" }}>Email address</label>
										</div>
										<div className="field">
											{/* answer input */}
											<input
												style={{ color: "black" }}
												type="text"
												value={answer}
												onChange={handleAnswerInput}
												maxLength={"15"}
												required
											/>
											<p
												id="validationAnswer"
												style={{
													position: "absolute",
													color: "red",
													paddingLeft: "0px",
													top: "93%",
												}}
											></p>
											<span />
											<label style={{ color: "black" }}>
												Who is your Hero?
											</label>
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
												style={{ color: "black" }}
												value={confirmPassword}
												onChange={(e) => setConfirmPassword(e.target.value)}
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
													style={{ marginRight: "10px", marginTop: "10px" }}
												/>
											</span>
											<span />
											<label style={{ color: "black" }}>New Password</label>
										</div>
										<div className="field">
											<input
												style={{ color: "black" }}
												type="text"
												value={newPassword}
												onChange={(e) => setNewPassword(e.target.value)}
												maxLength={"15"}
												required
											/>
											<span />
											<label style={{ color: "black" }}>Confirm Password</label>
										</div>
										<div>
											<button type="submit" className="submit">
												RESET
											</button>
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

export default ForgotPasswordPage;
