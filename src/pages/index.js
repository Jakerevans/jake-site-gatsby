import React from "react"
import Layout from "../components/layout"

export default class Home extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {

  }

  render() {
    return  <Layout>
              <h1>Homepage!</h1>
            </Layout>;
  }
}

