module.exports = {
  pwa: {
    name: 'Demo Eldorado',
    workboxPluginMode: "InjectManifest",
    workboxOptions: {
      swSrc: "./src/service-worker.js"
    },
    // iconPaths: {
    //   faviconSVG: 'img/icons/eldorado-icon-96.svg',
    //   favicon32: 'img/icons/eldorado-icon-32.png',
    //   favicon16: 'img/icons/eldorado-icon-16.png',
    //   appleTouchIcon: 'img/icons/eldorado-icon.png',
    //   maskIcon: 'img/icons/eldorado-icon.png',
    //   msTileImage: 'img/icons/eldorado-icon.png'
    // },
    manifestOptions: {
      icons: [
        {
          src: './img/icons/eldorado-icon-32.png',
          sizes: '32x32',
          type: 'image/png'
        },
        {
          src: './img/icons/eldorado-icon-16.png',
          sizes: '16x16',
          type: 'image/png'
        },
        {
          src: './img/icons/eldorado-icon.png',
          sizes: '152x152',
          type: 'image/png'
        },
        {
          src: './img/icons/eldorado-icon-96.svg',
          sizes: '942x942',
          type: 'image/svg+xml'
        },
        {
          src: './img/icons/eldorado-icon.png',
          sizes: '144x144',
          type: 'image/png'
        }
      ]
    }
  }
};