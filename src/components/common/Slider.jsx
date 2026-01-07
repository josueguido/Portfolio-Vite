import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import JavaScript from "../../assets/Tecnologias/JavaScript.svg";
import NPM from "../../assets/Tecnologias/NPM.svg";
import Git from "../../assets/Tecnologias/Git.svg";
import GitHub from "../../assets/Tecnologias/GitHub.svg";
import React from "../../assets/Tecnologias/React.svg";
import PostGres from "../../assets/Tecnologias/PostGres.svg";
import NodeJS from "../../assets/Tecnologias/NodeJS.svg";
import Express from "../../assets/Tecnologias/Express.svg";
import GitHubActions from "../../assets/Tecnologias/GitHubActions.svg";
import Docker from "../../assets/Tecnologias/Docker.svg";
import Terraform from "../../assets/Tecnologias/Terraform.svg";
import Kubernetes from "../../assets/Tecnologias/Kubernetes.svg";
import Grafana from "../../assets/Tecnologias/Grafana.svg";
import Prometheus from "../../assets/Tecnologias/Prometheus.svg";
import Kibana from "../../assets/Tecnologias/Kibana.svg";
import Logstash from "../../assets/Tecnologias/Logstash.svg";
import ElasticSearch from "../../assets/Tecnologias/Elasticsearch.svg";
import Go from "../../assets/Tecnologias/Go.svg";
import CSharp from "../../assets/Tecnologias/CSharp.svg";
import TechSlide from "./TechSlide";
import "swiper/css";
import "../../index.css";

function Slider() {
	return (
		<Swiper
			slidesPerView={8}
			spaceBetween={2}
			loop={true}
			effect={"coverflow"}
			pagination={{
				clickable: true,
			}}
			centeredSlides={true}
			autoplay={{
				delay: 2000,
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
				<TechSlide src={Docker} alt="Docker" label="Docker" />
			</SwiperSlide>

			<SwiperSlide>
				<TechSlide src={Terraform} alt="Terraform" label="Terraform" />
			</SwiperSlide>

			<SwiperSlide>
				<TechSlide src={Kubernetes} alt="Kubernetes" label="Kubernetes" />
			</SwiperSlide>

			<SwiperSlide>
				<TechSlide src={Grafana} alt="Grafana" label="Grafana" />
			</SwiperSlide>

			<SwiperSlide>
				<TechSlide src={Prometheus} alt="Prometheus" label="Prometheus" />
			</SwiperSlide>

			<SwiperSlide>
				<TechSlide src={ElasticSearch} alt="ElasticSearch" label="ElasticSearch" />
			</SwiperSlide>

			<SwiperSlide>
				<TechSlide src={Logstash} alt="Logstash" label="Logstash" />
			</SwiperSlide>

			<SwiperSlide>
				<TechSlide src={Kibana} alt="Kibana" label="Kibana" />
			</SwiperSlide>

			<SwiperSlide>
				<TechSlide src={Git} alt="Git" label="Git" />
			</SwiperSlide>

			<SwiperSlide>
				<TechSlide src={GitHub} alt="GitHub" label="GitHub" />
			</SwiperSlide>

			<SwiperSlide>
				<TechSlide src={GitHubActions} alt="GitHubActions" label="GitHub Actions" />
			</SwiperSlide>

			<SwiperSlide>
				<TechSlide src={NPM} alt="NPM" label="NPM" />
			</SwiperSlide>

			<SwiperSlide>
				<TechSlide src={Go} alt="Go" label="Go" />
			</SwiperSlide>

			<SwiperSlide>
				<TechSlide src={CSharp} alt="CSharp" label="CSharp" />
			</SwiperSlide>

			<SwiperSlide>
				<TechSlide src={JavaScript} alt="JavaScript" label="JavaScript" />
			</SwiperSlide>

			<SwiperSlide>
				<TechSlide src={React} alt="React" label="React" />
			</SwiperSlide>

			<SwiperSlide>
				<TechSlide src={PostGres} alt="PostGres" label="PostgreSQL" />
			</SwiperSlide>

			<SwiperSlide>
				<TechSlide src={NodeJS} alt="NodeJS" label="Node.js" />
			</SwiperSlide>

			<SwiperSlide>
				<TechSlide src={Express} alt="Express" label="Express" />
			</SwiperSlide>
		</Swiper>
	);
}

export default Slider;
