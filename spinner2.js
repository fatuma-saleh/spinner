//process.stdout.write('hello from spinner1.js... \rheyyy\n');
const printCharSpinner = function (character) {
  character.forEach((char, i) => {
    setTimeout(() => {
      process.stdout.write(`\r${char}   `)
    }, 100 + i * 200)

  });
}

const character = ['|', '/', '-', '\\', '|']
printCharSpinner(character);