import React from "react";
import "./NavbarTop.css";

const NavbarTop: React.FC = () => {
    return (
        <>
            <nav className="d-flex flex-row">
                <div className="d-flex flex-row">
                    <h1 style={{fontSize:"20px"}} className="m-3">
                        FIA
                    </h1>
                    <div>
                        <h2 style={{fontSize:"15px",fontWeight:"bold"}} className="m-3">Race Series V</h2>
                    </div>
                </div>
                <div className="m-auto">
                    <ul className="d-flex m-3" style={{gap:"15px",fontWeight:"bold"}}>
                        <li>Authentic</li>
                        <li>Store</li>
                        <li>Tickets</li>
                        <li>Hospitality</li>
                        <li>Experiences</li>
                    </ul>
                </div>
                <div>
                    <button className="butsign textcenter">Sign In</button>
                    <button className="butsub textcenter">Subscribe</button>
                </div>
            </nav>
        </>
    )
}
export default NavbarTop;