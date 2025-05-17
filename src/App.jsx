import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import CardPage from './pages/CardsPage';
import NavigationBar from './pages/NavigationBar';


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Navigate to="/one" replace />} />
        <Route path="/one" element={<CardPage/>} />
        <Route path="/two" element={<NavigationBar/>} />
        
      </Routes>
    </Router>
  );
}

export default App;
