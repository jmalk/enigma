export type Letter =
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

export const letters: Letter[] = [
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

export const rotor = (mapping: Record<Letter, Letter>) => {
  let position: Letter = "A";

  const inputAdjustedByPosition = (letter: Letter, position: Letter) => {
    const indexOfLetter = letters.indexOf(letter);
    const indexOfPosition = letters.indexOf(position);
    const targetIndex = (indexOfLetter + indexOfPosition) % 26;
    return letters[targetIndex];
  };

  return {
    transform: (letter: Letter): Letter => {
      return mapping[inputAdjustedByPosition(letter, position)];
    },
    setPosition: (newPosition: Letter) => (position = newPosition),
  };
};
