import { HashRouter, Routes, Route } from 'react-router-dom'
import NavBar from './NavBar'
import ScrollToTop from './ScrollToTop'
import Home from './pages/Home'
import Footer from './Footer'
import Hire from './Hire'
import About from './pages/About'
import Skill from './pages/Skill'
import Project from './pages/Project'
import Contact from './pages/Contact'
import ErrorPage from './pages/ErrorPage'

function App() {
  return (
    <HashRouter>
      <NavBar />
      <ScrollToTop>
        <Routes>
          <Route exact path='/' element={<Home />} />
          <Route exact path='/about' element={<About />} />
          <Route exact path='/skill' element={<Skill />} />
          <Route exact path='/project' element={<Project />} />
          <Route exact path='/contact' element={<Contact />} />
          <Route exact path='*' element={<ErrorPage />} />
        </Routes>
      </ScrollToTop>
      <Hire />
      <Footer />
    </HashRouter>
  );
}

export default App;
