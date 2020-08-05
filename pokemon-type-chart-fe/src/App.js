import React from "react"
import "./App.scss"
import colors from "./styles/colors"
import Logo from "./atoms/logo"
import Container from "./atoms/container"
// import Text from "./atoms/text"
import Link from "./atoms/link"

const App = () => {
  console.log(colors)
  return (
    <div className="App">
      <Container height={5} backgroundColor={colors.black}>
        <Link href={"/link1"} textColor={colors.greyWhite}>
          BOOP
        </Link>
        <Logo height={10} />
        <Link href={"/link2"} textColor={colors.greyWhite}>
          BOOP
        </Link>
      </Container>
      <Container height={5}>
        <p>Description: TBD</p>
      </Container>
    </div>
  )
}

export default App
