import React from 'react'
import styled from 'styled-components'
import ik from '../images/ikkenu.png'
import { Link } from 'react-router-dom'

const ThankYou = () => {
  return (
    <Container>
      <img src={ik} alt="Max's avatar" className="img"/>
      <h2>Thank you for your message!</h2>
      <p>I will be in touch with you shortly.</p>
        <Link to='/' className="btn">Back Home</Link>
    </Container>
  )
}

const Container = styled.div`
  display: flex;
  height: 100vh;
  justify-content: center;
  align-items: center;
  flex-direction: column;

.img{
  width: 150px;
  height: 150px;
  margin-bottom: 2em;
  margin-top: -1em;
}

p{
  margin: 0.5em 0;
}

.btn{
  background-color: var(--clr-cyan-dark);
  border-radius: 5px;
  border: 0;
  padding: 0.3em 0.8em;
  color: #fff;
  font-size: 0.875rem;
  cursor: pointer;
  font-weight: 500;
  letter-spacing: 1px;
  transition: var(--transition);
}

.btn:hover {
    background-color: var(--clr-cyan-v-dark);

}
`

export default ThankYou