import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faDiscord } from '@fortawesome/free-brands-svg-icons'
import { faCodeBranch, faFileCode, faCode } from '@fortawesome/fontawesome-free-solid'
import DiscordOAuth2 from 'discord-oauth2';
import { useState } from 'react';
const oauth = new DiscordOAuth2({
  clientId: '1076585679687008326',
  clientSecret: 'ui_YUFcho4I52BQfdPI801tO0lNImxnL',
  redirectUri: 'http://localhost:3000/login'
});

function handleLogin() {
  const url = oauth.generateAuthUrl({
    scope: ['identify', 'email'] // Add any scopes your app needs
  });
  window.location.href = url;
}

var tokenx = "";
function handleCallback() {
     
     const code = new URLSearchParams(window.location.search).get('code');
     oauth.tokenRequest({
       code,
       scope: ['identify', 'email'],
       grantType: "authorization_code"
     }).then(token => {
        window.localStorage.setItem("access_token", token.access_token)
        token = token.access_token
     });
   }
   handleCallback()
function OtherLogin() {
     const [username, setUsername] = useState("")
    const access_token  = localStorage.getItem("access_token")
    fetch('https://discord.com/api/users/@me', {
  headers: {
    'Authorization': `Bearer ${access_token}`
  }
}).then(response => response.json())
  .then(data => {
     window.localStorage.setItem("username", data.username);
     window.localStorage.setItem("avatar", data.avatar);
     console.log(data)
     setUsername(data.username)
     
  })
  .catch(error => console.error(error));
  
   
   
   
  return (
    <div>
     <h2 style={{position: "relative", top: "-3.7rem", left: "-1rem",fontSize: "1.7rem", fontFamily: "sans-serif", color: "whitesmoke"}}>Other Login Options</h2>
     <div className='login-list'>
          <button id="other-login-button" onClick={handleLogin} className='discord' ><FontAwesomeIcon className='icon-discord' icon={faDiscord}/>Login with Discord</button>
          <button id="other-login-button" className='specialcode' ><FontAwesomeIcon className='icon-sc' icon={faCode}/><span style={{color: "white", fontWeight: "bold", paddingBottom: "15px"}}>Login with Special Code</span></button>
   </div>
    </div>
  )
}

export default OtherLogin