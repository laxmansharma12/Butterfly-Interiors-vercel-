import React from 'react'
import Layouts from '../components/Layout/Layouts'
import Header from '../components/Layout/header'
import Footer from '../components/Layout/footer';
import founderImg from "../components/Layout/images/founder-dp.jpg"
const About = () => {
    return (
        <Layouts title={"About-Us"}>
            <div className='Navbar-sticky'><Header /></div>
               <div className='about-body'>
                <table>
                    <h3>Founder</h3>
                    <tr className='row'>
                        <td className='col-lg-6' style={{ paddingRight: "0px", width: "410px" }}>
                            <img src={founderImg}></img>
                        </td>
                        <td className='col-lg-6 p-0'>
                            <div className='about-content'>
                                <h2>Laxman Sharma</h2>
                                <p><i>Founder</i></p>
                                <p className='founder-intro'>I'm a dedicated student
                                    passionately exploring the world of interior design
                                    through my curated website. With an eye for creativity and detail,
                                    I transform spaces into captivating havens.
                                    My platform offers a blend of design concepts, practical tips,
                                    and inspiration, fostering a community of design enthusiasts.</p>
                            </div>
                        </td>
                    </tr>
                </table>
            </div>
            <Footer />
        </Layouts >
    )
}

export default About