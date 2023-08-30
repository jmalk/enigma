import { rotorI } from ".";

// Enigma I, Rotor I
// ABCDEFGHIJKLMNOPQRSTUVWXYZ
// EKMFLGDQVZNTOWYHXUSPAIBRCJ
// - https://en.wikipedia.org/wiki/Enigma_rotor_details#Rotor_wiring_tables

const mapping = {
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

for (const [key, value] of Object.entries(mapping)) {
  test(`In position 1, Rotor I transforms ${key} to ${value}`, () => {
    expect(rotorI(key)).toBe(value);
  });
}
