function Testimonial({ desc, name, info, imgurl }) {
  return (
    <div className="testimonial-container">
      <div className="test-desc">
        <i className="fa-solid fa-quote-left q-top"></i>
        <i className="fa-solid fa-quote-right q-bot"></i>
        <p className="desc-para">{desc}</p>
      </div>
      <div className="user-info">
        <div className="user-img">
          <img src={imgurl} alt="" />
        </div>

        <div className="user-desc">
          <p>{name}</p>
          <p>{info}</p>
        </div>
      </div>
    </div>
  )
}

export default Testimonial
