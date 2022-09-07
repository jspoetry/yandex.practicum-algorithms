import {Deck} from "~/src/final-tasks/sprint-2/a.deck/deck";

test('deck limit size', () => {
  const deck = new Deck(1);
  deck.push_front(1)

  expect(deck.push_front(2)).toBe('error')
  expect(deck.push_back(2)).toBe('error')
})

test('pop_front() on empty deck', () => {
  const deck = new Deck(1);

  expect(deck.pop_front()).toBe('error')
})

test('pop_back() on empty deck', () => {
  const deck = new Deck(1)

  expect(deck.pop_back()).toBe('error')
})

test('partial test', () => {
  // push_back 546
  // push_back -757
  // push_back 626
  // push_front -914

  const deck = new Deck(25);

  deck.push_back(546)
  deck.push_back(-757)
  deck.push_back(626)
  deck.push_front(-914)

})
