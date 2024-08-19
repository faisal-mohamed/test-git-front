import React from 'react'

const App = () => {


  const handleClick = () => {
    alert('Hi')
  }
  return (
    <div>
      <h1>App</h1>
      <button onClick={handleClick}>Click me</button>
    </div>
    
  )
}

export default App