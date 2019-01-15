let showManagementStructure = input => {
  input = [...input]
  let bossId =
    input.findIndex(element => element.currentBossId) === -1
      ? input.filter(element => !element.managerId)[0].id
      : input[0].currentBossId
  let currentLength =
    input.findIndex(element => element.currentLength) === -1
      ? 0
      : input[0].currentLength
  let string = `${currentLength ? `${' '.repeat(currentLength + 1)}- ` : '\n'}${
    input.filter(element => element.id === bossId)[0].name
  }`
  currentLength = currentLength ? string.length : string.length - 1
  let peopleBelow = input
    .filter(user => user.managerId === bossId)
    .map(user => user.id)
  if (peopleBelow.length === 0) {
    return string
  }
  for (let i = 0; i < peopleBelow.length; i++) {
    string = `${string}\n${showManagementStructure(
      input.map(element => {
        return Object.assign({}, element, {
          currentBossId: peopleBelow[i],
          currentLength
        })
      })
    )}`
  }
  return string
}

module.exports = showManagementStructure
