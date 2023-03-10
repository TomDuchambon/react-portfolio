import './App.scss';
import { Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import background from './assets/images/paper-bg.png';
import Home from './components/Home';
import About from './components/About';

function App() {
  return (
    <>
    <div className="background" style={{
      backgroundImage: `url(${background})`,
      backgroundRepeat: 'repeat',
      opacity: 0.5,
      width: '100%',
      height: '100%',
      position: 'fixed',
      }}></div>
    <Routes>
      <Route path="/" element={<Layout />}>
      <Route index element={<Home />} />
      <Route path="about" element={<About />} />
      </Route>
    </Routes>
    </>
  );
}

export default App;
