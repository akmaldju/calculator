//import calculate from './calculate';
const calculate = require('./calculate');

test('adds 1 + 2 to equal 3', () => {
  expect(calculate({
    total: '1',
    next: '2',
    operation: '+',
  }, '=')).toEqual({
    total: '3',
    next: null,
    operation: null,
  });
});