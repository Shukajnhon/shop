const $ = document.querySelector.bind(document)
const $$ = document.querySelectorAll.bind(document)

const navbar = $('#navbar')
const mobileNavbarIcon = $('#mobile__navbar-icon')
const navbarCloseBtn = $('#navbar__close')

const product = $$('.pro')
const productLeng = product.length
// console.log(productLeng)

if (mobileNavbarIcon) {
    mobileNavbarIcon.addEventListener('click', function () {
        navbar.classList.add('active')
    })
}

if (navbarCloseBtn) {
    navbarCloseBtn.addEventListener('click', function () {
        navbar.classList.remove('active')
    })
}

// Shop Page
// let goToPage = window.location.href = 'product.html';
for (let i = 0; i < productLeng; i++) {
    product[i].addEventListener('click', function () {
        let goToPage = window.location.href = 'product.html';
        product[i] = goToPage;

    })
}

//Product Page
const mainImg = $('#MainImg')
const smallImg = $$(".small-img")

const smallIngLeng = smallImg.length
// console.log(mainImg, smallImg, smallIngLeng)

for (let i = 0; i < smallIngLeng; i++) {
    smallImg[i].addEventListener('click', function () {
        mainImg.src = smallImg[i].src
    })
}
