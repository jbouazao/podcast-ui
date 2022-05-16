import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import classes from './LandingSlider.module.css'
import image1 from '../../assets/slidersection1/image1.png'
import image2 from '../../assets/slidersection1/image2.png'
import image3 from '../../assets/slidersection1/image3.png'
import image4 from '../../assets/slidersection1/image4.png'
import image5 from '../../assets/slidersection1/image5.png'
import image6 from '../../assets/slidersection1/image6.png'

const LandingSlider = () => {
	return <div className = {classes.slidercontainer}>
		<Swiper
			slidesPerView = {4}
			spaceBetween = {-160}
			slidesOffsetBefore = {-170}
			loop
			>
			<SwiperSlide style = {{width: '340px'}}>
				<img style = {{width: '340px', height: '340px'}} src = {image1} alt = ''/>
			</SwiperSlide>
			<SwiperSlide style = {{width: '340px'}}>
				<img style = {{width: '340px', height: '340px'}} src = {image2} alt = ''/>
			</SwiperSlide>
			<SwiperSlide style = {{width: '340px'}}>
				<img style = {{width: '340px', height: '340px'}} src = {image3} alt = ''/>
			</SwiperSlide>
			<SwiperSlide style = {{width: '340px'}}>
				<img style = {{width: '340px', height: '340px'}} src = {image4} alt = ''/>
			</SwiperSlide>
			<SwiperSlide style = {{width: '340px'}}>
				<img style = {{width: '340px', height: '340px'}} src = {image5} alt = ''/>
			</SwiperSlide>
			<SwiperSlide style = {{width: '340px'}}>
				<img style = {{width: '340px', height: '340px'}} src = {image6} alt = ''/>
			</SwiperSlide>
		</Swiper>
	</div>
}

export default LandingSlider;