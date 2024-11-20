import { create, StateCreator } from "zustand";
import { devtools } from "zustand/middleware";

export type TodoType = {
  id: number;
  title: string;
  isCompleted: boolean;
}

type TodoState = {
  todos: TodoType[];
}

type TodoActions = {
  addTodo: (value: string) => void,
  changeIsComplete: (index: number) => void
}

const todoSlice: StateCreator<TodoState & TodoActions, [['zustand/devtools', never]]> = (set, get) => ({
  todos: [],
  addTodo: (value: string) => {
    const { todos } = get();
    set(
      { todos: [...todos, { id: Math.trunc(Math.random() * 10) + 1, title: value, isCompleted: false }] },
      false,
      `add todo ${value}`
    );
  },
  changeIsComplete: (index: number) => {
    const { todos } = get();
    const newTodo: TodoType[] = [
      ...todos.slice(0, index),
      { ...todos[index], isCompleted: !todos[index].isCompleted },
      ...todos.slice(index + 1)
    ];

    set(
      { todos: newTodo },
      false,
      `changeIsComplete ${newTodo[index].title} to ${newTodo[index].isCompleted}`
    );
  }
});

export const useTodoStore = create<TodoState & TodoActions>()(devtools(todoSlice));

