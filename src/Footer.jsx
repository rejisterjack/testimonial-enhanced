import ankur from "./assets/ankur.jpg"

function Footer() {
  return (
    <div className="footer-bg">
      <div className="footer-component container mobile-view">
        <div className="footer-left">
          <p className="para-one">How To LinkedIn</p>
          <p className="para-two">Understand the secrets of LinkedIn growth.</p>
          <a href="https://webveda.graphy.com/courses/how-to-linkedIn-65191415e4b0dba9201f5305">
            <button>enrol now</button>
          </a>
        </div>
        <div className="footer-right">
          <img src={ankur} alt="" className="footer-right-image" />
        </div>
      </div>
    </div>
  )
}

export default Footer
