import React from 'react'
import html from '../images/html.png'
import css from '../images/css.png'
import sass from '../images/sass.png'
import js from '../images/js.png'
import ts from '../images/ts.svg'
import git from '../images/git.png'
import react from '../images/react.png'
import netlify from '../images/netlify.jpeg'
import heroku from '../images/heroku.webp'
import vscode from '../images/vscode.png'
import bootstrap from '../images/bootstrap.png'
import styled from 'styled-components';

const Skills = () => {
  return (
    <Container>
      <h2 className="skills-title">List of technologies I have worked with.</h2>
      <div className="skill-container">
      <div>
        <h3 className="skills-type-title">Styling technologies:</h3>
        <div className="each-skill">
          <img src={html} alt="tech-avatar" className="icon"/>
          <p>HTML</p>
        </div>
        <div className="each-skill">
          <img src={css} alt="tech-avatar" className="icon"/>
          <p>CSS</p>
        </div>
        <div className="each-skill">
          <img src={sass} alt="tech-avatar" className="icon"/>
          <p>Sass</p>
        </div>
        <div className="each-skill last-skill bootstrap">
          <img src={bootstrap} alt="tech-avatar" className="icon"/>
          <p>bootstrap</p>
        </div>
      </div>
      <div>
        <h3 className="skills-type-title">JS technologies:</h3>
        <div className="each-skill">
          <img src={js} alt="tech-avatar" className="icon"/>
          <p>JavaScript</p>
        </div>
        <div className="each-skill">
          <img src={ts} alt="tech-avatar" className="icon"/>
          <p>TypeScript</p>
        </div>
        <div className="each-skill last-skill">
          <img src={react} alt="tech-avatar" className="icon"/>
          <p>ReactJS</p>
        </div>
      </div>
      <div>
        <h3 className="skills-type-title">Other technologies:</h3>
        <div className="each-skill">
          <img src={netlify} alt="tech-avatar" className="icon"/>
          <p>Netlify</p>
        </div>
        <div className="each-skill">
          <img src={git} alt="tech-avatar" className="icon"/>
          <p>git</p>
        </div>
        <div className="each-skill">
          <img src={heroku} alt="tech-avatar" className="icon"/>
          <p>heroku</p>
        </div>
        <div className="each-skill last-skill vscode">
          <img src={vscode} alt="tech-avatar" className="icon"/>
          <p>VSCode</p>
        </div>
      </div>
      </div>
    </Container>
  )
}

const Container = styled.div`

.skills-type-title {
  padding: 1em 0;
}

.skills-title {
  padding: 1em 0;
}

.each-skill {
  border: 2px solid rgba(8, 132, 148, 0.5);
  border-radius: 5px;
  margin: 0.5em 0;
  height: 70px;
  padding-top: 0.3em;
}

.last-skill {
  margin-bottom: 0;
}

.icon {
  width: 40px;
  height: 40px;
  margin: 0 auto;
}

.vscode {
  border-bottom-left-radius: 5px;
  border-bottom-right-radius: 5px;
}
`

export default Skills