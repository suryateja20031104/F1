import React from "react"
import './NavbarMiddle.css'
const NavbarMiddle: React.FC = () => {
    return (
        <>
            <nav className="d-flex flex-row bg-dark">
                <div className="m-auto">
                    <ul className="d-flex m-3" style={{ gap: "65px", fontWeight: "500", color: "white" }}>
                        <li className="dropdown">Schedule <span className="dropdown-arrow">▼</span>
                            <ul className="dropdown-menu">
                                <li>Calendar</li>
                                <li>Upcoming</li>
                            </ul>
                        </li>
                        <li className="dropdown">Results <span className="dropdown-arrow">▼</span>
                            <ul className="dropdown-menu">
                                <li>Latest</li>
                                <li>Standings</li>
                            </ul>
                        </li>
                        <li className="dropdown">News <span className="dropdown-arrow">▼</span>
                            <ul className="dropdown-menu">
                                <li>Headlines</li>
                                <li>Press</li>
                            </ul>
                        </li>
                        <li className="dropdown">Drivers <span className="dropdown-arrow">▼</span>
                            <ul className="dropdown-menu">
                                <li>All Drivers</li>
                                <li>Champions</li>
                            </ul>
                        </li>
                        <li className="dropdown">Teams <span className="dropdown-arrow">▼</span>
                            <ul className="dropdown-menu">
                                <li>All Teams</li>
                                <li>Constructors</li>
                            </ul>
                        </li>
                        <li className="dropdown">Fantasy & Gaming <span className="dropdown-arrow">▼</span>
                            <ul className="dropdown-menu">
                                <li>Fantasy</li>
                                <li>Games</li>
                            </ul>
                        </li>
                        <li className="dropdown">F1 Members` Area <span className="dropdown-arrow">▼</span>
                            <ul className="dropdown-menu">
                                <li>Login</li>
                                <li>Benefits</li>
                            </ul>
                        </li>
                    </ul>
                </div>
            </nav>
        </>
    )
}
export default NavbarMiddle