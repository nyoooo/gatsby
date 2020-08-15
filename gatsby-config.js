module.exports = {
  siteMetadata: {
    title: `nyoooo`,
    name: `nyoooo`,
    siteUrl: `https://nyo.ooo`,
    description: `This is nyoooo's playground`,
    hero: {
      heading: `Welcome to nyoooo, this is my playground.`,
      maxWidth: 652,
    },
    social: [
      {
        name: `twitter`,
        url: `https://twitter.com/nyoooo_241`,
      },
      {
        name: `instagram`,
        url: `https://www.instagram.com/nyoooo_241/`,
      },
    ],
  },
  plugins: [
    {
      resolve: "@narative/gatsby-theme-novela",
      options: {
        contentPosts: "content/posts",
        contentAuthors: "content/authors",
        basePath: "/",
        authorsPage: true,
        sources: {
          local: true,
          // contentful: true,
        },
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Novela by Narative`,
        short_name: `Novela`,
        start_url: `/`,
        background_color: `#fff`,
        theme_color: `#fff`,
        display: `standalone`,
        icon: `src/assets/favicon.png`,
      },
    },
    // {
    //   resolve: `gatsby-plugin-netlify-cms`,
    //   options: {
    //   },
    // },
  ],
};
