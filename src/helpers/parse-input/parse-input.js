const parseInput = (input) => {
  const [command, ...argumentsArray] = input.trim().split(/\s+/)
  return { command, argumentsArray }
}

export { parseInput }