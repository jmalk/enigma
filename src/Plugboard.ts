import { Letter } from "./Letter";

type Connection = [Letter, Letter];
type Connections = Connection[];

function throwIfAnyConnectedToSelf(connections: Connection[]) {
  connections.forEach((connection, index) => {
    if (connection[0] === connection[1]) {
      throw new Error(
        `Plugboard should not have a letter connected to itself. See connection at index ${index}`,
      );
    }
  });
}

export const plugboard = (connections: Connections) => {
  throwIfAnyConnectedToSelf(connections);

  return (input: Letter): Letter => {
    const transformedLetter = connections
      .find((connection) => connection.includes(input))
      ?.filter((letter) => letter !== input)[0]; // Return the OTHER letter from the connection that includes the input

    // Return the result, or if no connections included the input, return the input unchanged.
    return transformedLetter ?? input;
  };
};
