import React from "react"
import styled from "styled-components"
import colors from "../styles/colors"

const Text = ({ ...props }) => {
  const { textColor } = props
  return (
    <>
      <StyledText textColor={textColor}>{props.children}</StyledText>
    </>
  )
}

const StyledText = styled.p.attrs((props) => ({
  textColor: props.textColor,
}))`
  color: ${(props) => (props.textColor ? props.textColor : colors.black)};
`

export default Text
