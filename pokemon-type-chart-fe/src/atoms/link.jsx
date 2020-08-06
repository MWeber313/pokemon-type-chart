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
  border-bottom: 0.2rem solid;
  padding-bottom: 0.25rem;
  transition: all 1s ease-in-out;

  &:hover {
    transition: all 1s ease-in-out;
    transform: scale(1.5);
  }
  &:active {
    border-bottom: ${colors.red} solid 0.3rem;
  }
`

export default Link
