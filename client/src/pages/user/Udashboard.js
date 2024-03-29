import React, { useState, useRef } from "react";
import Layouts from "../../components/Layout/Layouts";
import Header from "../../components/Layout/header";
import Footer from "../../components/Layout/footer";
import userDP from "../../components/Layout/images/login-dp.jpg";
import { NavLink, useNavigate } from "react-router-dom";
import { useAuth } from "../../context/auth";
import { Modal } from "antd";
import toast from "react-hot-toast";
import axios from "axios";
import emailjs from "@emailjs/browser";
import { Icon } from "react-icons-kit";
import { eyeOff } from "react-icons-kit/feather/eyeOff";
import { eye } from "react-icons-kit/feather/eye";
const Udashboard = () => {
	const [auth, setAuth] = useAuth();
	const navigate = useNavigate();
	const [edit, setEdit] = useState(false);
	const [name, setName] = useState("");
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const [number, setNumber] = useState("");

	// --------------------profile-update----------------------
	const handleUpdate = async (e) => {
		e.preventDefault();
		try {
			const { data } = await axios.put(
				`${process.env.REACT_APP_API_BASE_URL}/api/v1/auth/profile`,
				{ name, email, password, number }
			);
			if (data?.error) {
				toast.error(data?.error);
			} else {
				setEdit(false);
				setAuth({ ...auth, user: data?.updatedUser });
				let ls = localStorage.getItem("auth");
				ls = JSON.parse(ls);
				ls.user = data.updatedUser;
				localStorage.setItem("auth", JSON.stringify(ls));
				toast.success("Profile Updated Successfully");
			}
		} catch (error) {
			console.log(error);
			toast.error("Something went wrong!");
		}
	};

	//send review
	const form = useRef();

	const sendEmail = (e) => {
		e.preventDefault();

		emailjs
			.sendForm(
				"service_mcsan74",
				"template_uja7p49",
				form.current,
				"q0YpF476IzzUw41dx"
			)
			.then(
				(result) => {
					console.log(result.text);
					e.target.reset();
					toast.success("Your review sent successfully!");
				},
				(error) => {
					console.log(error.text);
				}
			);
	};
	//---------------------for-phone-name-answer-validation---------------
	const handlePhoneInput = (e) => {
		const regex = /^[0-9\b]+$/;
		if (e.target.value === "" || regex.test(e.target.value)) {
			setNumber(e.target.value);
		}
	};
	const handleNameInput = (e) => {
		const regex = /^[A-Za-z\s]+$/;
		if (e.target.value === "" || regex.test(e.target.value)) {
			setName(e.target.value);
		}
	};
	//----------------hide/show/password------------------------
	const [type, setType] = useState("password");
	const [icon, setIcon] = useState(eyeOff);
	const handleToggle = () => {
		if (type === "password") {
			setIcon(eye);
			setType("text");
		} else {
			setIcon(eyeOff);
			setType("password");
		}
	};
	//----------------------------------------------------------
	return (
		<Layouts title={"Dashboard-ButtterFly Interiors"}>
			<div className="Navbar-sticky">
				<Header />
			</div>
			<div className="container user-dashboard">
				<div className="main-body">
					<div className="row gutters-sm">
						<div className="col-md-4 mb-3">
							<div className="card">
								<div className="card-body">
									<div className="d-flex flex-column align-items-center text-center">
										<img
											src={userDP}
											alt="Admin"
											className="rounded-circle"
											width={200}
										/>
										<div className="mt-4">
											<h3>{auth?.user?.name}</h3>
										</div>
									</div>
								</div>
							</div>
						</div>
						<div className="col-md-8">
							<div className="card mb-3">
								<div className="card-body">
									<div className="row">
										<div className="col-sm-3">
											<h6 className="mb-0">Full Name</h6>
										</div>
										<input
											className="col-sm-9 text-secondary"
											placeholder={auth?.user?.name}
											disabled
										></input>
									</div>
									<hr />
									<div className="row">
										<div className="col-sm-3">
											<h6 className="mb-0">Email</h6>
										</div>
										<input
											className="col-sm-9 text-secondary"
											placeholder={auth?.user?.email}
											disabled
										></input>
									</div>
									<hr />
									<div className="row">
										<div className="col-sm-3">
											<h6 className="mb-0">Password</h6>
										</div>
										<input
											className="col-sm-9 text-secondary"
											placeholder={"********"}
											disabled
										></input>
									</div>
									<hr />
									<div className="row">
										<div className="col-sm-3">
											<h6 className="mb-0">Mobile Number</h6>
										</div>
										<input
											type="text"
											className="col-sm-9 text-secondary"
											placeholder={auth?.user?.number}
											disabled
										></input>
									</div>

									<hr />
									<div className="row">
										<div className="col-sm-12">
											<NavLink
												className="btn btn-info"
												onClick={() => setEdit(!edit)}
											>
												<i class="fa-regular fa-pen-to-square icons-user-btn"></i>
												Edit
											</NavLink>
											<a
												className="btn btn-warning"
												onClick={() => navigate(-1)}
											>
												<i class="fa-solid fa-up-right-from-square icons-user-btn"></i>
												Exit
											</a>
										</div>
									</div>
									<Modal
										onCancel={() => setEdit(false)}
										footer={null}
										open={edit}
									>
										<div className="card-body">
											<form onSubmit={handleUpdate}>
												<div className="row">
													<div className="col-sm-3 col-lg-5">
														<h6 className="mb-0">Full Name</h6>
													</div>
													<input
														className="col-sm-9 col-lg-7 text-secondary"
														type="text"
														value={name}
														onChange={handleNameInput}
														placeholder={auth?.user?.name}
														maxLength={"20"}
													/>
												</div>
												<hr></hr>
												<div className="row">
													<div className="col-sm-3 col-lg-5">
														<h6 className="mb-0">Password</h6>
													</div>
													<input
														className="col-sm-7 col-lg-5 text-secondary"
														type={type}
														value={password}
														onChange={(e) => setPassword(e.target.value)}
														placeholder={"********"}
														maxLength={"15"}
													/>
													<span
														className="col-sm-2 col-lg-2"
														onClick={handleToggle}
													>
														<Icon
															class="absolute mr-10"
															icon={icon}
															size={20}
															style={{ color: "#bebebe", marginRight: "10px" }}
														/>
													</span>
												</div>
												<hr />

												<div className="row">
													<div className="col-sm-4 col-lg-5">
														<h6 className="mb-0">Mobile Number</h6>
													</div>
													<input
														className="col-sm-9 col-lg-7 text-secondary"
														type="text"
														value={number}
														onChange={handlePhoneInput}
														placeholder={auth?.user?.number}
														maxLength={"10"}
													/>
												</div>
												<hr />
												<div className="row">
													<div className="col-sm-12">
														<button type="submit" className="btn btn-primary">
															Update
														</button>
													</div>
												</div>
											</form>
										</div>
									</Modal>
								</div>
							</div>
						</div>
						<div className="col-md-12">
							<div className="card mb-3">
								<div className="card-body">
									<h6>Your Reviews</h6>
									<form ref={form} onSubmit={sendEmail}>
										<input
											type="text"
											name="user_name"
											value={auth?.user?.name}
											style={{ position: "absolute", opacity: "0" }}
										/>
										<input
											type="email"
											name="user_email"
											value={auth?.user?.email}
											style={{ position: "absolute", opacity: "0" }}
										/>
										<div class="review-group">
											<span class="input-group-addon">
												<i class="fa fa-pencil"></i>
											</span>
											<textarea
												name="message"
												className="user-review"
												id="review"
												rows="3"
												placeholder="Type your review here..."
												required
											></textarea>
											<button
												type="submit"
												class="input-group-submit "
												value="send"
											>
												SEND
											</button>
										</div>
									</form>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>

			<Footer />
		</Layouts>
	);
};

export default Udashboard;
