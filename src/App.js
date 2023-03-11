import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Homepage from './pages/Homepage';
import ThankYou from './pages/ThankYou';

function App() {
  return (
    <Router>
      <Routes>
      <Route path="/" element={<Homepage/>}/>
      <Route path="thank-you" element={<ThankYou/>}/>
      </Routes>
    </Router>
  );
}

export default App;
