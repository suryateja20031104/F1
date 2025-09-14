
import './Stories.css'
const Stories: React.FC = () => {
    return (
        <>
            <div className="container mt-3">
                <h1 style={{ textTransform: "uppercase", fontWeight: "bolder", wordSpacing: "1px" }}>Stories</h1>
                <div className="d-flex">
                    <div className="storycontainer">
                        <h2 style={{fontSize:"15px",color:"white",fontWeight:"bolder","padding":"10px"}}>Iconic F1 Fashion Partnerships</h2>
                    </div>
                    <div className="storycontainer2">
                        <h2 style={{fontSize:"15px",color:"white",fontWeight:"bolder","padding":"10px"}}>Iconic F1 Fashion Partnerships</h2>
                    </div>
                    <div className="storycontainer" style={{backgroundImage:"url('https://video.formula1.com/assets/studio-templates/39f3646a-b813-bb9f-bb6e-3a1c3fc97918/a25d862a-fc93-40f2-b1b7-9116db801b70/2f683212-2f8f-cbb3-4c8a-3a1c3fd0bdcb/thumbnail_small.jpeg')"}}>
                        <h2 style={{fontSize:"15px",color:"white",fontWeight:"bolder","padding":"10px"}}>Iconic F1 Fashion Partnerships</h2>
                    </div>
                    <div className="storycontainer" style={{backgroundImage:"url('https://video.formula1.com/assets/studio-templates/74781741-e3ab-1e10-cb74-3a1bb4c0e736/8993df1a-5219-400a-a466-a89115014fdb/6f87eca0-2c5b-2389-a477-3a1bfcec9c54/thumbnail_small.jpeg')"}}>
                        <h2 style={{fontSize:"15px",color:"white",fontWeight:"bolder","padding":"10px"}}>Iconic F1 Fashion Partnerships</h2>
                    </div>

                </div>
            </div>
        </>
    )
}
export default Stories;