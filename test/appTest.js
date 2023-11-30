const { assert } = require("chai");
const mString = require("../index");

const falseValArray = [0, "", null, undefined];

describe("App", () => {
  it("Should return random string in range ", () => {
    assert.equal(mString.random({ min: 9, max: 9 }).length, 9);
  });

  it("Should return random string in range with equality below ", () => {
    assert.isBelow(mString.random({ min: 9, max: 14 }).length, 15);
  });

  it("Should return random string in range with equality above ", () => {
    assert.isAbove(mString.random({ min: 10, max: 14 }).length, 9);
  });

  for (let i = 0; i < 100; i++) {
    if (i >= 3 && i <= 8) {
      it(`shortId: Should return short id with length ${i} and equal`, () => {
        assert.equal(mString.shortId({ charLength: i }).length, i);
      });
    } else if (i < 3) {
      it(`shortId: Should return short id with length ${i} and 3`, () => {
        assert.equal(mString.shortId({ charLength: i }).length, 3);
      });
    } else if (i > 8) {
      it(`shortId: Should return short id with length ${i} and below`, () => {
        assert.isBelow(mString.shortId({ charLength: i }).length, i);
      });
    }
  }

  for (var i = 0; i < 100; i++) {
    it(`random(): Should return string id with length ${i} and should be equal`, () => {
      assert.equal(mString.random({ charLength: i }).length, i);
    });
  }

  it("no value in max", () => {
    assert.isAbove(mString.random({ min: 3 }).length, 10);
  });

  it("no value in min", () => {
    assert.isAbove(mString.random({ max: 7 }).length, 10);
  });

  for (let i = 0; i < 100; i++) {
    let stringToBeAdded = mString.random({ min: 7, max: 9 });
    it("startWith " + stringToBeAdded, () => {
      assert.include(
        mString.random({ startWith: stringToBeAdded }),
        stringToBeAdded,
        "it contains the: " + stringToBeAdded
      );
    });
  }

  for (let i = 0; i < 100; i++) {
    let stringToBeAdded = mString.random({ min: 7, max: 9 });
    it("endWith " + stringToBeAdded, () => {
      assert.include(
        mString.random({ endWith: stringToBeAdded }),
        stringToBeAdded,
        "it contains the: " + stringToBeAdded
      );
    });
  }

  it("Hash should Returning Integer", () => {
    assert.typeOf(mString.hashCode("npm js"), "number");
  });

  falseValArray.forEach((x) => {
    it("Hash should Returning 0", () => {
      assert.equal(mString.hashCode(x), 0);
    });
  });

  it("Should generate a valid UUIDv4", function () {
    // Regular expression to match the UUIDv4 pattern
    const uuidRegex =
      /^[0-9a-f]{8}-[0-9a-f]{4}-4[0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$/i;

    // Generate a UUIDv4 using the function
    const generatedUuid = mString.uuidv4();

    // Check if the generated UUID matches the expected pattern
    assert.ok(uuidRegex.test(generatedUuid), "Generated UUID is not valid");
  });

  it("Generate 10000 uuid and all should be uinique", function () {
    // Regular expression to match the UUIDv4 pattern
    const uuidRegex =
      /^[0-9a-f]{8}-[0-9a-f]{4}-4[0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$/i;
    let dict = {};
    // Generate a UUIDv4 using the function
    const generatedUuid = mString.uuidv4();
    for (let index = 0; index < 10000; index++) {
      let uuidv4 = mString.uuidv4();
      if (dict[uuidv4]) assert.fail(`Duplicate uuidv4 found: ${uuidv4}`);
      else dict[uuidv4] = 1;
    }
    // Check if the generated UUID matches the expected pattern
    assert.isOk(10000, "All 10000 generated UUID unique");
  });
});
