import { Letter } from "./Letter";

type Connection = [Letter, Letter];
type Connections = Connection[];

export const plugboard =
  (connections: Connections) =>
  (input: Letter): Letter => {
    const transformedLetter = connections
      .find((connection) => connection.includes(input))
      ?.filter((letter) => letter !== input)[0]; // Return the OTHER letter from the connection that includes the input

    // Return the result, or if no connections included the input, return the input unchanged.
    return transformedLetter ?? input;
  };
