// UUID was picked only because it's a small npm package with a couple different function exports.
// Implementation not relevant.
const uuid = require('uuid');
const top = require('top-level-module');

module.exports = {
  a: function(obj) {
    // Something that we need manually mocked.
    return uuid.v4(obj);
  },
  b: function() {
    // Something we want jest to automock.
    // Errors during the test with `uuid.v1 is not a function` because genMockFromModule
    // picks up the same manual mock instead of the actual module from node_modules. This is
    // because of the ./ in the moduleDirectories. Jest ends up exporting an empty object 
    // for the mock due to the recursive require.
    return uuid.v1();
  },
  c: function() {
    // Something from a rooted import.
    return top();
  },
}