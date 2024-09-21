import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from '../public/Pages/Home';
import Services from '../public/Pages/Services';
import Mur from '../public/Pages/Mur';
import Signature from '../public/Pages/Signature';
import ScrollToTop from "./scroll";
import Contact from '../public/Pages/Contact';
import Conditions from '../public/Pages/Conditions';

function App() {
  return (
    <Router>
      <ScrollToTop />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/nos-services" element={<Services />} />
          <Route path="/le-mur" element={<Mur />} />
          <Route path="/remerciements" element={<Signature />} />
          <Route path="/contactez-nous" element={<Contact />} />
          <Route path="/conditions&confidentialites" element={<Conditions />} />
        </Routes>
      
    </Router>
  );
}

export default App;
