/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: [
      'caceresnoticias.nyc3.digitaloceanspaces.com',
      'scontent.fppb1-1.fna.fbcdn.net',
      'static-meuevento.s3.dualstack.us-east-1.amazonaws.com',
      'cdn2.downdetector.com',
      '1000logos.net',
      'images.sympla.com.br',
      'www.oab-ro.org.br',
      'cands-cands.com',
      'vogueballroom.com.au',
      'pymstatic.com'
    ],
  },
}

module.exports = nextConfig
