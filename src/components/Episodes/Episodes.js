import classes from './Episodes.module.css'
import svgepisodes from '../../assets/svgepisodes.svg'
import EpisodeCard from './EpisodeCard'
import avatar1 from '../../assets/avatar1.jpeg'
import avatar2 from '../../assets/avatar2.jpeg'
import avatar3 from '../../assets/avatar3.jpeg'
import avatar4 from '../../assets/avatar4.jpeg'
import ep1pic from '../../assets/slidersection1/image1.png'
import ep2pic from '../../assets/slidersection1/image2.png'
import ep3pic from '../../assets/slidersection1/image3.png'
import ep4pic from '../../assets/slidersection1/image4.png'
import ep5pic from '../../assets/slidersection1/image5.png'
import ep6pic from '../../assets/slidersection1/image6.png'

const DUMMY_EPS = [
	{
		id: '1',
		ep: '1',
		title: 'Pandemic Becoming Endemic',
		desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur ac ultrices odio.',
		tags: [
			'covid-19',
			'health'
		],
		hostedby: [
			avatar1,
			avatar2,
		],
		pic: ep1pic
	},
	{
		id: '2',
		ep: '2',
		title: 'Type of Social Classes of People',
		desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur ac ultrices odio.',
		tags: [
			'social-class',
			'wealth'
		],
		hostedby: [
			avatar1,
			avatar2,
			avatar3,
		],
		pic: ep2pic
	},
	{
		id: '3',
		ep: '3',
		title: 'How to Deal with Self–Confidence',
		desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur ac ultrices odio.',
		tags: [
			'self-esteem',
			'health'
		],
		hostedby: [
			avatar1,
			avatar2,
		],
		pic: ep3pic
	},
	{
		id: '4',
		ep: '4',
		title: 'Women\'s Rights? Is it alright?',
		desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur ac ultrices odio.',
		tags: [
			'Women\'s right',
		],
		hostedby: [
			avatar3,
			avatar4,
		],
		pic: ep4pic
	},
	{
		id: '5',
		ep: '5',
		title: 'Tesla Autopilot Controversy',
		desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur ac ultrices odio.',
		tags: [
			'automation',
			'tech'
		],
		hostedby: [
			avatar2,
			avatar4,
		],
		pic: ep5pic
	},
	{
		id: '6',
		ep: '6',
		title: 'Are you a Perplexed Mind Person?',
		desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur ac ultrices odio.',
		tags: [
			'mind-behavior',
			'health'
		],
		hostedby: [
			avatar1,
			avatar4,
		],
		pic: ep6pic
	},
]

const Episodes = () => {
	return <div className = {classes.main}>
		<div style = {{width: '100%', height: '180px'}}></div>
		<div style = {{position: 'relative'}}>
			<img src = {svgepisodes} className = {classes.svg} alt = ''/>
			<h4 className = {classes.title}>Recent episodes</h4>
			<h5 className = {classes.h5}>Become our sponsor and get all benefits</h5>
		</div>
		<div style = {{width: '100%', height: '70px'}}></div>
		<div className = {classes.cards}>
			{DUMMY_EPS.map(ep => <EpisodeCard data = {ep}/>)}
		</div>
		<div style = {{width: '100%', height: '70px'}}></div>
		</div>
}

export default Episodes;