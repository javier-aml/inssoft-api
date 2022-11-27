import { Observable } from 'rxjs';
import { UsersService } from '../services/users.service';
import { UsersInterface } from '../models/users.interface';
export declare class UsersController {
    private userService;
    constructor(userService: UsersService);
    createUser(usersInterface: UsersInterface): Promise<Observable<{
        password: string;
        user_id?: number;
        name?: string;
        lastNames?: string;
        genderId?: number;
        telephoneNumber?: number;
        email?: string;
    } & import("../models/users.entity").UsersEntity>>;
    getAllUsers(): Observable<UsersInterface[]>;
    getUserByEmail(query: object): Observable<UsersInterface[]>;
}
