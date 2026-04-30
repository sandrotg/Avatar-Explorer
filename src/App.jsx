import { Route, Routes } from 'react-router-dom'
import './App.css'
import Home from './pages/Home'
import Characters from './pages/Characters'
import CharacterDetail from './pages/CharacterDetail'
import NotFound from './pages/NotFound'
import Contact from './pages/Contact'
import Favorites from './pages/Favorites'
import NavBar from './components/NavBar'
import Footer from './components/Footer'

function App() {

  return (
    <div className="min-h-screen flex flex-col">
      <NavBar />
      <main className="flex-1">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/characters" element={<Characters />} />
          <Route path="/characters/:id" element={<CharacterDetail />} />
          <Route path="/favorites" element={<Favorites />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>
      <Footer />
    </div>

  )
}

export default App
