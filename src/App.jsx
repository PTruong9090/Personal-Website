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
        <a className='navbar-brand' href="#page-top">
          <span className='d-block d-lg-none'>Phuc Truong</span>
          <span className='d-none d-lg-block'> 
            <img className='img-fluid img-profile rounded-circle mx-auto mb-2' src='phuc_photo.jpeg' alt=''></img>
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

        <section className='resume-section p-3 p-lg-5 d-flex d-column' id='about'>
          <div className='my-auto'>
            <h1 className='mb-0'>Phuc <span className='text-primary'>Truong</span></h1>
            <h3>Mathematics of Computation @ UCLA</h3>
            <div className='subheading mb-3 mb-5'>San Jose, CA · <a href="mailto:ptruong9090@gmail.com">ptruong9090@gmail.com</a></div>
            <p className='mb-5'>I am an aspiring software engineer that enjoys building software to automate tasks and improve productivity!</p>
            <a href="Phuc_Resume_2025.pdf" target="_blank">View Resume as PDF</a>
            <ul className='list-inline list-social-icons mb-0'>
                  <li className='list-inline-item mt-4'>
                    <a href="https://github.com/PTruong9090" target='_blank'>
                      <img className="github-icon" src='github-mark.svg'></img>
                    </a>
                    <a href="https://www.linkedin.com/in/ptruong9090/" target='_blank'>
                      <img className="github-icon" src='linkedin.svg'></img>
                    </a>
                  </li>
                </ul>
          </div>
        </section>

        <section className='resume-section p-3 p-lg-5' id='experience'>
          <div class='my-auto'>
            <h2 className='mb-5'>Experience</h2>

            <div className='resume-item d-flex flex-column flex-md-row mb-5'>
              <div className='resume-content me-auto'>
                <h3>Front Desk Attendant</h3>
                <div className='subheading mb-3'>
                  UCLA Housing
                </div>
                <ul>
                  <li>Delivered customer service and support to residents, faculty and guests in a fast-paced, 24/7 housing environment</li>
                  <li>Communicated with many different departments to fulfill resident requests in a professional and caring manner and
ensure a seamless experience</li>
                  <li>Strengthened communication skills by serving as a liaison between residents and Housing & Safety, ensuring timely resolution of issues.</li>
                  <li>Trained and onboarded new front desk staff, providing guidance on service standards, key re-encoding, maintenance request submissions, and guest interactions.</li>
                  <li>Assisted in coordinating daily tasks such as room inspections, work order management, and move-in/move-out operations.</li>
                </ul>
              </div>
            </div>

            <div className='resume-item d-flex flex-column flex-md-row mb-5'>
              <div className='resume-content me-auto'>
                <h3>Handyman Assistant</h3>
                <div className='subheading mb-3'>
                  Independant Work (Family Business)
                </div>
                <ul>
                  <li>Coordinated directly with clients, translating requirements into actionable project plans and pricing contracts</li>
                  <li>Supported project documentation by creating written agreements and maintaining clear records.</li>
                  <li>Contributed to project execution through hands-on work such as demolition and drywall installation.</li>
                  <li>Strengthened problem-solving, communication, and adaptability skills in a client-facing environment.</li>
                </ul>
              </div>
            </div>
            
          </div>
        </section>

        <section className='resume-section p-3 p-lg-5' id='education'>
          <div class='my-auto'>
            <h2 className='mb-5'>Education</h2>
            <div className='resume-item d-flex flex-column flex-md-row mb-5'>
              <div className='resume-content me-auto'>
                <h3>Bachelor of Science</h3>
                <div className='subheading mb-3'>University of California, Los Angeles | Los Angeles, CA</div>
                <div>Mathematics of Computation</div>
                <p>GPA: 3.2</p>
              </div>
              <div className='resume-date text-md-end'>
                <span className='text-primary'>September 2022 - June 2026</span>
              </div>
            </div>
          </div>
        </section>

        <section className='resume-section p-3 p-lg-5' id='projects'>
          <div class='my-auto'>
            <h2 className='mb-5'>Projects</h2>

            <div className='resume-item d-flex flex-column flex-md-row mb-5 d-flex flex-column flex-md-row mb-5'>
              <div className='resume-content me-auto'>
                <h3 className='mb-0'>BruinGrub</h3>
                <div className='subheading mb-3'>
                  Web Application
                  <br/>
                  Skills Used: React, MySQL, Express.js, Node.js
                </div>
                <ul className='list-inline list-social-icons mb-0'>
                  <li className='list-inline-item'>
                    <a href="https://github.com/PTruong9090/UCLA-Dining-YELP" target='_blank'>
                      <span className='fa-stack fa-lg'>
                        <img className="github-icon" src='github-mark.svg'></img>
                      </span>
                    </a>
                  </li>
                </ul>
                <br></br>
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

            <div className='resume-item d-flex flex-column flex-md-row mb-5 d-flex flex-column flex-md-row mb-5'>
              <div className='resume-content me-auto'>
                <h3 className='mb-0'>University Degree Planner</h3>
                <div className='subheading mb-3'>
                  Web Application
                  <br/>
                  Skills Used: Playwright, JavaScript, PostgreSQL, Express.js, Tailwind.css
                </div>
               <ul className='list-inline list-social-icons mb-0'>
                  <li className='list-inline-item'>
                    <a href="https://github.com/PTruong9090/University-Degree-Planner" target='_blank'>
                      <span className='fa-stack fa-lg'>
                        <img className="github-icon" src='github-mark.svg'></img>
                      </span>
                    </a>
                  </li>
                </ul>
                <br></br>
                <ul>
                  <li>Created a full-stack web application using React and REST API for students to easily create and save their
