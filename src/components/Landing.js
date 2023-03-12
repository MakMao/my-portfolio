import React, {useState, useEffect, useRef} from 'react'
import Typed from 'typed.js';
import styled from 'styled-components'
import me from '../images/ikkenu.png'
import 'aos/dist/aos.css';
import AOS from 'aos';

const Landing = () => {
  AOS.init();
  AOS.refresh();
  const [isOpen, setIsOpen] = useState(false)
  const [showBtn, setShowBtn] = useState(false)
  const [windowWidth, setWindowWidth] = useState(window.innerWidth)

  const el = useRef(null)
  const el2 = useRef(null)

  setTimeout(() => {
    setShowBtn(true)
  }, 2000)

  useEffect(() => {
  {isOpen && (document.body.style.overflow = "hidden")}
  {!isOpen &&  (document.body.style.overflow = "scroll")}
  }, [isOpen])

  const handleWidth = () => {
    setWindowWidth(window.innerWidth)
  }
  
  useEffect(() => {
    window.addEventListener('resize', handleWidth)
    setIsOpen(false)
    return () => {
      window.removeEventListener('resize', handleWidth)
    }
  }, [windowWidth > 768])

  useEffect(() => {
     new Typed(el2.current, {
      strings: ['Hi, my name is <span>Max van Beek. <span>'],
      typeSpeed: 20,
      backDelay: 200,
      backSpeed: 20,
      smartBackspace: true,
      showCursor: false,
      fadeOut: false,
    },[])
    new Typed(el.current, {
      strings: ['Front-end developer.', 'An <strong>enthusiastic aspiring</strong> front-end developer.'],
      startDelay: 1200,
      typeSpeed: 10,
      backDelay: 200,
      backSpeed: 20,
      smartBackspace: true,
      showCursor: false,
      loopCount: 1,
    })
  }, [])

  return (
    <Wrapper>
      <header>
        <div className="menu-btn" onClick={() => setIsOpen(!isOpen)}>
          <span className={`${isOpen ? 'menu-btn__burger open' : 'menu-btn__burger'}`}></span>
        </div>
      <nav className={`${isOpen ? 'nav open' : 'nav'}`}>
        <li className={`${isOpen ? 'option-one open' : 'option-one'}`}>
          <a href="#about-me" className="list-item" onClick={() => setIsOpen(false)}>About me</a>
        </li>
        <li className={`${isOpen ? 'option-two open' : 'option-two'}`}>
          <a href="#projects" className="list-item" onClick={() => setIsOpen(false)}>My projects</a>
        </li>
        <li className={`${isOpen ? 'option-three open' : 'option-three'}`}>
          <a href="#contact" className="list-item" onClick={() => setIsOpen(false)}>Contact me</a>
        </li>
      </nav>
      <nav className="big-screen-nav">
        <a href="#about-me">About Me</a>
        <a href="#projects">My projects</a>
        <a href="#contact">Contact me</a>
      </nav>
      </header>

      <main>
       <div className="img-container">
        <img src={me} alt="Max's avatar" className="max" />
      </div>
        <h2 className="ref-one"><span ref={el2}></span></h2>
        <p className="ref-two"><span ref={el}></span></p>
        <div className="progress-container">
          <div data-aos="fade-up" className="progress">
            <p className="progress-text">Click the button below to see what I have been working on recently.</p>
            <a href="#projects" className="btn">click here</a>
          </div>
        </div>
      </main>
    </Wrapper>
  )
}

const Wrapper = styled.div`
color: #03404E;
background: #E1F4F7;
margin: 0 auto;
height: 100vh;
position: relative;
width: 100%;

.ref-one {
  padding-bottom: 1.2em;
  margin-top: 0.5em; 
  height: 30px; 
}

.ref-two {
  height: 23px;
}

@media (max-width: 365px){
  .ref-one {
    font-size: 1.3rem;
  }
  .ref-two {
    font-size: 0.85rem;
  }
  .progress-text{
    font-size: 0.85rem;
  }
}

.btn {
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
  margin-top: 2em;
}

.btn:hover {
  background: var(--clr-cyan-v-dark);
}

.progress-container {
  height: 49px; 
}

.progress {
  transform: translateY(100%);
  transition-delay: 3.8s;
}

.progress-text {
  margin-bottom: 1em ;
}

.img-container {
  margin-top: -10em;
}

.max {
  height: 150px;
  width: 120px; 
}

main {
  display: flex;
  min-height: 100vh;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 0.5em;
}
.menu-btn {
  position: absolute;
  right: 1rem;
  top: 1rem;
  height: 20px;
  width: 28px;
  cursor: pointer; 
  border-color: transparent;
  transition: all 0.3s;
  z-index: 100; 
  }

.menu-btn__burger {
  position: absolute;
  right: 0;
  top: 0.5rem;
  width: 28px;
  height: 3px;
  background: #088494;
  transition: all 0.3s;
}

.menu-btn__burger::before{
  content: '';
  position: absolute;
  top: -8px;
  right: 0;
  width: 28px;
  height: 3px;
  background: #088494;
  transition: all 0.3s;
}
.menu-btn__burger::after{
  content: '';
  position: absolute;
  top: 8px;
  right: 0;
  width: 28px;
  height: 3px;
  background: #088494;
  transition: all 0.3s;
}

.menu-btn__burger.open {
  transform: rotate(720deg);
  background: transparent;
  transition: all 0.3s;
}
.menu-btn__burger.open::before{
  transform: rotate(45deg) translate(5px, 8px);
  transition: all 0.3s;
}

.menu-btn__burger.open::after{
  width: 28px;
  transform: rotate(-45deg) translate(3px, -7px);
  transition: all 0.3s;
}

.list-item {
  text-transform: uppercase;
  font-weight: 500;
  transition: var(--transition);
}

.list-item:hover {
  color: var(--clr-cyan-v-dark);
}

.nav.open {
  transform: translateY(0);
}

.option-one,
.option-two,
.option-three{
  transform: translateX(100vw);
}

.option-one.open {
  transition: 0.50s;
  transform: translateX(0);
}

.option-two.open {
  transition: 0.65s;
  transform: translateX(0);
}

.option-three.open {
  transition: 0.80s;
  transform: translateX(0);
}

.nav {
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background: #B9E3E9;
  transform: translateY(-100%);
  transition: all 0.3s;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  row-gap: 2em;
}

.big-screen-nav {
  display: none;
}
  
@media (min-width: 768px){
  .menu-btn {
    display: none;
  }

  .big-screen-nav {
    display: flex;
    justify-content: center;
    column-gap: 2em;
    padding: 1em 0;
    background: var(--clr-cyan-dark);
    color: #fff;
    /* width: 100vw; */
  }

  a{
    color: white;
  }

  a:hover {
    text-decoration: underline;
  }

  .one,
  .two,
  .three {
    transform: translateX(0);
  }
}
`

export default Landing