import { BrowserRouter, Routes, Route } from "react-router-dom"
import Footer from "./Footer"
import Home from "./Home"
import Navbar from "./Navbar"
const App = () => {
    return (
        <div>
            <BrowserRouter>
                <Navbar />
                <Routes>
                    <Route path="/" element={<Home />} />
                </Routes>
                <Footer />
            </BrowserRouter>
        </div>
    )
}
export default App