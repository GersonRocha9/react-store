import type { ITodo } from '../entities/ITodo';
import type { IUser } from '../entities/IUser';

import { createStore } from './createStore';

interface IGlobalStore {
  user: IUser | null;
  todos: ITodo[];
  // login(): void;
  // logout(): void;
  // addTodo(title: string, author?: string): void;
  // toggleTodoDone(todoId: number): void;
  // removeTodo(todoId: number): void;
}

export const globalStore = createStore<IGlobalStore>((setState) => ({
  user: null,
  todos: [],
  logout: () => setState({ user: null }),
}));
