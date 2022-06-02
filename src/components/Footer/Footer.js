import Logo from '../UI/Logo/Logo';
import twitter from '../../assets/twittersvg.svg'
import instagram from '../../assets/instagramsvg.svg'
import tiktok from '../../assets/tiktoksvg.svg'
import googlelogo from '../../assets/googlelogo.svg'
import spotifylogo from '../../assets/spotifylogo.svg'
import youtubelogo from '../../assets/youtubelogo.svg'
import appstore from '../../assets/appstore.svg'
import googleplay from '../../assets/googleplay.svg'
import classes from './Footer.module.css';

const Footer = () => {
	return <footer className = {classes.footer}>
		<div className = {classes.footerup}>
			<div className = {classes.footerleft}>
				<div className = {classes.logowrapper}>
					<Logo />
					<p style = {{margin: '0 0 10px 20px', fontSize: '12px', fontFamily: 'MontserratAlternatesRegular'}}>©2022.</p>
				</div>
				<p style = {{fontSize: '14px'}}>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
					<div className = {classes.socials}>
						<img className = {classes.social} src = {twitter} alt = ''/>
						<img className = {classes.social} src = {instagram} alt = ''/>
						<img className = {classes.social} src = {tiktok} alt = ''/>
					</div>
			</div>
			<ul className = {classes.footermid}>
				<li className = {classes.menuitem}>About</li>
				<li className = {classes.menuitem}>Testimonials</li>
				<li className = {classes.menuitem}>Features</li>
				<li className = {classes.menuitem}>Episodes</li>
				<li className = {classes.menuitem}>Pricing</li>
				<li className = {classes.menuitem}>Blog</li>
			</ul>
			<div className = {classes.platformswrapper}>
				<div className = {classes.footrightup}>
					<p>Listen to episodes on your fav platform:</p>
					<div className = {classes.platforms}>
						<img className = {classes.platformsicon} src = {googlelogo} alt = 'google'/>
						<img className = {classes.platformsicon} src = {spotifylogo} alt = 'google'/>
						<img className = {classes.platformsicon} src = {youtubelogo} alt = 'google'/>
					</div>
				</div>
				<div className = {classes.footrightbot}>
					<p>App available on:</p>
					<div className = {classes.platforms}>
						<img className = {classes.platformsicon} src = {appstore} alt = 'appstore'/>
						<img className = {classes.platformsicon} src = {googleplay} alt = 'googleapp'/>
					</div>
				</div>
			</div>
		</div>
		<div className = {classes.footerbottom}>
			<div style = {{margin: '0 auto', width: '100%', border: '0.5px solid rgb(126, 126, 126)'}}></div>
			<p className = {classes.textfooter}>©2022. All Rights Reserved. <span style = {{fontFamily: 'MontserratAlternatesSemiBold', color: '#CD4631'}}>Pod of Cast</span></p>
		</div>
	</footer>
}

export default Footer;