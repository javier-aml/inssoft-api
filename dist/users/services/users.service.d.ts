import { Repository } from 'typeorm';
import { UsersEntity } from '../models/users.entity';
import { UsersInterface } from '../models/users.interface';
import { Observable } from 'rxjs';
export declare class UsersService {
    private readonly usersRepository;
    constructor(usersRepository: Repository<UsersEntity>);
    createUser(userInterface: UsersInterface): Promise<Observable<{
        password: string;
        user_id?: number;
        name?: string;
        lastNames?: string;
        genderId?: number;
        telephoneNumber?: number;
        email?: string;
    } & UsersEntity>>;
    getAllUsers(): Observable<UsersInterface[]>;
    getAUsersByEmail(email: string): Observable<UsersInterface[]>;
}
