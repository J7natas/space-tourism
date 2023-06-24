import { Routes,Route } from "react-router-dom"
import Home from "./pages/home/home"
import Destination from "./pages/destnation/Destination"

function App() {

  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/destination" element={<Destination />} />
      </Routes>
    </div>
  )
}

export default App
