export class Orders {
    public id: string;
    // check-in date
    public inDate: Date;
    // check-out date
    public outDate: Date;
    // rental name
    public rental: string;
    // room name
    public room: string;
    // contact name
    public name: string;
    // contact cell phone
    public phone: string;
    // how many adults are going to be
    public adults: number;
    // how many childs are going to be
    public childs: number;
    // room price per night
    public price: number;
    // total reservation nights
    public nights: number;
    // total costs
    public costs: number;

    // order status
    // 0: not finish
    // 1: done
    // 2: cancled
    public status: number;
}