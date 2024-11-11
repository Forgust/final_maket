import Swiper from 'swiper'
// import Swiper styles
import { Navigation, Pagination } from 'swiper/modules'
Swiper.use([Navigation, Pagination])

window.addEventListener('DOMContentLoaded', () => {
  const resizableSwiper = (
    breakpoint,
    swiperClass,
    swiperSettings,
    callback
  ) => {
    let swiper
    breakpoint = window.matchMedia(breakpoint)

    const enableSwiper = function (className, settings) {
      swiper = new Swiper(className, settings)

      if (callback) {
        callback(swiper)
      }
    }

    const checker = function () {
      if (breakpoint.matches) {
        return enableSwiper(swiperClass, swiperSettings)
      } else {
        if (swiper !== undefined) swiper.destroy(true, true)
        return
      }
    }

    breakpoint.addEventListener('change', checker)
    checker()
  }

  resizableSwiper('(max-width: 767px)', '.brands__swiper', {
    spaceBetween: 16,
    slidesPerView: 'auto',
    pagination: {
      el: '.swiper-pagination',
      clickable: true
    }
  })

  resizableSwiper('(max-width: 767px)', '.devices__swiper', {
    spaceBetween: 16,
    slidesPerView: 'auto',
    pagination: {
      el: '.swiper-pagination',
      clickable: true
    }
  })

  resizableSwiper('(max-width: 767px)', '.prices__swiper', {
    spaceBetween: 16,
    slidesPerView: 'auto',
    pagination: {
      el: '.swiper-pagination',
      clickable: true
    }
  })
})
