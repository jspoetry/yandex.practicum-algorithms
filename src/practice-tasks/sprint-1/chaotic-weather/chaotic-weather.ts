import { receiveInput } from "@/utility/receiveInput";
import { transformToArrayIfIsNot } from "@/utility/transformToArrayIfIsNot";

receiveInput(solve)

function solve(input) {
  const [len, dayDegrees] = input
  console.log(findMostHottestDays(transformToArrayIfIsNot(dayDegrees)));
}

const findMostHottestDays = (dayDegrees) =>
  dayDegrees.filter((degree, i, arr) =>
    isGreaterThan(degree, arr[i - 1]) && isGreaterThan(degree, arr[i + 1])
  ).length

const isGreaterThan = (curDegree, comparingDegree) => (
  comparingDegree === undefined ? true : (curDegree > comparingDegree)
)

