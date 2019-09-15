import React from "react"
import Header from "../components/header"

export default ({ children }) => (
	<React.Fragment>
	<Header></Header>
	<div style={bodyStyle}>
		{children}
	</div>
	</React.Fragment>
)

const bodyStyle = {
  backgroundColor: 'black',
  margin: `0 auto`,
  maxWidth: '100%',
  padding: `0 1rem`,
  height:'100vh',
};