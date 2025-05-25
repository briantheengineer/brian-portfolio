import Navbar from './Navbar'
import Sobre from './Sobre'
import Projetos from './Projetos'
import Contato from './Contato'
import Home from './Home'


export default function App() {
  return (
    <>
      <Navbar />
      <Home />
        <Sobre />
        <Projetos />
        <Contato />
      
    </>
  )
}
