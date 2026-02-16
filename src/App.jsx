import { BrowserRouter, Routes, Route } from 'react-router-dom';
import AppNavbar from './components/AppNavbar.jsx';
import AppFooter from './components/AppFooter.jsx';
import Home from './pages/home/home.jsx';
import Login from './pages/login/login.jsx';
import Counter from './pages/counter/counter.jsx';
import Cards from './pages/cards/cards.jsx';
import './App.css'; // optional CSS for layout

export default function App() {
  return (
    <BrowserRouter>
      <div className="app-layout" style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
        <AppNavbar />

        <main style={{ flex: 1, padding: '1rem' }}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/counter" element={<Counter />} />
            <Route path="/cards" element={<Cards />} />
          </Routes>
        </main>

        <AppFooter />
      </div>
    </BrowserRouter>
  );
}
