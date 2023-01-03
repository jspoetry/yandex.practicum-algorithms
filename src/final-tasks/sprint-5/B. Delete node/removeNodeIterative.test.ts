import CNode from "../../../practice-tasks/sprint-5/common/CNode";
import { removeNodeIterative } from "./removeNodeIterative";

describe("removeNodeIterative", () => {
  test("#1", () => {
    const root = new CNode(
      5,
      new CNode(1, null, new CNode(3, new CNode(2))),
      new CNode(10, new CNode(8, new CNode(6)))
    );

    const result = removeNodeIterative(root, 10);

    expect(result?.value).toEqual(root.value);
    expect(result).toEqual(root);
    expect(result?.right?.value).toEqual(8);
  });

  test("#2 remove root of tree", () => {
    const node1 = new CNode(2, null, null);
    const node2 = new CNode(3, node1, null);
    const node3 = new CNode(1, null, node2);
    const node4 = new CNode(6, null, null);
    const node5 = new CNode(8, node4, null);
    const node6 = new CNode(10, node5, null);

    const root = new CNode(5, node3, node6);

    const result = removeNodeIterative(root, 5);

    expect(result).toBe(node2);
    expect(result?.value).toEqual(3);
    expect(node3.right).toBe(node1);
  });

  test("#3", () => {
    const node10 = new CNode(99);
    const node9 = new CNode(72);
    const node8 = new CNode(91, node9, node10);
    const node7 = new CNode(50);
    const node6 = new CNode(32);
    const node5 = new CNode(29, node6);
    const node4 = new CNode(11);
    const node3 = new CNode(65, node7, node8);
    const node2 = new CNode(20, node4, node5);
    const root = new CNode(41, node2, node3);

    const result = removeNodeIterative(root, 41);

    expect(result).not.toBe(root);
    expect(result).toBe(node5);
    expect(node2.right).toBe(node6);
  });

  test("#4", () => {
    const node7 = new CNode(7);
    const node6 = new CNode(5);
    const node5 = new CNode(3);
    const node4 = new CNode(1);
    const node3 = new CNode(6, node6, node7);
    const node2 = new CNode(2, node4, node5);
    const root = new CNode(4, node2, node3);

    const result = removeNodeIterative(root, 4);

    expect(result).not.toBe(root);
    expect(result).toBe(node5);
    expect(node2.right).toBe(null);
    expect(node2.left).toBe(node4);
  });

  test("#5", () => {
    const node7 = new CNode(7);
    const node6 = new CNode(5);
    const node5 = new CNode(3);
    const node4 = new CNode(1);
    const node3 = new CNode(6, node6, node7);
    const node2 = new CNode(2, node4, node5);
    const root = new CNode(4, node2, node3);

    const result = removeNodeIterative(root, 6);

    expect(result?.right).toBe(node6);
    expect(node6.right).toBe(node7);
    expect(node6.left).not.toBe(node6);
  });
});
