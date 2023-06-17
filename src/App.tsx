import { Route, Routes } from 'react-router-dom'
import Home from './pages/Main'
import County from './pages/County'
import { Container } from 'react-bootstrap'
import NavBar from './components/NavBar'

function App() {
    return (
        <Container maxWidth='md'>
            <NavBar/>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/:county" element={<County />} />
            </Routes>
        </Container>

    )
}

export default App



