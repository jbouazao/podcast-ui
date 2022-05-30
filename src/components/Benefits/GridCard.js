import classes from './GridCard.module.css'

const GridCard = (props) => {
	return <div className = {classes.cardwrapper}>
		<img src = {props.data.icon} alt = '' className = {classes.icon}/>
		<h3 className = {classes.title}>{props.data.title}</h3>
		<p className = {classes.p}>{props.data.text}</p>
	</div>
}

export default GridCard