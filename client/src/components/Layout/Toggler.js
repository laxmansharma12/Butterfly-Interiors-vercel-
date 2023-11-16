import React from 'react'
import { NavLink, useLocation } from 'react-router-dom'

const Toggler = () => {
    const location = useLocation();
    return (
        <>
            <div className="design-gallery-toggle-bar navbar navbar-expand-lg">
                <div className="container-fluid">
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent1" aria-controls="navbarSupportedContent1" aria-expanded="false" aria-label="Toggle navigation">
                        <span>=</span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent1">
                        <ul className="navbar-nav">
                            {location.pathname === "/kitchen-design" ?
                                <li className="nav-item">
                                    <NavLink style={{ color: "#b96a46" }} to="/kitchen-design">Modular Kitchen</NavLink>
                                </li>
                                :
                                <li className="nav-item">
                                    <NavLink className to="/kitchen-design">Modular Kitchen</NavLink>
                                </li>
                            }
                            {location.pathname === "/wardrobe-design" ?
                                <li className="nav-item">
                                    <NavLink style={{ color: "#b96a46" }} to="/wardrobe-design">Wardrobe Design</NavLink>
                                </li>
                                :
                                <li className="nav-item">
                                    <NavLink className to="/wardrobe-design">Wardrobe Design</NavLink>
                                </li>
                            }
                            {location.pathname === "/bedroom-design" ?
                                <li className="nav-item">
                                    <NavLink style={{ color: "#b96a46" }} to="/bedroom-design">Bedroom Design</NavLink>
                                </li>
                                :
                                <li className="nav-item">
                                    <NavLink className to="/bedroom-design">Bedroom Design</NavLink>
                                </li>
                            }
                            {location.pathname === "/livingroom-design" ?
                                <li className="nav-item">
                                    <NavLink style={{ color: "#b96a46" }} to="/livingroom-design">Living Room</NavLink>
                                </li>
                                :
                                <li className="nav-item">
                                    <NavLink className to="/livingroom-design">Living Room</NavLink>
                                </li>
                            }
                            {location.pathname === "/diningroom-design" ?
                                <li className="nav-item">
                                    <NavLink style={{ color: "#b96a46" }} to="/diningroom-design">Dining Room</NavLink>
                                </li>
                                :
                                <li className="nav-item">
                                    <NavLink className to="/diningroom-design">Dining Room</NavLink>
                                </li>
                            }
                            {location.pathname === "/bathroom-design" ?
                                <li className="nav-item">
                                    <NavLink style={{ color: "#b96a46" }} to="/bathroom-design">Bathroom</NavLink>
                                </li>
                                :
                                <li className="nav-item">
                                    <NavLink className to="/bathroom-design">Bathroom</NavLink>
                                </li>
                            }

                        </ul>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Toggler