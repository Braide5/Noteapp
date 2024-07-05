import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div class="container">
        <h1><img src="images/note.png" /> Notes</h1>
        <button class="btn"><img src="images/the_writing_png-removebg-preview.png" /> Create note</button>
        <div class="notes-container">
          {/* <!-- <p contenteditable="true" class="input-box">
            <img src="images/delete-removebg-preview.png">
          </p> --> */}
        </div>
      </div>
    </>
  )
}

export default App
