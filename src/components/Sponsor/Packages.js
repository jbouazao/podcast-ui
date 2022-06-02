import classes from './Packages.module.css';
import Package from './Package';

const DUMMY_PACKAGES = [
	{
		id: '1',
		title: 'Member',
		desc: 'Lorem ipsum dolor sit amet consectet cing elit, sed do eiusmod tempor.',
		price: '9.99',
		period: 'month',
		included: [
			'• Exclusive Content',
			'• 5% Discount on Merch',
			'• Join the Community',
			'• Livestreaming Access'
		]
	},
	{
		id: '2',
		title: 'Family',
		desc: 'Lorem ipsum dolor sit amet consectet cing elit, sed do eiusmod tempor.',
		price: '14.99',
		period: 'month',
		included: [
			'• Everything in Tier 1',
			'• Free tickets to Events',
			'• Limited Edition Merch',
			'• Promote your Product',
			'• Request Topic'
		]
	},
	{
		id: '3',
		title: 'Official',
		desc: 'Lorem ipsum dolor sit amet consectet cing elit, sed do eiusmod tempor.',
		price: '29.99',
		period: 'month',
		included: [
			'• Everything in Tier 2',
			'• Exclusive Badge on Livestreaming',
			'• Become an Official Sponsor',
			'• Early Access to All Episodes',
			'• Free Stikers and Merch'
		]
	},
]

const Packages = () => {
	return <div className = {classes.main}>
		{DUMMY_PACKAGES.map((pack, index) => <Package key = {pack.id} idx = {index} pack = {pack}/>)}
	</div>
}

export default Packages;