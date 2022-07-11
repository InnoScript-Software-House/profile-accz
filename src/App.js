import { BrowserRouter, Route, Routes } from 'react-router-dom';
import About from './pages/About';
import ProjectDetail from './pages/ProjectDetail';
import Resume from './pages/Resume';
import Work from './pages/Work';

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Work />} />
          <Route path='about' element={<About />} />
          <Route path='resume' element={<Resume />} />
          <Route path='project/:id' element={<ProjectDetail />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
