import React from "react";
import Layouts from "../components/Layout/Layouts";
import Header from "../components/Layout/header";
import Footer from "../components/Layout/footer";
import founderImg from "../components/Layout/images/founder-dp.jpg";
const About = () => {
	return (
		<Layouts title={"About-Us"}>
			<div className="Navbar-sticky">
				<Header />
			</div>
			<div className="about-body">
				<div className="InnerAboutBody">
					<div className="left">
						<h3>Founder</h3>

						<img src={founderImg}></img>
					</div>
					<div className="right">
						<h2>Laxman Sharma</h2>
						<p>
							<i>Founder</i>
						</p>
						<p className="founder-intro">
							I'm a dedicated student passionately exploring the world of
							interior design through my curated website. With an eye for
							creativity and detail, I transform spaces into captivating havens.
							My platform offers a blend of design concepts, practical tips, and
							inspiration, fostering a community of design enthusiasts.
						</p>
					</div>
				</div>
			</div>
			<Footer />
		</Layouts>
	);
};

export default About;
