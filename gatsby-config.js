const siteMetadata = {
  title: `Between Brackets`,
  description: `A blog of my notes and interesting coding tidbits.`,
};

module.exports = {
  siteMetadata: siteMetadata,
  pathPrefix: "/personal-blog",
  plugins: [
    {
      resolve: 'gatsby-plugin-brotli',
    },
    {
      resolve: `gatsby-plugin-mdx`,
      options: {
        extensions: [`.mdx`, `.md`],
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/posts`,
        name: `posts`,
      },
    },
    `gatsby-plugin-styled-components`,
    `gatsby-plugin-react-helmet`,
  ],
};
