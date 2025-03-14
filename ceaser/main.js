const letters = Array.from({ length: 26 }, (_, i) =>
  String.fromCharCode(97 + i)
);
console.log(letters);

class CeaserCipher {
  constructor(shift) {
    this.shift = shift;
  }

  encode(str) {
    const encodedStr = str
      .toLowerCase()
      .split("")
      .map((e, i) => {
        let newChar = "";
        if (!letters.includes(e)) {
          return (newChar = e);
        }
        let newIndex = letters.indexOf(e) - this.shift;
        if (newIndex < 0) {
          newIndex = letters.length + newIndex;
        }
        newChar = letters[newIndex];
        return newChar.toUpperCase();
      })
      .join("");
    console.log(encodedStr);
  }
  decode(str) {
    const decodedStr = str
      .toLowerCase()
      .split("")
      .map((e, i) => {
        let newChar = "";
        if (!letters.includes(e)) {
          return (newChar = e);
        }
        let newIndex = letters.indexOf(e) + this.shift;
        if (newIndex > 25) {
          newIndex = newIndex - letters.length;
        }
        newChar = letters[newIndex];
        return newChar.toUpperCase();
      })
      .join("");
    console.log(decodedStr);
  }
}

const newCode = new CeaserCipher(5);
newCode.encode("Hello Dunyo");
newCode.decode("Hello Dunyo");
