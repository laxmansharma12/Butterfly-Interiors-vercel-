import axios from "axios";
import React, { useEffect, useRef, useState } from "react";
import toast from "react-hot-toast";
import { useAuth } from "../context/auth";
import loginImg from "../components/Layout/images/login-bg.jpg";
import { Icon } from "react-icons-kit";
import { eyeOff } from "react-icons-kit/feather/eyeOff";
import { eye } from "react-icons-kit/feather/eye";
import { NavLink } from "react-router-dom";

const LoginPage = ({
	setLogin,
	login,
	setSignUp,
	signup,
	forgotPassword,
	setForgotPassword,
}) => {
	const [password, setPassword] = useState("");
	const [email, setEmail] = useState("");
	const [auth, setAuth] = useAuth();
	const [answer, setAnser] = useState("");
	const loginHide = useRef();
	const [type, setType] = useState("password");
	const [icon, setIcon] = useState(eyeOff);
	const [newPassword, setNewPassword] = useState("");
	const [confirmPassword, setConfirmPassword] = useState("");

	const handleToggle = () => {
		if (type === "password") {
			setIcon(eye);
			setType("text");
		} else {
			setIcon(eyeOff);
			setType("password");
		}
	};

	const handleSubmitlogin = async (e) => {
		e.preventDefault();
		try {
			const res = await axios.post(
				`${process.env.REACT_APP_API_BASE_URL}/api/v1/auth/login`,
				{
					email,
					password,
				}
			);
			if (res && res.data.success) {
				toast.success(res.data.message);
				setAuth({
					...auth,
					user: res.data.user,
					token: res.data.token,
				});
				localStorage.setItem("auth", JSON.stringify(res.data));
				setLogin(!login);
				setSignUp(false);
				setEmail("");
				setPassword("");
				setAnser("");
			} else {
				toast.error(res.data.message);
			}
		} catch (error) {
			toast.error("Somehting went wrong");
		}
		setEmail("");
		setPassword("");
	};

	const hideLogin = () => {
		setEmail("");
		setPassword("");
		setLogin(!login);
	};

	useEffect(() => {
		const handleClickOutside = (event) => {
			if (loginHide.current && !loginHide.current.contains(event.target)) {
				setEmail("");
				setPassword("");
				setLogin(!login);
			}
		};
		document.addEventListener("mousedown", handleClickOutside);
		return () => {
			document.removeEventListener("mousedown", handleClickOutside);
		};
	});
	return (
		<div id="myModal-login" className="modal-login">
			<div className="modal-content-login " ref={loginHide}>
				<div>
					<img className="banner-img" src={loginImg} />
				</div>
				<span className="close close1" onClick={hideLogin}>
					x
				</span>
				<table className="login-tb">
					<tbody>
						<tr>
							<td>
								<div className="wrapper">
									<div className="title">Login Form</div>
									<form onSubmit={handleSubmitlogin}>
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
										<div
											className="field"
											style={{
												display: "flex",
												justifyContent: "space-between",
											}}
										>
											{/* Password input */}
											<input
												style={{ color: "black" }}
												type={type}
												value={password}
												onChange={(e) => setPassword(e.target.value)}
												maxLength={"15"}
												required
											/>
											<span
												className="flex justify-around items-center"
												onClick={handleToggle}
											>
												<Icon
													className="absolute mr-10"
													icon={icon}
													size={20}
													style={{ marginRight: "10px", marginTop: "10px" }}
												/>
											</span>
											<span />
											<label style={{ color: "black" }}>Password</label>
										</div>
										<button type="submit" className="submit">
											Login
										</button>
										<div className="fpLabel" style={{ color: "black" }}>
											Forgot password?{" "}
											<NavLink
												className={"pass-link"}
												onClick={() => {
													setLogin(!login);
													setForgotPassword(!forgotPassword);
													setAnser("");
													setNewPassword("");
													setConfirmPassword("");
												}}
											>
												Reset
											</NavLink>
										</div>
										<div className="signup-link" style={{ color: "black" }}>
											Not a member?{" "}
											<NavLink
												className={"signup-link1"}
												onClick={() => {
													setLogin(!login);
													setSignUp(!signup);
												}}
											>
												Signup now
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

export default LoginPage;
