import { Entity, Column, PrimaryColumn } from 'typeorm'

@Entity('users')
export class UsersEntity {
    @PrimaryColumn()
    UserName: string;
    
    @Column()
    UserPassword: string;
}