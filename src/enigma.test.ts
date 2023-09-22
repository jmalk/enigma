import { enigma } from "./enigma";
import { ukwBWiring } from "./config";
import { Connections } from "./plugboard";

test("Transforms a letter via the plugboard and reflector (but not back through the plugboard yet)", () => {
  const plugboardConfig: Connections = [["A", "B"]];
  const e = enigma(ukwBWiring, plugboardConfig);

  expect(e("A")).toBe("R");
  expect(e("B")).toBe("Y");
  expect(e("C")).toBe("U");
});

test("Transforms a letter via the plugboard and reflector then back through the plugboard", () => {
  const plugboardConfig: Connections = [
    ["A", "B"],
    ["R", "Y"],
  ];
  const e = enigma(ukwBWiring, plugboardConfig);

  expect(e("A")).toBe("Y");
  expect(e("B")).toBe("R");
  expect(e("C")).toBe("U");
});
