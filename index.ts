export type Char =
  | "A"
  | "B"
  | "C"
  | "D"
  | "E"
  | "F"
  | "G"
  | "H"
  | "I"
  | "J"
  | "K"
  | "L"
  | "M"
  | "N"
  | "O"
  | "P"
  | "Q"
  | "R"
  | "S"
  | "T"
  | "U"
  | "V"
  | "W"
  | "X"
  | "Y"
  | "Z";

export const characters: Char[] = [
  "A",
  "B",
  "C",
  "D",
  "E",
  "F",
  "G",
  "H",
  "I",
  "J",
  "K",
  "L",
  "M",
  "N",
  "O",
  "P",
  "Q",
  "R",
  "S",
  "T",
  "U",
  "V",
  "W",
  "X",
  "Y",
  "Z",
];

export const rotor = (mapping: Record<Char, Char>) => {
  let position: Char = "A";

  const inputAdjustedByPosition = (character: Char, position: Char) => {
    const indexOfCharacter = characters.indexOf(character);
    const indexOfPosition = characters.indexOf(position);
    const targetIndex = (indexOfCharacter + indexOfPosition) % 26;
    return characters[targetIndex];
  };

  return {
    transform: (char: Char): Char => {
      return mapping[inputAdjustedByPosition(char, position)];
    },
    setPosition: (newPosition: Char) => (position = newPosition),
  };
};
