import quotes from '../../assets/quotesabout.svg'
import ProfileSummary from '../ProfileSummary/ProfileSummary';
import classes from './SliderCard.module.css'

const SliderCard = (props) => {
	return <div className = {classes.main}>
		<img className = {classes.svg} src = {quotes} alt = 'quotes'/>
		<p className = {classes.text}>Lorem ipsum dolor sit amet consectet piscing elit, sed do eiusmod tempor incidi ut labore et dolore magna aliqua. </p>
		<ProfileSummary name = {props.profile.name} avatar = {props.profile.avatar} logo = {props.profile.logo} role = {props.profile.role}/>
	</div>
}

export default SliderCard;