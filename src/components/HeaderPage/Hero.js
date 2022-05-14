import Button from '../Button/Button';
import HeroSvg1 from '../UI/HeroSvg1/HeroSvg1';
import HeroSvg2 from '../UI/HeroSvg2/HeroSvg2';
import HeroSvg3 from '../UI/HeroSvg3/HeroSvg3';
import classes from './Hero.module.css'

const Hero = () => {
	return <div className = {classes.herocontainer}>
		<div className = {classes.heroleft}>
			<HeroSvg1 />
			<HeroSvg2 />
		</div>
		<div className = {classes.herocenter}>
			<h1 className = {classes.h1}>Your Daily <span className = {classes.podcastspan}>Podcast</span></h1>
			<p className = {classes.p}>We cover all kinds of categories and a weekly special guest.</p>
			<Button className = {classes.button} variant = 'fill' withShadow>Subscribe</Button>
		</div>
		<div className = {classes.heroright}>
			<HeroSvg3 />
		</div>
	</div>
}

export default Hero;