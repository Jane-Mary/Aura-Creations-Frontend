import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './Pages/Home';
import ErrorPage from './Pages/errorPage';
import UserRoute from './Routes/user_route';

import './App.css'

function App() {
  return (
    <Router>
    <Routes>
      <Route path='*' element={<ErrorPage/>}/>
      <Route path="/" element={<Home />} />
      <Route path="/user/*" element={<UserRoute />} />
    </Routes>
  </Router>
  )
}

export default App
