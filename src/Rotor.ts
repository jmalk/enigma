import { Letter } from "./Letter";
import { alphabet } from "./alphabet";

export type RotorWiring = Record<Letter, Letter>;

export class Rotor {
  wiring: RotorWiring;
  position: Letter;

  constructor(wiring: RotorWiring, initialPosition?: Letter) {
    this.wiring = wiring;
    this.position = initialPosition ?? "A";
  }

  private inputAdjustedByPosition = (letter: Letter) => {
    const indexOfLetter = alphabet.indexOf(letter);
    const indexOfPosition = alphabet.indexOf(this.position);
    const targetIndex = (indexOfLetter + indexOfPosition) % 26;
    return alphabet[targetIndex];
  };

  private getKeyOfValue(object, value) {
    return Object.keys(object).find((key) => object[key] === value);
  }

  transform(letter: Letter) {
    return this.wiring[this.inputAdjustedByPosition(letter)];
  }

  reverseTransform(letter: Letter) {
    return this.getKeyOfValue(this.wiring, letter);
  }

  setPosition(newPosition: Letter) {
    this.position = newPosition;
    return this;
  }
}
