module.exports = {
    siteMetadata: {
        title: `Festival l'Alternative`,
        description: `Ensemble nous sommes l'alternative`,
        author: `Pierre-Olivier Blais`,
    },
    plugins: [
        `gatsby-plugin-react-helmet`,
        {
            resolve: `gatsby-source-filesystem`,
            options: {
                name: `images`,
                path: `${__dirname}/src/images`,
            },
        },
        `gatsby-transformer-sharp`,
        `gatsby-plugin-sharp`,
        {
            resolve: `gatsby-plugin-manifest`,
            options: {
                name: `gatsby-starter-default`,
                short_name: `starter`,
                start_url: `/`,
                background_color: `#663399`,
                theme_color: `#FF54AC`,
                display: `minimal-ui`,
                icon: `${__dirname}/static/images/icon.png`, // This path is relative to the root of the site.
            },
        },
        `gatsby-plugin-sass`,
        {
            resolve: 'gatsby-plugin-web-font-loader',
            options: {
                google: {
                    families: ['Nunito Sans'],
                },
                custom: {
                    families: ['balboa-plus-fill'],
                    urls: ['/fonts/fonts.css']
                }
            }
        },
        {
            resolve: `gatsby-plugin-google-analytics`,
            options: {
              trackingId: "UA-153212030-1",
              head: true,
              pageTransitionDelay: 0,
              sampleRate: 5,
              siteSpeedSampleRate: 10,
              cookieDomain: "festivalalternative.com",
            },
          },
        // this (optional) plugin enables Progressive Web App + Offline functionality
        // To learn more, visit: https://gatsby.dev/offline
        // `gatsby-plugin-offline`,
    ],
}
