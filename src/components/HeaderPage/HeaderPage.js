import classes from './HeaderPage.module.css'
import Header from '../Header/Header'
import Hero from './Hero'
import LandingSlider from '../LandingSlider/LandingSlider'
import SupportedSocials from '../SupportedSocials/SupportedSocials'
import Scribble from '../UI/Scribble/Scribble'

const HeaderPage = (props) => {
	return <div className = {classes.header}>
		<Header />
		<Hero />
		<LandingSlider />
		<SupportedSocials />
		<div style = {{height: '120px', width: '100%'}}></div>
		<div style = {{position: 'relative'}}>
			<Scribble />
		</div>
	</div>
}

export default HeaderPage;