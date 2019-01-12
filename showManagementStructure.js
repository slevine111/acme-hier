const users = [
  { id: 1, name: 'moe' },
  { id: 2, name: 'larry', managerId: 1 },
  { id: 3, name: 'curly', managerId: 2 },
  { id: 4, name: 'shep', managerId: 1 },
  { id: 5, name: 'groucho', managerId: 4 }
]

let showManagementStructure = input => {
  let string = ''
  let lengthOfManagerLine
  let stringForElement
  input.forEach((element, index, arr) => {
    if (index === 0) {
      element.numChars = element.name.length
      stringForElement = element.name
    } else {
      lengthOfManagerLine = arr[element.managerId - 1].numChars
      stringForElement = `${' '.repeat(lengthOfManagerLine + 1)}- ${
        element.name
      }`
      element.numChars = stringForElement.length
    }
    string = `${string}\n${stringForElement}`
  })
  return string
}

showManagementStructure(users)
