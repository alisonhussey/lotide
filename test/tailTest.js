const assert = require('chai').assert;
const tail = require('../tail');

describe("#tail", () => {
  it("should return 2 elements for ['Hello', 'Lighthouse', 'Labs']", () => {
    assert.deepEqual(tail(['Hello', 'Lighthouse', 'Labs']).length, 2);
  });
  it("returns ['Lighthouse', 'Labs'] for ['Hello', 'Lighthouse', 'Labs']", () => {
    assert.deepEqual(tail(['Hello', 'Lighthouse', 'Labs']), ['Lighthouse', 'Labs']);
  });
  it("returns 'Labs' for ['Hello', 'Lighthouse', 'Labs']", () => {
    assert.deepEqual(tail(['Hello', 'Lighthouse', 'Labs'])[1], 'Labs');
  });

  it("returns 3 for ['Hello', 'Lighthouse', 'Labs']", () => {
    tail(['Hello', 'Lighthouse', 'Labs'])
    assert.deepEqual(['Hello', 'Lighthouse', 'Labs'].length, 3);
  });
});