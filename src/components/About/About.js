import illustration1 from '../../assets/illustration1.svg'
import illustration2 from '../../assets/illustration2.svg'
import quotepic from '../../assets/quotesabout.svg'
import avatar from '../../assets/avatar.jpeg'
import spotifylogo from '../../assets/spotifylogo.svg'
import scribbleabout from '../../assets/scribbleabout.svg'
import starabout from '../../assets/starabout.svg'
import classes from './About.module.css'
import Scribble from '../UI/Scribble/Scribble'
import ProfileSummary from '../ProfileSummary/ProfileSummary'

const About = () => {
	return <div className = {classes.aboutcontainer}>
		<div style = {{width: '100%', height: '140px'}}></div>
		<h4 className = {classes.title}>Talk. Listen. Get inspired by every minute of it.</h4>
		<div className = {classes.illustrations}>
			<div className = {classes.illustrationitem}>
				<img className = {classes.image} src = {illustration1} alt = 'illustration1'/>
				<p className = {classes.text}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur ac ultrices odio.</p>
			</div>
			<div className = {classes.illustrationitem}>
				<img className = {classes.image} src = {illustration2} alt = 'illustration2'/>
				<p className = {classes.text}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur ac ultrices odio.</p>
			</div>
		</div>
		<div className = {classes.feedback}>
			<img className = {classes.scribble} src = {scribbleabout} alt = 'scribble'/>
			<img className = {classes.starabout} src = {starabout} alt = 'scribble'/>
			<img src = {quotepic} alt = 'quote'/>
			<p className = {classes.feedbacktext}>One of the best daily podcasts that covers every topic on Spotify.</p>
			<ProfileSummary name = 'John Smith' avatar = {avatar} logo = {spotifylogo} role = 'Social Community Manager'/>
		</div>
		<div style = {{height: '120px', width: '100%'}}></div>
		<div style = {{position: 'relative'}}>
			<Scribble />
		</div>
	</div>
}

export default About;