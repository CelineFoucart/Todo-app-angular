export class Task {
    id:number;
    title:string;
    description:string;
    date:Date;
    done:boolean;

    constructor(id:number, title:string, description:string, date:string,done:boolean) {
        this.id = id;
        this.title = title;
        this.description = description;
        this.date = new Date(date);
        this.done = done;
    }
}