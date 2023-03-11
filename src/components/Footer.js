import React from 'react'
import styled from 'styled-components'

const Footer = () => {
  return (
    <Container>
       <h5>&copy; {new Date().getFullYear()} <span>My Portfolio</span> All rights reserved</h5>
    </Container>
  )
}

const Container = styled.div`
  background: var(--clr-cyan-dark);
  color: var(--clr-cyan-regular);
  text-align: center;
  padding: 1em 0;

  span {
    color: var(--clr-cyan-v-dark);
  }
`
export default Footer