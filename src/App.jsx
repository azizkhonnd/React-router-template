import { Routes, Route } from 'react-router-dom';
import Navbar from '../src/components/nav/Navbar';
import About from './components/about/About';
import Contacts from './components/contacts/Contacts';
import Portfolio from './components/portfolio-page/Portfolio';
import Skills from './components/skills/Skills';
import Blog from './components/blog/Blogs'; 
import HomePage from './components/homepage/HomePage';

function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<About />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/skills" element={<Skills />} />
        <Route path="/portfolio" element={<Portfolio />} />
        <Route path="/contacts" element={<Contacts />} />
      </Routes>
    </div>
  );
}


export default App;
