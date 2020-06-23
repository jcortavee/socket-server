export class User {
    public name: string;
    public id: string
    public room: string;

    constructor(id: string) {
        this.id = id;
        this.name = 'anonymous';
        this.room = 'anonymous';
    }
}