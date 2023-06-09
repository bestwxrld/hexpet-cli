import readline from 'readline';
// import fs from 'fs';

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const todoList = [];

function addTask(task) {
  todoList.push(task);
  console.log(`Задача «${task}» добавлена в список.`);
};

function removeTask(index) {
  // удалить задачу по индексу через splice
  // вывести сообщение
};

function showTasks() {
  // пройтись циклом и вывести красивый список 1. Задача
};

function clearTasks() {
  // очистить список через splice
};

function commandHandler(command) {
  // разбить переданную команду на элементы массива
  // вытащить команду по 0 индексу

  // через swith-case вызвать нужную функуцю
};

function startCli() {
  console.log('Добро пожаловать в HexPet!');
  console.log('Доступные команды: add, remove, list, clear, exit');

  rl.setPrompt('Введите команду: ');
  rl.prompt();

  rl.on('line', (imput) => {
    commandHandler(input.trim());
    rl.prompt();
  });

  rl.on('close', () => {
    console.log('До свидания!');
    rl.close();
  })
};

startCli();