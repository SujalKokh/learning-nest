import { Get, Controller, Res, HttpStatus, Post, Body } from "@nestjs/common";
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
}