import fs from 'fs';
import path from 'path';
import os from 'os';
import chalk from 'chalk';

const savePassword = (password: string, file = 'password.txt') => {
  fs.open(path.join(process.cwd(), file), 'a', 765, (e, id) => {
    fs.write(id, password + os.EOL, null, 'utf-8', () => {
      fs.close(id, () => {
        console.log(chalk.green(`Password saved to ${file}`));
      });
    });
  });
};

export default savePassword;
