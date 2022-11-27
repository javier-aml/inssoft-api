import { Observable } from 'rxjs';
import { UsersService } from '../services/users.service';
import { UsersInterface } from '../models/users.interface';
export declare class UsersController {
    private userService;
    constructor(userService: UsersService);
    create(usersInterface: UsersInterface): Observable<UsersInterface>;
    getAllUsers(): Observable<UsersInterface[]>;
    getUserByEmail(query: object): Observable<UsersInterface[]>;
}
