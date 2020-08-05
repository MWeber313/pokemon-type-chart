import React from "react"
import "./App.scss"
import colors from "./styles/colors"
import Logo from "./atoms/logo"
import Container from "./atoms/container"

const App = () => {
  console.log(colors);
  return (
    <div className="App">
      <Container height={5} backgroundColor={colors.black}>
        <p>boop</p>
        <Logo height={10} />
        <p>boop</p>
      </Container>
      <Container height={5}>
        <p>Description: TBD</p>
      </Container>
    </div>
  )
}

export default App
