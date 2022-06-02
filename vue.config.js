module.exports = {
  pwa: {
    name: 'Demo Eldorado',
    workboxPluginMode: "InjectManifest",
    workboxOptions: {
      swSrc: "./src/service-worker.js"
    },
    iconPaths: {
      faviconSVG: './public/eldorado-icon-96.svg',
      favicon32: './public/eldorado-icon-32.png',
      favicon16: './public/eldorado-icon-16.png',
      appleTouchIcon: './public/eldorado-icon.png',
      maskIcon: './public/eldorado-icon.png',
      msTileImage: './public/eldorado-icon.pngg'
    }
  }
};