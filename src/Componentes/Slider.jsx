import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import HTML from "../assets/Tecnologias/HTML.svg"
import CSS from "../assets/Tecnologias/CSS.svg"
import JavaScript from "../assets/Tecnologias/JavaScript.svg"
import NPM from "../assets/Tecnologias/NPM.svg"
import Git from "../assets/Tecnologias/Git.svg"
import GitHub from "../assets/Tecnologias/GitHub.svg"
import React from "../assets/Tecnologias/React.svg"
import PostGres from "../assets/Tecnologias/PostGres.svg"
import NodeJS from "../assets/Tecnologias/NodeJS.svg"
import Express from "../assets/Tecnologias/Express.svg"
import Astro from "../assets/Tecnologias/Astro.svg"
import Vite from "../assets/Tecnologias/Vite.svg"
import Next from "../assets/Tecnologias/Next.svg"
import Tailwind from "../assets/Tecnologias/Tailwind.svg"
import Jest from "../assets/Tecnologias/Jest.svg"
import GitHubActions from "../assets/Tecnologias/GitHubActions.svg"
import Vitest from "../assets/Tecnologias/Vitest.svg"
import Testing from "../assets/Tecnologias/Testing-library.svg"


import 'swiper/css';
import '../../src/index.css'


function Slider() {
    return (
        <Swiper
            slidesPerView={8}
            spaceBetween={2}
            loop={true}
            effect={'coverflow'}
            pagination={{
                clickable: true,
            }}
            centeredSlides={true}
            autoplay={{
                delay: 2500,
                disableOnInteraction: false,
                zoom: false,
            }}
            navigation={true}
            modules={[Autoplay, Pagination, Navigation]}
            breakpoints={{
                440: {
                    slidesPerView: 3,
                    spaceBetween: 20,
                },
                768: {
                    slidesPerView: 2,
                    spaceBetween: 40,
                },
                1024: {
                    slidesPerView: 6,
                    spaceBetween: 50,
                },
            }}
            className="mySwiper drop-shadow-xl py-20 px-5 pt-20 mt-10 " id='Skills'
        >
            <SwiperSlide> 
                <img src={HTML} />
            </SwiperSlide>

            <SwiperSlide>
                <img src={CSS} />
            </SwiperSlide>

            <SwiperSlide>
                <img src={JavaScript} />
            </SwiperSlide>

            <SwiperSlide>
                <img src={Git} />
            </SwiperSlide>

            <SwiperSlide>
                <img src={GitHub} />
            </SwiperSlide>

            <SwiperSlide>
                <img src={NPM} />
            </SwiperSlide>

            <SwiperSlide>
                <img src={React} />
            </SwiperSlide>

            <SwiperSlide>
                <img src={PostGres} />
            </SwiperSlide>

            <SwiperSlide>
                <img src={NodeJS} />
            </SwiperSlide>

            <SwiperSlide>
                <img src={Express} />
            </SwiperSlide>

            <SwiperSlide>
                <img src={Tailwind} />
            </SwiperSlide>

            <SwiperSlide>
                <img src={Astro} />
            </SwiperSlide>

            <SwiperSlide>
                <img src={Vite} />
            </SwiperSlide>

            <SwiperSlide>
                <img src={Next} />
            </SwiperSlide>

            <SwiperSlide>
                <img src={GitHubActions} />
            </SwiperSlide>

            <SwiperSlide>
                <img src={Jest} />
            </SwiperSlide>

            <SwiperSlide>
                <img src={Vitest} />
            </SwiperSlide>

            <SwiperSlide>
                <img src={Testing} />
            </SwiperSlide>
        </Swiper>
    );
}

export default Slider;