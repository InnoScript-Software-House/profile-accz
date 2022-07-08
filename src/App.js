import { BrowserRouter, Route, Routes } from 'react-router-dom';
import DesginInformation from './components/desgin-info';
import GraphicInformation from './components/graphic-info';
import About from './pages/About';
import Resume from './pages/Resume';
import Work from './pages/Work';
const App = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='work' element={<Work />} />
          <Route path='about' element={<About />} />
          <Route path='resume' element={<Resume />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
