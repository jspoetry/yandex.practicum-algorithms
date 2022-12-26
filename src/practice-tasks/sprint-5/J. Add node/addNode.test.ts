import CNode from "../common/CNode";
import addNode from "./addNode";

describe("addNode", () => {
  test("#1", () => {
    const root = new CNode(7, null, new CNode(8, new CNode(7)));

    const result = addNode(root, 6);

    expect(result).toEqual(root);
    expect(result?.left?.value).toEqual(6);
  });
});
