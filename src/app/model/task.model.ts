export class Task {
    id!:number;
    title!:string;
    description!:string;
    date?:Date;
    done:boolean = false;

    constructor(title:string, description:string, id?:number, date?:string,done?:boolean) {
        this.setValues(title, description)
            .setDate(date)
            .setDone(done)
            .setId(id);
    }

    public setId(id?:number):this {
        this.id = (id === undefined) ? 0 : id;
        return this;
    }

    public setValues(title:string, description:string): this {
        this.title = title;
        this.description = description;
        return this;
    }

    public setDone(done?:boolean):this {
        if(done === undefined) {
            this.done = false;
        } else {
            this.done = done;
        }
        return this;
    }

    public setDate(date?:string): this {
        if(date !== undefined) {
            this.date = new Date(date);
        }
        return this;
    }
}