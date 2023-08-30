import { Char, rotor } from ".";

// Enigma I, Rotor I
// ABCDEFGHIJKLMNOPQRSTUVWXYZ
// EKMFLGDQVZNTOWYHXUSPAIBRCJ
// - https://en.wikipedia.org/wiki/Enigma_rotor_details#Rotor_wiring_tables

const characters: Char[] = [
  "A",
  "B",
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

const rotorIMapping: Record<Char, Char> = {
  A: "E",
  B: "K",
  C: "M",
  D: "F",
  E: "L",
  F: "G",
  G: "D",
  H: "Q",
  I: "V",
  J: "Z",
  K: "N",
  L: "T",
  M: "O",
  N: "W",
  O: "Y",
  P: "H",
  Q: "X",
  R: "U",
  S: "S",
  T: "P",
  U: "A",
  V: "I",
  W: "B",
  X: "R",
  Y: "C",
  Z: "J",
};

test(`A rotor transforms from one letter to another according to its config`, () => {
  const rotorI = rotor(rotorIMapping);

  characters.forEach((character) => {
    expect(rotorI(character)).toBe(rotorIMapping[character]);
  });
});

test(`You can't get a rotor to transform two characters at once`, () => {
  const rotorI = rotor(rotorIMapping);

  // @ts-expect-error
  rotorI("AB");
});
