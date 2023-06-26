import { Routes,Route } from "react-router-dom"
import Destination from "./pages/destnation/Destination"
import Mars from "./pages/Mars/Mars";
import Europa from "./pages/Europa/Europa";
import Titan from "./pages/Titan/Titan";
import Crew from "./pages/crew/Crew";
import Mark from "./pages/Mark/Mark";
import Glover from "./pages/Glover/Glover";
import Ansary from "./pages/ansary/Ansary";
import Technology from "./pages/Technology/Technology";
import SpacePort from "./pages/Technology/SpacePort/SpacePort";
import Capsule from "./pages/Technology/Capsule/Capsule";
import Home from "./pages/home/Home";


function App() {

  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/destination/moon" element={<Destination />} />
        <Route path="/destination/mars" element={<Mars />} />
        <Route path="/destination/europa" element={<Europa />} />
        <Route path="/destination/titan" element={<Titan />} />
        <Route path="/crew" element={<Crew />} />
        <Route path="/crew/mark" element={<Mark />} />
        <Route path="/crew/glover" element={<Glover />} />
        <Route path="/crew/ansary" element={<Ansary />} />
        <Route path="/technology" element={<Technology />} />
        <Route path="/technology/spaceport" element={<SpacePort />} />
        <Route path="/technology/spacecapsule" element={<Capsule />} />
      </Routes>
    </div>
  )
}

export default App
