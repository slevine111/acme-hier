const expect = require('chai').expect
const showManagementStructure = require('./showManagementStructure')

describe('showManagementStructure function testing', () => {
  it('showManagementStructure is a function', () => {
    expect(typeof showManagementStructure).to.equal('function')
  })
  it('showManagementStructure returns a string', () => {
    const users = [
      { id: 1, name: 'moe' },
      { id: 2, name: 'larry', managerId: 1 },
      { id: 3, name: 'curly', managerId: 2 },
      { id: 4, name: 'shep', managerId: 1 },
      { id: 5, name: 'groucho', managerId: 4 }
    ]
    expect(typeof showManagementStructure(users)).to.equal('string')
  })
  it('showManagementStructure returns the correct result', () => {
    const oneUser = [{ id: 1, name: 'moe' }]
    expect(showManagementStructure(oneUser)).to.equal('\nmoe')

    const users = [
      { id: 1, name: 'moe' },
      { id: 2, name: 'larry', managerId: 1 },
      { id: 3, name: 'curly', managerId: 2 },
      { id: 4, name: 'shep', managerId: 1 },
      { id: 5, name: 'groucho', managerId: 4 }
    ]
    let result = showManagementStructure(users)
    expect(result).to.equal(
      '\nmoe\n    - larry\n            - curly\n    - shep\n           - groucho'
    )
  })
})
