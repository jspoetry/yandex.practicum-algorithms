const tests = Array.from(document.querySelectorAll('.test-report'))

copy(tests.map((element) => {
  const [input, output] = Array.from(element.querySelectorAll('.test-report__data'))

  return JSON.stringify({
    input: input.textContent,
    output: output.textContent
  })
}))