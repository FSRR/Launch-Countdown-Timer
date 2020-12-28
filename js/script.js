const card_number = Array.from(document.querySelectorAll('.number'))
const date = new Date('01/01/2021 12:00 AM')
let timer
let flip

console.log(card_number);

const countDown = () => {
    const now = new Date

    const difference = date - now
    const seconds = 1000
    const minutes = seconds * 60
    const hours = minutes * 60
    const days = hours * 24
    
    if(difference < 0) {
        clearInterval(timer)
    }

    card_number[0].textContent = `${Math.floor(difference / days)}`.padStart(2,0)
    card_number[1].textContent = `${Math.floor((difference % days) / hours)}`.padStart(2,0)
    card_number[2].textContent = `${Math.floor((difference % hours) / minutes)}`.padStart(2,0)
    card_number[3].textContent = `${Math.floor(difference % minutes / seconds)}`.padStart(2,0)

    // card_number[3].classList.toggle('card-flip')

    flip = setTimeout(() => {
        card_time[3].classList.toggle('card-flip')
    }, 1000);

    for(const number of card_number) {
        console.log(number.textContent);
    }
}


timer = setInterval(countDown, 1000)
