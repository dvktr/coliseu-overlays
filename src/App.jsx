import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Playoff from './pages/Playoff';
import Hub from './pages/Hub';
import Controller from './pages/Controller';

function App() {
  return (
    <Routes>
      <Route path="/swiss" element={<Home />} />
      <Route path="/playoff" element={<Playoff />} />
      <Route path="/hub" element={<Hub />} />
      <Route path="/controller" element={<Controller />} />
    </Routes>
  );
}

export default App;
