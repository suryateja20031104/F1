import React from "react";
import './Drivers.css'
const Drivers: React.FC = () => {
    return (
        <>
            <div className="container mt-5">
                <h1 style={{ textTransform: "uppercase", fontWeight: "bolder", wordSpacing: "1px" }}>Drivers</h1>
            </div>
            <div className="d-flex driverscroll mb-5">
                <div className="drivercontainer" style={{ backgroundImage: "url('https://media.formula1.com/image/upload/c_lfill,w_314/q_auto/d_common:f1:2025:fallback:driver:2025fallbackdriverright.webp/v1740000000/common/f1/2025/mclaren/oscpia01/2025mclarenoscpia01right.webp')" }}>
                        <h2 className="story-title">Oscar<br/>Piastri</h2>
                </div>
                <div className="drivercontainer" style={{ backgroundImage: "url('https://media.formula1.com/image/upload/c_lfill,w_314/q_auto/d_common:f1:2025:fallback:driver:2025fallbackdriverright.webp/v1740000000/common/f1/2025/mclaren/lannor01/2025mclarenlannor01right.webp')" }}>
                        <h2 className="story-title">Lando<br/>Norris</h2>
                </div>
                <div className="drivercontainer" style={{ backgroundImage: "url('https://media.formula1.com/image/upload/c_lfill,w_314/q_auto/d_common:f1:2025:fallback:driver:2025fallbackdriverright.webp/v1740000000/common/f1/2025/ferrari/chalec01/2025ferrarichalec01right.webp')" }}>
                        <h2 className="story-title">Charles<br/>Leclerc</h2>
                </div>
                <div className="drivercontainer" style={{ backgroundImage: "url('https://media.formula1.com/image/upload/c_lfill,w_314/q_auto/d_common:f1:2025:fallback:driver:2025fallbackdriverright.webp/v1740000000/common/f1/2025/ferrari/lewham01/2025ferrarilewham01right.webp')" }}>
                        <h2 className="story-title">Lewis<br/>Hamilton</h2>
                </div>
                <div className="drivercontainer" style={{ backgroundImage: "url('https://media.formula1.com/image/upload/c_lfill,w_314/q_auto/d_common:f1:2025:fallback:driver:2025fallbackdriverright.webp/v1740000000/common/f1/2025/mercedes/georus01/2025mercedesgeorus01right.webp')" }}>
                        <h2 className="story-title">George<br/>Russel</h2>
                </div>
                <div className="drivercontainer" style={{ backgroundImage: "url('https://media.formula1.com/image/upload/c_lfill,w_314/q_auto/d_common:f1:2025:fallback:driver:2025fallbackdriverright.webp/v1740000000/common/f1/2025/mercedes/andant01/2025mercedesandant01right.webp')" }}>
                        <h2 className="story-title">Kimi<br/>Antonelli</h2>
                </div>
                <div className="drivercontainer" style={{ backgroundImage: "url('https://media.formula1.com/image/upload/c_lfill,w_314/q_auto/d_common:f1:2025:fallback:driver:2025fallbackdriverright.webp/v1740000000/common/f1/2025/redbullracing/maxver01/2025redbullracingmaxver01right.webp')" }}>
                        <h2 className="story-title">Max<br/>Verstappen</h2>
                </div>
                <div className="drivercontainer" style={{ backgroundImage: "url('https://media.formula1.com/image/upload/c_lfill,w_314/q_auto/d_common:f1:2025:fallback:driver:2025fallbackdriverright.webp/v1740000000/common/f1/2025/redbullracing/yuktsu01/2025redbullracingyuktsu01right.webp')" }}>
                        <h2 className="story-title">Yuki<br/>Tsunoda</h2>
                </div>
                <div className="drivercontainer" style={{ backgroundImage: "url('https://media.formula1.com/image/upload/c_lfill,w_314/q_auto/d_common:f1:2025:fallback:driver:2025fallbackdriverright.webp/v1740000000/common/f1/2025/williams/alealb01/2025williamsalealb01right.webp')" }}>
                        <h2 className="story-title">Alexander<br/>Albon</h2>
                </div>
                <div className="drivercontainer" style={{ backgroundImage: "url('https://media.formula1.com/image/upload/c_lfill,w_314/q_auto/d_common:f1:2025:fallback:driver:2025fallbackdriverright.webp/v1740000000/common/f1/2025/williams/carsai01/2025williamscarsai01right.webp')" }}>
                        <h2 className="story-title">Carlos<br/>Sainz</h2>
                </div>
                <div className="drivercontainer" style={{ backgroundImage: "url('https://media.formula1.com/image/upload/c_lfill,w_314/q_auto/d_common:f1:2025:fallback:driver:2025fallbackdriverright.webp/v1740000000/common/f1/2025/astonmartin/lanstr01/2025astonmartinlanstr01right.webp')" }}>
                        <h2 className="story-title">Lance<br/>Stroll</h2>
                </div>
                <div className="drivercontainer" style={{ backgroundImage: "url('https://media.formula1.com/image/upload/c_lfill,w_314/q_auto/d_common:f1:2025:fallback:driver:2025fallbackdriverright.webp/v1740000000/common/f1/2025/astonmartin/feralo01/2025astonmartinferalo01right.webp')" }}>
                        <h2 className="story-title">Fernado<br/>Alonso</h2>
                </div>
            </div>
            <div>
                <div className="bigImgdown" style={{ gap: "50px" }}>
                    <h1 style={{ color: "white", padding: "10px", backgroundColor: "transparent" }}>Williams' 'right of review' over sainz penalty successful</h1>
                </div>
            </div>
        </>
    )
}   
export default Drivers;