export const seo = {
  siteName: 'The Sacred Spiral',
  defaultTitle: 'The Sacred Spiral',
  defaultDescription:
    'A cyclical journey through the Physical, Mental, and Spiritual realms.',
  url: 'https://example.com',
  image: 'https://example.com/og.jpg',
};

export function pageTitle(title?: string) {
  return title ? `${title} | ${seo.siteName}` : seo.defaultTitle;
}
