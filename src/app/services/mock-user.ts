import { User } from '../models/user';

export const USERS: User[] = [
    new User(1, 'user_1_name', 'user_1_surname', new Date('2001-01-01')),
    new User(2, 'user_2_name', 'user_2_surname', new Date('2002-02-02')),
    new User(3, 'user_3_name', 'user_3_surname', new Date('2003-03-03')),
    new User(4, 'user_4_name', 'user_4_surname', new Date('2004-04-04')),
    new User(5, 'user_5_name', 'user_5_surname', new Date('2005-05-05')),
];