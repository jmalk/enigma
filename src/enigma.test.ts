import { enigma } from "./enigma";
import { rotorIWiring, ukwBWiring } from "./config";
import { Connections } from "./plugboard";

test("Transforms a letter via the (empty) plugboard, rotor I, reflector, back through rotor I", () => {
  const plugboardConfig: Connections = [];
  const e = enigma(ukwBWiring, plugboardConfig, rotorIWiring);

  // rotor I
  // A => E
  // reflector
  // E => Q
  // reverse rotor I
  // Q => H

  expect(e("A")).toBe("H");
});

test("Transforms a letter via the plugboard, rotor I, reflector, back through rotor I, back through plugboard", () => {
  const plugboardConfig: Connections = [
    ["A", "B"],
    ["K", "T"],
  ];
  const e = enigma(ukwBWiring, plugboardConfig, rotorIWiring);

  // plugboard
  // A => B
  // rotor I
  // B => K
  // reflector
  // K => N
  // reverse rotor I
  // N => K
  // plugboard
  // K => T

  expect(e("A")).toBe("T");
});
