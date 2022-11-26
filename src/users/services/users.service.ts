import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm'
import { Repository } from 'typeorm'
import { UsersEntity } from '../models/users.entity'
import { UsersInterface } from '../models/users.interface';
import { from, Observable } from 'rxjs'

@Injectable()
export class UsersService {
    constructor(
        @InjectRepository(UsersEntity)
        private readonly usersRepository: Repository<UsersEntity>
    ) {}

    create(userInterface: UsersInterface): Observable<UsersInterface> {
        return from(this.usersRepository.save(userInterface));
    }

    get(): Observable<UsersInterface[]> {
        return from(this.usersRepository.find());
    }
}
