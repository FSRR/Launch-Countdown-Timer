const cards = document.querySelectorAll('.number')
const frontCard = Array.from(document.querySelectorAll('.front-number'))
const backCard = Array.from(document.querySelectorAll('.back-number'))

const date = new Date('01/01/2021 12:00 AM')
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

let textCardSeconds
let textCardMinutes
let textCardHours
let textCardDays


const showSeconds = () => {
    // console.log('seconds');
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
    // console.log('seconds');
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
    // console.log('seconds');
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
    // console.log('seconds');
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


const count = (time = 'all') => {
    const now = new Date
    
    difference = date - now

    if(difference < 0) {
        console.log('terminooooo');
        clearInterval(timer)
    } else {
        // cards[0].classList.remove()
        switch (time) {
            case 'seconds':
                console.log('seconds');
                showSeconds()
                break;
                
            case 'minutes':
                console.log('minutes');
                showSeconds()
                showMinutes()
                break;
                
            case 'hours':
                showSeconds()                
                showMinutes()
                showHours()
                break;
                
            default:
                showSeconds()
                showMinutes()
                showHours()
                showDays()
                break;
        }
    }
}

onload = count()

const countDown = () => {
    if(textCardSeconds == 00 && textCardMinutes == 00 &&textCardHours == 00) count()
    else if(textCardSeconds == 00 && textCardMinutes == 00) count('hours')
    else if(textCardSeconds == 00) count('minutes')
    else count('seconds')
}

timer = setInterval(countDown, 1000)

