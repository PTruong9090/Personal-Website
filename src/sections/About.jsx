export default function About() {
    return (
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
                      <img className="github-icon" src='github-mark.svg' loading="lazy"></img>
                    </a>
                    <a href="https://www.linkedin.com/in/ptruong9090/" target='_blank'>
                      <img className="github-icon" src='linkedin.svg' loading="lazy"></img>
                    </a>
                    <a href="https://www.instagram.com/_phuc_tr_/" target='_blank'>
                      <img className="github-icon" src='instagram.svg' loading="lazy"></img>
                    </a>
                  </li>
                </ul>
          </div>
        </section>
    )
}