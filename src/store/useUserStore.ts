import {create} from 'zustand';

export interface User {
  id: number; 
  firstName: string;
  lastName: string;
  status: string;
}

interface UserState {
  users: User[];
  addUser: (user: User) => void;
  updateUser: (id: number, updatedUser: Partial<User>) => void;
  removeUser: (id: number) => void;
}

export const useUserStore = create<UserState>((set) => ({
  users: [],
  addUser: (user) => set((state) => ({ users: [...state.users, user] })),
  updateUser: (id, updatedUser) => set((state) => ({
    users: state.users.map((user) => 
      user.id === id ? { ...user, ...updatedUser } : user
    ),
  })),
  removeUser: (id) => set((state) => ({
    users: state.users.filter((user) => user.id !== id),
  })),
}));
