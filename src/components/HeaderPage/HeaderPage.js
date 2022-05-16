import classes from './HeaderPage.module.css'
import Header from '../Header/Header'
import Hero from './Hero'
import LandingSlider from '../LandingSlider/LandingSlider'
import SupportedSocials from '../SupportedSocials/SupportedSocials'

const HeaderPage = (props) => {
	return <div className = {classes.header}>
		<Header />
		<Hero />
		<LandingSlider />
		<SupportedSocials />
	</div>
}

export default HeaderPage;