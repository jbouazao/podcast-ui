import classes from './EpisodeCard.module.css';

const EpisodeCard = (props) => {
	return <div className = {classes.main}>
		<div className = {classes.left}>
			<img src = {props.data.pic} alt = '' className = {classes.img}/>
			<div className = {classes.tags}>
				<strong className = {classes.tag}>
					{props.data.tags[0]}
				</strong>
				{props.data.tags.length > 1 ? <strong className = {classes.tag}>
					{props.data.tags[1]}
				</strong> : null}
			</div>
		</div>
		<div className = {classes.right}>
			<div>
				<h4 className = {classes.epnum}>Eps. {props.data.ep}</h4>
				<h3 className = {classes.eptitle}>{props.data.title}</h3>
			</div>
			<div style = {{border: '0.5px solid #b2b2b2', width: '95%', margin: '0 2px'}}></div>
			<p className = {classes.desc}>{props.data.desc}</p>
			<div className = {classes.hosts}>
				<h6 style = {{fontFamily: 'MontserratAlternatesSemiBold', fontSize: '12px'}}>Hosted by:</h6>
				<div className = {classes.hostspicwrapper} style = {{width: `${10 + (20 * props.data.hostedby.length)}px`}}>
					{props.data.hostedby.map((host, index) => {
						return <img className = {classes.hostspic} style = {{left: `${20 * index}px`, zIndex: `${1 * props.data.hostedby.length - index}`}} src = {props.data.hostedby[index]} alt = ''/>
					})}
					{/* <img className = {classes.hostspic} style = {{left: `${20 * 1}px`, zIndex: `${1 * 1}`}} src = {props.data.hostedby[0]} alt = ''/> */}
					{/* <img className = {classes.hostspic} style = {{left: `${20 * 2}px`, zIndex: `${1 * 0}`}} src = {props.data.hostedby[0]} alt = ''/> */}
				</div>
			</div>
		</div>
	</div>
}

export default EpisodeCard;