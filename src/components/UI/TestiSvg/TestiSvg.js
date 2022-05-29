import classes from './TestiSvg.module.css'
import sparkle from '../../../assets/sparkle.svg'

const TestiSvg = () => {
	return <div className = {classes.sparkle}>
		<img className = {classes.svg} src = {sparkle} alt = ''/>
	</div>
}

export default TestiSvg;