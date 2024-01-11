import { Swiper, SwiperSlide } from "swiper/react"
import "swiper/css"
import "swiper/css/pagination"
import "swiper/css/navigation"
import { Pagination, Navigation, Autoplay } from "swiper/modules"
import Testimonial from "./Testimonial"

export default function Testimonials() {
  const slideData = [
    {
      desc: "Great LinkedIn course by Ankur Warikoo! The content is insightful and well-structured. Ankur's teaching style is engaging, making the learning experience enjoyable.",
      name: "John Smith",
      info: "CEO - XYZ Corporation",
      imgurl:"https://res.cloudinary.com/dktfpedhu/image/upload/v1704995345/user_three_sikbfw.jpg"
    },
    {
      desc: "Ankur Warikoo's LinkedIn course exceeded my expectations. The practical tips and strategies shared were incredibly valuable. Highly recommend!",
      name: "Alice Johnson",
      info: "Co-founder - ABC Solutions",imgurl:"https://res.cloudinary.com/dktfpedhu/image/upload/v1704995326/user_two_pfhpwb.jpg"
    },
    {
      desc: "I thoroughly enjoyed Ankur Warikoo's LinkedIn course. His expertise shines through, and the course provides actionable insights for professionals at all levels.",
      name: "David Miller",
      info: "Director - Tech Innovations",imgurl:"https://res.cloudinary.com/dktfpedhu/image/upload/v1704995324/user_five_bgoftb.jpg"
    },
    {
      desc: "Great LinkedIn course by Ankur Warikoo! The content is insightful and well-structured. Ankur's teaching style is engaging, making the learning experience enjoyable.",
      name: "John Smith",
      info: "CEO - XYZ Corporation",imgurl:"https://res.cloudinary.com/dktfpedhu/image/upload/v1704995315/user_four_whswzz.jpg"
    },
    {
      desc: "Ankur Warikoo's LinkedIn course exceeded my expectations. The practical tips and strategies shared were incredibly valuable. Highly recommend!",
      name: "Alice Johnson",
      info: "Co-founder - ABC Solutions",imgurl:"https://res.cloudinary.com/dktfpedhu/image/upload/v1704995304/user_seven_bvafqe.jpg"
    },
    {
      desc: "I thoroughly enjoyed Ankur Warikoo's LinkedIn course. His expertise shines through, and the course provides actionable insights for professionals at all levels.",
      name: "David Miller",
      info: "Director - Tech Innovations",imgurl:"https://res.cloudinary.com/dktfpedhu/image/upload/v1704995303/user_six_qflmy7.jpg"
    },
  ]

  return (
    <>
      <div className="container">
        <Swiper
          slidesPerView={3}
          spaceBetween={30}
          pagination={{
            clickable: true,
          }}
          modules={[Pagination, Navigation, Autoplay]}
          className="mySwiper"
          autoplay={{
            delay: 3000,
            disableOnInteraction: false,
          }}
        >
          {slideData.map((slide, index) => (
            <SwiperSlide key={index}>
              <Testimonial
                desc={slide.desc}
                name={slide.name}
                info={slide.info}
                imgurl={slide.imgurl}
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </>
  )
}
