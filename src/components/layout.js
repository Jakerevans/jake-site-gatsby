import React from "react"
import Header from "../components/header"

export default ({ children }) => (
	<React.Fragment>
	<Header></Header>
	<div style={{ margin: `0 auto`, maxWidth: '100%', padding: `0 1rem` }}>
		{children}
	</div>
	</React.Fragment>
)