import classes from './Button.module.css'
import cx from 'classnames'

const Button = props => {
	return <button className = {cx(
		classes.button,
		props.className,
		{
			[classes.fill]: props.variant === 'fill',
			[classes.outline]: props.variant === 'outline',
			[classes.withshadow]: props.withShadow,
		}
	)}>
		{props.children}
	</button>
}

export default Button;