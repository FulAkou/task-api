import { Request, Response } from "express";
import { ITask } from "../interfaces/Task";

let tasks: ITask[] = [
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

export const getTasks = (req: Request, res: Response) => {
  res.json(tasks);
};
export const getTask = (req: Request, res: Response) => {
  const task = tasks.find((t) => t.id === parseInt(req.params.id));
  task ? res.json(task) : res.status(404).json({ message: "Task not found" });
};

export const createTask = (req: Request, res: Response) => {
  const newTask: ITask = { id: Date.now(), ...req.body };
  tasks.push(newTask);
  res.status(201).json(newTask);
};

export const updateTask = (req: Request, res: Response) => {
  const index = tasks.findIndex((t) => t.id === parseInt(req.params.id));
  if (index !== -1) {
    tasks[index] = { ...tasks[index], ...req.body };
    res.json(tasks[index]);
  } else {
    res.status(404).json({ message: "Task not found" });
  }
};

export const deleteTask = (req: Request, res: Response) => {
  tasks = tasks.filter((t) => t.id !== parseInt(req.params.id));
  res.status(204).send();
};
