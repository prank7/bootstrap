const title = "";
const description = "";
const siteURL = 'https://xyz.com';
const siteName = 'Alphabet Inc'
const imageURL = 'https://imageurl.com/j.jpg';
const twitterHandle = '@alphabet';

module.exports = {
  siteMeta: {
    title,
    description,
    canonical: siteURL,
    siteURL,
    openGraph: {
      type: 'website',
      locale: 'en_IE',
      url: siteURL,
      site_name: siteName,
      title,
      description,
      images: [
        {
          url: imageURL,
          alt: title
        }
      ]
    },
    twitter: {
      handle: twitterHandle,
      site: twitterHandle,
      cardType: 'summary_large_image'
    },
    GA_TRACKING_ID: '',
    logoURL: '/assets/logo.svg',
    footerText: description
  },
  headerMenu: {
    navItems: [
      { name: 'Dashboard', href: '/' },
      { name: 'Team', href: '#' },
      { name: 'Projects', href: '#' },
      { name: 'Calendar', href: '#' },
    ]
  }
};
