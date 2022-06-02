import Button from '../UI/Button/Button';
import classes from './Package.module.css'

const Package = ({pack, idx}) => {
	return <div className = {classes.main} style = {idx === 1 ? {background: '#F8EDE8'}: null}>
		{idx === 1 ? <div className = {classes.titlewrapper}>
			<h2 className = {classes.title}>{pack.title}</h2>
			<strong className = {classes.popular}>Most Popular</strong>
		</div> :
			<h2 className = {classes.title}>{pack.title}</h2> }
		<p>{pack.desc}</p>
		<div className = {classes.buttonpricewrapper}>
			<Button variant = "fill" withShadow className = {classes.button}>SUBSCRIBE</Button>
			<div className = {classes.pricewrapper}>
				<strong style = {{fontSize: '20px', color: '#CD4631', fontFamily: 'MontserratAlternatesBold'}}>${pack.price}</strong>
				<span style = {{fontSize: '12px', fontFamily: 'MontserratAlternatesBold'}}>/{pack.period}</span>
			</div>
		</div>
		<div style = {{border: '0.5px solid #dbdbdb', margin: '20px'}}></div>
		<div className = {classes.content}>
			<strong style = {{fontFamily: 'MontserratAlternatesBold'}}>What's included:</strong>
			<ul className = {classes.contentlist}>
				{pack.included.map(item => <li>{item}</li>)}
			</ul>
		</div>
	</div>
}

export default Package;