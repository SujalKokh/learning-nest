import { Injectable } from "@nestjs/common";
import { User } from "./users.model";

@Injectable()
export class UsersService {
  private users: User[] = [];

  insertUser(
    name: string,
    age: number,
    email: string,
  ): string {
    const newUser = new User('1', name, age, email);
    this.users.push(newUser);
    return '1';
  }
}