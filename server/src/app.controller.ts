import { Controller, Get, Post } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }
  @Get('test')
  getTest(): Promise<string> {
    return Promise.resolve('test');
  }
  @Post('test')
  postTest(): Promise<{
    message: string;
    status: string;
    data: {
      name: string;
      age: number;
    };
  }> {
    return Promise.resolve({
      message: 'test',
      status: 'success',
      data: {
        name: 'test',
        age: 20,
      },
    });
  }
}
