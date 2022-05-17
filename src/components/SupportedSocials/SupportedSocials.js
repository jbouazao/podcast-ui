import spotify from '../../assets/Spotifylogo.png'
import google from '../../assets/Googlepodcast.png'
import youtube from '../../assets/Youtube.png'
import classes from './SupportedSocials.module.css'

const SupportedSocials = () => {
	return <div className = {classes.maincontainer}>
		<h4 className = {classes.h4}>Supported by: </h4>
		<div className = {classes.logoscontainer}>
			<img style = {{height: '35px'}} src = {spotify} alt = 'spotify'/>
			<img src = {google} alt = 'google'/>
			<img style = {{height: '30px'}} src = {youtube} alt = 'spotify'/>
		</div>
	</div>
}

export default SupportedSocials;