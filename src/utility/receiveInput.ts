import readline from 'readline'
import * as process from "process";
import { parseArgument, ParsedArg } from "./parseArgument";

export function receiveInput<T extends (args: ParsedArg[]) => void>(cb: T, parser = parseArgument) {
  const rl = readline.createInterface({
    input: process.stdin
  })

  const input: ParsedArg[] = []

  rl.on('line', (line) => {
    const parsedLine = parser(line);
    if (typeof parsedLine !== 'undefined') {
      input.push((parsedLine))
    }
  })

  process.stdin.on('end', cb.bind(null, input))
}
