import { binarySearch } from "~src/practice-tasks/sprint-3/l. two-bycicles/binary-search";
import { receiveInput } from "~src/utility/receiveInput";

receiveInput((input) => {
  const [daysLen, days, bicyclePrice] = input as [number, number[], number];
  const firstDayIndex = binarySearch(days, bicyclePrice);
  const secondDayIndex =
    firstDayIndex !== -1
      ? binarySearch(days, bicyclePrice * 2, firstDayIndex)
      : -1;

  const firstDay = firstDayIndex !== -1 ? firstDayIndex + 1 : -1;
  const secondDay = secondDayIndex !== -1 ? firstDayIndex + 1 : -1;

  console.log(firstDay, secondDay);
});
