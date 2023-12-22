import { motion } from 'framer-motion'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { EffectCoverflow, Pagination } from "swiper";

const Experience = () => {
  return (
    <motion.div 
    initial={{ opacity: 0 }}
    whileInView={{ opacity: 1 }}
    transition={{ duration: 1.5 }}
    className="flex flex-col relative h-screen text-center md:text-left 
    md:flex-row max-w-7xl px-10 justify-evenly mx-auto items-center">
        <h3 className="absolute top-24 uppercase tracking-[20px] text-gray-500 
        text-2xl">
            Experience
        </h3>

        <Swiper
        effect={"coverflow"}
        grabCursor={true}
        centeredSlides={true}
        coverflowEffect={{
          rotate: 50,
          stretch: 0,
          depth: 160,
          modifier: 1,
          slideShadows: true,
        }}
        breakpoints={{
            1000: {
                slidesPerView: 1,
            },
            1300: {
                slidesPerView: 3,
            }
        }}
        pagination={true}
        modules={[EffectCoverflow, Pagination]}
        className="mySwiper p-[100px]"
        >
            <SwiperSlide>
                <article className="bg-white">
                    <div>
                        <h4 className="text-black font-bold text-3xl font-light p-2">Software Engineering Intern at ACT Games</h4>
                        <h5 className="text-black text-1xl mt-1 p-2">Jun 2021 - Aug 2021</h5>
                        <p className="text-black p-2 text-xs">
                        • Collaborated with interns to architect and implement an innovative PERN stack-based in-game item marketplace web application; facilitated over 50,000 transactions, resulting $20k in additional revenue.
• Revamped and deployed a robust CORS authentication solution for the web server, bolstering security measures and ensuring impregnable data transfer across different domains, preventing potential security breaches.
• Increased the development speed by introducing an Agile methodology, fostering a culture of iterative development and continuous improvement.
                        </p>
                    </div>
                </article>
            </SwiperSlide>
            <SwiperSlide>
                <article className="bg-white">
                    <div>
                        <h4 className="text-black font-bold text-3xl font-light p-2">future internships</h4>
                        <h5 className="text-black text-1xl mt-1 p-2"></h5>
                        <p className="text-black p-2 text-xs">
                        </p>
                    </div>
                </article>
            </SwiperSlide>
            <SwiperSlide>
                <article className="bg-white">

                    <div>
                        <h4 className="text-black font-bold text-3xl font-light p-2"></h4>
                        <h5 className="text-black text-1xl mt-1 p-2"></h5>
                        <p className="text-black p-2 text-xs">
                        </p>
                    </div>
                </article>
            </SwiperSlide>
        </Swiper>
    </motion.div>
  )
}

export default Experience