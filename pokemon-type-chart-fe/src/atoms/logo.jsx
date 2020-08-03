import React from "react"
import * as pokemonLogo from "../img/pokemon-logo.png"

const Logo = ({ ...props }) => {
  return (
    <>
      <div className="logoContainer" style={{ height: `${props.height}rem` }}>
        <a href="https://www.freepnglogos.com/images/pokemon-logo-png-1421.html">
          <img
            src={pokemonLogo}
            alt="Pokemon Logo Png from freepnglogos.com"
            height="100%"
            width="auto"
          />
        </a>
      </div>
    </>
  )
}

export default Logo
