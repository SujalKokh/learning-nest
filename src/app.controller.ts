import { Controller, Get, Res, HttpStatus } from '@nestjs/common';
import { AppService } from './app.service';
import { Response  } from 'express';
@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(@Res() res: Response) {
    return res.
      status(HttpStatus.OK).
      json({"health-check": "nest.js server up and running at port 3000 ♾️..."});
  }
}
