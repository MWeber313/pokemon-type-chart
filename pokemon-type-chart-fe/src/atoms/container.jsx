import React from "react"
import styled from "styled-components"
import colors from "../styles/colors"

const Container = ({ ...props }) => {
  const {
    height,
    width,
    display,
    flexDirection,
    textAlign,
    backgroundColor,
  } = props
  return (
    <>
      <StyledContainer
        className="container"
        height={height}
        width={width}
        display={display}
        flexDirection={flexDirection}
        textAlign={textAlign}
        backgroundColor={backgroundColor}>
        {props.children}
      </StyledContainer>
    </>
  )
}

const StyledContainer = styled.div.attrs((props) => ({
  height: props.height,
  width: props.width,
  textAlign: props.textAlign,
  display: props.display,
  flexDirection: props.flexDirection,
  backgroundColor: props.backgroundColor,
}))`
  height: ${(props) => (props.height ? `${props.height}rem` : "10rem")};
  width: ${(props) => (props.width ? `${props.width}vw` : "100vw")};
  text-align: ${(props) => (props.textAlign ? props.textAlign : "center")};
  display: flex;
  flex-direction: ${(props) =>
    props.flexDirection ? props.flexDirection : "row"};
  justify-content: center;
  align-items: center;
  background-color: ${(props) =>
    props.backgroundColor ? props.backgroundColor : colors.white};
`

export default Container
