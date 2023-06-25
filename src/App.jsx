import { Routes,Route } from "react-router-dom"
import Home from "./pages/home/home"
import Destination from "./pages/destnation/Destination"
import Mars from "./pages/Mars/Mars"
import Europa from "./pages/Europa/Europa"
import Titan from "./pages/Titan/Titan"
import Crew from "./pages/crew/Crew"
import Mark from "./pages/Mark/Mark"


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
      </Routes>
    </div>
  )
}

export default App
