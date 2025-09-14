import React from "react";

const News: React.FC = () => {
    return (
        <>
            <div className="container mt-3">
                <h1 style={{ textTransform: "uppercase", fontWeight: "bolder", wordSpacing: "1px" }}>Latest News</h1>
            </div>
            <div className="container-fluid" style={{ marginTop: "30px", marginRight: "20px" }}>
                <div className="d-flex flex-row" style={{ gap: "50px" }}>
                    <div className="d-flex" style={{ borderRadius: "10px", border: "1px solid black", gap: "20px", padding: "10px", backgroundColor: "white", marginTop: "5px", marginBottom: "20px", height: "100px", width: "575px", marginLeft: "50px" }}>
                        <div>
                            <img style={{ width: "85px", height: "80px", borderRadius: "10px" }} src="https://media.formula1.com/image/upload/t_16by9Centre/c_fill,w_192,h_192,g_faces/q_auto/v1740000000/trackside-images/2025/F1_Grand_Prix_of_Italy___Previews/2233651472.webp" alt="..." />
                        </div>
                        <div className="d-flex flex-column justify-content-center" style={{ gap: "15px", fontSize: "15px" }}>
                            <p>Getting to know the real Franco Colapinto</p>
                        </div>
                    </div>
                    <div className="d-flex" style={{ marginRight: "50px", borderRadius: "10px", border: "1px solid black", gap: "20px", padding: "10px", backgroundColor: "white", marginTop: "5px", marginBottom: "30px", height: "100px", width: "575px", marginLeft: "50px" }}>
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
                    <div className="d-flex" style={{ marginRight: "50px", borderRadius: "10px", border: "1px solid black", gap: "20px", padding: "10px", backgroundColor: "white", marginTop: "5px", marginBottom: "30px", height: "100px", width: "575px", marginLeft: "50px" }}>
                        <div>
                            <img style={{ width: "85px", height: "80px", borderRadius: "10px" }} src="https://media.formula1.com/image/upload/t_16by9North/c_fill,w_192,h_192,g_faces/q_auto/v1740000000/trackside-images/2024/F1_Grand_Prix_of_Abu_Dhabi/2188844610.webp" alt="..." />
                        </div>
                        <div className="d-flex flex-column justify-content-center" style={{ gap: "15px", fontSize: "15px" }}>
                            <p>Cadillac have picked 'the right guys' – Hamilton</p>
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
                    <div className="d-flex" style={{ marginRight: "50px", borderRadius: "10px", border: "1px solid black", gap: "20px", padding: "10px", backgroundColor: "white", marginTop: "5px", marginBottom: "30px", height: "100px", width: "575px", marginLeft: "50px" }}>
                        <div>
                            <img style={{ width: "85px", height: "80px", borderRadius: "10px" }} src="https://media.formula1.com/image/upload/t_16by9North/c_fill,w_192,h_192,g_faces/q_auto/v1740000000/trackside-images/2024/F1_Grand_Prix_of_Abu_Dhabi/2188844610.webp" alt="..." />
                        </div>
                        <div className="d-flex flex-column justify-content-center" style={{ gap: "15px", fontSize: "15px" }}>
                            <p>Cadillac have picked 'the right guys' – Hamilton</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="container-fluid mt-3 mr-5">
                <div className="d-flex flex-row" style={{ gap: "30px" ,marginBottom:"50px",paddingLeft:"10px"} }>
                    <div className="d-flex justify-content-between" style={{ backgroundColor: "lightblue", borderRadius: "10px", height: "50px", width: "250px", textAlign: "center", marginLeft: "50px", paddingTop: "10px", marginBottom: "30px" ,paddingLeft:"20px",paddingRight:"20px"}}>
                        <p style={{ fontWeight: "bolder", paddingLeft: "20px" }}>F1® STORE</p>
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                            <path d="M14 3h7v7m0-7L10 14" stroke="#222" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                            <rect x="3" y="10" width="11" height="11" rx="2" stroke="#222" strokeWidth="2" />
                        </svg>
                    </div>
                    <div className="d-flex justify-content-between" style={{ backgroundColor: "lightblue", borderRadius: "10px", height: "50px", width: "250px", textAlign: "center", marginLeft: "50px", paddingTop: "10px", marginBottom: "30px" ,paddingLeft:"20px",paddingRight:"20px"}}>
                        <p style={{ fontWeight: "bolder", paddingLeft: "20px" }}>F1® FANTASY</p>
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                            <path d="M14 3h7v7m0-7L10 14" stroke="#222" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                            <rect x="3" y="10" width="11" height="11" rx="2" stroke="#222" strokeWidth="2" />
                        </svg>
                    </div>
                    <div className="d-flex justify-content-between" style={{ backgroundColor: "lightblue", borderRadius: "10px", height: "50px", width: "250px", textAlign: "center", marginLeft: "50px", paddingTop: "10px", marginBottom: "30px" ,paddingLeft:"20px",paddingRight:"20px"}}>
                        <p style={{ fontWeight: "bolder", paddingLeft: "20px" }}>F1® PREDICT</p>
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                            <path d="M14 3h7v7m0-7L10 14" stroke="#222" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                            <rect x="3" y="10" width="11" height="11" rx="2" stroke="#222" strokeWidth="2" />
                        </svg>
                    </div>
                    <div className="d-flex justify-content-between" style={{ backgroundColor: "lightblue", borderRadius: "10px", height: "50px", width: "250px", textAlign: "center",marginRight:"50px", marginLeft: "50px", paddingTop: "10px", marginBottom: "30px" ,paddingLeft:"20px",paddingRight:"20px"}}>
                        <p style={{ fontWeight: "bolder", paddingLeft: "20px" }}>LIVE TIMING</p>
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                            <path d="M14 3h7v7m0-7L10 14" stroke="#222" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                            <rect x="3" y="10" width="11" height="11" rx="2" stroke="#222" strokeWidth="2" />
                        </svg>
                    </div>
                </div>
            </div>
            <div className="container mt-3 mb-5">
                <img src="https://tpc.googlesyndication.com/simgad/9358263936913904597" alt="..." style={{width:"100%"}}/>
            </div>
        </>
    )
}
export default News;