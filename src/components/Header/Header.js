import classes from './Header.module.css'
import {BiChevronDown} from 'react-icons/bi'
import Logo from '../Logo/Logo'
import Button from '../Button/Button'

const Header = (props) => {
	return <div className = {classes.header}>
			<Logo />
			<div className = {classes.menuitems}>
				<div className = {classes.menuitem}><button className = {classes.headermenubutton}>Episodes</button></div>
				<div className = {classes.menuitem}><button className = {classes.headermenubutton}>About</button></div>
				<div className = {classes.menuitem}>
					<button className = {classes.headermenubutton}>
						More
						<div className = {classes.icon}>
						<BiChevronDown />
						</div>
					</button>
				</div>
			</div>
			<div className = {classes.actions}>
				<Button className = {classes.recentepisodesbutton} variant = 'outline' withShadow>RECENT EPISODES</Button>
				<Button className = {classes.subscribebutton} variant = 'fill' >SUBSCRIBE</Button>
			</div>
	</div>
}

export default Header;