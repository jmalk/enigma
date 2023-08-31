import { Rotor, RotorWiring } from "./Rotor";
import { alphabet } from "./alphabet";

// Enigma I, Rotor I
// ABCDEFGHIJKLMNOPQRSTUVWXYZ
// EKMFLGDQVZNTOWYHXUSPAIBRCJ
// - https://en.wikipedia.org/wiki/Enigma_rotor_details#Rotor_wiring_tables

const rotorIWiring: RotorWiring = {
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
  const rotorI = new Rotor(rotorIWiring);

  alphabet.forEach((letter) => {
    expect(rotorI.transform(letter)).toBe(rotorIWiring[letter]);
  });
});

test(`You can't get a rotor to transform two letters at once`, () => {
  const rotorI = new Rotor(rotorIWiring);

  // @ts-expect-error
  rotorI.transform("AB");
});

test(`Rotor I in position "B" maps A to K`, () => {
  const rotorI = new Rotor(rotorIWiring, "B");

  expect(rotorI.transform("A")).toBe("K");
});

test(`Rotor I in position "B" maps B to M`, () => {
  const rotorI = new Rotor(rotorIWiring, "B");

  expect(rotorI.transform("B")).toBe("M");
});

test(`Rotor I in position "B" maps C to F`, () => {
  const rotorI = new Rotor(rotorIWiring, "B");

  expect(rotorI.transform("C")).toBe("F");
});

test(`Rotor I in position "B" maps Z to E`, () => {
  const rotorI = new Rotor(rotorIWiring, "B");

  expect(rotorI.transform("Z")).toBe("E");
});

test(`Rotor I in position "Z" maps A to J`, () => {
  const rotorI = new Rotor(rotorIWiring, "Z");

  expect(rotorI.transform("A")).toBe("J");
});

test(`Rotor I in position "Z" maps A to J still works if you chain the calls`, () => {
  expect(new Rotor(rotorIWiring).setPosition("Z").transform("A")).toBe("J");
});
