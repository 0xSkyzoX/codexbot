import React from 'react'
import Navbar from './components/navbar'
import "./App.css"

import Footer from './components/footer'


function App() {
  return (
    <div>
      <Navbar />
      <main >
        <div style={{ display: "flex" }}>
          <div>
            <h1 className='title-index-page'>Let's start a<br />Coding server<br />With CodeX bot</h1>
            <p className='description-index-page-mobile'>Make your coding experience with your own Community server, Code Debuging, Posting Codes, Share Projects...</p>
            <p className='description-index-page'>Make your coding experience with your own Community <br />server, Code Debuging, Posting Codes, Share Projects...</p>
            <button className="start-button-index" onClick={() => window.open('http://localhost:3001/auth/redirect')}>Get Started</button>   
          </div>

          <img src='./images/snap5.png' width='55%' height='35%' alt='' style={{ marginTop: "90px", opacity: 0.9 }} className="img-coding-index" />
        </div>
        
            
      </main>
      <h1 className='features-index-title' style={{textAlign: "center"}}>See our Special Features</h1>
      <hr style={{margin: "0px 7%"}}/>
      <div id="features-index-item">
        <div id='features-index-content-inside'>
          <img alt='' src='./images/sclogo.png' width='140px' id='features-index-img' />
          <div id='features-index-tide'>
            <div style={{display:"flex"}}>
            <img alt='' src='./images/sclogo.png' width='140px' id='features-index-img-mobile' />
            <h1 id='features-index-title'>Special Code Support</h1>
            </div>
          
          <div  >
          <p id='features-index-description'>CodeX by Special Code, se we support all special code features, like posting code, and projects, ext... and you can link your special code account and customize your code content... learn more about special code!</p>
          </div>
          </div>
          
        </div>
      </div>
      <hr style={{margin: "0 40% 0px 1%"}}></hr>
      <div id="features-index-item">
        <div id='features-index-content-inside'>
          
          <div id='features-index-tide' className='pc-tide'>
            <div style={{display:"flex"}}>
            
               <h1 id='features-index-title' className='pc'>Coding Community</h1>
               <img alt='' src='./images/codexsupport.png' width='140px' id='features-index-img-mobile' className='cc-img' />
            </div>
         
          <p id='features-index-description' className='pc-descrip' >CodeX Support Server, This is a Discord server helps you to communicate and talking about programming, design, ai... anything about Technology! and you can share your project there and make your experience with coding bot features!</p>
          </div>
          <img alt='' src='./images/codexsupport.png' width='140px' id='features-index-img' />
        </div>
      </div>
      <hr style={{margin: "0 1% 0 40%"}}/>
      <div id="features-index-item">
        <div id='features-index-content-inside'>
          <img alt='' src='./images/codexbotavatar.png' width='140px' id='features-index-img'/>
          <div id='features-index-tide'>
            <div style={{display: "flex"}}>
            <img alt='' src='./images/codexbotavatar.png' width='140px' id='features-index-img-mobile'/>
              <h1 id='features-index-title' >CodeX Discord Bot</h1>
            </div>
          
          <div >
          <p id='features-index-description'>Easy to use! CodeX is linked with discord bot that's mean you can customize and use this bot whatever you want in you own server, and the best you can share your projects and posts will be shown in this website!</p>
          </div>
          
          </div>
          
        </div>
        
      </div>
      <hr style={{margin: "70px 7%"}}/>
      <Footer />
    </div>
  )
}

export default App