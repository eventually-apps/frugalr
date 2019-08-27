export class PaymentDetails {
    public firstName: string | undefined;
    public lastName: string | undefined;
    public address1: string | undefined;
    public address2: string | undefined;
    public ccNumber: string | undefined;
    public cvcNumber: string | undefined;
    public city: string | undefined;
    public state: string | undefined;
    public zip: number | undefined;

    constructor()

    constructor(firstName?: string, lastName?: string,  address1?: string,
                address2?: string,  ccNumber?: string,  cvcNumber?: string,  city?: string,
                state?: string,  zip?: number) {
                    this.firstName = firstName;
                    this.lastName = lastName;
                    this.address1 = address1;
                    this.address2 = address2;
                    this.ccNumber = ccNumber;
                    this.cvcNumber = cvcNumber;
                    this.city = city;
                    this.state = state;
                    this.zip = zip;
                }
}
