import classes from './HeaderPage.module.css'
import Header from '../Header/Header'
import Hero from './Hero'

const HeaderPage = (props) => {
	return <div className = {classes.header}>
		<Header />
		<Hero />
	</div>
}

export default HeaderPage;