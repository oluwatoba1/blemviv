/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React, {Component} from 'react';
import PropTypes from "prop-types"
// import { useStaticQuery, graphql } from "gatsby"
import loading from '../images/loader.gif'

import Header from "./header"
import "./layout.css"

class Layout extends Component {

  constructor(props) {
    super(props);
    this.state = {
      loading: true
    }
  }
  

  componentDidMount() {
    setInterval(() => {
      this.setState({loading: false})
    }, 2000);
  }
  
  render() {

  //   const data = useStaticQuery(graphql`
  //   query SiteTitleQuery {
  //     site {
  //       siteMetadata {
  //         title
  //       }
  //     }
  //   }
  // `)

  if(this.state.loading) {
    return (
      <div className="Loading">
        <img src={loading} />
      </div>
    )
  }
  else {
    return (
      <div className="Foundation">
        <Header />
          {this.props.children}
      </div>
    )
  }

  }
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
