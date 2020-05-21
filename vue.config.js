module.exports = {
  lintOnSave: false,
  pwa: {
    name: 'Коробочка счастья ZooBro',
    themeColor: '#2289B5',
    msTileColor: '#2289B5',
    manifestOptions: {
      background_color: '#2289B5'
    },
  },
  css: {
    loaderOptions: {
      sass: {
        prependData: 
          `@import "~@/assets/styles/_fonts.scss";
          @import "~@/assets/styles/_variables.scss";`
      }
    }
  } 
}