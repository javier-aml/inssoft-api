import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm'
import { Repository } from 'typeorm'
import { UsersEntity } from '../models/users.entity'
import { UsersInterface } from '../models/users.interface';
import { from, Observable } from 'rxjs'
import { encryptPassword } from 'src/utilities/encrypt_password';

@Injectable()
export class UsersService {
    constructor(
        @InjectRepository(UsersEntity)
        private readonly usersRepository: Repository<UsersEntity>
    ) {}

    async createUser(userInterface: UsersInterface){
        const password = await encryptPassword(userInterface.password);
        return from(this.usersRepository.save({...userInterface, password}));
    }

    getAllUsers(): Observable<UsersInterface[]> {
        return from(this.usersRepository.find());
    }

    getAUsersByEmail(email: string): Observable<UsersInterface[]> {
        return from(this.usersRepository.find({where: {email}}));
    }
}
