import { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle.min.js'
import gsap from "gsap";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";

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
        <a className='navbar-brand js-scroll-trigger' href="#page-top">
          <span className='d-block d-lg-none'>Phuc Truong</span>
          <span className='d-none d-lg-block'> 
            <img className='img-fluid img-profile rounded-circle mx-auto mb-2' src='phuc_photo.jpeg' alt></img>
          </span>
        </a>

        <button className='navbar-toggler collapsed' type='button' data-toggle='collapse' data-target="#navbarSupportedContent" aria-controls='navbarSupportContent' aria-expanded='false' aria-label='Toggle navigation'>
          <span className='navbar-toggler-icon'></span>
        </button>

        <div className='navbar-collapse collapse' id='navbarSupportedContent'>
          <ul className='navbar-nav'>
            <li className='nav-item'>
              <a className='nav-link' href="$about" onClick={scrollToId("#about")}>ABOUT</a>
            </li>
            <li className='nav-item'>
              <a className='nav-link' href="$experience" onClick={scrollToId("#experience")}>EXPERIENCE</a>
            </li>
            <li className='nav-item'>
              <a className='nav-link' href="$education" onClick={scrollToId("#education")}>EDUCATION</a>
            </li>
            <li className='nav-item'>
              <a className='nav-link' href="$skills" onClick={scrollToId("#skills")}>SKILLS</a>
            </li>
            <li className='nav-item'>
              <a className='nav-link' href="$hobbies" onClick={scrollToId("#hobbies")}>HOBBIES</a>
            </li>
          </ul>
        </div>
      </nav>
      <div className='section-container'>

        <section className='introduction-section' id='about'>
          <h1>Phuc Truong</h1>
          <h3>Mathematics of Computation @ UCLA</h3>
          <div className='subheading'>San Jose, CA *</div>
          <a href="mailto:ptruong9090@gmail.com">ptruong9090@gmail.com</a>
          <p>I am an aspiring software engineer that enjoys building software to automate tasks and improve productivity!</p>
          <a href="Phuc_Resume_2025.pdf" target="_blank">View Resume as PDF</a>
        </section>

        <section className='experience-section' id='experience'>
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

        <section className='education-section' id='education'>
          <div class='section-container'>
            <h2>Education</h2>
            <div className='resume-item'>
              <div className='resume-content'>
                <h3>Bachelor of Science</h3>
                <div className='subheading'>University of California, Los Angeles | Los Angeles, CA</div>
              </div>
            </div>
            <div className='resume-date'>September 2022 - June 2026</div>
          </div>
        </section>

        <section className='projects-section' id='projects'>
          <div class='section-container'>
            <h2>Projects</h2>

            <div className='resume-item'>
              <div className='resume-content'>
                <h3>BruinGrub</h3>
                <div className='subheading'>
                  Web Application
                  <br/>
                  Skills Used: React, MySQL, Express.js, Node.js
                </div>
                <ul className='list-inline icons'>
                  <li className='list-inline-item'>
                    <a href="https://github.com/PTruong9090/UCLA-Dining-YELP" target='_blank'>
                      <img className='test' src='github-mark.svg'></img>
                    </a>
                  </li>
                </ul>
                <ul>
                  <li>Collaborated with team to create a full-stack web app that allows UCLA students to explore dining options, leave
reviews, and track calorie intake
                  </li>
                  <li>Utilized React for front-end, Node.js and Express.js for back-end, and MySQL for data management</li>
                  <li>Implemented user authentication to ensure secure access for dining users and students, enabling distinct
functionalities for each user type</li>
                  <li>Enhanced user engagement with a calorie-tracking feature and intuitive user interface</li>
                  <li>Conducted testing and debugging to ensure application performance and reliability</li>
                </ul>
              </div>
            </div>

            <div className='resume-item'>
              <div className='resume-content'>
                <h3>University Degree Planner</h3>
                <div className='subheading'>
                  Web Application
                  <br/>
                  Skills Used: Playwright, JavaScript, PostgreSQL, Express.js, Tailwind.css
                </div>
                <ul className='list-inline icons'>
                  <li className='list-inline-item'>
                    <a href="https://github.com/PTruong9090/University-Degree-Planner" target='_blank'>
                      <img className='test' src='github-mark.svg'></img>
                    </a>
                  </li>
                </ul>
                <ul>
                  <li>Created a full-stack web application using React and REST API for students to easily create and save their
4-year-plan based on their major
                  </li>
                  <li>Utilized Playwright to efficiently obtain data from UCLA website to acquire relevant information for hundred of
different majors</li>
                  <li>Created data models using Sequelize, ensuring efficient interaction between the application and PostgreSQL
database by defining relationships and implementing optimized queries</li>
                  <li>Implemented ability to drag-drop courses and calculate credits per quarter automatically</li>
                  <li>Automated data pipeline from PLaywright to PostgreSQL database for hundreds of JSON files</li>
                </ul>
              </div>
            </div>

            <div className='resume-item'>
              <div className='resume-content'>
                <h3>The Know Your Times</h3>
                <div className='subheading'>
                  Web Application
                  <br/>
                  Skills Used: Playwright, JavaScript, MongoDB, Express.js, Node.js
                </div>
                <ul className='list-inline icons'>
                  <li className='list-inline-item'>
                    <a href="https://github.com/PTruong9090/KnowYourTimes" target='_blank'>
                      <img className='test' src='github-mark.svg'></img>
                    </a>
                  </li>
                </ul>
                <ul>
                  <li>Built full-stack quiz platform features including streak/score tracking, answer selection locking, and leaderboard testing to improve engagement and fairness.</li>
                  <li>Implemented authentication workflows with login/registration toggle, CSS-styled frontend, and successful post-login rerouting.</li>
                  <li>Integrated database operations by creating API routes and implementing POST requests to persist streak/score updates.</li>
                  <li>Developed backend data pipelines with scripts to parse/scrape data into JSON and a custom web scraper for news articles.</li>
                  <li>Resolved multiple merge conflicts and code integration issues to ensure smooth collaboration in a team-based GitHub workflow.</li>
                </ul>
              </div>
            </div>

            <div className='resume-item'>
              <div className='resume-content'>
                <h3>The Miracle Project</h3>
                <div className='subheading'>
                  Web Application
                  <br/>
                  Skills Used: React, Node.js, Express.js, MySQL, Google Gemini
                </div>
                <ul className='list-inline icons'>
                  <li className='list-inline-item'>
                    <a href="https://github.com/PTruong9090/The-Miracle-Project" target='_blank'>
                      <img className='test' src='github-mark.svg'></img>
                    </a>
                  </li>
                </ul>
                <ul>
                  <li>Created a full-stack web application to keep assigned material easily accessible for neurodivergent and disabled individuals in classrooms</li>
                  <li>Integrated voice navigation features using a speech-to-text API and Google’s Gemini, improving accessibility for users with diverse needs.</li>
                  <li>Implemented backend server with database models and routing, enabling scalable storage and retrieval of class/course resources.</li>
                  <li>Designed and tested RESTful API endpoints (GET/POST requests) for course content delivery and file management.</li>
                  <li>Built dynamic frontend pages (class pages, upload pages, headers) with integrated backend APIs to ensure seamless navigation and accessibility.</li>
                </ul>
              </div>
            </div>

          </div>
        </section>

        <section className='skills-section' id='skills'>
          <div class='section-container'>
            <h2>Skills</h2>
            <div className='subheading list-inline'>Primary Programming Languages</div>
            <ul>
              <li className='list-inline-item'>Python</li>
              <li className='list-inline-item'>C/C++</li>
              <li className='list-inline-item'>JavaScript</li>
            </ul>

            <div className='subheading list-inline'>Secondary Programming Languages</div>
            <ul>
              <li className='list-inline-item'>HTML</li>
              <li className='list-inline-item'>CSS</li>
              <li className='list-inline-item'>SQL</li>
            </ul>

            <div className='subheading list-inline'>Frameworks</div>
            <ul>
              <li className='list-inline-item'>ReactJS</li>
              <li className='list-inline-item'>Express.js</li>
            </ul>

            <div className='subheading list-inline'>Databases</div>
            <ul>
              <li className='list-inline-item'>MySQL</li>
              <li className='list-inline-item'>PostgreSQL</li>
              <li className='list-inline-item'>MongoDB</li>
            </ul>

            <div className='subheading list-inline'>Tools</div>
            <ul>
              <li className='list-inline-item'>Git</li>
              <li className='list-inline-item'>Visual Studio Code</li>
              <li className='list-inline-item'>Visual Studio </li>
              <li className='list-inline-item'>SSH Tools (PuTTY, WinSCP)</li>
              <li className='list-inline-item'>Postman</li>
              <li className='list-inline-item'>Chrome Developer Tools</li>
              <li className='list-inline-item'>Package Managers (NPM)</li>
            </ul>

            <div className='subheading list-inline'>Soft Skills</div>
            <ul>
              <li className='list-inline-item'>Teamwork</li>
              <li className='list-inline-item'>Written and Verbal Communication</li>
              <li className='list-inline-item'>Leadership</li>
              <li className='list-inline-item'>Conflict Resolution</li>
              <li className='list-inline-item'>Management</li>
            </ul>
            
          </div>
        </section>

        <section className='hobbies-section' id='hobbies'>
          <div className='section-container'>
              <h3>Hobbies</h3>
              
              <div className='hobby-item'>
                <div className='hobby-content'>
                  <h3>Rock Climbing</h3>
                  
                </div>
              </div>


              <div className='hobby-item'>
                <div className='hobby-content'>
                  <h3>Barista</h3>
                  
                </div>
              </div>


              <div className='hobby-item'>
                <div className='hobby-content'>
                  <h3>Photography</h3>
                  
                </div>
              </div>

              <div className='hobby-item'>
                <div className='hobby-content'>
                  <h3>Fishing</h3>
                  
                </div>
              </div>

              <div className='hobby-item'>
                <div className='hobby-content'>
                  <h3>Guitar</h3>
                  
                </div>
              </div>

              <div className='hobby-item'>
                <div className='hobby-content'>
                  <h3>Backpacking</h3>
                  
                </div>
              </div>

          </div>
        </section>

      </div>
    </>
  )
}

export default App
