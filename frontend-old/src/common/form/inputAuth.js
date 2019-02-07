import React from 'react'
import If from '../operator/if'

export default ({ hide, input, placeholder, readOnly, type, icon }) => (
	<If test={!hide}>
		<div className="form-group has-feedback">
			<input {...input} 
			className="form-control"
			placeholder={placeholder}
			readOnly={readOnly}
			type={type}/>
			<span className={`glyphicon glyphicon-${icon} form-control-feedback`}></span>
		</div>
	</If>
)