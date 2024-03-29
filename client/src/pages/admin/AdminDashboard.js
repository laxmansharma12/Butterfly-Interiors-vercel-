import React, { useEffect, useState, useRef } from "react";
import Layouts from "../../components/Layout/Layouts";
import Header from "../../components/Layout/header";
import Footer from "../../components/Layout/footer";
import userDP from "../../components/Layout/images/login-dp.jpg";
import { useAuth } from "../../context/auth";
import { NavLink, useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import axios from "axios";
import { useSearch } from "../../context/search";
import { Modal, Radio, Space } from "antd";
import { Icon } from "react-icons-kit";
import { eyeOff } from "react-icons-kit/feather/eyeOff";
import { eye } from "react-icons-kit/feather/eye";
const AdminDashboard = () => {
	// -------------------filter-users--------------------
	const [filter, setFilter] = useState(false);
	const [role, setRole] = useState("");
	const [total, setTotal] = useState(0);
	const [page, setPage] = useState(1);
	const [loading, setLoading] = useState(false);
	const [values, setValues] = useSearch();
	const [search, setSearch] = useState(false);
	const [auth, setAuth] = useAuth();
	const navigate = useNavigate();
	const [users, setUsers] = useState([]);
	const [filterUser, setFilterUser] = useState();
	const [filterAdmin, setFilterAdmin] = useState();
	const [loadbtn, setLoadbtn] = useState(true);
	const [askDelete, setAskDelete] = useState(false);
	const [edit, setEdit] = useState(false);
	const [name, setName] = useState("");
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const [number, setNumber] = useState("");
	// --------------------------------------------------
	//----------------filter-users------------------------
	const runFilter = (e) => {
		e.preventDefault();
		if (role === "1" && role !== "0") {
			setFilterAdmin(1);
			filterUsers();
			setLoadbtn(false);
		} else if (role === "0" && role !== "1") {
			setFilterUser(0);
			filterUsers();
			setLoadbtn(false);
		} else {
			setFilterAdmin();
			setFilterUser();
			setLoadbtn(true);
		}
		setFilter(false);
	};
	// -------------------search-users--------------------
	const handleSubmit = async (e) => {
		e.preventDefault();
		try {
			const { data } = await axios.get(
				`${process.env.REACT_APP_API_BASE_URL}/api/v1/auth/search/${values.keyword}`
			);
			setValues({ ...values, results: data });
			setSearch(true);
		} catch (error) {}
	};
	// -----------------------------------------------------------

	//getall users
	const getAllUsers = async () => {
		try {
			setLoading(true);
			const { data } = await axios.get(
				`${process.env.REACT_APP_API_BASE_URL}/api/v1/auth/users-list/${page}`
			);
			setLoading(false);
			setUsers(data.users);
		} catch (error) {
			setLoading(false);
			toast.error("Someething Went Wrong in getting all users");
		}
	};

	//lifecycle method
	useEffect(() => {
		if (filterUser !== 0 || filterAdmin !== 1) {
			getAllUsers();
			getTotal();
			// eslint-disable-next-line
		}
	}, []);

	//======================================
	//get filterd product
	const filterUsers = async () => {
		try {
			const { data } = await axios.post(
				`${process.env.REACT_APP_API_BASE_URL}/api/v1/auth/user-filters`,
				{ role }
			);
			setUsers(data?.filtered);
		} catch (error) {}
	};
	//users count
	const getTotal = async () => {
		try {
			const { data } = await axios.get(
				`${process.env.REACT_APP_API_BASE_URL}/api/v1/auth/users-count`
			);
			setTotal(data?.total);
		} catch (error) {
			console.log(error);
		}
	};

	useEffect(() => {
		if (page === 1) return;
		loadMore();
	}, [page]);

	//load more users in-list
	const loadMore = async () => {
		try {
			setLoading(true);
			const { data } = await axios.get(
				`${process.env.REACT_APP_API_BASE_URL}/api/v1/auth/users-list/${page}`
			);
			setLoading(false);
			setUsers([...users, ...data?.users]);
		} catch (error) {
			console.log(error);
			setLoading(false);
		}
	};

	//-----------------------delet-user---------------------------------------
	const [ok, setOk] = useState();
	const handleDelete = async () => {
		try {
			if (ok === "") return;
			const { data } = await axios.delete(
				`${process.env.REACT_APP_API_BASE_URL}/api/v1/auth/delete-user/${ok}`
			);
			toast.success("User Deleted Successfully");
			getAllUsers();
			getTotal();
		} catch (error) {
			console.log(error);
			toast.error("Something went wrong");
		}
	};

	// --------------------profile-update----------------------
	const handleUpdate = async (e) => {
		e.preventDefault();
		try {
			const { data } = await axios.put(
				`${process.env.REACT_APP_API_BASE_URL}/api/v1/auth/profile`,
				{
					name,
					email,
					password,
					number,
				}
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
											<h3>Laxman Sharma</h3>
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
												<hr />
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
									<div className="list-of-customers">
										<div className="content">
											<div className="container">
												<div className="control-nav row">
													<div className="col-lg-4 total">
														Total Users: {total}
													</div>
													<div className="col-lg-4">
														{/* search-bar */}
														<div>
															<form
																className="d-flex search-form"
																role="search"
																onSubmit={handleSubmit}
															>
																<input
																	className="form-control me-2"
																	type="search"
																	placeholder="Search"
																	aria-label="Search"
																	value={values.keyword}
																	onChange={(e) =>
																		setValues({
																			...values,
																			keyword: e.target.value,
																		})
																	}
																	style={{ background: "#ebe3e3" }}
																/>
																<button
																	className="btn btn-outline-success"
																	type="submit"
																>
																	Search
																</button>
															</form>
														</div>
													</div>
													<Modal
														onCancel={() => setSearch(false)}
														footer={null}
														open={search}
														width={1000}
													>
														<div className="container">
															<div className="text-center">
																<h1>Search Resuts</h1>
																<h6>
																	{values?.results.length < 1
																		? "No Products Found"
																		: `Found ${values?.results.length}`}
																</h6>

																<div className="d-flex flex-wrap mt-4">
																	{values?.results.map((p) => (
																		<div
																			className="card m-2"
																			style={{ width: "18rem" }}
																		>
																			<div className="card-body">
																				<div className="thumb-lg member-thumb mx-auto">
																					<img
																						src={userDP}
																						className="rounded-circle img-thumbnail"
																						alt="profile-image"
																						style={{
																							height: "100px",
																							width: "100px",
																						}}
																					/>
																				</div>
																				<div className="mt-4" />
																				<div>
																					{p.role !== 1 ? (
																						<div>
																							<h4>{p.name}</h4>
																							<p className="mb-2">{p.email}</p>
																							<p>+91{p.number}</p>
																						</div>
																					) : (
																						<div>
																							<h4 style={{ color: "orange" }}>
																								{p.name}
																							</h4>
																							<p className=" mb-2">{p.email}</p>
																							<p>+91{p.number}</p>
																						</div>
																					)}
																				</div>
																				<button
																					type="button"
																					className="btn btn-danger mt-3 btn-rounded waves-effect w-md waves-light"
																					onClick={() => {
																						setAskDelete(true);
																						setOk(p._id);
																					}}
																				>
																					Delete User
																				</button>
																				<div className="mt-4" />
																			</div>
																		</div>
																	))}
																</div>
															</div>
														</div>
													</Modal>

													<div className="col-lg-4">
														<div
															className="filter-btns"
															style={{ cursor: "pointer" }}
														>
															<i
																className="fa fa-refresh"
																aria-hidden="true"
																onClick={() => window.location.reload()}
															/>
															<span onClick={() => setFilter(!filter)}>
																<i
																	className="fa fa-filter"
																	aria-hidden="true"
																/>{" "}
																Filter
															</span>
															<br></br>
															{filter && (
																<div
																	className="users-filter"
																	style={{
																		background: "white",
																		position: "absolute",
																		padding: "20px",
																		textAlign: "left",
																	}}
																>
																	<form onSubmit={runFilter}>
																		<Radio.Group>
																			<Space
																				direction="vertical"
																				onChange={(e) =>
																					setRole(e.target.value)
																				}
																			>
																				<Radio value={"1"}>Admins</Radio>
																				<Radio value={"0"}>Users</Radio>
																			</Space>
																		</Radio.Group>
																		<br></br>
																		<button
																			type="submit"
																			className="btn btn-primary"
																			style={{ marginTop: "10px" }}
																		>
																			Apply Filter
																		</button>
																	</form>
																</div>
															)}
														</div>
													</div>
												</div>
												<div className="row">
													{users?.map((u) => (
														<div className="col-lg-4">
															<div className="text-center user-card-box">
																<div className="member-card pt-2 pb-2">
																	<div className="thumb-lg member-thumb mx-auto">
																		<img
																			src={userDP}
																			className="rounded-circle img-thumbnail"
																			alt="profile-image"
																		/>
																	</div>
																	<div className="mt-4" />

																	<div>
																		{u.role !== 1 ? (
																			<div>
																				<h4>{u.name}</h4>
																				<p className="mb-2">{u.email}</p>
																				<p>+91{u.number}</p>
																			</div>
																		) : (
																			<div>
																				<h4 style={{ color: "orange" }}>
																					{u.name}
																				</h4>
																				<p className=" mb-2">{u.email}</p>
																				<p>+91{u.number}</p>
																			</div>
																		)}
																	</div>
																	<button
																		type="button"
																		className="btn btn-danger mt-3 btn-rounded waves-effect w-md waves-light"
																		onClick={() => {
																			setAskDelete(true);
																			setOk(u._id);
																		}}
																	>
																		Delete User
																	</button>
																	<div className="mt-4" />
																</div>
															</div>
														</div>
													))}
													<Modal
														onCancel={() => setAskDelete(false)}
														footer={null}
														open={askDelete}
														width={250}
														style={{ top: "40%" }}
													>
														<div class="icon-box">
															<span class="material-icons">!</span>
														</div>
														<h4 class="modal-title w-100 text-center p-2">
															Delete?
														</h4>
														<div class="text-center mt-2">
															<button
																type="button"
																class="btn btn-secondary"
																onClick={() => setAskDelete(false)}
															>
																Cancel
															</button>
															<button
																type="button"
																class="btn btn-danger"
																onClick={() => {
																	handleDelete();
																	setAskDelete(false);
																}}
																style={{
																	paddingLeft: "25px",
																	paddingRight: "25px",
																	marginLeft: "20px",
																}}
															>
																OK
															</button>
														</div>
													</Modal>
												</div>

												{loadbtn && (
													<div>
														{users && users.length < total && (
															<button
																className="btn btn-warning"
																onClick={(e) => {
																	e.preventDefault();
																	setPage(page + 1);
																}}
															>
																{loading ? "loading ..." : "Loadmore"}
															</button>
														)}
														{/* end row */}
													</div>
												)}
											</div>
											{/* container */}
										</div>
									</div>
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

export default AdminDashboard;
