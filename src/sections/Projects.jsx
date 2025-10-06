export default function Projects() {
    return (
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
    )
}