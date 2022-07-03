import { Navigate, Route, Routes } from 'react-router-dom';
import './App.css';
import About from './Components/About/About';
import Details from './Components/Details/Details';
import Home from './Components/Home/Home';
import NotFound from './Components/NotFound/NotFound';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Navigate to="/home" />} />
        <Route path="/home" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/details/:mealId" element={<Details />} />
        <Route path="*" element={<Navigate to="/notFound" />} />
        <Route path="/notFound" element={<NotFound />} />
      </Routes>
    </div>
  );
}

export default App;
