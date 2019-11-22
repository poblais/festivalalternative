import {Link} from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import logo from "../../static/images/smalllogo.png"
import "../../static/styles/main.scss"

import iconFacebook from "../../static/images/icon-facebook.svg"
import iconInstagram from "../../static/images/icon-instagram.svg"

const Header = ({siteTitle}) => (
    <header>
        <div className={"container"}>
            <div className={"top-menu"}>
                <div className={"logo"}>
                    <Link to="/" title={"Accueil"}>
                        <img alt={"Logo"} src={logo}/>
                    </Link>
                </div>

                            <div className={"widget__item"}>
                                <div className={"social"}>
                                    <a href="https://www.facebook.com/festival.alternative/" target={"_blank"} title={"Facebook"}><img alt={"Facebook"} src={iconFacebook}/></a>
                                    <a href="https://www.instagram.com/festival.alternative/" target={"_blank"} title={"Instagram"}><img alt={"Instagram"} src={iconInstagram}/></a>
                                </div>
                            </div>
            </div>
        </div>
    </header>
)

Header.propTypes = {
    siteTitle: PropTypes.string,
}

Header.defaultProps = {
    siteTitle: ``,
}

export default Header
