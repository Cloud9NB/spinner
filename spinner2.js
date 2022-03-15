process.stdout.write('hello from spinner1.js... \rheyyy\n');

const spinner = () => {
  let characters = ['|', '/', '-', '\\', '|', '/', '-', '\\', '|', '\n'];
  for (let i = 0; i < characters.length; i++) {
    setTimeout(() => {
      process.stdout.write(`\r${characters[i]}`);
    }, 250 * i)
  }
};

spinner();