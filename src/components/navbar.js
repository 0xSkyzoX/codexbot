import React from 'react'
import { Link } from 'react-router-dom'
import "./styles/navbar.css"


function Navbar() {
  return (
    <header className='navbar' style={{display: "flex"}}>
        <div style={{display: "flex"}}>
            <a href='/' style={{ marginTop: "auto", marginBottom: "auto", borderRadius: "30px"}}>
            <img src='./images/codexbotavatar.png' width='43px' height='43px' style={{ borderRadius: "30px",userSelect: "none", marginLeft: "20px"}} alt="" />
            </a>
            
            <h1 className='cx-bot-title' >CodeX</h1>
        </div>
            <div className='navbar-items'>
            <a className='navbar-item' href='/commands'>Commands</a>
            <a className='navbar-item' href='https://discord.gg/BAeqndHdea'>Support Server</a>
            <a className='navbar-item' href='features'>Features</a>
            
                <Link to='/login'>
                <button className='login-button'>Login</button></Link>
            </div>
    </header>
  )
}

export default Navbar