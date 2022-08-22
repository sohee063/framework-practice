const express = require('express');
const app = express();
const port = 4001;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

let id = 2;

const todoList = [
  {
    id: 1,
    content: '할 일',
    done: false,
  },
];

app.get('/todo', (req, res) => {
  res.json(todoList);
});

app.get('/todo/:id', (req, res) => {
  return todoList;
});

app.post('/todo', (req, res) => {
  const { content, done } = req.body;
  todoList.unshift({
    id: id++,
    content: app,
    done,
  });
  return res.send('todo 추가 성공❗️');
});

app.listen(port, () => {
  console.log(`http://localhost:${port}`);
});
