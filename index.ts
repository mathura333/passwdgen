import { program } from 'commander';
import createPassword from './utils/createPassword';

program.version('1.0.0').description('Password Generator');

program
  .option('-l,--length <number>', 'length of password', '10')
  .option('-s,--save', 'save password to passwords.txt')
  // ? --no will make it true by default
  .option('-nn,--no-num', 'password with no numbers')
  .option('-ns,--no-symbol', 'password with no symbol')
  .option('-nc,--no-capital', 'password with no capital letters')
  .parse();

const { length, save, num, symbol, capital } = program.opts();

//* Get generated password

const generatedPassword = createPassword(length, capital, num, symbol);

console.log(generatedPassword);
