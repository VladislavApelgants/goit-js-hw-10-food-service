import cards from "./templates/cards.hbs";
import arrayCards from "./menu.json";
import refs from "./js/refs.js"
import {Theme} from "./js/cheked.js"
console.log(Theme)

const { list, input } = refs;
const readyСards = cards(arrayCards);
const listen = input.addEventListener('change', () => {
    console.log('ddd')
})
// const readyСardsList = cards(arrayCards.tag);
// console.log(tag)
// console.log(readyСardsList)
// console.log(list)

const showList = list.insertAdjacentHTML('afterbegin', readyСards);