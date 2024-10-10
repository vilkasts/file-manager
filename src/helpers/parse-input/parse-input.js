const parseInput = (input) => {
  const [command, ...args] = input.trim().split(/\s+/)
  return { command, args }
}

export { parseInput }