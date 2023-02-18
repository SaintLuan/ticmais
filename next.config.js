/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  env: {
    API_BASE: 'https://api.ticmais.ticpass.com.br/v1',
    GOOGLE_AUTH: 'http://125666449202-8r492bbnfc1qeae3d8vbpm06asgmt13k.apps.googleusercontent.com/',
    FACEBOOK_AUTH: '534881315263590',
  },
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
      'pymstatic.com',
      'img.freepik.com',
      'countryflagsapi.com',
      'vetores.org',
      'www.spcdn.org',
      'media.licdn.com',
      'api.ticmais.ticpass.com.br',
    ],
  },
}

module.exports = nextConfig
