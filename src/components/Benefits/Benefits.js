import classes from './Benefits.module.css'
import vectortitle from '../../assets/vectorbenefits.svg'
import GridCard from './GridCard'
import svg1 from '../../assets/gridsvg1.svg';
import svg2 from '../../assets/gridsvg2.svg';
import svg3 from '../../assets/gridsvg3.svg';
import svg4 from '../../assets/gridsvg4.svg';
import svg5 from '../../assets/gridsvg5.svg';
import svg6 from '../../assets/gridsvg6.svg';
import Button from '../UI/Button/Button';

const DUMMY_DATA = [
	{
		id: '1',
		icon: svg1,
		title: 'Topic by Request',
		text: 'Lorem ipsum dolor sit amet consectet piscing elit, sed do eiusmod tempor.'
	},
	{
		id: '2',
		icon: svg2,
		title: 'Exclusive Content',
		text: 'Lorem ipsum dolor sit amet consectet piscing elit, sed do eiusmod tempor.'
	},
	{
		id: '3',
		icon: svg3,
		title: 'Join the Community',
		text: 'Lorem ipsum dolor sit amet consectet piscing elit, sed do eiusmod tempor.'
	},
	{
		id: '4',
		icon: svg4,
		title: 'Livestreaming Access',
		text: 'Lorem ipsum dolor sit amet consectet piscing elit, sed do eiusmod tempor.'
	},
	{
		id: '5',
		icon: svg5,
		title: 'Exclusive Episodes & Merch',
		text: 'Lorem ipsum dolor sit amet consectet piscing elit, sed do eiusmod tempor.'
	},
	{
		id: '6',
		icon: svg6,
		title: 'And much more!',
		text: 'Lorem ipsum dolor sit amet consectet piscing elit, sed do eiusmod tempor.'
	},
]

const Benefits = () => {
	return <div className = {classes.main}>
		<div style = {{width: '100%', height: '180px'}}></div>
		<div style = {{position: 'relative'}}>
			<img src = {vectortitle} className = {classes.svg} alt = ''/>
			<h4 className = {classes.title}>Membership benefits</h4>
			<h5 className = {classes.h5}>Become our sponsor and get all benefits</h5>
		</div>
		<div className = {classes.grid}>
			{DUMMY_DATA.map(item => <GridCard data = {item}/>)}
		</div>
		<div style = {{display: 'flex', justifyContent: 'center', height: '150px'}}>
			<Button className = {classes.button} variant = 'fill' withShadow>See pricing</Button>
		</div>
	</div>
}

export default Benefits;