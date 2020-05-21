module.exports = {
  lintOnSave: false,
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