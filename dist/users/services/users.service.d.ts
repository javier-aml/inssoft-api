import { Repository } from 'typeorm';
import { UsersEntity } from '../models/users.entity';
import { UsersInterface } from '../models/users.interface';
import { Observable } from 'rxjs';
export declare class UsersService {
    private readonly usersRepository;
    constructor(usersRepository: Repository<UsersEntity>);
    create(userInterface: UsersInterface): Observable<UsersInterface>;
    getAllUsers(): Observable<UsersInterface[]>;
    getAUsersByEmail(email: string): Observable<UsersInterface[]>;
}
