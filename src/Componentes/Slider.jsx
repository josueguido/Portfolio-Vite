import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import Docker from "../assets/Tecnologias/Docker.svg"
import Kubernetes from "../assets/Tecnologias/Kubernetes.svg"
import AWS from "../assets/Tecnologias/AWS.svg"
import Terraform from "../assets/Tecnologias/HashiCorp Terraform.svg"
import Prometheus from "../assets/Tecnologias/Prometheus.svg"
import Grafana from "../assets/Tecnologias/Grafana.svg"
import GitHubActions from "../assets/Tecnologias/GitHubActions.svg"
import Git from "../assets/Tecnologias/Git.svg"
import GitHub from "../assets/Tecnologias/GitHub.svg"
import Go from "../assets/Tecnologias/Go.svg"
import ElasticSearch from "../assets/Tecnologias/Elastic Search.svg"
import Kibana from "../assets/Tecnologias/Kibana.svg"
import Logstash from "../assets/Tecnologias/Logstash.svg"
import NodeJS from "../assets/Tecnologias/NodeJS.svg"
import PostGres from "../assets/Tecnologias/PostGres.svg"
import 'swiper/css';
import '../../src/index.css'


function Slider() {
    return (
        <Swiper
            slidesPerView={8}
            spaceBetween={2}
            loop={true}
            lazy={true}
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
            className="mySwiper drop-shadow-xl py-20 px-5 pt-20 mt-10 hidden md:block" id='Skills'
        >
            <SwiperSlide>
                <img src={Docker} alt='Docker'/>
            </SwiperSlide>

            <SwiperSlide>
                <img src={Kubernetes} alt='Kubernetes'/>
            </SwiperSlide>

            <SwiperSlide>
                <img src={AWS} alt='AWS'/>
            </SwiperSlide>

            <SwiperSlide>
                <img src={Terraform} alt='Terraform'/>
            </SwiperSlide>

            <SwiperSlide>
                <img src={Prometheus} alt='Prometheus'/>
            </SwiperSlide>

            <SwiperSlide>
                <img src={Grafana} alt='Grafana'/>
            </SwiperSlide>

            <SwiperSlide>
                <img src={GitHubActions} alt='GitHub Actions'/>
            </SwiperSlide>

            <SwiperSlide>
                <img src={Git} alt='Git'/>
            </SwiperSlide>

            <SwiperSlide>
                <img src={GitHub} alt='GitHub'/>
            </SwiperSlide>

            <SwiperSlide>
                <img src={Go} alt='Go'/>
            </SwiperSlide>

            <SwiperSlide>
                <img src={ElasticSearch} alt='Elasticsearch'/>
            </SwiperSlide>

            <SwiperSlide>
                <img src={Kibana} alt='Kibana'/>
            </SwiperSlide>

            <SwiperSlide>
                <img src={Logstash} alt='Logstash'/>
            </SwiperSlide>

            <SwiperSlide>
                <img src={NodeJS} alt='NodeJS'/>
            </SwiperSlide>

            <SwiperSlide>
                <img src={PostGres} alt='PostgreSQL'/>
            </SwiperSlide>
        </Swiper>
    );
}

export default Slider;