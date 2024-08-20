import { BrowserRouter, Routes, Route, Link } from "react-router-dom"

const App = () => {


  const handleClick = () => {
    alert('Hi')
  }
  return (
    <div>
      <BrowserRouter>

      <Link to='/'>Home</Link>
      <Link to='/about-us'>About us</Link>
      <Link to='/contact'>Contact</Link>
      
      <h1>App</h1>
      <button onClick={handleClick}>Click me</button>
      <Routes>
        <Route path="/" element={<h1>Home</h1>} />
        <Route path="/contact" element={<h1>Contact</h1>} />
        <Route path="/about-us" element={<h1>About us</h1>} />
      </Routes>
      </BrowserRouter>
    </div>
    
  )
}

export default App