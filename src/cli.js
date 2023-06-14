import readline from 'readline';
import { commandHandler } from './todo.js';

export const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

export function startCli() {
  console.log('Добро пожаловать в HexPet!');
  console.log('Доступные команды: add, remove, list, clear, exit\n');

  rl.setPrompt('Введите команду: ');
  rl.prompt();

  rl.on('line', (input) => {
    commandHandler(input.trim());
    rl.prompt();
  });

  rl.on('close', () => {
    console.log('До свидания!');
    process.exit(0);
  });
}