import React, { Component, Fragment } from "react"
import { Link } from "gatsby"

import SocialLinks from "./socialLinks"
import NavigationLinks from "./navigationLinks"
import logo from "../../images/logowhite.png"
import "./header.css"

export default class Navbar extends Component {
  state = {
    navbarOpen: false,
    navbarClasses: "collapse navbar-collapse",
  }

  navbarHandler = () => {
    const { navbarOpen } = this.state

    navbarOpen
      ? this.setState(prevState => ({
          navbarOpen: !prevState.navbarOpen,
          navbarClasses: "collapse navbar-collapse",
        }))
      : this.setState(prevState => ({
          navbarOpen: !prevState.navbarOpen,
          navbarClasses: "collapse navbar-collapse show",
        }))
  }

  render() {
    const { navbarClasses } = this.state
    const { path } = this.props || "no path"

    return (
      <Fragment>
        <SocialLinks />
        <header
          className={path === "/" ? "header-transparent" : "header-black"}
        >
          <div className="header-container">
            <nav className="navbar navbar-dark navbar-expand-sm py-0 py-md-3">
              <Link to="/" className="navbar-brand d-block ml-md-2">
                <img
                  className="mr-2 site-logo"
                  src={logo}
                  alt="The coffee shop logo"
                />
              </Link>
              <button
                className="navbar-toggler"
                type="button"
                onClick={this.navbarHandler}
                aria-label="link to mobile menu"
              >
                <span className="navbar-toggler-icon" />
              </button>
              <NavigationLinks navbarClasses={navbarClasses} />
            </nav>
          </div>
        </header>
      </Fragment>
    )
  }
}
