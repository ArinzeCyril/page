import {BrowserRouter as Router, Routes, Route, } from 'react-router-dom'
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
    <Router>
      <NavBar />
      <ScrollToTop>
        <Routes>
          <Route path='/page' element={<Home />} />
          <Route path='/page/about' element={<About />} />
          <Route path='/page/skill' element={<Skill />} />
          <Route path='/page/project' element={<Project />} />
          <Route path='/page/contact' element={<Contact />} />
          <Route path='*' element={<ErrorPage />} />
        </Routes>
      </ScrollToTop>
      <Hire />
      <Footer />
    </Router>
  );
}

export default App;
