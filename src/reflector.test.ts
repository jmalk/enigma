// Using UKW-B from https://www.cryptomuseum.com/crypto/enigma/i/index.htm#wiring
// ABCDEFGHIJKLMNOPQRSTUVWXYZ
// YRUHQSLDPXNGOKMIEBFZCWVJAT

import { reflector } from "./reflector";
import { alphabet } from "./alphabet";
import { ukwBWiring } from "./config";

alphabet.forEach((letter) => {
  test(`Reflector UKW-B replaces ${letter} with ${ukwBWiring[letter]}`, () => {
    const result = reflector(ukwBWiring)(letter);

    expect(result).toBe(ukwBWiring[letter]);
  });
});
