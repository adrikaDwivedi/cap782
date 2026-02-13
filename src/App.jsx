import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Body from './components/Body'
import StudentList from './components/StudentList'
import StudentForm from './components/StudentForm'
import './globals.css'

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Body />} />
        <Route path="/StudentList" element={<StudentList />} />
        <Route path="/StudentForm" element={<StudentForm />} />
      </Routes>
    </Router>
  )
}

export default App
