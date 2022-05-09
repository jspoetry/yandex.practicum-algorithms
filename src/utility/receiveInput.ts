import readline from 'readline'
import * as process from "process";
import { parseArgument } from "./parseArgument";

export function receiveInput<T extends Function>(cb: T, parser = parseArgument) {
  const rl = readline.createInterface({
    input: process.stdin
  })

  const input = []

  rl.on('line', (line) => {
    input.push(parser(line))
  })

  process.stdin.on('end', cb.bind(null, input))
}
