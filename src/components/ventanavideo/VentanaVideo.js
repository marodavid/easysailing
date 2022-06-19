import React from 'react'
import PropTypes from 'prop-types'

import './VentanaVideo.css'


const VentanaVideo = ({ embedId }) => (
	<div className="video-responsive">
		<iframe
			// width="853"
			// height="480"
			width="auto"
			height="auto"
			src={`${embedId}`}
			frameBorder="0"
			allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
			allowFullScreen
			title="Easy Sailing"
		/>
	</div>
)

VentanaVideo.propTypes = {
	embedId: PropTypes.string.isRequired,
};

export default VentanaVideo
