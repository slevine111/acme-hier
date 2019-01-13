const expect = require('chai').expect
const showManagementStructure = require('./showManagementStructure')

describe('showManagementStructure function testing', () => {
  let users
  beforeEach(() => {
    users = [
      { id: 1, name: 'moe' },
      { id: 2, name: 'larry', managerId: 1 },
      { id: 3, name: 'curly', managerId: 2 },
      { id: 4, name: 'shep', managerId: 1 },
      { id: 5, name: 'groucho', managerId: 4 }
    ]
  })

  it('showManagementStructure is a function', () => {
    expect(typeof showManagementStructure).to.equal('function')
  })
  it('showManagementStructure returns a string', () => {
    expect(typeof showManagementStructure(users)).to.equal('string')
  })
  it('showManagementStructure returns the correct result', () => {
    const oneUser = [{ id: 1, name: 'moe' }]
    expect(showManagementStructure(oneUser)).to.equal('\nmoe')
    let result = showManagementStructure(users)
    expect(result).to.equal(
      `
moe
    - larry
            - curly
    - shep
           - groucho`
    )
  })
})
