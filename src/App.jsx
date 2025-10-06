import { useState } from 'react'
import gsap from "gsap";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";

import { Suspense, lazy } from "react";
const About = lazy(() => import("./sections/About"));
const Experience = lazy(() => import("./sections/Experience"));
const Education = lazy(() => import("./sections/Education"));
const Projects = lazy(() => import("./sections/Projects"));
const Skills = lazy(() => import("./sections/Skills"));
const Hobbies = lazy(() => import("./sections/Hobbies"));

gsap.registerPlugin(ScrollToPlugin);

function App() {
  const scrollToId = (id) => (e) => {
    e.preventDefault()
    gsap.to(window, {
      scrollTo: {y: id, offsetY: 12},
      ease: "power4.out"
    })
  }

  return (
    <>
      <nav id='sideNav' className='navbar navbar-expand-lg navbar-dark bg-primary fixed-top'>
        <a className='navbar-brand' href="#page-top">
          <span className='title-font d-block d-lg-none'>Phuc Truong</span>
          <span className='d-none d-lg-block'> 
            <img className='img-fluid img-profile rounded-circle mx-auto mb-2' src='phuc_photo.webp' alt='Phuc Truong'></img>
          </span>
        </a>

        <button className='navbar-toggler' type='button' data-bs-toggle='collapse' data-bs-target="#navbarSupportedContent" aria-controls='navbarSupportContent' aria-expanded='false' aria-label='Toggle navigation'>
          <span className='navbar-toggler-icon'></span>
        </button>

        <div className='collapse navbar-collapse' id='navbarSupportedContent'>
          <ul className='navbar-nav'>
            <li className='nav-item'>
              <a className='nav-link' href="#about" onClick={scrollToId("#about")}>ABOUT</a>
            </li>
            <li className='nav-item'>
              <a className='nav-link' href="#experience" onClick={scrollToId("#experience")}>EXPERIENCE</a>
            </li>
            <li className='nav-item'>
              <a className='nav-link' href="#education" onClick={scrollToId("#education")}>EDUCATION</a>
            </li>
            <li className='nav-item'>
              <a className='nav-link' href="#projects" onClick={scrollToId("#projects")}>PROJECTS</a>
            </li>
            <li className='nav-item'>
              <a className='nav-link' href="#skills" onClick={scrollToId("#skills")}>SKILLS</a>
            </li>
            <li className='nav-item'>
              <a className='nav-link' href="#hobbies" onClick={scrollToId("#hobbies")}>HOBBIES</a>
            </li>
          </ul>
        </div>
      </nav>
      <div className='container-fluid p-0'>
        <Suspense fallback={<div style={{ height: 200 }} />}>
          <About />
          <Experience />
          <Education />
          <Projects />
          <Skills />
          <Hobbies />
        </Suspense>
      </div>
    </>
  )
}

export default App
