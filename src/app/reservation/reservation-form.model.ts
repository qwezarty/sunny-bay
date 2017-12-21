// todo seperate this class into two pieces: model & service
export class ReservationFormModel {
    // todo add room-id (or room model)
    constructor(inDate: Date, price: number) {
        this.inDate = inDate;
        this.price = price;
    }

    // this is used in future
    // public roomId: string;

    // check-in date
    private _inDate: Date;
    get inDate(): Date {
        return this._inDate || new Date();
    }
    set inDate(date: Date) {
        // when user pick an check-in date
        // we should empty the check-out date
        this.outDate = null;
        this._inDate = date;
        // we should also set the check-out and check-in min&max date
        this.inMinDate = this.caculateInMinDate(this._inDate);
        this.inMaxDate = this.caculateInMaxDate(this._inDate);
        this.outMinDate = this.caculateOutMinDate(this._inDate);
        this.outMaxDate = this.caculateOutMaxDate(this._inDate);
    }
    // check-out date
    private _outDate: Date;
    get outDate(): Date {
        return this._outDate;
    }
    set outDate(date: Date) {
        this._outDate = date;
        this.nights = this.caculateTotalNights();
        this.costs = this.caculateTotalCosts();
    }

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

    // min & max date that date-picker can have
    public inMinDate: Date = null;
    public inMaxDate: Date = null;
    public outMinDate: Date = null;
    public outMaxDate: Date = null;

    caculateTotalNights(): number {
        if (!(this.outDate && this.inDate)) {
            return 0;
        }
        const diff = this.outDate.getTime() - this.inDate.getTime();
        if (diff < 0) {
            return 0;
        }

        return Math.ceil(diff / (1000 * 3600 * 24));
    }

    caculateTotalCosts(): number {
        // costs will not be negative
        // in that nights will always beyond zero
        const nights = this.caculateTotalNights();
        if (nights === 0) {
            return null;
        }
        return nights * this.price;
    }

    private caculateInMinDate(inDate: Date): Date {
        return new Date();
    }

    private caculateInMaxDate(inDate: Date): Date {
        return this.cloneDateAndAddDays(this.inMinDate, 30);
    }

    private caculateOutMaxDate(inDate: Date): Date {
        // todo logic: set max reservation duration, say, 10 days
        return this.cloneDateAndAddDays(inDate, 10);
    }

    private caculateOutMinDate(inDate: Date): Date {
        // todo logic: set max reservation duration, say, 10 days
        return this.cloneDateAndAddDays(inDate, 1);
    }

    private cloneDateAndAddDays(date: Date, days: number): Date {
        const copy = this.cloneDate(date);
        copy.setDate(copy.getDate() + days);
        return new Date(copy);
    }

    private cloneDate(origin: Date): Date {
        const cooked = new Date(origin.getTime());
        return cooked;
    }

}
