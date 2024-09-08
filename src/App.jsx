import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from '../public/Pages/Home';
import Defis from '../public/Pages/Defis';
import Solutions from '../public/Pages/Solutions';
import Contact from '../public/Pages/Contact';

function App() {
  return (
    <Router>
      <div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/defis" element={<Defis />} />
          <Route path="/solutions" element={<Solutions />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
