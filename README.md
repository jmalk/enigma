# Enigma

An Enigma I machine emulator written in TypeScript.

## Resources

- https://www.cryptomuseum.com/crypto/enigma/i/index.htm
- https://observablehq.com/@tmcw/enigma-machine
- https://github.com/gchq/CyberChef/blob/master/src/core/lib/Enigma.mjs

### Questions

- [ ] Does the Entry Wheel (EKW) transform input?
- [ ] Can the reflector's position be set?
  - No, it seems to be fixed as far as I can find out. The wiring certainly;
    - "During WWII, the Enigma I was equipped with reflector UKW-C or UKW-D. The wiring of these reflectors was fixed. In an attempt to improve the security of the Enigma, the German Air Force (Luftwaffe) introduced a field-rewirable reflector named UKW-D." - https://www.cryptomuseum.com/crypto/enigma/i/index.htm
- [x] Were there more than 26 characters on the keyboard? e.g. vowels with umlauts.
  - No, seems like it's just the plain 26.
- [x] Is there a maximum number of plugs that can be put in a plugboard?
  - Maximum is 13. Operational procedure was up to 10, but that wasn't a hard limit.
