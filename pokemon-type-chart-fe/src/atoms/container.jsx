import React from "react"
import styled from "styled-components"
import colors from "../styles/colors"

const Container = ({ ...props }) => {
  const {
    height,
    minHeight,
    width,
    display,
    flexDirection,
    alignSelf,
    textAlign,
    backgroundColor,
    padding,
    margin,
    position,
    top,
    bottom,
    left,
    zIndex,
  } = props
  return (
    <>
      <StyledContainer
        className="container"
        height={height}
        minHeight={minHeight}
        width={width}
        display={display}
        flexDirection={flexDirection}
        alignSelf={alignSelf}
        textAlign={textAlign}
        backgroundColor={backgroundColor}
        padding={padding}
        margin={margin}
        position={position}
        top={top}
        bottom={bottom}
        left={left}
        zIndex={zIndex}>
        {props.children}
      </StyledContainer>
    </>
  )
}

const StyledContainer = styled.div.attrs((props) => ({
  height: props.height,
  minHeight: props.minHeight,
  width: props.width,
  textAlign: props.textAlign,
  display: props.display,
  flexDirection: props.flexDirection,
  alignSelf: props.alignSelf,
  backgroundColor: props.backgroundColor,
  padding: props.padding,
  margin: props.margin,
  top: props.top,
  bottom: props.bottom,
  left: props.left,
  zIndex: props.zIndex,
}))`
  height: ${(props) => (props.height ? `${props.height}rem` : "auto")};
  min-height: ${(props) => (props.minHeight? props.minHeight: "fit-content(100%)")};
  width: ${(props) => (props.width ? `${props.width}rem` : "100vw")};
  text-align: ${(props) => (props.textAlign ? props.textAlign : "center")};
  display: flex;
  flex-direction: ${(props) =>
    props.flexDirection ? props.flexDirection : "row"};
  align-self: ${(props) => (props.alignSelf ? props.alignSelf : null)};
  justify-content: center;
  align-items: center;
  background-color: ${(props) =>
    props.backgroundColor ? props.backgroundColor : colors.white};
  padding: ${(props) => (props.padding ? props.padding : null)};
  margin: ${(props) => (props.margin ? props.margin : null)};
  position: ${(props) => (props.position ? props.position : "relative")};
  top: ${(props) => (props.top ? props.top : "auto")};
  bottom: ${(props) => (props.bottom ? props.bottom : "auto")};
  left: ${(props) => (props.left ? props.left : "auto")};
  z-index: ${(props) => (props.zIndex ? props.zIndex : "auto")};
`

export default Container
