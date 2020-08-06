import React from "react"
import { Switch, Route, Link } from "react-router-dom"

import "./App.scss"
import colors from "./styles/colors"
import Logo from "./atoms/logo"
import Container from "./atoms/container"
// import Text from "./atoms/text"
// import Link from "./atoms/link"

const App = () => {
  console.log(colors)
  return (
    <div className="App">
      <Container height={5} backgroundColor={colors.black}>
        <Link to="/">BOOP</Link>
        <Logo height={10} />
        <Link to="/link2">BOOP</Link>
      </Container>
      <Container height={5}>
        <p>Description: TBD</p>
      </Container>

      {/* Routing */}
      <Switch>
        <Route path="/link2" />
        <Route path="/" />
      </Switch>
    </div>
  )
}

export default App
