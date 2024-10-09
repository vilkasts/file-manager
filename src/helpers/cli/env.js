const parseEnv = () => {
  const variablesArray = []
  
  for (const variableKey in process.env) {
    if (variableKey.startsWith('RSS_')) {
      variablesArray.push(`${variableKey}=${process.env[ variableKey ]}`)
    }
  }
  
  console.log(variablesArray.join('; '))
}

parseEnv();