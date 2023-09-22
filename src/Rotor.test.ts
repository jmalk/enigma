import { Rotor } from "./Rotor";
import { alphabet } from "./alphabet";
import { rotorIWiring } from "./config";

// Enigma I, Rotor I
// ABCDEFGHIJKLMNOPQRSTUVWXYZ
// EKMFLGDQVZNTOWYHXUSPAIBRCJ
// - https://en.wikipedia.org/wiki/Enigma_rotor_details#Rotor_wiring_tables

describe("Transform:", () => {
  alphabet.forEach((letter) => {
    test(`A rotor transforms from ${letter} to ${rotorIWiring[letter]} according to its wiring`, () => {
      const rotorI = new Rotor(rotorIWiring);

      expect(rotorI.transform(letter)).toBe(rotorIWiring[letter]);
    });
  });

  test(`You can't get a rotor to transform two letters at once`, () => {
    const rotorI = new Rotor(rotorIWiring);

    // @ts-expect-error
    rotorI.transform("AB");
  });
});

describe("Position:", () => {
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
});

describe("Reverse transformation:", () => {
  test(`Rotor I in position "A" maps E to A when used in reverse`, () => {
    const rotorI = new Rotor(rotorIWiring, "A");

    expect(rotorI.reverseTransform("E")).toBe("A");
  });

  test(`Rotor I in position "A" maps K to B when used in reverse`, () => {
    const rotorI = new Rotor(rotorIWiring, "A");

    expect(rotorI.reverseTransform("K")).toBe("B");
  });

  alphabet.forEach((letter) => {
    test(`A rotor reverse-transforms from ${rotorIWiring[letter]} to ${letter} according to its config`, () => {
      const rotorI = new Rotor(rotorIWiring);

      expect(rotorI.reverseTransform(rotorIWiring[letter])).toBe(letter);
    });
  });
});

describe("Position and reverse transformation:", () => {
  test(`Rotor I in position "B" reverse-transforms K to D`, () => {
    // Signal comes in at what would be "K" position.
    // But K is now L because you've rotated one click
    // L transforms to E via the wiring
    // But E is in D's position
    // So D should come out at the end.
    const rotorI = new Rotor(rotorIWiring, "B");

    expect(rotorI.reverseTransform("K")).toBe("D");
  });

  test(`Rotor I in position "B" reverse-transforms M to J`, () => {
    // Signal comes in at what would be "M" position.
    // But M is now N because you've rotated one click
    // N transforms to K via the wiring
    // But K is in J's position
    // So J should come out at the end.
    const rotorI = new Rotor(rotorIWiring, "B");

    expect(rotorI.reverseTransform("M")).toBe("J");
  });

  test(`Rotor I in position "B" reverse-transforms F to E`, () => {
    // Signal comes in at what would be "F" position.
    // But F is now G because you've rotated one click
    // G transforms to F via the wiring
    // But F is in E's position
    // So E should come out at the end.
    const rotorI = new Rotor(rotorIWiring, "B");

    expect(rotorI.reverseTransform("F")).toBe("E");
  });

  test(`Rotor I in position "B" reverse-transforms E to C`, () => {
    // Signal comes in at what would be "E" position.
    // But E is now F because you've rotated one click
    // F transforms to D via the wiring
    // But D is in C's position
    // So C should come out at the end.
    const rotorI = new Rotor(rotorIWiring, "B");

    expect(rotorI.reverseTransform("E")).toBe("C");
  });

  test(`Rotor I in position "Z" reverse-transforms J to W`, () => {
    // Signal comes in at what would be "J" position.
    // But J is now I because you've rotated twenty-six clicks
    // I transforms to V via the wiring
    // But V is in W's position
    // So W should come out at the end.
    const rotorI = new Rotor(rotorIWiring, "Z");

    expect(rotorI.reverseTransform("J")).toBe("W");
  });
});
