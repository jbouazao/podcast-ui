import classes from './HeaderPage.module.css'
import Header from '../Header/Header'

const HeaderPage = (props) => {
	return <div className = {classes.header}>
		<Header />
	</div>
}

export default HeaderPage;