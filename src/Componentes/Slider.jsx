import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import JavaScript from "../assets/Tecnologias/JavaScript.svg";
import NPM from "../assets/Tecnologias/NPM.svg";
import Git from "../assets/Tecnologias/Git.svg";
import GitHub from "../assets/Tecnologias/GitHub.svg";
import React from "../assets/Tecnologias/React.svg";
import PostGres from "../assets/Tecnologias/PostGres.svg";
import NodeJS from "../assets/Tecnologias/NodeJS.svg";
import Express from "../assets/Tecnologias/Express.svg";
import GitHubActions from "../assets/Tecnologias/GitHubActions.svg";
import Docker from "../assets/Tecnologias/Docker.svg";
import Terraform from "../assets/Tecnologias/Terraform.svg";
import Kubernetes from "../assets/Tecnologias/Kubernetes.svg";
import Grafana from "../assets/Tecnologias/Grafana.svg";
import Prometheus from "../assets/Tecnologias/Prometheus.svg";
import Kibana from "../assets/Tecnologias/Kibana.svg";
import Logstash from "../assets/Tecnologias/Logstash.svg";
import ElasticSearch from "../assets/Tecnologias/Elasticsearch.svg";
import Go from "../assets/Tecnologias/Go.svg";
import CSharp from "../assets/Tecnologias/CSharp.svg";
import "swiper/css";
import "../../src/index.css";

function Slider() {
	return (
		<Swiper
			slidesPerView={8}
			spaceBetween={2}
			loop={true}
			lazy={true}
			effect={"coverflow"}
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
			className="mySwiper drop-shadow-xl py-20 px-5 pt-20 mt-10 hidden md:block"
			id="Skills"
		>
			<SwiperSlide>
				<img src={Docker} alt="Docker" className="w-56 h-56"/>
			</SwiperSlide>

			<SwiperSlide>
				<img src={Terraform} alt="Terraform" className="w-56 h-56"/>
			</SwiperSlide>

			<SwiperSlide>
				<img src={Kubernetes} alt="Kubernetes" className="w-56 h-56"/>
			</SwiperSlide>

			<SwiperSlide>
				<img src={Grafana} alt="Grafana" className="w-56 h-56"/>
			</SwiperSlide>

			<SwiperSlide>
				<img src={Prometheus} alt="Prometheus" className="w-56 h-56"/>
			</SwiperSlide>

			<SwiperSlide>
				<img src={ElasticSearch} alt="ElasticSearch" className="w-56 h-56"/>
			</SwiperSlide>

			<SwiperSlide>
				<img src={Logstash} alt="Logstash" className="w-56 h-56" />
			</SwiperSlide>

			<SwiperSlide>
				<img src={Kibana} alt="Kibana" className="w-56 h-56"/>
			</SwiperSlide>

			<SwiperSlide>
				<img src={Git} alt="Git" className="w-56 h-56"/>
			</SwiperSlide>

			<SwiperSlide>
				<img src={GitHub} alt="GitHub" className="w-56 h-56"/>
			</SwiperSlide>

			<SwiperSlide>
				<img src={GitHubActions} alt="GitHubActions" className="w-56 h-56"  />
			</SwiperSlide>

			<SwiperSlide>
				<img src={NPM} alt="NPM" className="w-56 h-56"/>
			</SwiperSlide>

			<SwiperSlide>
				<img src={Go} alt="Go" className="w-56 h-56"/>
			</SwiperSlide>

			<SwiperSlide>
				<img src={CSharp} alt="CSharp" className="w-56 h-56"/>
			</SwiperSlide>

			<SwiperSlide>
				<img src={JavaScript} alt="JavaScript" className="w-56 h-56"/>
			</SwiperSlide>

			<SwiperSlide>
				<img src={React} alt="React" className="w-56 h-56"/>
			</SwiperSlide>

			<SwiperSlide>
				<img src={PostGres} alt="PostGres" className="w-56 h-56"/>
			</SwiperSlide>

			<SwiperSlide>
				<img src={NodeJS} alt="NodeJS" className="w-56 h-56"/>
			</SwiperSlide>

			<SwiperSlide>
				<img src={Express} alt="Express" className="w-56 h-56"/>
			</SwiperSlide>
		</Swiper>
	);
}

export default Slider;
