export default function Projects() {
    return (
        <section className='resume-section p-3 p-lg-5' id='projects'>
          <div className='my-auto'>
            <h2 className='mb-5'>Projects</h2>

            <div className='resume-item d-flex flex-column flex-md-row mb-5'>
              <div className='resume-content me-auto'>
                <h3 className='mb-0'>BruinGrub</h3>
                <div className='subheading mb-3'>
                  Web Application
                  <br />
                  Skills Used: React, Node.js, Express.js, MySQL, JWT
                </div>
                <ul className='list-inline list-social-icons mb-0'>
                  <li className='list-inline-item'>
                    <a href='https://github.com/PTruong9090/UCLA-Dining-YELP' target='_blank' rel='noopener noreferrer'>
                      <span className='fa-stack fa-lg'>
                        <img className='github-icon' src='github-mark.svg' alt='GitHub' />
                      </span>
                    </a>
                  </li>
                </ul>
                <br />
                <ul>
                  <li>Collaborated on a full-stack UCLA dining app that helps students browse dining options, post reviews, and track nutrition information.</li>
                  <li>Built React frontend components and connected them to REST API endpoints for dining data, reviews, user actions, and calorie tracking.</li>
                  <li>Contributed MySQL schemas and Express.js routes to persist user accounts, dining records, review content, and nutrition data.</li>
                  <li>Implemented JWT-based authentication flows to support secure access and user-specific app behavior.</li>
                  <li>Tested and debugged frontend, backend, and database integration issues across a team-based GitHub workflow.</li>
                </ul>
              </div>
            </div>

            <div className='resume-item d-flex flex-column flex-md-row mb-5'>
              <div className='resume-content me-auto'>
                <h3 className='mb-0'>PlanBear</h3>

                <div className='subheading mb-3'>
                  Production Full-Stack Web Application <br />
                  <strong>Tech:</strong> React, Vite, Tailwind CSS, Node.js, Express, PostgreSQL, Sequelize, Supabase, JWT, Cloudflare Turnstile, Playwright
                </div>

                <ul className='list-inline list-social-icons mb-0'>
                  <li className='list-inline-item'>
                    <a
                      href='https://github.com/PTruong9090/University-Degree-Planner'
                      target='_blank'
                      rel='noopener noreferrer'
                    >
                      <span className='fa-stack fa-lg'>
                        <img className='github-icon' src='github-mark.svg' alt='GitHub' />
                      </span>
                    </a>
                  </li>

                  <li className='list-inline-item'>
                    <a
                      href='https://planbear.io'
                      target='_blank'
                      rel='noopener noreferrer'
                    >
                      <span className='fa-stack fa-lg'>
                        <i className='fas fa-globe'></i>
                      </span>
                    </a>
                  </li>
                </ul>

                <br />

                <ul>
                  <li>
                    Built a production full-stack UCLA degree planning platform that helps
                    students search courses, organize requirements, and create long-term
                    quarter-by-quarter graduation plans.
                  </li>

                  <li>
                    Developed a responsive React planner with drag-and-drop course
                    placement, 16-quarter roadmap support, automatic unit totals, and PDF
                    export for multi-year academic planning.
                  </li>

                  <li>
                    Designed Node.js and Express REST APIs with PostgreSQL and Sequelize to
                    support authentication, saved plans, course records, planner persistence,
                    and account workflows.
                  </li>

                  <li>
                    Implemented JWT authentication with HttpOnly cookies, bcrypt password
                    hashing, password reset flows, guest-mode planning, Cloudflare Turnstile,
                    Helmet, CORS controls, and rate limiting.
                  </li>

                  <li>
                    Imported and normalized 15,154 UCLA course records across 196 subject
                    areas, then improved course discovery with scalable search, filtering,
                    sorting, request deduplication, sessionStorage, and cache TTLs.
                  </li>
                </ul>
              </div>
            </div>


            <div className='resume-item d-flex flex-column flex-md-row mb-5'>
              <div className='resume-content me-auto'>
                <h3 className='mb-0'>Homelab Anomaly Detection System</h3>
                <div className='subheading mb-3'>
                  Machine Learning Infrastructure Monitoring System
                  <br />
                  Skills Used: Python, PyTorch, FastAPI, Prometheus, Grafana, Docker, NumPy, TranAD
                </div>
                <ul className='list-inline list-social-icons mb-0'>
                  <li className='list-inline-item'>
                    <a href='https://github.com/PTruong9090/multivariate-anomaly-detection/tree/main' target='_blank' rel='noopener noreferrer'>
                      <span className='fa-stack fa-lg'>
                        <img className='github-icon' src='github-mark.svg' alt='GitHub' />
                      </span>
                    </a>
                  </li>
                </ul>
                <br />
                <ul>
                  <li>Adapted a TranAD anomaly detection workflow from benchmark server data to real Prometheus telemetry from a self-hosted media server.</li>
                  <li>Built Prometheus data collection and preprocessing pipelines for CPU, memory, network receive, and network transmit metrics.</li>
                  <li>Normalized and windowed multivariate time-series data so the model could learn relationships across infrastructure signals over time.</li>
                  <li>Evaluated synthetic CPU, memory, and network anomalies, achieving 0.8485 F1, 0.9333 precision, and 0.8876 ROC/AUC.</li>
                  <li>Dockerized a FastAPI scoring service and exported model scores, thresholds, anomaly ratios, and health metrics back into Prometheus and Grafana.</li>
                </ul>
              </div>
            </div>

            <div className='resume-item d-flex flex-column flex-md-row mb-5'>
              <div className='resume-content me-auto'>
                <h3 className='mb-0'>Clinical Note Restructuring Tool</h3>
                <div className='subheading mb-3'>
                  Production Full-Stack AI Web Application
                  <br />
                  Skills Used: React, Vite, Tailwind CSS, Node.js, Express, PostgreSQL, Sequelize, Zod, OpenAI API, Google Gemini API, Cloudflare Pages, Render
                </div>
                <ul className='list-inline list-social-icons mb-0'>
                  <li className='list-inline-item'>
                    <a href='https://github.com/PTruong9090/Clinical-Note-Restructuring-Tool' target='_blank' rel='noopener noreferrer'>
                      <span className='fa-stack fa-lg'>
                        <img className='github-icon' src='github-mark.svg' alt='GitHub' />
                      </span>
                    </a>
                  </li>

                  <li className='list-inline-item'>
                    <a href='https://clinic.phuctruong.dev' target='_blank' rel='noopener noreferrer'>
                      <span className='fa-stack fa-lg'>
                        <i className='fas fa-globe'></i>
                      </span>
                    </a>
                  </li>
                </ul>
                <br />
                <ul>
                  <li>Built and deployed a clinical documentation tool that restructures unstructured emergency department and H&amp;P notes into organized clinical summaries.</li>
                  <li>Designed a rules-based extraction and admission-checklist pipeline for deterministic DKA and euglycemic DKA criteria separate from LLM-generated writing.</li>
                  <li>Implemented schema-constrained AI outputs using Zod, OpenAI API, and Google Gemini API to improve structure, validation, and reviewability.</li>
                  <li>Built editable React workflows that let users review generated summaries, revised HPIs, source-backed evidence, and saved case outputs.</li>
                  <li>Persisted original notes, generated outputs, edited outputs, and saved cases through PostgreSQL and Sequelize-backed APIs.</li>
                </ul>
              </div>
            </div>

            <div className='resume-item d-flex flex-column flex-md-row mb-5'>
              <div className='resume-content me-auto'>
                <h3 className='mb-0'>Self-Hosted Homelab Infrastructure</h3>
                <div className='subheading mb-3'>
                  Infrastructure and DevOps Project
                  <br />
                  Skills Used: Docker, Linux, Unraid, NFS, Tailscale, Cloudflare, Caddy, Prometheus, Grafana
                </div>
                <ul>
                  <li>Designed and maintained a self-hosted infrastructure stack across an Unraid NAS and a dedicated mini PC for services, storage, monitoring, and experimentation.</li>
                  <li>Deployed containerized applications with Docker, managing persistent volumes, ports, environment variables, restart behavior, and inter-service communication.</li>
                  <li>Configured NFS shares for cross-machine storage, gaining hands-on experience with Linux permissions, volume mounts, networking, and reliability issues.</li>
                  <li>Set up secure access patterns with Tailscale, Cloudflare, and Caddy to route internal services through private networking and HTTPS reverse proxies.</li>
                  <li>Integrated Prometheus and Grafana dashboards to monitor CPU, memory, network traffic, service health, and operational behavior across multiple nodes.</li>
                </ul>
              </div>
            </div>

            <div className='resume-item d-flex flex-column flex-md-row mb-5'>
              <div className='resume-content me-auto'>
                <h3 className='mb-0'>AI-Powered Smart Magic Mirror</h3>
                <div className='subheading mb-3'>
                  Embedded AI Application
                  <br />
                  Skills Used: Raspberry Pi 5, Python, FastAPI, OpenCV, TensorFlow Lite, Docker, Linux
                </div>
                <ul>
                  <li>Built an AI-powered smart mirror that runs on a Raspberry Pi 5 with Linux, Dockerized services, and a FastAPI backend.</li>
                  <li>Created a gesture-recognition pipeline covering image capture, preprocessing, model training, and on-device TensorFlow Lite inference.</li>
                  <li>Used OpenCV to process camera input and prepare gesture frames for lightweight edge-device prediction.</li>
                  <li>Connected recognized gestures to external service controls, enabling hands-free interaction patterns such as media playback control.</li>
                  <li>Gained practical experience deploying computer vision and inference workflows on constrained hardware outside a desktop development environment.</li>
                </ul>
              </div>
            </div>

            <div className='resume-item d-flex flex-column flex-md-row mb-5'>
              <div className='resume-content me-auto'>
                <h3 className='mb-0'>Know Your Times</h3>
                <div className='subheading mb-3'>
                  Web Application
                  <br />
                  Skills Used: React, Node.js, Express.js, MongoDB, Google Gemini API
                </div>
                <ul className='list-inline list-social-icons mb-0'>
                  <li className='list-inline-item'>
                    <a href='https://github.com/PTruong9090/KnowYourTimes' target='_blank' rel='noopener noreferrer'>
                      <span className='fa-stack fa-lg'>
                        <img className='github-icon' src='github-mark.svg' alt='GitHub' />
                      </span>
                    </a>
                  </li>
                </ul>
                <br />
                <ul>
                  <li>Built an AI-powered news quiz app that transforms daily news into interactive quizzes for student engagement and current-events learning.</li>
                  <li>Integrated Google Gemini API workflows to generate quiz questions from news content and support dynamic learning experiences.</li>
                  <li>Developed full-stack quiz features including answer selection locking, score and streak tracking, and leaderboard-oriented engagement.</li>
                  <li>Implemented backend services and MongoDB models to persist user progress, quiz results, generated questions, and scoring data.</li>
                  <li>Created frontend quiz flows and authentication UI while resolving integration issues across a team-based GitHub workflow.</li>
                </ul>
              </div>
            </div>

            <div className='resume-item d-flex flex-column flex-md-row mb-5'>
              <div className='resume-content me-auto'>
                <h3 className='mb-0'>The Miracle Project</h3>
                <div className='subheading mb-3'>
                  Web Application
                  <br />
                  Skills Used: React, Vite, Node.js, Express.js, MySQL, Google Gemini API, Speech-to-Text APIs
                </div>
                <ul className='list-inline list-social-icons mb-0'>
                  <li className='list-inline-item'>
                    <a href='https://github.com/PTruong9090/The-Miracle-Project' target='_blank' rel='noopener noreferrer'>
                      <span className='fa-stack fa-lg'>
                        <img className='github-icon' src='github-mark.svg' alt='GitHub' />
                      </span>
                    </a>
                  </li>
                </ul>
                <br />
                <ul>
                  <li>Developed an accessibility-focused learning platform that helps neurodivergent and disabled students access classroom materials more easily.</li>
                  <li>Integrated speech-to-text APIs and Google Gemini API to support voice navigation and hands-free interaction with assigned course content.</li>
                  <li>Built React frontend pages for class views, uploads, navigation, and resource access with backend API integration.</li>
                  <li>Designed Express.js routes and MySQL models for storing, retrieving, and organizing class materials and course resources.</li>
                  <li>Tested REST API flows for content delivery and file management while improving end-to-end accessibility and usability.</li>
                </ul>
              </div>
            </div>

          </div>
        </section>
    )
}
