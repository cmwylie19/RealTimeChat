
import { findKey, removeKey, addKey, findId } from '../index';

const MockStore = {
  1: "Snapshot",
  2: "Test",
  3: "QA",
  4: "Integration"
}

describe("User Store Actions", () => {
  test('createUser calls fetch with the right args and returns the user id', () => {
    expect(findKey(MockStore, '3')).toBe('QA');
  });

  test('createUser calls fetch with the right args and returns the user id', () => {
    expect(findId(MockStore, 'QA')).toBe('3');
  });


  test('removeKey ', () => {
    let Store = removeKey(MockStore, '2')
    expect(Object.entries(Store)).not.toContain(2)
  })

  test('addKey ', () => {
    let Store = addKey(MockStore, { id: 9, email: 'case' })
    expect(Object.entries(Store).map(key => key[0])).toContain("9")
  })
})
