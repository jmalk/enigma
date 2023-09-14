import { plugboard } from "./Plugboard";
import { Letter } from "./Letter";
import { alphabet } from "./alphabet";

describe("A plugboard with no letters connected", () => {
  const setupPlugboard = () => plugboard([]);

  alphabet.forEach((letter) => {
    test(`returns ${letter} unchanged`, () => {
      const pb = setupPlugboard();

      expect(pb(letter)).toBe(letter);
    });
  });
});

describe("A plugboard with A connected to B", () => {
  const setupPlugboard_AB = () => plugboard([["A", "B"]]);

  test("replaces A with B", () => {
    const pb = setupPlugboard_AB();

    expect(pb("A")).toBe("B");
  });

  // Plugboard connections are self-reciprocal, letters must be swapped in pairs.
  // See https://www.cryptomuseum.com/crypto/enigma/i/sb.htm
  test("replaces B with A", () => {
    const pb = setupPlugboard_AB();

    expect(pb("B")).toBe("A");
  });

  const otherLetters: Letter[] = [
    "C",
    "D",
    "E",
    "F",
    "G",
    "H",
    "I",
    "J",
    "K",
    "L",
    "M",
    "N",
    "O",
    "P",
    "Q",
    "R",
    "S",
    "T",
    "U",
    "V",
    "W",
    "X",
    "Y",
    "Z",
  ];

  otherLetters.forEach((letter) => {
    test(`returns ${letter} unchanged`, () => {
      const pb = setupPlugboard_AB();

      expect(pb(letter)).toBe(letter);
    });
  });
});

describe("A plugboard with C connected to E", () => {
  const setupPlugboard_CE = () => plugboard([["C", "E"]]);

  test("replaces C with E", () => {
    const pb = setupPlugboard_CE();

    expect(pb("C")).toBe("E");
  });

  test("replaces E with C", () => {
    const pb = setupPlugboard_CE();

    expect(pb("E")).toBe("C");
  });
});

describe("A plugboard with F connected to H and G connected to I", () => {
  const setupPlugboard_FH_GI = () =>
    plugboard([
      ["F", "H"],
      ["G", "I"],
    ]);

  test("replaces F with H", () => {
    const pb = setupPlugboard_FH_GI();

    expect(pb("F")).toBe("H");
  });

  test("replaces G with I", () => {
    const pb = setupPlugboard_FH_GI();

    expect(pb("G")).toBe("I");
  });
});

test("A plugboard errors if you try to connect a letter to itself", () => {
  expect(() => plugboard([["A", "A"]])).toThrow();
  expect(() =>
    plugboard([
      ["A", "B"],
      ["C", "C"],
    ]),
  ).toThrow();
});

test.todo(
  "A plugboard errors if you try to connect a letter to more than one other letter",
);
