const add = require('../src/add')

describe('add() test', () => {
    it('should adds positive number', () => {
        expect(add(1, 3)).toBe(4)
    })
    it('should adds positive and negative number', () => {
        expect(add(-1, 3)).toBe(2)
    })
})