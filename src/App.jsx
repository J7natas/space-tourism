import { Routes,Route } from "react-router-dom"
import Home from "./pages/home/home"
import Destination from "./pages/destnation/Destination"
import Moon from "./components/Moon/Moon"
import Mars from "./components/Mars/Mars"

function App() {

  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/destination" element={<Destination />} />
        <Route path="/destination/moon" element={<Moon />} />
        <Route path="/destination/mars" element={<Mars />} />
      </Routes>
    </div>
  )
}

export default App
