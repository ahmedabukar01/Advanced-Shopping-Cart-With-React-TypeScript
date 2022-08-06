import {Route, Routes} from 'react-router-dom'
import {Container} from 'react-bootstrap'
import Home from './pages/Home'
import About from './pages/About'
import Store from './pages/Store'

function App() {

  return (
    <Container>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/store" element={<Store />} />
      </Routes>
      <h1>HI from Vite React with TypeScript...</h1>
    </Container>
  )
}

export default App
