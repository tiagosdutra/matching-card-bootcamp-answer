// document.addEventListener('DOMContentLoaded', () => {
//     //card options
//     const cardArray = [
//         {
//             name: 'plains',
//             img: 'img/plains.jpg'
//         },
//         {
//             name: 'plains',
//             img: 'img/plains.jpg'
//         },
//         {
//             name: 'island',
//             img: 'img/island.jpg'
//         },
//         {
//             name: 'island',
//             img: 'img/island.jpg'
//         },
//         {
//             name: 'swamp',
//             img: 'img/swamp.jpg'
//         },
//         {
//             name: 'swamp',
//             img: 'img/swamp.jpg'
//         },
//         {
//             name: 'mountain',
//             img: 'img/mountain.jpg'
//         },
//         {
//             name: 'mountain',
//             img: 'img/mountain.jpg'
//         },
//         {
//             name: 'forest',
//             img: 'img/forest.jpg'
//         },
//         {
//             name: 'forest',
//             img: 'img/forest.jpg'
//         }
//     ]


//     cardArray.sort(() => 0.5 - Math.random())

//     const grid = document.querySelector('.grid')
//     const resultDisplay = document.querySelector('#result')
//     let cardsChosen = []
//     let cardsChosenId = []
//     let cardsWon = []

//     function createBoard() {
//         for (let i=0; i < cardArray.length; i++){
//             let card = document.createElement('img')
//             card.setAttribute('src', 'img/cardback.jpg')
//             card.setAttribute('data-id', i)
//             card.addEventListener('click', flipCard)
//             grid.appendChild(card)
//         }
//     }

//     function checkForMatch(){
//         let cards = document.querySelectorAll('img')
//         const optionOneId = cardsChosenId[0]
//         const optionTwoId = cardsChosenId[1]
//         if (cardsChosen[0] === cardsChosen[1]){
//             alert('MATCH')
//             cards[optionOneId].setAttribute('src', 'img/wastes.jpg')
//             cards[optionTwoId].setAttribute('src', 'img/wastes.jpg')
//         } else {
//             alert('NOPE')
//             cards[optionOneId].setAttribute('src', 'img/cardback.jpg')
//             cards[optionTwoId].setAttribute('src', 'img/cardback.jpg')
//         }
//         cardsChosen = []
//         cardsChosenId = []
//         resultDisplay.textContent = cardsWon.length
//         if(cardsWon.length === cardArray.length/2){
//             resultDisplay.textContent = 'Congratulations! You did it!'
//         }
//     }

//     function flipCard(){
//         let cardId = this.getAttribute('data-id')
//         cardsChosen.push(cardArray[cardId].name)
//         cardsChosenId.push(cardId)
//         this.setAttribute('src', cardArray[cardId].img)
//         if(cardsChosen.length === 2){
//             setTimeout(checkForMatch, 500)
//         }
//     }
//     createBoard()
// })

Array.from(document.querySelectorAll('div')).forEach(div => div.addEventListener('click',flipCard))

let images = ['plains', 'plains', 'island', 'island', 'mountain', 'mountain', 'swamp', 'swamp', 'forest', 'forest']
const answers = {
    cardOne : '',
    cardTwo : '',
    cardThree : '',
    cardFour : '',
    cardFive : '',
    cardSix : '',
    cardSeven : '',
    cardEight : '',
    cardNine : '',
    cardTen : ''
}
Object.keys(answers).forEach(card => {
    let imageIdx = Math.floor(Math.random()*images.length)
    answers[card] = images[imageIdx]
    images = images.filter((image,i) => i!==imageIdx)
    console.log(images)
})

console.log(answers)
// 0.5 * Math.random()/

let flipped = []
// flipped.forEach(div => 
//     div.removeEventListener('click', flipCard))
// let dontClick = false
// let dontDouble = ''
function flipCard(event){
    // if (dontClick) return
    // if(dontDouble === event.target.id) return
    // dontDouble = event.target.id
    console.log(event.target.id)
    if(!event.target.classList.contains('faceDown')){
        // event.target.classList.add('faceDown')
        // event.target.classList.remove(answers[event.target.id])
        return
    } else{
        event.target.classList.remove('faceDown')
        event.target.classList.add(answers[event.target.id])
    }
    // dontClick = true 
    // setTimeout(() => {dontClick = false},100)
    flipped.push(answers[event.target.id])
    if (flipped.length===2){
    setTimeout(checkMatch,250)
    }
}

function checkMatch(){
        if(flipped[0] === flipped[1]){
            Array.from(document.getElementsByClassName(flipped[0])).forEach(div =>
                div.removeEventListener('click', flipCard)
            )
            
        } else {
            
            flipped.forEach(flippedUp => {
                document.getElementsByClassName(flippedUp)[0].classList = ['faceDown']
            })
        }
        flipped = []
    }
