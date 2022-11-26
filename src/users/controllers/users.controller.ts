import { Body, Controller, Post, Get } from '@nestjs/common';
import { Observable } from 'rxjs';
import { UsersService } from '../services/users.service';
import { UsersInterface } from '../models/users.interface';

@Controller('users')
export class UsersController {
    constructor(private userService: UsersService) {}

    @Post()
    create(@Body() usersInterface: UsersInterface): Observable<UsersInterface> {
        return this.userService.create(usersInterface);
    }

    @Get()
    get(): Observable<UsersInterface[]> {
        return this.userService.get();
    }
}
