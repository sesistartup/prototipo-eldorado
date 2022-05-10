module.exports = {
  pwa: {
    workboxPluginMode: "InjectManifest",
    workboxOptions: {
      swSrc: "./src/service-worker.js"
    },
    iconPaths: {
      faviconSVG: 'eldorado-icon.ico',
      favicon32: 'eldorado-icon.ico',
      favicon16: 'eldorado-icon.ico',
      appleTouchIcon: 'eldorado-icon.ico',
      maskIcon: 'eldorado-icon.ico',
      msTileImage: 'eldorado-icon.icog'
    }
  }
};