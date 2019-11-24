/**
 * Layout component that queries for data
 * with Gatsby's StaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import {StaticQuery, graphql } from "gatsby"
import Header from "./header"
import "../../static/styles/main.scss"
import iconFacebook from "../../static/images/icon-facebook.svg"
import iconInstagram from "../../static/images/icon-instagram.svg"

const Layout = ({children}) => (
    <StaticQuery query={graphql`
      query SiteTitleQuery {
        site {
          siteMetadata {
            title
          }
        }
      }
    `} render={data => (
        <>
            <Header siteTitle={data.site.siteMetadata.title}/>
            <main>{children}</main>
            <footer>
                <div className={"container"}>
                    <div className={"row"}>
                    <div className={"col-10"}>
                        <p>© {new Date().getFullYear()}, {` `} <a href="https://festivalalternative.com" title={"Festival L'alternative"}>FESTIVAL L'ALTERNATIVE</a> | RÉALISÉ PAR PIERRE-OLIVIER BLAIS</p>
                    </div>
                    <div className={"col-2"}>
                            <div className={"widget__item"}>
                                <div className={"social"}>
                                    <a href="https://www.facebook.com/festival.alternative/" target={"_blank"} title={"Facebook"}><img alt={"Facebook"} src={iconFacebook}/></a>
                                    <a href="https://www.instagram.com/festival.alternative/" target={"_blank"} title={"Instagram"}><img style={{Height: '10%'}} alt={"Instagram"} src={iconInstagram}/></a>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </footer>
        </>
    )}/>
)

Layout.propTypes = {
    children: PropTypes.node.isRequired,
}

export default Layout
