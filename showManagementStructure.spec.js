const expect = require('chai').expect
const showManagementStructure = require('./showManagementStructure')

describe('showManagementStructure function testing', () => {
  it('showManagementStructure is a function', () => {
    expect(typeof showManagementStructure).to.equal('function')
  })
  it('showManagementStructure returns a string', () => {
    let users = [{ id: 1, name: 'moe' }]
    expect(typeof showManagementStructure(users)).to.equal('string')
  })
  it('showManagementStructure returns the correct result with one user', () => {
    let users = [{ id: 1, name: 'moe' }]
    expect(showManagementStructure(users)).to.equal('\nmoe')
  })
  it('showManagementStructure retuns the correct when Id 1 is the ultimate boss', () => {
    let users = [
      { id: 1, name: 'moe' },
      { id: 2, name: 'larry', managerId: 1 },
      { id: 3, name: 'curly', managerId: 2 },
      { id: 4, name: 'shep', managerId: 1 },
      { id: 5, name: 'groucho', managerId: 4 }
    ]
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
  it('showManagementStrcuture retuns the correct result even if Id 1 is not the ultimate boss', () => {
    const users = [
      { id: 1, name: 'moe', managerId: 6 },
      { id: 2, name: 'larry', managerId: 5 },
      { id: 3, name: 'curly', managerId: 1 },
      { id: 4, name: 'shep', managerId: 1 },
      { id: 5, name: 'groucho', managerId: 1 },
      { id: 6, name: 'grouchot' },
      { id: 20, name: 'ty', managerId: 3 }
    ]
    let result = showManagementStructure(users)
    expect(result).to.equal(
      `
grouchot
         - moe
               - curly
                       - ty
               - shep
               - groucho
                         - larry`
    )
  })
})
