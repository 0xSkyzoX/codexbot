import React from 'react'

function AdminPage() {
     if(window.location.host.split(".")[0] === "admin") {
        console.log("Admin Page Subdomain")
     }
  
}

export default AdminPage