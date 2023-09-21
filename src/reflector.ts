import { Letter } from "./Letter";
import { RotorWiring } from "./Rotor";

export const reflector =
  (wiring: RotorWiring) =>
  (letter: Letter): Letter =>
    wiring[letter];
