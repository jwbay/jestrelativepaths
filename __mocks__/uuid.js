const mock = jest.genMockFromModule('uuid');
mock.v4 = jest.fn(function(v) {
  return v;
});

module.exports = mock;