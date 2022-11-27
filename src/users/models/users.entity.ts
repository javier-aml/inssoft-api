import internal from 'stream';
import { Entity, Column, PrimaryColumn, Generated } from 'typeorm'

@Entity('users_cat')
export class UsersEntity {
    @PrimaryColumn()
    @Generated('increment')
    user_id: number;

    @Column()
    name: string;
    
    @Column()
    last_names: string;

    @Column()
    gender_id: number;

    @Column()
    telephone_number: number;

    @Column()
    email: string;

    @Column()
    password: string;
}