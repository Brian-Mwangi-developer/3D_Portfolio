
// import './App.css'
import {Route, BrowserRouter as Router, Routes} from 'react-router-dom'
import {Home, About,Projects, Contact} from './pages'
import NavBar from './components/NavBar'


function App() {

  return (
    <main className='bg-slate-300/20'>
      <Router>
        <NavBar/>
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/about" element={<About/>} />
          <Route path="/contact" element={<Contact/>} />
          <Route path="/project" element={<Projects/>} />
        </Routes>
      </Router>
    </main>
  )
}

export default App
