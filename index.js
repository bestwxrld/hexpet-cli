import readline from 'readline';
// import fs from 'fs';

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const todoList = [];

function addTask(task) {
  todoList.push(task);
  console.log(`Задача "${task}" добавлена в список.\n`);
}

function removeTask(index) {
  if (index >= 0 && index < todoList.length) {
    const removedTask = todoList.splice(index, 1);
    console.log(`Задача "${removedTask}" удалена из списка.\n`);
  } else {
    console.log('Недопустимый индекс задачи.\n');
  }
}

function showTasks() {
  console.log('Список задач:');
  if (todoList.lenth === 0) {
    console.log('Список задач пуст.\n');
  } else {
    for (let i = 0; i < todoList.length; i += 1) {
      console.log(`${i}. ${todoList[i]}`);
      if (i === todoList.length - 1) {
        console.log();
      }
    }
  }
}

function clearTasks() {
  todoList.splice(0, todoList.length);
  console.log('Список дел очищен.\n');
}

function commandHandler(command) {
  const parts = command.split(' ');
  const action = parts[0];
  const task = parts.slice(1).join(' ');
  const index = parseInt(parts[1], 10);

  switch (action) {
    case 'add':
      addTask(task);
      break;
    case 'remove':
      removeTask(index);
      break;
    case 'list':
      showTasks();
      break;
    case 'clear':
      clearTasks();
      break;
    case 'exit':
      rl.close();
      break;
    default:
      console.log('Недопустимая команда. Доступные команды: add, remove, list, clear, exit.\n');
  }
}

function startCli() {
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

startCli();
