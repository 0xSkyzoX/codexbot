import React,  { useEffect }  from 'react'
import Navbar from '../components/navbar'
import Commands from '../components/commands'
import "./css/commands.css"
import Footer from '../components/footer'
import "../mobile/commandsPage.css"

function CommamdsPage() {
    useEffect(() => {
    document.title = "CodeX - Commands"
})
  return (
    <div>
        <Navbar />
        <main>
          <div style={{}}>
            <h1 style={{justifyContent: "center",display: "flex", textAlign: "center"}} className="page-title-commands">Explore more features<br/>and see our best commands</h1>
          </div>
        </main>
        <hr style={{border: "solid 1px grey", marginLeft: "10%", marginRight: "10%", marginTop: "3.5%", marginBottom: "5%"}} className="line-hr-commands-page"/>
        <div style={{display: "flex", flexFlow: "row wrap", justifyContent: "center", marginBottom: "100px"}} >
          <Commands />
        </div>
        <Footer />
    </div>
  )
}

export default CommamdsPage