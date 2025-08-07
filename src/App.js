import AllVideos from "./Components/AllVideos";
import Video from "./Components/Video"
import {BrowserRouter, Route, Routes} from "react-router-dom";

const App = () => {

    return (
        <>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<AllVideos/>}/>
                    <Route path="/video/:id" element={<Video />}/>
                </Routes>
            </BrowserRouter>
            {/*<AllVideos />*/}
        </>
    );
}

export default App;
