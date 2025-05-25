import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Navbar from './Navbar'
import Home from './Home'
import Sobre from './Sobre'
import Projetos from './Projetos'
import Contato from './Contato'
import ProjetosTodos from './projetos/ProjetosTodos'

export default function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Home />
              <Sobre />
              <Projetos />
              <Contato />
            </>
          }
        />
        <Route path="/projetos-todos" element={<ProjetosTodos />} />
      </Routes>
    </Router>
  )
}
