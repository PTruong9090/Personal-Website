import { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'

function App() {

  return (
    <>
      <nav id='sidebar' className='navbar navbar-expand-lg bg-primary'>
        <a className='nav-picture'></a>
        <div className='navbar'>
          <li className='nav-item'>ABOUT</li>
          <li className='nav-item'>EXPERIENCE</li>
          <li className='nav-item'>PROJECTS</li>
          <li className='nav-item'>SKILLS</li>
          <li className='nav-item'>HOBBIES</li>

        </div>
      </nav>
      <div className='section-container'>
        <section className='introduction-section'>
          <h1>Phuc Truong</h1>
          <h3>Mathematics of Computation @ UCLA</h3>
          <div className='subheading'>San Jose, CA *</div>
          <a href="mailto:ptruong9090@gmail.com">ptruong9090@gmail.com</a>
          <p>I am an aspiring software engineer that enjoys building software to automate tasks and improve productivity!</p>
          <a href="Phuc_Resume_2025.pdf" target="_blank">View Resume as PDF</a>
        </section>
        <section className='experience-section'>
          <div class='section-container'>
            <h2>Experience</h2>
            <div className='resume-item'>
              <div className='resume-content'>
                <h3>Front Desk Attendant</h3>
                <div className='subheading'>
                  UCLA Housing
                </div>
                <ul>
                  <li>Provided exceptional customer service by addressing inquiries, complaints, and requests efficiently, enhancing
ability to manage multiple tasks under pressure</li>
                  <li>Communicated with many different departments to fulfill resident requests in a professional and caring manner and
ensure a seamless experience</li>
                  <li>Utilized computerized front office systems to manage guest registrations, process room charges, and track room
availability efficiently</li>
                </ul>
              </div>
            </div>
          </div>
        </section>
        <section className='education-section'>
          <div class='section-container'>
            <h2>Education</h2>
          </div>
        </section>
        <section className='projects-section'>
          <div class='section-container'>
            <h2>Projects</h2>
          </div>
        </section>
        <section className='skills-section'>
          <div class='section-container'>
            <h2>Skills</h2>
          </div>
        </section>
        <section className='hobbies-section'>
          <div class='section-container'>
            <h2>Hobbies</h2>
          </div>
        </section>
      </div>
    </>
  )
}

export default App
