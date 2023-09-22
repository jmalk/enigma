import { Letter } from "./Letter";
import { Rotor, RotorWiring } from "./Rotor";
import { reflector } from "./reflector";
import { Connections, plugboard } from "./plugboard";

export const enigma =
  (
    reflectorWiring: RotorWiring,
    plugboardConfig: Connections,
    rightRotorWiring?: RotorWiring,
  ) =>
  (letter: Letter) => {
    if (!rightRotorWiring) {
      const ukw = reflector(reflectorWiring);
      const pb = plugboard(plugboardConfig);

      // PB is symmetrical, so signal can go both in and out through it, I think.
      return pb(ukw(pb(letter)));
    }

    const ukw = reflector(reflectorWiring);
    const pb = plugboard(plugboardConfig);
    const rightRotor = new Rotor(rightRotorWiring);

    // PB is symmetrical, so signal can go both in and out through it, I think.
    return pb(
      rightRotor.reverseTransform(ukw(rightRotor.transform(pb(letter)))),
    );
  };
