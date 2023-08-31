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

  private outputAdjustedByPosition = (letter: Letter) => {
    const indexOfLetter = alphabet.indexOf(letter);
    const indexOfPosition = alphabet.indexOf(this.position);
    const targetIndex = (indexOfLetter - indexOfPosition + 26) % 26;
    return alphabet[targetIndex];
  };

  private getKeyOfValue(object: RotorWiring, value: Letter) {
    return Object.keys(object).find((key) => object[key] === value);
  }

  transform(letter: Letter) {
    return this.wiring[this.inputAdjustedByPosition(letter)];
  }

  reverseTransform(letter: Letter) {
    const afterWiring = this.getKeyOfValue(this.wiring, letter);
    if (!afterWiring || !isLetter(afterWiring)) {
      // Maybe I should try some other data structure for better type assertions?
      throw new Error(
        "Calculating wiring of reverse transform did not result in a letter",
      );
    }
    const afterOffset = this.outputAdjustedByPosition(afterWiring);
    return afterOffset;
  }

  setPosition(newPosition: Letter) {
    this.position = newPosition;
    return this;
  }
}

const isLetter = (maybeLetter: string): maybeLetter is Letter =>
  alphabet.includes(maybeLetter as Letter);
