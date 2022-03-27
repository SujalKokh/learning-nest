import { Injectable } from "@nestjs/common";
import { User } from "./users.model";

@Injectable()
export class UsersService {
  private users: User[] = [];

  /**
   * @param name 
   * @param age 
   * @param email 
   * @returns string userId 
   */
  public insertUser(
    name: string,
    age: number,
    email: string,
  ): string {
    const newUser = new User('1', name, age, email);
    this.users.push(newUser);
    return '1';
  }

  /**
   * @param id 
   * @returns User object 
   */
  public getUserById(
    id: string,
  ): User {
    return this.users.find((u) => u.id === id);
  }

  /**
   * @returns array of User object
   */
  public getUsers(): User[] {
    return this.users;
  }


  /**
   * @param userId
   * @param name 
   * @param age 
   * @param email 
   * @returns userId
   */
  public updateUser(
    userId: string,
    name: string,
    age: number,
    email: string,
  ): string {
    return '1'
  }


  public deleteUser(
    userId: string,
  ): string {
    // implementation of delete user is remaining
    return '1'
  }

}