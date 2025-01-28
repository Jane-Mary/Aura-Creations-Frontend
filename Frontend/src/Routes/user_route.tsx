import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import About from '../Pages/User/About';
import Custom from '../Pages/User/Customize';
import Gallery from '../Pages/User/Gallery';
import Services from '../Pages/User/Services';


const UserRoute = () => {
  return (
    <Router>
    <Routes>
      <Route path="/services" element={<Services />} />
      <Route path="/about" element={<About />} />
      <Route path="/gallery" element={<Gallery />} />
      <Route path="/custom" element={<Custom />} />
    </Routes>
  </Router>
  )
}

export default UserRoute
