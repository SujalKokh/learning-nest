import { Get, Controller, Res, HttpStatus, Post, Body, Put, Param, Delete } from "@nestjs/common";
import { UsersService } from "./users.service";
import { Response } from 'express';

@Controller('users')
export class UsersController {
  constructor(private readonly userService: UsersService) {}
  
  @Get()
  getUsers(@Res() res: Response) {
    return res.status(HttpStatus.OK).json({"userlist": "here will be userlist"});
  }

  @Post()
  createUser(
    @Body('name') name: string,
    @Body('age') age: number,
    @Body('email') email: string,
  ) {
    const userId = this.userService.insertUser(name, age, email);
    return {
      userId,
    }
  }

  @Get()
  getAllUsers() {
    return this.userService.getUsers();
  }

  @Get(':userId')
  getUser(
    @Param('userId') userId: string,
  ) {
    return this.userService.getUserById(userId);
  }

  @Put('userId')
  updateUser(
    @Param('userId') userId: string,
    @Param('name') name: string,
    @Param('age') age: number,
    @Param('email') email: string,
  ) {
    return this.userService.updateUser(
      userId,
      name,
      age,
      email,
    );
  }

  @Delete(':userId')
  deleteUser(
    @Param('userId') userId: string,
  ) {
    this.userService.deleteUser(userId);
  }

}