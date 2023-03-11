import React from 'react'
import styled from 'styled-components'

import Skills from './Skills';


const About = () => {
  return (
    <Wrapper>
     <div className="intro-container">
       <div className="intro">
         <h2 className="intro-header">About Me</h2>
          <p className="intro-text">Hello, my name is Max van Beek, and I started my coding journey in 2021. It didn't take me a long time to realise that there is a hidden passion for front-end development in me. That resulted in me working fulltime on achieving my goal: becoming a front-end developer. During the past 12 months, I followed multiple courses and built countless projects. As of now I think I am ready for the next step which is finding a job as Junior ReactJS developer!</p>
       </div>
     </div>
     <div className="skills-container">
      <Skills/>
     </div>
    </Wrapper>
  )
}


const Wrapper = styled.div`
color: var(--clr-cyan-v-dark); 

.intro-container {
  background: var(--clr-cyan-dark);
}

.intro {
  padding: 3em 0 6em 0;
  width: 90%;
  margin: 0 auto;
}

.intro-header {
  color: var(--clr-cyan-v-light);
}

.intro-text {
  color:var(--clr-cyan-light);
  padding-top: 1.5em;
  max-width: 800px;
  margin: 0 auto;
  line-height: 1.5;
}

.skills-container{
  margin: 0 auto;
  width: 95%;
  max-width: 1170px;
  background: var(--clr-cyan-light);
  margin-top: -3em;
  border: 2px solid var(--clr-cyan-regular); 
  border-radius: 5px;
}

@media (min-width: 768px) {
  .skill-container {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    max-width: 1170px;
    column-gap: 0.5em; 
    margin: 0 auto;
  }
}
`

export default About