import React, {useState, useEffect} from 'react'
import Navbar from './components/navbar'
import "./App.css"
import { Link } from 'react-router-dom'



function App() {
  const [mobile, setMobile] = useState(window.innerWidth <= 500);

const handleWindowSizeChange = () => {
  setMobile(window.innerWidth <= 500);
}

useEffect(() => {
  window.addEventListener('resize', handleWindowSizeChange);
  return () => {
    window.removeEventListener('resize', handleWindowSizeChange);
  }
}, []);
console.log("Type:")
console.log(mobile)
  return (
    <div>
      <Navbar />
      <main >
        <div style={{display: "flex"}}>
          <div>
          <h1 className='title-index-page'>Let's start a<br/>Coding server<br/>With CodeX bot</h1>
          <p className='description-index-page-mobile'>Make your coding experience with your own Community server, Code Debuging, Posting Codes, Share Projects...</p>
        <p className='description-index-page'>Make your coding experience with your own Community <br />server, Code Debuging, Posting Codes, Share Projects...</p>
        </div>
        
        <img src='./images/snap5.png' width='750px' height='280px'  alt='' style={{marginTop: "90px", opacity: 0.95}} className="img-coding-index"/>
        </div>
        <div>
          <Link>
        <button className="start-button-index" onClick={() => console.log(mobile)}>Get Started</button>
        </Link>
        </div>
        
        
      </main>
    </div>
  )
}

export default App