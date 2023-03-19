import React from 'react'
import "./css/form.css"
import LoginCodeX from './elements/login-codex'
import OtherLogin from './elements/other-login'

function LoginForm() {
  return (
    <div className='big-form'>
     <div style={{display: "flex", marginLeft: "auto", marginRight: "auto", marginTop: "6rem"}}>
          <div className='form-two'>
          <OtherLogin />
     </div>
     <div class="vl"></div>
     <div className='form-one'>
          <LoginCodeX />
     </div>
     </div>
    </div>
  )
}

export default LoginForm