const cards = document.querySelectorAll('.number')
const frontCard = Array.from(document.querySelectorAll('.front-number'))
const backCard = Array.from(document.querySelectorAll('.back-number'))

const dateEnd = new Date('01/01/2021 12:00 AM')
const date = dateEnd.toDateString().split(' ')
document.getElementById('date-end').textContent = `${date[0]}, ${date[2]} ${date[1]} ${date[3]}`

let difference
let timer

const seconds = 1000
const minutes = seconds * 60
const hours = minutes * 60
const days = hours * 24

let counterSeconds = 0
let counterMinutes = 0
let counterHours = 0
let counterDays = 0

let textCardSeconds = 0
let textCardMinutes = 0
let textCardHours = 0
let textCardDays = 0


const showSeconds = () => {
    if(counterSeconds % 2 == 0) {
        backCard[3].textContent = `${Math.floor(difference % minutes / seconds)}`.padStart(2,0)
    
        cards[3].classList.toggle('flip-card')
        textCardSeconds = backCard[3].textContent
    } else {
        frontCard[3].textContent = `${Math.floor(difference % minutes / seconds)}`.padStart(2,0)
    
        cards[3].classList.toggle('flip-card')
        textCardSeconds = frontCard[3].textContent
    }
    counterSeconds++
}

const showMinutes = () => {
    if(counterMinutes % 2 == 0) {
        backCard[2].textContent = `${Math.floor((difference % hours) / minutes)}`.padStart(2,0)
        
        cards[2].classList.toggle('flip-card')
        textCardMinutes = backCard[2].textContent
    } else {
        frontCard[2].textContent = `${Math.floor((difference % hours) / minutes)}`.padStart(2,0)
        
        cards[2].classList.toggle('flip-card')
        textCardMinutes = frontCard[2].textContent
    }
    counterMinutes++
}

const showHours = () => {
    if(counterHours % 2 == 0) {
        backCard[1].textContent = `${Math.floor((difference % days) / hours)}`.padStart(2,0)
        
        cards[1].classList.toggle('flip-card')
        textCardHours = backCard[1].textContent
    } else {
        frontCard[1].textContent = `${Math.floor((difference % days) / hours)}`.padStart(2,0)
    
        cards[1].classList.toggle('flip-card')
        textCardHours = frontCard[1].textContent
    }
    counterHours++
}

const showDays = () => {
    if(counterDays % 2 == 0) {
        backCard[0].textContent = `${Math.floor(difference / days)}`.padStart(2,0)
    
        cards[0].classList.toggle('flip-card')
        textCardDays = backCard[0].textContent
    } else {
        frontCard[0].textContent = `${Math.floor(difference / days)}`.padStart(2,0)
    
        cards[0].classList.toggle('flip-card')
        textCardDays = frontCard[0].textContent
    }
    counterDays++
}

const countDown = () => {
    const dateNow = new Date

    const today = dateNow.toDateString().split(' ')
    document.getElementById('date-now').textContent = `${today[0]}, ${today[2]} ${today[1]} ${today[3]}`

    difference = dateEnd - dateNow

    if(difference < 0) {
        console.log('terminooooo');
        clearInterval(timer)
    } else {
        if(textCardSeconds == 00 && textCardMinutes == 00 &&textCardHours == 00) {
            showSeconds()
            showMinutes()
            showHours()
            showDays()
        } else if(textCardSeconds == 00 && textCardMinutes == 00) {
            showSeconds()                
            showMinutes()
            showHours()
        } else if(textCardSeconds == 00) {
            showSeconds()
            showMinutes()
        }
        else showSeconds()
    }
}

onload = countDown()

timer = setInterval(countDown, 1000)

