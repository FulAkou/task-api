"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteTask = exports.updateTask = exports.createTask = exports.getTask = exports.getTasks = void 0;
let tasks = [
    {
        id: 1,
        title: "Task 1",
        description: "Description 1",
        status: "pending",
    },
    {
        id: 2,
        title: "Task 2",
        description: "Description 2",
        status: "pending",
    },
    {
        id: 3,
        title: "Task 3",
        description: "Description 3",
        status: "pending",
    },
];
const getTasks = (req, res) => {
    res.json(tasks);
};
exports.getTasks = getTasks;
const getTask = (req, res) => {
    const task = tasks.find((t) => t.id === parseInt(req.params.id));
    task ? res.json(task) : res.status(404).json({ message: "Task not found" });
};
exports.getTask = getTask;
const createTask = (req, res) => {
    const newTask = Object.assign({ id: Date.now() }, req.body);
    tasks.push(newTask);
    res.status(201).json(newTask);
};
exports.createTask = createTask;
const updateTask = (req, res) => {
    const index = tasks.findIndex((t) => t.id === parseInt(req.params.id));
    if (index !== -1) {
        tasks[index] = Object.assign(Object.assign({}, tasks[index]), req.body);
        res.json(tasks[index]);
    }
    else {
        res.status(404).json({ message: "Task not found" });
    }
};
exports.updateTask = updateTask;
const deleteTask = (req, res) => {
    tasks = tasks.filter((t) => t.id !== parseInt(req.params.id));
    res.status(204).send();
};
exports.deleteTask = deleteTask;
