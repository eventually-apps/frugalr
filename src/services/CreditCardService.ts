export default class CreditCardService {
    private visa = new RegExp(/^4[0-9]{12}(?:[0-9]{3})?$/);
    private mastercard = new RegExp(/^(?:5[1-5][0-9]{2}|222[1-9]|22[3-9][0-9]|2[3-6][0-9]{2}|27[01][0-9]|2720)[0-9]{12}$/);
    private amex = new RegExp(/^3[47][0-9]{13}$/);
    private dinersclub = new RegExp(/^3(?:0[0-5]|[68][0-9])[0-9]{11}$/);
    private discover = new RegExp(/^6(?:011|5[0-9]{2})[0-9]{12}$/);
    private jcb = new RegExp(/^(?:2131|1800|35\d{3})\d{11}$/);
    private cvc = new RegExp(/[^0-9]{3,3}/);

    public ValidateCCNumber(ccNumber: string): boolean {

        if (this.visa.test(ccNumber)) {
            return true;
        }

        if (this.mastercard.test(ccNumber)) {
            return true;
        }

        if (this.amex.test(ccNumber)) {
            return true;
        }

        if (this.dinersclub.test(ccNumber)) {
            return true;
        }

        if (this.discover.test(ccNumber)) {
            return true;
        }

        if (this.jcb.test(ccNumber)) {
            return true;
        }

        return false;
    }

    public ValidateCVC(cvcNumber: string): boolean {
        if (this.cvc.test(cvcNumber)) {
            return true;
        }

        return false;
    }
}
