import classes from './ProfileSummary.module.css'

const ProfileSummary = (props) => {
	return <div className = {classes.profilefeedback}>
		<div className = {classes.avatarwrapper}>
			<img className = {classes.avatar} src = {props.avatar} alt = 'avatar' />
		</div>
		<p style = {{fontFamily: 'MontserratAlternatesRegular', fontSize: '14px'}}>{props.name},</p>
		<p style = {{fontFamily: 'MontserratAlternatesBold', display: 'flex', gap: '10px', alignItems: 'center'}}>
			<img src = {props.logo} style = {{width: '30px'}} alt = 'logo'/>
			{props.role}
		</p>
	</div>
}

export default ProfileSummary;