/** @type {import('next').NextConfig} */
const nextConfig = {
  async redirects() {
    return [
      // Redirections des anciennes URLs WordPress vers les nouvelles pages
      { source: '/', has: [{ type: 'query', key: 'p', value: '2932' }], destination: '/cours-tarifs', permanent: true },
      { source: '/', has: [{ type: 'query', key: 'p', value: '2937' }], destination: '/evenements', permanent: true },
      { source: '/', has: [{ type: 'query', key: 'p', value: '2939' }], destination: '/actualites', permanent: true },
      { source: '/', has: [{ type: 'query', key: 'p', value: '31' }], destination: '/contact', permanent: true },
      { source: '/', has: [{ type: 'query', key: 'p', value: '2935' }], destination: '/le-groupe-senzala-78', permanent: true },
      // Redirection www vers non-www (géré au niveau DNS/hébergeur, mais ici en fallback)
    ];
  },
  async headers() {
    return [
      {
        source: '/(.*)',
        headers: [
          { key: 'X-Frame-Options', value: 'SAMEORIGIN' },
          { key: 'X-Content-Type-Options', value: 'nosniff' },
          { key: 'Referrer-Policy', value: 'strict-origin-when-cross-origin' },
          { key: 'Permissions-Policy', value: 'camera=(), microphone=(), geolocation=()' },
        ],
      },
    ];
  },
};

module.exports = nextConfig;
