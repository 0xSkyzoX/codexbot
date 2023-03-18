import React,  { useEffect }  from 'react'
import Navbar from '../components/navbar'
import Commands from '../components/commands'
import "./css/commands.css"
import Footer from '../components/footer'
import "../mobile/commandsPage.css"
import { useTranslation } from 'react-i18next'
function CommamdsPage() {
    useEffect(() => {
    document.title = "CodeX - Commands"
})
const {t} = useTranslation()
const title = t("commandsPage.pageTitle", {returnObjects: true})
  return (
    <div>
        <Navbar />
        <main>
          <div style={{}}>
            <h1 style={{justifyContent: "center",display: "flex", textAlign: "center"}} className="page-title-commands">{title[0]}<br/>{title[1]}</h1>
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