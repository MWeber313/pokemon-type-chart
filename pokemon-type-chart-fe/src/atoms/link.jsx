import React from "react"
import styled from "styled-components"
import colors from "../styles/colors"

const Link = ({ ...props }) => {
  const { textColor, href, title, role } = props
  return (
    <>
      <StyledLink textColor={textColor} href={href} title={title} role={role}>
        {props.children}
      </StyledLink>
    </>
  )
}

const StyledLink = styled.a.attrs((props) => ({
  textColor: props.textColor,
  href: props.href,
}))`
  color: ${(props) => (props.textColor ? props.textColor : colors.black)};
  text-decoration: none;
  border-bottom: 2px solid;
  padding-bottom: 3px;
  transition: all 1s ease-in-out;
  transform: translateZ(0);

  &:hover {
    border-bottom: 4px solid;
    padding-bottom: 5px;
    transition: all 1s ease-in-out;
    transform: translateZ(0);
  }
`

export default Link
