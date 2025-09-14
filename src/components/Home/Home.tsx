import React from "react";
import './Home.css';

const Home: React.FC = () => {
    return (
        <>
            <div className="container-fluid p-0" style={{ backgroundColor: "#edf2ef" }}>
                <div className="bigImg" style={{ gap: "50px" }}>
                    <h1 style={{ color: "white", padding: "10px", backgroundColor: "transparent" }}>Williams' 'right of review' over sainz penalty successful</h1>
                </div>
                <div className="container-fluid" style={{ marginTop: "30px", marginRight:"20px"}}>
                    <div className="d-flex flex-row" style={{ gap: "50px" }}>
                        <div className="d-flex" style={{ borderRadius: "10px", border: "1px solid black", gap: "20px", padding: "10px", backgroundColor: "white", marginTop: "5px", marginBottom: "20px", height: "100px", width: "575px", marginLeft: "50px" }}>
                            <div>
                                <img style={{ width: "85px", height: "80px", borderRadius: "10px" }} src="https://media.formula1.com/image/upload/t_16by9Centre/c_fill,w_192,h_192,g_faces/q_auto/v1740000000/trackside-images/2025/F1_Grand_Prix_of_Italy___Previews/2233651472.webp" alt="..." />
                            </div>
                            <div className="d-flex flex-column justify-content-center" style={{ gap: "15px", fontSize: "15px" }}>
                                <p>Getting to know the real Franco Colapinto</p>
                            </div>
                        </div>
                        <div className="d-flex" style={{ marginRight:"50px",borderRadius: "10px", border: "1px solid black", gap: "20px", padding: "10px", backgroundColor: "white", marginTop: "5px", marginBottom: "30px", height: "100px", width: "575px", marginLeft: "50px" }}>
                            <div>
                                <img style={{ width: "85px", height: "80px", borderRadius: "10px" }} src="https://media.formula1.com/image/upload/c_fill,w_192,h_192,g_faces/q_auto/v1740000000/fom-website/2025/25%20Greatest%20Races/8.%20Brazil%202012/Display%20Greatest%20Races%20(6).webp" alt="..." />
                            </div>
                            <div className="d-flex flex-column justify-content-center" style={{ gap: "15px", fontSize: "15px" }}>
                                <p>When Vettel triumphed over Alonso amid Interlagos drama</p>
                            </div>
                        </div>
                    </div>
                    <div className="d-flex flex-row" style={{ gap: "50px" }}>
                        <div className="d-flex" style={{ borderRadius: "10px", border: "1px solid black", gap: "20px", padding: "10px", backgroundColor: "white", marginTop: "5px", marginBottom: "30px", height: "100px", width: "575px", marginLeft: "50px" }}>
                            <div>
                                <img style={{ width: "85px", height: "80px", borderRadius: "10px" }} src="https://media.formula1.com/image/upload/t_16by9North/c_fill,w_192,h_192,g_faces/q_auto/v1740000000/fom-website/2025/Lifestyle/Alba%20pieces/GettyImages-145953586%201.webp" alt="..." />
                            </div>
                            <div className="d-flex flex-column justify-content-center" style={{ gap: "15px", fontSize: "15px" }}>
                                <p>
Iconic fashion partnerships that shaped F1</p>
                            </div>
                        </div>
                        <div className="d-flex" style={{ marginRight:"50px",borderRadius: "10px", border: "1px solid black", gap: "20px", padding: "10px", backgroundColor: "white", marginTop: "5px", marginBottom: "30px", height: "100px", width: "575px", marginLeft: "50px" }}>
                            <div>
                                <img style={{ width: "85px", height: "80px", borderRadius: "10px" }} src="https://media.formula1.com/image/upload/t_16by9North/c_fill,w_192,h_192,g_faces/q_auto/v1740000000/trackside-images/2024/F1_Grand_Prix_of_Abu_Dhabi/2188844610.webp" alt="..." />
                            </div>
                            <div className="d-flex flex-column justify-content-center" style={{ gap: "15px", fontSize: "15px" }}>
                                <p>Cadillac have picked 'the right guys' – Hamilton</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}
export default Home;