import React,  { useEffect }  from 'react'
import Navbar from '../components/navbar'
import Commands from '../components/commands'
function CommamdsPage() {
    useEffect(() => {
    document.title = "CodeX - Commands"
})
  return (
    <div>
        <Navbar />
        <div style={{display: "flex", flexFlow: "row wrap", justifyContent: "center", marginBottom: "100px"}} >
          <Commands />
        </div>
        
    </div>
  )
}

export default CommamdsPage