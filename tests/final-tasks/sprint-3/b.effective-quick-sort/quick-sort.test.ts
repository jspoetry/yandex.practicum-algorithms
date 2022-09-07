import {quicksort} from "~/src/final-tasks/sprint-3/b.effective-quick-sort/quick-sort";

test('#1', () => {
  const input = [4, 6, 1, 9, 7, 7, 0, 84, 24, 742];
  const control = Array.from(input);

  quicksort(input)

  expect(input).toEqual(control.sort((a, b) => a - b));
})