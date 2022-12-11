import { Node } from "./types";

export default class CNode implements Node {
  constructor(
    public value: number,
    public left: Node | null = null,
    public right: Node | null = null
  ) {}
}
