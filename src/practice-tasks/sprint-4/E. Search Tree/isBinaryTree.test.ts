import isBinaryTree from "./isBinarySearchTree";
import CNode from "../common/CNode";

describe("isBinaryTree", () => {
  test("#1", () => {
    const node1 = new CNode(1, null, null);
    const node2 = new CNode(4, null, null);
    const node3 = new CNode(3, node1, node2);
    const node4 = new CNode(8, null, null);
    const node5 = new CNode(5, node3, node4);

    const result = isBinaryTree(node5);

    expect(result).toBeTruthy();
  });

  test("#2", () => {
    const root = new CNode(
      5,
      new CNode(3, new CNode(4), new CNode(4)),
      new CNode(8)
    );

    const result = isBinaryTree(root);

    expect(result).toBeFalsy();
  });

  test("#3", () => {
    const root = new CNode(2, new CNode(5), new CNode(3));

    const result = isBinaryTree(root);

    expect(result).toBeFalsy();
  });

  test("#4", () => {
    const root = new CNode(
      5,
      new CNode(3, new CNode(1), new CNode(3)),
      new CNode(8, new CNode(6), new CNode(9))
    );

    const result = isBinaryTree(root);

    expect(result).toBeFalsy();
  });

  test("#5", () => {
    const root = new CNode(
      5,
      new CNode(4, new CNode(2), new CNode(6)),
      new CNode(6, new CNode(4), new CNode(8))
    );

    const result = isBinaryTree(root);

    expect(result).toBeFalsy();
  });
});
