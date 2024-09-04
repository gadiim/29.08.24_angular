export class User {
    id: number = 0;
    name: string = '';
    surname: string = '';
    birth: Date = new Date('YYYY-MM-DD');
    constructor (id: number, name: string, surname: string, birth: Date ){
        this.id = id;
        this.name = name;
        this.surname = surname;
        this.birth = birth;
    };
}
