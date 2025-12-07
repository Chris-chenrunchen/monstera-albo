/** @type {import("pliny/config").PlinyConfig } */
const siteMetadata = {
  title: 'Monstera Albo Guide',
  author: 'Monstera Albo Expert',
  headerTitle: 'Monstera Albo',
  description:
    'A comprehensive guide to growing and caring for Monstera Albo plants. Learn about propagation, care tips, and troubleshooting for this beautiful variegated houseplant.',
  language: 'en-us',
  theme: 'system', // system, dark or light
  siteUrl: 'https://monstera-albo.vercel.app',
  siteRepo: 'https://github.com/username/monstera-albo',
  siteLogo: `${process.env.BASE_PATH || ''}/static/images/logo.png`,
  socialBanner: `${process.env.BASE_PATH || ''}/static/images/monstera-albo-banner.svg`,
  mastodon: 'https://mastodon.social/@mastodonuser',
  email: 'info@monstera-albo.com',
  github: 'https://github.com/username/monstera-albo',
  x: 'https://twitter.com/x',
  twitter: 'https://twitter.com/monsteraalbo',
  facebook: 'https://facebook.com/monsteraalbo',
  instagram: 'https://instagram.com/monsteraalbo',
  youtube: 'https://youtube.com/@monsteraalbo',
  linkedin: 'https://linkedin.com',
  threads: 'https://www.threads.net/@monsteraalbo',
  medium: 'https://medium.com',
  bluesky: 'https://bsky.app/',
  locale: 'en-US',
  // set to true if you want a navbar fixed to the top
  stickyNav: true,
  analytics: {
    // If you want to use an analytics provider you have to add it to the
    // content security policy in the `next.config.js` file.
    // We support a few different analytics:
    // - vercel analytics
    // - google analytics
    // - plausible analytics
    // Umami Analytics
    // umamiAnalytics: {
    //   umamiWebsiteId: 'e8b4a27d-3367-466a-a8ee-5211e65c3a89',
    //   apiEndpoint: 'https://analytics.umami.is/api.js',
    //   scriptName: 'analytics.js',
    //   websiteDomain: 'monstera-albo.vercel.app',
    // },
    // // Plausible Analytics
    // plausibleAnalytics: {
    //   plausibleDataDomain: 'monstera-albo.vercel.app',
    // },
    // // Simple Analytics
    // simpleAnalytics: {},
    // Google Analytics
    googleAnalytics: {
      gaMeasurementId: process.env.NEXT_PUBLIC_GA_ID,
    },
  },
  newsletter: {
    // Please refer to Mailchimp documentation for these settings
    // https://mailchimp.com/developer/marketing/api/form/
    // or ConvertKit documentation
    // https://developers.convertkit.com/v1/documentation#tag/Forms/operation/get_forms
    // or Buttondown documentation
    // https://buttondown.email/help/article/api-keys
    // or Resend documentation
    // https://resend.com/docs/api-reference/audiences/create-audience
    // or Klaviyo documentation
    // https://developers.klaviyo.com/en/reference/create_list
    // provider: 'mailchimp' | 'convertkit' | 'buttondown' | 'resend' | 'klaviyo' | 'custom',
    provider: 'mailchimp',
    mailchimp: {
      endpoint:
        'https://monstera-albo.us1.list-manage.com/subscribe/post?u=1234567890abcdef&id=1234567890',
    },
    // convertkit: {
    //   formUid: 'a1b2c3d4e5f6g7h8i9j0k1l2m3n4o5p6',
    //   apiKey: process.env.CONVERTKIT_API_KEY,
    // },
    // buttondown: {
    //   username: 'monstera-albo',
    // },
    // resend: {
    //   audienceId: 'a1b2c3d4-e5f6-7890-abcd-ef1234567890',
    // },
    // klaviyo: {
    //   listId: 'a1b2c3d4e5f6g7h8i9j0k1l2m3n4o5p6',
    //   apiKey: process.env.KLAVIYO_API_KEY,
    // },
  },
  comments: {
    // If you want to use an analytics provider you have to add it to the
    // content security policy in the `next.config.js` file.
    // Select a provider and use the environment variables associated to it
    // https://vercel.com/docs/environment-variables
    provider: 'giscus', // supported providers: giscus, utterances, disqus
    giscusConfig: {
      // Visit the link below, and follow the steps in the 'configuration' section
      // https://giscus.app/
      repo: 'username/monstera-albo',
      repositoryId: 'MDEwOlJlcG9zaXRvcnkzOTc0NTY4MTc=',
      category: 'General',
      categoryId: 'DIC_kwDOF1J2fs4CAp6H',
      mapping: 'pathname', // supported options: pathname, url, title
      reactions: '1', // Emoji reactions: 1 = enable / 0 = disable
      // Send discussion metadata periodically to the parent window: 1 = enable / 0 = disable
      metadata: '0',
      // theme example: light, dark, dark_dimmed, dark_high_contrast
      // transparent_dark, preferred_color_scheme, custom
      theme: 'light',
      // theme when dark mode
      darkTheme: 'transparent_dark',
      // If the theme option above is set to 'custom`
      // please provide a link below to your custom theme css file.
      // example: https://giscus.app/themes/custom_example.css
      themeURL: '',
      // This corresponds to the `data-lang="en"` in giscus's configurations
      lang: 'en',
    },
  },
  search: {
    provider: 'kbar', // kbar or algolia
    kbarConfig: {
      searchDocumentsPath: `${process.env.BASE_PATH || ''}/search.json`, // path to load documents to search
    },
    // provider: 'algolia',
    // algoliaConfig: {
    //   // The application ID provided by Algolia
    //   appId: 'YOUR_APP_ID',
    //   // Public API key: it is safe to commit the key
    //   apiKey: 'YOUR_SEARCH_API_KEY',
    //   indexName: 'YOUR_INDEX_NAME',
    //   //... other Algolia params
    // },
  },
}

module.exports = siteMetadata
