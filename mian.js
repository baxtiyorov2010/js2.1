let dark = document.querySelector(`.dark`)
let light = document.querySelector(`.light`)
let body = document.querySelector(`body`)
let a = document.querySelectorAll(`.a`)
let get = document.querySelector(`.get`)
body.style.background = `white`

dark.addEventListener(`click`, () => {
    body.style.color = `white`
    body.style.background = `black`
    light.style.color = `white`
    a[0].style.color = `white`
    a[1].style.color = `white`
    a[2].style.color = `white`
    get.style.color = `white`
})

light.addEventListener(`click`, () => {
    body.style.color = `black`
    body.style.background = `white`
    light.style.color = `white`
    a[0].style.color = `black`
    a[1].style.color = `black`
    a[2].style.color = `black`
    get.style.color = `white`
    get.style.color = `black`
})