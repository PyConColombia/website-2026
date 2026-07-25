import { type User, users } from "@/assets/data/users";

export function getAllUsers(): User[] {
  return users;
}

export function getUserById(id: string): User | undefined {
  return users.find((user) => user.id === id);
}
