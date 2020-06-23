import { User } from '../models/user';

export class UserList {
    
    private userList: User[] = [];

    constructor() {

    }

    public add(user: User) {
        this.userList.push(user);
        console.log(this.userList);

        return user;
    }

    public updateName(id: string, name: string) {
        this.userList = this.userList.map(user => {
            if (user.id === id) {
                user.name = name;
            }

            return user;
        });

        console.log(this.userList);
    }

    public getUsers() {
        return this.userList;
    }

    public getUser(id: string) {
        return this.userList.find(user => {
            return user.id === id;
        });
    }

    public getUserByRoom(room: string) {
        return this.userList.filter(user => user.room === room);
    }

    public delete(id: string) {
        const temp = this.getUser(id);
        this.userList = this.userList.filter(user => user.id !== id);
        return temp;
    }

}