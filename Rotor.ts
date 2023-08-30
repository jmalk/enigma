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

export const alphabet: readonly Letter[] = [
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

export type RotorMapping = Record<Letter, Letter>;

export class Rotor {
  mapping: RotorMapping;
  position: Letter;

  constructor(mapping: RotorMapping, initialPosition?: Letter) {
    this.mapping = mapping;
    this.position = initialPosition ?? "A";
  }

  private inputAdjustedByPosition = (letter: Letter) => {
    const indexOfLetter = alphabet.indexOf(letter);
    const indexOfPosition = alphabet.indexOf(this.position);
    const targetIndex = (indexOfLetter + indexOfPosition) % 26;
    return alphabet[targetIndex];
  };

  transform(letter: Letter) {
    return this.mapping[this.inputAdjustedByPosition(letter)];
  }

  setPosition(newPosition: Letter) {
    this.position = newPosition;
    return this;
  }
}
