import { Letter } from "./Letter";
import { RotorWiring } from "./Rotor";
import { reflector } from "./reflector";
import { Connections, plugboard } from "./plugboard";

export const enigma =
  (reflectorWiring: RotorWiring, plugboardConfig: Connections) =>
  (letter: Letter) => {
    const ukw = reflector(reflectorWiring);
    const pb = plugboard(plugboardConfig);

    const afterPlugboard = pb(letter);
    const afterReflector = ukw(afterPlugboard);
    return pb(afterReflector);
  };
