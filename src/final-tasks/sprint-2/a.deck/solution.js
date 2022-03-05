import {Deck} from "./deck.js";

export const solution = (input) => {
  const [commandCount, deckSize, ...commands] = input
  const deck = new Deck(deckSize);

  for (let command of commands) {
    if (typeof command === 'undefined') return;

    let result = Array.isArray(command) ? deck[command[0]](command[1]) : deck[command]();

    if (typeof result !== 'undefined') console.log(result);
  }
}