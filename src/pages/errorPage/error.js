import React from 'react'
import "./styles/errorPage.css"

function ErrorPage() {
  return (
    <div>
        <h1 style={{display: "flex", justifyContent: "center"}} className="error-four">404</h1>
        <p className='error-desc'>Oops! this page is not found...</p>
    </div>
  )
}

export default ErrorPage