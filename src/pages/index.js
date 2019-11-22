import { graphql } from 'gatsby'
import React from 'react'

import Layout from '../components/layout'
import SEO from '../components/seo'
import Partners from '../components/partners'
import Gallery from '@browniebroke/gatsby-image-gallery'
import '@browniebroke/gatsby-image-gallery/dist/style.css'
import Fade from 'react-reveal/Fade';

import featureImage from "../../static/images/logo copy.png";
import bandeau from "../../static/images/bandeau.png";
import spotify from "../../static/images/icon-spotify.svg";


const IndexPage = ({ data }) => {
  const fullSize = data.images.edges.map(edge => edge.node.full.fluid.src)
  const thumbs = data.images.edges.map(edge => edge.node.thumb.fluid)
  return (
    <Layout>
      <SEO title="Accueil" />
      <div className={"page-header home"}>
            <Fade bottom>
            <img alt={"Dashboard"} src={featureImage}/>
            <div className={"centerText"}>
            <h1>Rendez-vous en 2020!</h1>
            <p>On sera de retour les 11-12-13 juin 2020 dans ton Thetford-Les-Mines préféré pour trois jours de gros fun.<br></br>Tu veux pas manquer ça!</p>
            </div>
            </Fade>
        </div>
        <Fade bottom>
        <div className={"bandeau"}>
            <img alt={"bandeau"} src={bandeau}/>
        </div>
        </Fade>
        <div className={"block centerText"}>
      <h1>Revivez l'Alternative 2019</h1>
      <p>En attendant la prochaine édition, revivez les bons moments de l'édition 2019</p>
      </div>

      <div className={"galleryDiv"}>
      <Fade bottom>
      <Gallery images={fullSize} thumbs={thumbs} />
      </Fade>
      </div>

      <Fade bottom>
      <div className={"call-to-action"}>
            <div className={"container"}>
                <div className={"call-to-action__content"}>
                    <h1>Écoutez les artistes de l'édition 2019</h1>
                </div>

                <div className={"button"}>
                    <a href="https://open.spotify.com/playlist/7KzkpATGpFXMOPRNQQbSmx?si=hgK9J-HpQ1qUhvWs5OLAow" target={"_blank"}><img alt={"spotify"} src={spotify}/> Écouter</a>
                </div>
            </div>
        </div>
        </Fade>
        <Fade bottom>
        <div className={"partenaires"}>
                <div className={"partenaires__content centerText"}>
                    <h1>Partenaires</h1>
                    <Partners />
            </div>
        </div>
        </Fade>
        <Fade bottom>
        <div className={"row contact"}>
          <p>Pour communiquer avec nous, veuillez envoyer un courriel à <a href="mailto:lalternative.festival@gmail.com">lalternative.festival@gmail.com</a></p>
        </div>
            </Fade>

    </Layout>
  )
}

export const query = graphql`
  query ImagesForGallery {
    images: allFile(
      filter: { relativeDirectory: { eq: "gallery" } }
      sort: { fields: name }
    ) {
      edges {
        node {
          id
          thumb: childImageSharp {
            fluid(maxWidth: 270, maxHeight: 270) {
              ...GatsbyImageSharpFluid
            }
          }
          full: childImageSharp {
            fluid(
              maxWidth: 1024
              quality: 85
              srcSetBreakpoints: [576, 768, 992, 1200]
            ) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    }
  }
`

export default IndexPage