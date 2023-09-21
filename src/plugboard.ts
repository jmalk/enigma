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

// Probably opportunity to extract smaller helper functions out of this one,
// or use a library like lodash.
function throwIfOneLetterConnectedToMultiple(connections: Connection[]) {
  // Flatten connections into a single array of letters
  const all = connections.reduce((all, connection) => {
    return [...all, ...connection];
  }, []);

  // Make a Set from the array - sets will de-duplicate values to only contain unique ones
  const setAll = new Set(all);

  // If all letters in connections were unique, there should be connections * 2 of them in the set.
  // If not, throw an error.
  if (setAll.size !== connections.length * 2) {
    throw new Error("Each letter may only be connected to one other letter");
  }
}

export const plugboard = (connections: Connections) => {
  throwIfAnyConnectedToSelf(connections);
  throwIfOneLetterConnectedToMultiple(connections);

  return (input: Letter): Letter => {
    const transformedLetter = connections
      .find((connection) => connection.includes(input))
      ?.filter((letter) => letter !== input)[0]; // Return the OTHER letter from the connection that includes the input

    // Return the result, or if no connections included the input, return the input unchanged.
    return transformedLetter ?? input;
  };
};
