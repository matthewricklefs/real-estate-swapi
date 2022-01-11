import { Swiper } from "swiper/react";
import { Pagination } from "swiper";
import "./Carousel.scss";

const Carousel = ({ children, slides }) => {
	return (
		<Swiper
			modules={[Pagination]}
			spaceBetween={50}
			sliderPerView={slides}
			pagination={{ clickable: true }}
		>
			{children}
			{/* Margin */}
			<div style={{ marginTop: "70px" }}></div>
		</Swiper>
	);
};

export default Carousel;
