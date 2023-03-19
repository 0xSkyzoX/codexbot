import React from 'react'

function LoginCodeX() {
     return (
          <div className="form-input-one">
               <h1 className='login-codex-title'>Login with CodeX</h1>
               <div>
                    <form  >
                         <div className='label-login-input' style={{ display: "flex", flexDirection: "column" }}>
                              <label className="label-text-login">Username:</label>
                              <input type="text" placeholder='Enter your useranme' className='input-form' />
                         </div>
                         <div className='label-login-input' style={{ display: "flex", flexDirection: "column" }}>
                              <label className='label-text-login'>Password:</label>
                              <input type="password" placeholder='Enter your password' className='input-form' />
                         </div>
                         <button type='submit' className='submit-btn-form'>Login</button>
                    </form>

               </div>
          </div>
     )
}

export default LoginCodeX