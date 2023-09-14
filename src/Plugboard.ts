import { Letter } from "./Letter";

type Connection = [Letter, Letter];
type PlugboardConfig = Connection[];

export const plugboard =
  (config: PlugboardConfig) =>
  (input: Letter): Letter => {
    let result = null;
    config.forEach((connection) => {
      if (input === connection?.[0]) {
        result = connection[1];
      }
      if (input === connection?.[1]) {
        result = connection[0];
      }
    });

    return result ?? input;
  };
