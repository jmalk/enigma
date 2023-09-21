// Using UKW-B from https://www.cryptomuseum.com/crypto/enigma/i/index.htm#wiring
// ABCDEFGHIJKLMNOPQRSTUVWXYZ
// YRUHQSLDPXNGOKMIEBFZCWVJAT

import { reflector } from "./reflector";
import { RotorWiring } from "./Rotor";
import { alphabet } from "./alphabet";

// TODO: The letters must be in pairs here, so it has more in common with plugboard config than rotor wiring. Might be worth looking at enforcing that.
const ukwBWiring: RotorWiring = {
  A: "Y",
  B: "R",
  C: "U",
  D: "H",
  E: "Q",
  F: "S",
  G: "L",
  H: "D",
  I: "P",
  J: "X",
  K: "N",
  L: "G",
  M: "O",
  N: "K",
  O: "M",
  P: "I",
  Q: "E",
  R: "B",
  S: "F",
  T: "Z",
  U: "C",
  V: "W",
  W: "V",
  X: "J",
  Y: "A",
  Z: "T",
};

alphabet.forEach((letter) => {
  test(`Reflector UKW-B replaces ${letter} with ${ukwBWiring[letter]}`, () => {
    const result = reflector(ukwBWiring)(letter);

    expect(result).toBe(ukwBWiring[letter]);
  });
});
