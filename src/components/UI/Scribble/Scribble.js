import classes from './Scribble.module.css'

const Scribble = (props) => {
	return <div style = {{position: 'relative'}}>
		<div className = {classes.scribble}>
		{props.color === 'orange' ? <svg width="150" height="154" viewBox="0 0 150 154" fill="none" xmlns="http://www.w3.org/2000/svg">
			<path d="M54 2C54.0002 120.75 82.6905 85.7939 86.822 77.8929C122.305 10.0357 42.4671 47.5357 56.6612 152" stroke="#CD4631" stroke-width="2.5" stroke-linecap="round"/>
		</svg> :
		<svg width="150" height="152" viewBox="0 0 150 152" fill="none" xmlns="http://www.w3.org/2000/svg">
			<path d="M54 1.50977C54.0002 119.442 82.6905 84.7264 86.822 76.8797C122.305 9.49012 42.4671 46.7317 56.6612 150.476" stroke="black" stroke-width="2.5" stroke-linecap="round"/>
		</svg>}
		</div>
	</div>
}

export default Scribble;