import classes from './Sponsor.module.css'
import svgsponsor from '../../assets/sparklesponsortitle.svg'
import Packages from './Packages';

const Sponsor = () => {
	return <div className = {classes.main}>
		<div style = {{width: '100%', height: '180px'}}></div>
		<div style = {{position: 'relative'}}>
			<img src = {svgsponsor} className = {classes.svg} alt = ''/>
			<h4 className = {classes.title}>Become our sponsor</h4>
			<h5 className = {classes.h5}>Get exclusive episodes, merch and more</h5>
		</div>
		<Packages />
		<div style = {{width: '100%', height: '120px'}}></div>
	</div>
}

export default Sponsor;