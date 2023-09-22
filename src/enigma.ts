import { Letter } from "./Letter";
import { RotorWiring } from "./Rotor";
import { reflector } from "./reflector";
import { Connections, plugboard } from "./plugboard";

export const enigma =
  (reflectorWiring: RotorWiring, plugboardConfig: Connections) =>
  (letter: Letter) => {
    const ukw = reflector(reflectorWiring);
    const pb = plugboard(plugboardConfig);

    // PB is symmetrical, so signal can go both in and out through it, I think.
    return pb(ukw(pb(letter)));
  };
