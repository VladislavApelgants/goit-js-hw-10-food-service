import cards from "../templates/cards.hbs";
import arrayCards from "../menu.json";
import refs from "./refs";
const { list } = refs;

const readyСards = cards(arrayCards);
const rendering = list.insertAdjacentHTML('afterbegin', readyСards);
export {rendering}