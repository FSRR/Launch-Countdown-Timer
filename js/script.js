const card_number = Array.from(document.querySelectorAll('.number'))
const date = new Date('01/01/2021 12:00 AM')
let timer

const seconds = 1000
const minutes = seconds * 60
const hours = minutes * 60
const days = hours * 24


const count = (time = 'all') => {
    const now = new Date

    const difference = date - now

    if(difference < 0) {
        console.log('terminooooo');
        clearInterval(timer)
    } else {
        switch (time) {
            case 'seconds':
                console.log('seconds');
                card_number[3].classList.toggle('flip-card')
                
                card_number[3].textContent = `${Math.floor(difference % minutes / seconds)}`.padStart(2,0)
                break;
                
            case 'minutes':
                console.log('minutes');
                card_number[3].textContent = `${Math.floor(difference % minutes / seconds)}`.padStart(2,0)
                card_number[2].textContent = `${Math.floor((difference % hours) / minutes)}`.padStart(2,0)

                card_number[3].classList.toggle('flip-card')
                card_number[2].classList.toggle('flip-card')
                break;
                
            case 'hours':
                console.log('hours');
                card_number[3].textContent = `${Math.floor(difference % minutes / seconds)}`.padStart(2,0)
                card_number[2].textContent = `${Math.floor((difference % hours) / minutes)}`.padStart(2,0)
                card_number[1].textContent = `${Math.floor((difference % days) / hours)}`.padStart(2,0)

                card_number[3].classList.toggle('flip-card')
                card_number[2].classList.toggle('flip-card')
                card_number[1].classList.toggle('flip-card')
                break;
                
            default:
                console.log('default');
                card_number[3].textContent = `${Math.floor(difference % minutes / seconds)}`.padStart(2,0)
                card_number[2].textContent = `${Math.floor((difference % hours) / minutes)}`.padStart(2,0)
                card_number[1].textContent = `${Math.floor((difference % days) / hours)}`.padStart(2,0)
                card_number[0].textContent = `${Math.floor(difference / days)}`.padStart(2,0)

                card_number[3].classList.toggle('flip-card')
                card_number[2].classList.toggle('flip-card')
                card_number[1].classList.toggle('flip-card')
                card_number[0].classList.toggle('flip-card')
                break;
        }
    }
}

onload = count()

const countDown = () => {
    if(card_number[1].textContent == 00 && card_number[2].textContent == 00 &&
        card_number[3].textContent == 00) {
        count()
    } else if(card_number[2].textContent == 00 && card_number[3].textContent == 00) {
        count('hours')
    } else if(card_number[3].textContent == 00) count('minutes')
    else count('seconds')
}

timer = setInterval(countDown, 1000)

