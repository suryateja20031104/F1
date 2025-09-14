import React from "react";

const More: React.FC = () => {
    return (
        <>
            <div className="container mt-2 d-flex flex-column justify-content-start align-items-start" style={{ backgroundColor: "red", color: "white", textAlign: "left", padding: "50px", borderRadius: "10px" }}>
                <h1>HELP SHAPE THE F1 <br />WEBSITE</h1>
                <p>Take a few minutes to tell us what you think.</p>
                <button style={{borderRadius:"15px",width:"85px",padding:"3px",backgroundColor:"white",textAlign:"center"}}>Let's go</button>
            </div>
        </>
    )
}
export default More;