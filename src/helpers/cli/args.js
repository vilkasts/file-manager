const parseArgs = () => {
  const argumentsArray = []
  
  for (let i = 0; i < process.argv.length; i = i + 2) {
    if (process.argv[ i ]?.startsWith('--')) {
      const argumentName = process.argv[ i ].replace('--', '')
      argumentsArray.push(`${argumentName} is ${process.argv[ i + 1 ]}`)
    }
  }
  
  console.log(argumentsArray.join(', '))
}

parseArgs();