import React, { useState, useEffect } from "react"
import styled from "styled-components"
import { useForm } from "react-hook-form"
import { useSpring, animated } from "react-spring"
import FluidImg from "../atoms/fluidImg"
import Container from "../atoms/container"
// images
import pokeTop from "../img/pokeballtop.png"
import pokeBottom from "../img/pokeballbottom.png"

const PokeballAnimation = () => {
  const { register, handleSubmit, watch, errors, getValues } = useForm()
  const onSubmit = () => console.log(getValues())
  const [isBallOpen, setIsBallOpen] = useState(false)

  useEffect(() => {
    // change ball
    console.log(`isBallOpen: ${isBallOpen}`)
  })

  const ShowForm = ({ isBallOpen }) => {
    const props = useSpring({
      opacity: isBallOpen ? 1 : 0,
      from: { opacity: 0 },
      zIndex: isBallOpen ? 999 : 0,
    })
    return (
      <animated.div style={props}>
        <form id="pokeForm" onSubmit={handleSubmit(onSubmit)}>
          <input
            name="searchName"
            defaultValue="Search for Pokemon"
            ref={register}
          />
          <input type="submit" />
        </form>
      </animated.div>
    )
  }

  //   console.log(`Watching form input:` + watch)
  return (
    <>
      <AnimationWrapper
        className={"animationWrapper"}
        isBallOpen={isBallOpen}
        onClick={() => setIsBallOpen(!isBallOpen)}>
        <Container height={40}>
          <FluidImg src={pokeTop} />
        </Container>
        <Container margin={"-12vh 0"}>
          <ShowForm isBallOpen={isBallOpen} />
        </Container>
        <Container
          id="pokeballBottom"
          height={40}
          position={"absolute"}
          top={"20vh"}
          left={"0"}>
          <FluidImg src={pokeBottom} />
        </Container>
      </AnimationWrapper>
    </>
  )
}

const AnimationWrapper = styled.div``
export default PokeballAnimation
