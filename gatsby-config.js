module.exports = {
	siteMetadata : {
		title       : `Purelase`,
		description : `Студио за диодна лазерна епилация в Студентски град София.`,
		author      : `Dariy Kutelov`
	},
	plugins      : [
		`gatsby-plugin-react-helmet`,
		{
			resolve : `gatsby-source-filesystem`,
			options : {
				name : `images`,
				path : `${__dirname}/src/images`
			}
		},
		`gatsby-transformer-sharp`,
		`gatsby-plugin-sharp`,
		{
			resolve : `gatsby-plugin-manifest`,
			options : {
				name             : `gatsby-starter-default`,
				short_name       : `starter`,
				start_url        : `/`,
				background_color : `#663399`,
				theme_color      : `#663399`,
				display          : `minimal-ui`,
				icon             : `src/images/purelase-icon.png` // This path is relative to the root of the site.
			}
		},
		{
			resolve : `gatsby-plugin-prefetch-google-fonts`,
			options : {
				fonts : [
					{
						family   : `Open Sans`,
						variants : [
							`300`,
							`400`,
							`500i`,
							`700`
						],
						subsets  : [
							`cyrillic`,
							`latin`
						]
					},
					{
						family   : `Lobster`,
						variants : [
							`400`
						],
						subsets  : [
							`cyrillic`,
							`latin`
						]
					}
				]
			}
		}

		// this (optional) plugin enables Progressive Web App + Offline functionality
		// To learn more, visit: https://gatsby.dev/offline
		// `gatsby-plugin-offline`,
	]
}
