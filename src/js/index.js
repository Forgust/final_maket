import '../scss/main.scss'
import './swipers'

let headerRightBlock = document.querySelector('.header__right-block')
let articleText = document.querySelector('.article__text')

let menuCallback = document.querySelector('.callback')
let menuBurger = document.querySelector('.side-menu--left')
let menuFeedback = document.querySelector('.feedback')

let mainPage = document.querySelector('.content')

let feedbackButton = headerRightBlock.querySelector('.round-button--chat')
let callbackButton = headerRightBlock.querySelector('.round-button--call')
let burgerButton = document.querySelector('.round-button--burger')

let brandsMoreButton = document.querySelector('.brands__button')
let devicesMoreButton = document.querySelector('.devices__button')
let readMoreButton = document.querySelector('.read-more')

let feedbackButtonBurger = menuBurger.querySelector('.round-button--chat')
let callbackButtonBurger = menuBurger.querySelector('.round-button--call')

let brandsList = document.querySelectorAll('.brands-slide')
let devicesList = document.querySelectorAll('.devices-slide')

let closeButtonCallback = menuCallback.querySelector('.round-button--close')
let closeButtonBurger = document.querySelector(
  '.side-menu--left .round-button--close'
)
let closeButtonFeedback = document.querySelector(
  '.feedback .round-button--close'
)

//закрыть открыть
function openModal(modal) {
  modal.classList.toggle('open')
  mainPage.classList.toggle('close')
}

function showMore(slidsList, button) {
  for (let i = 0; i < slidsList.length; i++) {
    if (slidsList[i].classList.contains('hiden-slide')) {
      slidsList[i].classList.remove('hiden-slide')
      slidsList[i].classList.add('not-hiden')
      button.textContent = 'Скрыть'
    } else if (slidsList[i].classList.contains('not-hiden')) {
      slidsList[i].classList.add('hiden-slide')
      slidsList[i].classList.remove('not-hiden')
      button.textContent = 'Показать все'
    }
  }
  button.classList.toggle('reverse')
}

readMoreButton.onclick = function (event) {
  event.preventDefault()
  if (!articleText.classList.contains('max')) {
    articleText.classList.add('max')
    readMoreButton.textContent = 'Скрыть'
  } else {
    articleText.classList.remove('max')
    readMoreButton.textContent = 'Читать далее'
  }
  readMoreButton.classList.toggle('reverse')
}

brandsMoreButton.onclick = function () {
  showMore(brandsList, brandsMoreButton)
}

devicesMoreButton.onclick = function () {
  showMore(devicesList, devicesMoreButton)
}

//Отзыв

feedbackButton.addEventListener('click', function (e) {
  e.stopPropagation()
  openModal(menuFeedback)
})

closeButtonFeedback.addEventListener('click', function (e) {
  e.stopPropagation()
  openModal(menuFeedback)
  menuBurger.classList.remove('close')
})

document.addEventListener('click', function (e) {
  const target = e.target
  const its_menu = target == menuFeedback || menuFeedback.contains(target)
  const its_btnMenu = target == feedbackButton
  const menu_is_active = menuFeedback.classList.contains('open')

  if (!its_menu && !its_btnMenu && menu_is_active) {
    openModal(menuFeedback)
    menuBurger.classList.remove('close')
  }
})

//колбек меню
callbackButton.addEventListener('click', function (e) {
  e.stopPropagation()
  openModal(menuCallback)
})

closeButtonCallback.addEventListener('click', function (e) {
  e.stopPropagation()
  openModal(menuCallback)
  menuBurger.classList.remove('close')
})

document.addEventListener('click', function (e) {
  const target = e.target
  const its_menu = target == menuCallback || menuCallback.contains(target)
  const its_btnMenu = target == callbackButton
  const menu_is_active = menuCallback.classList.contains('open')

  if (!its_menu && !its_btnMenu && menu_is_active) {
    openModal(menuCallback)
    menuBurger.classList.remove('close')
  }
})

//бургер меню
burgerButton.addEventListener('click', function (e) {
  e.stopPropagation()
  openModal(menuBurger)
})

closeButtonBurger.addEventListener('click', function (e) {
  e.stopPropagation()
  menuBurger.classList.remove('open')
  mainPage.classList.remove('close')
  menuBurger.classList.remove('close')
})

document.addEventListener('click', function (e) {
  const target = e.target
  const its_menu =
    target == menuBurger ||
    menuBurger.contains(target) ||
    target == menuCallback ||
    target == menuFeedback
  const its_btnMenu = target == burgerButton
  const menu_is_active = menuBurger.classList.contains('open')
  console.log(
    'its_menu:' +
      its_menu +
      ', its_btnMenu:' +
      its_btnMenu +
      ', menu_is_active :' +
      menu_is_active
  )
  if (!its_menu && !its_btnMenu && menu_is_active) {
    openModal(menuBurger)
    if (mainPage.classList.contains('close')) {
      mainPage.classList.remove('close')
      console.log('октрывает')
    }
  }
})

//те же колбек и отзыв только в бургере
callbackButtonBurger.addEventListener('click', function (e) {
  e.stopPropagation()
  menuCallback.classList.toggle('open')
  if (menuFeedback.classList.contains('open')) {
    menuFeedback.classList.toggle('open')
  }
  if (window.innerWidth >= 1360) {
    mainPage.classList.toggle('close')
    menuBurger.classList.toggle('close')
  }
})

feedbackButtonBurger.addEventListener('click', function (e) {
  e.stopPropagation()
  menuFeedback.classList.toggle('open')
  if (menuCallback.classList.contains('open')) {
    menuCallback.classList.toggle('open')
  }
  if (window.innerWidth >= 1360) {
    mainPage.classList.toggle('close')
    menuBurger.classList.toggle('close')
  }
})

function desctopHiden(slidsList) {
  for (let i = 0; i < slidsList.length; i++) {
    if (
      window.innerWidth >= 1120 &&
      slidsList[i].classList.contains('desctop') &&
      slidsList[i].classList.contains('hiden-slide')
    ) {
      slidsList[i].classList.remove('hiden-slide')
      slidsList[i].classList.add('not-hiden-desctop')
    } else if (
      window.innerWidth < 1120 &&
      slidsList[i].classList.contains('not-hiden-desctop')
    ) {
      slidsList[i].classList.remove('not-hiden-desctop')
      slidsList[i].classList.add('hiden-slide')
    }
  }
}

desctopHiden(brandsList)
desctopHiden(devicesList)

window.addEventListener('resize', function () {
  desctopHiden(brandsList)
  desctopHiden(devicesList)
})
