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
  if (index >= 0 && index < todoList.length) {
    const removedTask = todoList.splice(index, 1);
    console.log(`Задача «${removeTask}» удалена из списка.`)
  } else {
    console.log('Недопустимый индекс задачи.');
  }
};

function showTasks() {
  console.log('Список задач:');
  if (todoList.lenth === 0) {
    console.log('Список задач пуст.');
  } else {
    for (let i = 0; i < todoList.length; i += 1) {
      console.log(`${i}. ${todoList[i]}`);
    }
  }
};

function clearTasks() {
  todoList.splice(0, todoList.length);
  console.log('Список дел очищен.');
};

function commandHandler(command) {
  // разбить переданную команду на элементы массива
  // вытащить команду по 0 индексу

  // через swith-case вызвать нужную функуцю
};

function startCli() {
  console.log('Добро пожаловать в HexPet!');
  console.log('Доступные команды: add, remove, list, clear, exit\n');

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