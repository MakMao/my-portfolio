import React from 'react'
import styled from 'styled-components'
import ecommerce from '../images/ecommerce-prev.png'
import github from '../images/github.png'
import dotyeti from '../images/dotyeti.png'
import GitHubIcon from '@mui/icons-material/GitHub';
import VisibilityIcon from '@mui/icons-material/Visibility';
import quiz from '../images/quiz.png'
import woordle from '../images/woordle-img-project-removebg-preview.png'

const Projects = () => {

  return (
    <Wrapper>
      <div className="header">
          <h2 className="intro-header">Projects</h2>
          <p className="intro-text">In the last 12 months, I have built numerous applications to enhance my development skills.  
           Here are some of the projects I created that I am excited to share with you.</p>
      </div>
      <div className="container">
        <div data-aos="fade-up-right" className="project" >
          <h2>E-commerce store</h2>
          <div className='img-container'>
          <img src={ecommerce} alt="" className="main-img" />
            <div className='content'>
              <div className="project-hover">
                <a href="https://github.com/MakMao/healthy_wealthy" target="_blank" className="github-link" rel='noreferrer'>
                  <GitHubIcon/>
                  <p>GitHub repository</p>
                </a>
              </div>
              <div className="project-hover">
                <a target="_blank" href="https://testing-healthy-wealthy.netlify.app/" className="github-link" rel='noreferrer'>
                  <VisibilityIcon/>
                  <p>Live demo</p>
                </a>
              </div>
              </div>
          </div>
        </div>

        <div data-aos="fade-up-left" className="project" >
          <h2>GitHub Search app</h2>
          <div className='img-container'>
          <img src={github} alt="" className="main-img" />
            <div className='content'>
              <div className="project-hover">
                <a className="github-link" target="_blank" href="https://github.com/MakMao/github-clone-react" rel='noreferrer'>
                  <GitHubIcon/>
                  <p>GitHub repository</p>
                </a>
              </div>
              <div className="project-hover">
                <a className="github-link" target="_blank" href="https://makmao-github.netlify.app/" rel='noreferrer'>
                  <VisibilityIcon/>
                  <p>Live demo</p>
                </a>
              </div>
              </div>
          </div>
        </div>

        <div data-aos="fade-up-right" className="project" >
          <h2>Text overlay tool</h2>
          <div className='img-container'>
          <img src={dotyeti} alt="" className="main-img" />
            <div className='content'>
              <div className="project-hover">
                <a className="github-link" target="_blank" href="https://the-protein-store.netlify.app" rel='noreferrer'>
                  <GitHubIcon/>
                  <p>GitHub repository</p>
                </a>
              </div>
              <div className="project-hover">
                <a className="github-link" target='_blank' href="https://text-overlay-tool.netlify.app/" rel='noreferrer'>
                  <VisibilityIcon/>
                  <p>Live demo</p>
                </a>
              </div>
              </div>
          </div>
        </div>

        <div data-aos="fade-up-left" className="project" >
          <h2>Quiz</h2>
          <div className='img-container'>
          <img src={quiz} alt="" className="main-img" />
            <div className='content'>
              <div className="project-hover">
                <a className="github-link" target="_blank" href="https://github.com/MakMao/react-quiz" rel='noreferrer'>
                  <GitHubIcon/>
                  <p>GitHub repository</p>
                </a>
              </div>
              <div className="project-hover">
                <a className="github-link" target="_blank" href="https://makmao-quiz.netlify.app/" rel='noreferrer'>
                  <VisibilityIcon/>
                  <p>Live demo</p>
                </a>
              </div>
              </div>
          </div>
        </div>

        <div data-aos="fade-up-right" className="project" >
          <h2>Woordle</h2>
          <div className='img-container'>
          <img src={woordle} alt="" className="main-img" />
            <div className='content'>
              <div className="project-hover">
                <a className="github-link" target="_blank" href="https://github.com/MakMao/woordle" rel='noreferrer'>
                  <GitHubIcon/>
                  <p>GitHub repository</p>
                </a>
              </div>
              <div className="project-hover">
                <a className="github-link" target="_blank" href="https://wordle-makmao.netlify.app/"rel='noreferrer' >
                  <VisibilityIcon/>
                  <p>Live demo</p>
                </a>
              </div>
              </div>
          </div>
        </div>
      </div>
    </Wrapper>
  )
}

const Wrapper = styled.main`
margin: 10em 0;

.intro-text {
  width: 95%;
  max-width: 800px;
  margin: 0 auto;
  color: var(--clr-cyan-light);
  line-height: 1.5;
  margin-top: 1em;
}

.intro-header {
  color: var(--clr-cyan-v-light);
}

.header {
  background: #088494; 
  padding: 2em 0 5em 0;
}
.container {
  display: flex;
  flex-direction: column;
  width: 95%; 
  max-width: 500px;
  overflow: hidden;
  border: 2px solid var(--clr-cyan-regular);
  border-radius: 5px;
  margin: 0 auto;
  margin-top: -2em;
  background: #E1F4F7; 
}

.main-img{
  object-fit: contain;
  width: 100%;
  max-width: 960px;
  cursor: pointer;
  position: relative;
}


.project {
  margin: 2em 0.5em;
  border: 2px solid var(--clr-cyan-dark);
  position: relative;
  border-radius: 5px;
  overflow: hidden;
}

.img-container {
    position: relative;
}

.content {
  width: 75%;
  position: absolute;
  top: 8%;
  left: 13%;
  background: var(--clr-cyan-dark);
  height: 80% ;
  display: flex;
  flex-direction: column;
  align-items : flex-start;
  justify-content: center; 
  opacity: 0;
}

.content:hover {
  transform: translateY(0);
  transition: 0.3s;
  opacity: 1;
}

.github-link {
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0.3em;
  column-gap: 0.3em;
  cursor: pointer;
  color: var(--clr-cyan-light); 
}

.github-link:hover {
  color: #fff;
}

.project-hover {
  width: 100%;
  margin: 0 auto;
}

@media (min-width: 768px){
  .container{
    display: grid;
    max-width: 960px;
    grid-template-columns: 1fr 1fr;
  }
}
`
export default Projects