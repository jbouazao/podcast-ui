import classes from './HeroSvg3.module.css'
import svg3 from '../../../assets/herosvg3.png'
import svg4 from '../../../assets/herosvg4.png'
import svg5 from '../../../assets/herosvg5.png'

const HeroSvg3 = () => {
	return <div className = {classes.container}>
		<img style = {{position: 'absolute', top: '140px', left: '250px'}} src = {svg3} alt = ''/>
		<img style = {{position: 'absolute', top: '270px', left: '350px'}} src = {svg4} alt = ''/>
		<img style = {{position: 'absolute', top: '310px', left: '250px'}} src = {svg5} alt = ''/>
	</div>
}

export default HeroSvg3;