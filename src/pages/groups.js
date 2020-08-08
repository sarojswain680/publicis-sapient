import React from "react"
import { Router } from "@reach/router"
import Index from "../pages/index.js"


const Groups = () => (
  <div>
    <Router>
      <Index path="/:id" />
    </Router>
  </div>
)

export default Groups