4-year-plan based on their major
                  </li>
                  <li>Utilized Playwright to efficiently obtain data from UCLA website to acquire relevant information for hundred of
different majors</li>
                  <li>Created data models using Sequelize, ensuring efficient interaction between the application and PostgreSQL
database by defining relationships and implementing optimized queries</li>
                  <li>Implemented ability to drag-drop courses and calculate credits per quarter automatically</li>
                  <li>Automated data pipeline from Playwright to PostgreSQL database for hundreds of JSON files</li>
                </ul>
              </div>
            </div>

            <div className='resume-item d-flex flex-column flex-md-row mb-5'>
              <div className='resume-content me-auto'>
                <h3 className='mb-0'>The Know Your Times</h3>
                <div className='subheading mb-3'>
                  Web Application
                  <br/>
                  Skills Used: Playwright, JavaScript, MongoDB, Express.js, Node.js
                </div>
                <ul className='list-inline list-social-icons mb-0'>
                  <li className='list-inline-item'>
                    <a href="https://github.com/PTruong9090/KnowYourTimes" target='_blank'>
                      <span className='fa-stack fa-lg'>
                        <img className="github-icon" src='github-mark.svg'></img>
                      </span>
                    </a>
                  </li>
                </ul>
                <br></br>
                <ul>
                  <li>Built full-stack quiz platform features including streak/score tracking, answer selection locking, and leaderboard testing to improve engagement and fairness.</li>
                  <li>Implemented authentication workflows with login/registration toggle, CSS-styled frontend, and successful post-login rerouting.</li>
                  <li>Integrated database operations by creating API routes and implementing POST requests to persist streak/score updates.</li>
                  <li>Developed backend data pipelines with scripts to parse/scrape data into JSON and a custom web scraper for news articles.</li>
                  <li>Resolved multiple merge conflicts and code integration issues to ensure smooth collaboration in a team-based GitHub workflow.</li>
                </ul>
              </div>
            </div>

            <div className='resume-item d-flex flex-column flex-md-row mb-5'>
              <div className='resume-content me-auto'>
                <h3 className='mb-0'>The Miracle Project</h3>
                <div className='subheading mb-3'>
                  Web Application
                  <br/>
                  Skills Used: React, Node.js, Express.js, MySQL, Google Gemini
                </div>
                <ul className='list-inline list-social-icons mb-0'>
                  <li className='list-inline-item'>
                    <a href="https://github.com/PTruong9090/The-Miracle-Project" target='_blank'>
                      <span className='fa-stack fa-lg'>
                        <img className="github-icon" src='github-mark.svg'></img>
                      </span>
                    </a>
                  </li>
                </ul>
                <br></br>
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

        <section className='resume-section p-3 p-lg-5' id='skills'>
          <div class='my-auto'>
            <h2 className='mb-5'>Skills</h2>
            <div className='subheading mb-3 list-inline'>Primary Programming Languages</div>
            <ul>
              <li className='list-inline-item'>Python</li>
              <li className='list-inline-item'>C/C++</li>
              <li className='list-inline-item'>JavaScript</li>
            </ul>

            <div className='subheading mb-3 list-inline'>Secondary Programming Languages</div>
            <ul>
              <li className='list-inline-item'>HTML</li>
              <li className='list-inline-item'>CSS</li>
              <li className='list-inline-item'>SQL</li>
              <li className='list-inline-item'>R</li>
            </ul>

            <div className='subheading mb-3 list-inline'>Frameworks</div>
            <ul>
              <li className='list-inline-item'>ReactJS</li>
              <li className='list-inline-item'>Express.js</li>
            </ul>

            <div className='subheading mb-3 list-inline'>Databases</div>
            <ul>
              <li className='list-inline-item'>MySQL</li>
              <li className='list-inline-item'>PostgreSQL</li>
              <li className='list-inline-item'>MongoDB</li>
            </ul>

            <div className='subheading mb-3 list-inline'>Tools</div>
            <ul>
              <li className='list-inline-item'>Git</li>
              <li className='list-inline-item'>Visual Studio Code</li>
              <li className='list-inline-item'>Visual Studio </li>
              <li className='list-inline-item'>SSH Tools (PuTTY, WinSCP)</li>
              <li className='list-inline-item'>Postman</li>
              <li className='list-inline-item'>Chrome Developer Tools</li>
              <li className='list-inline-item'>Package Managers (NPM)</li>
            </ul>

            <div className='subheading mb-3 list-inline'>Soft Skills</div>
            <ul>
              <li className='list-inline-item'>Teamwork</li>
              <li className='list-inline-item'>Written and Verbal Communication</li>
              <li className='list-inline-item'>Leadership</li>
              <li className='list-inline-item'>Conflict Resolution</li>
              <li className='list-inline-item'>Management</li>
            </ul>
            
          </div>
        </section>

        <section className='resume-section p-3 p-lg-5' id='hobbies'>
          <div className='my-auto'>
              <h2 className='mb-5' >Hobbies</h2>
              
              <div className='resume-item d-flex flex-column flex-md-row mb-5'>
                <div className='resume-content me-auto'>
                  <h3>Rock Climbing</h3>
                  
                </div>
              </div>


              <div className='resume-item d-flex flex-column flex-md-row mb-5'>
                <div className='resume-content me-auto'>
                  <h3>Barista</h3>
                  
                </div>
              </div>


              <div className='resume-item d-flex flex-column flex-md-row mb-5'>
                <div className='resume-content me-auto'>
                  <h3>Photography</h3>
                  
                </div>
              </div>

              <div className='resume-item d-flex flex-column flex-md-row mb-5'>
                <div className='resume-content me-auto'>
                  <h3>Fishing</h3>
                  
                </div>
              </div>

              <div className='resume-item d-flex flex-column flex-md-row mb-5'>
                <div className='resume-content me-auto'>
                  <h3>Guitar</h3>
                  
                </div>
              </div>

              <div className='resume-item d-flex flex-column flex-md-row mb-5'>
                <div className='resume-content me-auto'>
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
