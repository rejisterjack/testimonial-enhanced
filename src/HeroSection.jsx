import introVideo from "./assets/hero.mp4"

function HeroSection() {
  return (
    <div className="hero-bg"><div className="hero-container container mobile-view">
      <div className="hero-left">
        <p className="para-one">How To<br /> LinkedIn</p>
        <p>The ONLY LinkedIn course you will ever need.</p>
        <p>
          Build a strong personal brand and advance your career through
          LinkedIn.
        </p>
        <ul>
          <li>
            <i className="fa-regular fa-circle-check"></i>
            <p>10+ hours of content</p>
          </li>
          <li>
            <i className="fa-regular fa-circle-check"></i>
            <p>Guest sessions</p>
          </li>
          <li>
            <i className="fa-regular fa-circle-check"></i>
            <p>Live Q&A sessions</p>
          </li>
          <li>
            <i className="fa-regular fa-circle-check"></i>
            <p>Community Sessions</p>
          </li>
        </ul>
        <p>
          <i className="fa-solid fa-star"></i>
          <i className="fa-solid fa-star"></i>
          <i className="fa-solid fa-star"></i>
          <i className="fa-solid fa-star"></i>
          <i className="fa-regular fa-star-half-stroke"></i> <span>Rated 4.78/5</span>
          
        </p>
        <a href="https://webveda.graphy.com/courses/how-to-linkedIn-65191415e4b0dba9201f5305">
            <button>enrol now</button>
          </a>
        <p className="money-para">14-Day 100% Money-Back Guarantee</p>
      </div>
      <div className="hero-right">
        <video src={"https://res.cloudinary.com/dktfpedhu/video/upload/v1704918876/hero_cmxavo.mp4"} controls muted></video>
      </div>
    </div></div>
    
  )
}

export default HeroSection
