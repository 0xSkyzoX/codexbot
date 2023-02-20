import React from 'react'
import Navbar from './components/navbar'
import "./App.css"
import { Link } from 'react-router-dom'
function App() {
  return (
    <div>
      <Navbar />
      <main >
        <div style={{display: "flex"}}>
          <div>
          <h1 className='title-index-page'>Let's start a<br/>Coding server<br/>With CodeX bot</h1>
        <p className='description-index-page'>Make your coding experience with your own Community <br />server, Code Debuging, Posting Codes, Share Projects...</p>
        </div>
        <img src='./images/snap5.png' width='750px' height='280px'  alt='' style={{marginTop: "90px", opacity: 0.95}}/>
        </div>
        <Link to='/register'>
        <button className="start-button-index">Get Started</button>
        </Link>
        
      </main>
    </div>
  )
}

export default App