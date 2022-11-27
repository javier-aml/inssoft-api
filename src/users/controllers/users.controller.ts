import { Body, Controller, Post, Get, Query } from '@nestjs/common';
import { Observable } from 'rxjs';
import { UsersService } from '../services/users.service';
import { UsersInterface } from '../models/users.interface';

@Controller('users')
export class UsersController {
    constructor(private userService: UsersService) {}

    @Post()
    async createUser(@Body() usersInterface: UsersInterface){
        return await this.userService.createUser(usersInterface);
    }

    @Get('all')
    getAllUsers(): Observable<UsersInterface[]> {
        return this.userService.getAllUsers();
    }

    @Get('')
    getUserByEmail(@Query() query: object): Observable<UsersInterface[]> {
        const email = query['email'];
        return this.userService.getAUsersByEmail(email);
    }
}
