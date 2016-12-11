jest.unmock('./asdf')

const asdf = require('./asdf');

test('a', function() {
  expect(asdf.a(4)).toBe(4);
});

test('b', function() {
  expect(() => asdf.b()).not.toThrow();
});

test('c', function() {
  expect(() => asdf.c()).not.toThrow();
});