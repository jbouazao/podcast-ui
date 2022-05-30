import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import TestiSvg from '../UI/TestiSvg/TestiSvg';
import SliderCard from './SliderCard';
import classes from './SliderExperiences.module.css'
import avatar1 from '../../assets/avatar1.jpeg'
import avatar2 from '../../assets/avatar2.jpeg'
import avatar3 from '../../assets/avatar3.jpeg'
import avatar4 from '../../assets/avatar4.jpeg'
import avatar5 from '../../assets/avatar5.jpeg'
import spotifylogo from '../../assets/spotifylogo.svg'
import googlelogo from '../../assets/googlelogo.svg'
import youtubelogo from '../../assets/youtubelogo.svg'
import {IoIosArrowDropleft, IoIosArrowDropright} from 'react-icons/io'
import { useRef } from 'react';
import Scribble from '../UI/Scribble/Scribble';

const DUMMY_PROFILES = [
	{
		id: '1',
		name: 'Luna Lovegood',
		avatar: avatar1,
		logo: spotifylogo,
		role: 'Spotify'
	},
	{
		id: '2',
		name: 'Emily Blunt',
		avatar: avatar2,
		logo: googlelogo,
		role: 'Google Podcast'
	},
	{
		id: '3',
		name: 'Amber Heard',
		avatar: avatar3,
		logo: youtubelogo,
		role: 'Youtube'
	},
	{
		id: '4',
		name: 'Luna Lovegood',
		avatar: avatar4,
		logo: spotifylogo,
		role: 'Spotify'
	},
	{
		id: '5',
		name: 'Joe Rogan',
		avatar: avatar5,
		logo: googlelogo,
		role: 'Google'
	},
]

const SliderExperiences = () => {
	const sliderRef = useRef();
	
	return <div className = {classes.main}>
		<div style = {{width: '100%', height: '180px'}}></div>
		<h4 className = {classes.title}>
			<TestiSvg />
			What our listeners say</h4>
		<h5 className = {classes.h5}>Their experience throughout every platform</h5>
		<div style = {{width: '100%', height: '120px'}}></div>
		<div className = {classes.sliderwrapper}>
			<div className = {classes.slider}>
				<Swiper
				ref = {sliderRef}
				slidesPerView = {2}
				spaceBetween = {-250}
				// slidesOffsetBefore = {-170}
				loop>
				{DUMMY_PROFILES.map(item => <SwiperSlide key = {item.id}>
						<SliderCard profile = {item}/>
					</SwiperSlide>
				)}
				</Swiper>
			</div>
			<div className = {classes.buttonswrapper}>
			<div className = {classes.sliderbutton} onClick = {() => sliderRef.current.swiper.slidePrev()}>
				<IoIosArrowDropleft style = {{width: '40px', height: '40px'}}/>
			</div>
			<div className = {classes.sliderbutton} onClick = {() => sliderRef.current.swiper.slideNext()}>
				<IoIosArrowDropright style = {{width: '40px', height: '40px', color: '#CD4631'}}/>
			</div>
			</div>
		</div>
		<div style = {{width: '100%', height: '120px'}}></div>
		<div style = {{position: 'relative'}}>
			<Scribble color = 'black'/>
		</div>
	</div>
}

export default SliderExperiences;