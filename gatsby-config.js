const siteMetadata = {
  title: `Coding Notes and Interesting Tidbits`,
  description: `This is my blog where I post some of my notes and interesting tidbits related to coding.`,
};

module.exports = {
  siteMetadata: siteMetadata,
  plugins: [
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
  ],
};
