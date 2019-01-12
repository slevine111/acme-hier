let showManagementStructure = input => {
  let copyOfInput = [...input]
  let string = ''
  let lengthOfManagerLine
  let stringForElement
  copyOfInput.forEach((element, index, arr) => {
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

module.exports = showManagementStructure
