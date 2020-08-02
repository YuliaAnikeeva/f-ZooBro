import SwiperClass from 'swiper'
import 'swiper/css/swiper.css'

SwiperClass.use({
  name: 'zoom',
  params: {
    zoomEffect: {
      scale: 1,
      space: 0,
    },
  },
  on: {
    beforeInit() {
      const swiper = this
      if (swiper.params.effect !== 'zoom') return

      swiper.classNames.push(`${swiper.params.containerModifierClass}zoom`)

      swiper.params.watchSlidesProgress = true
      swiper.originalParams.watchSlidesProgress = true
    },
    setTranslate() {
      const swiper = this
      if (swiper.params.effect !== 'zoom') return
      const {
        width: swiperWidth, height: swiperHeight, slides, $wrapperEl, slidesSizesGrid,
      } = swiper
      const params = swiper.params.zoomEffect
      const transform = swiper.translate
      const center = -transform + (swiperWidth / 2)
      for (let i = 0, length = slides.length; i < length; i += 1) {
        const $slideEl = slides.eq(i)
        const slideSize = slidesSizesGrid[i]
        const slideOffset = $slideEl[0].swiperSlideOffset
        let offsetMultiplier = ((center - slideOffset - (slideSize / 2)) / slideSize)

        let scale = 1
        let translateX = 0
        let count = 2
        if (Math.abs(offsetMultiplier) <= count) {
          scale = 1 - (1 - params.scale) * Math.abs(offsetMultiplier);
          translateX = ((slideSize - scale * slideSize) / 2) * Math.abs(offsetMultiplier)
        } else {
          scale = params.scale * count - 1
          translateX = (slideSize - scale * slideSize) * (Math.abs(offsetMultiplier) - (count - 1))
        }
        translateX -= params.space * (Math.abs(offsetMultiplier))
        if (offsetMultiplier < 0)
          translateX = -translateX

        if (Math.abs(translateX) < 0.001) translateX = 0
        if (Math.abs(scale) < 0.001) scale = 0

        const slideTransform = `translateX(${translateX}px) scale(${scale})`

        $slideEl.transform(slideTransform)
        $slideEl[0].style.zIndex = -Math.abs(Math.round(offsetMultiplier)) + 1
      }
    },
    setTransition(duration) {
      const swiper = this
      if (swiper.params.effect !== 'zoom') return
      swiper.slides.transition(duration)
    },
  },
})
