export class PaymentDetails {

    constructor(public firstName: string, public lastName: string, public address1: string,
                public address2: string, public ccNumber: string, public cvcNumber: number, public city: string,
                public state: string, public zip: number) {
                }
}
