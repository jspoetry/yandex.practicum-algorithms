import CNode from "../common/CNode";
import getRange from "./getRange";

describe("printRange", () => {
  test("#1", () => {
    const root = new CNode(
      5,
      new CNode(1, null, new CNode(2)),
      new CNode(10, new CNode(9, new CNode(8, null, new CNode(8))))
    );

    const result = getRange(root, 2, 8);

    expect(result.join(" ")).toEqual("2 5 8 8");
  });
});
