import React, { Fragment } from "react"
import PropTypes from "prop-types"

import "./bootstrap.min.css"
import "./layout.css"

import Header from "./common/header"
import Footer from "./common/footer"
import Mobile from "./common/mobile"

const Layout = ({ children, path }) => (
  <Fragment>
    <Header path={path} />
    {children}
    <Footer />
    <Mobile />
  </Fragment>
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
