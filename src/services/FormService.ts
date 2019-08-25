import Store from '../store';
import { PaymentDetails } from '@/models/PaymentDetails';
import CreditCardService from './CreditCardService';

export default class FormService {

    private creditService = new CreditCardService();
    // tslint:disable-next-line: max-line-length
    private emailRegex = new RegExp(/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/);

    // Public parts
    // This is to validate the Invoice creation. We should only care about the Vuex data here.
    public CheckFormSubmission(): any {

        if (!this.ValidateName(Store.state.toFirstName, Store.state.toLastName)) {
            return { Success: false, Message: 'Please fill out the first and last name.' };
        }

        if (!this.ValidateEmail(Store.state.recipientEmail)) {
            return { Success: false, Message: 'Please make sure the recipient email address is valid.' };
        }

        if (!this.ValidateEmail(Store.state.userEmail)) {
            return { Success: false, Message: 'Please make sure the your email address is valid.' };
        }

        if (!this.ValidateLineItem()) {
            return { Success: false, Message: 'Please make sure each invoice item is valid.' };
        }

        return { Success: true, Message: 'Success' };
    }

    // Since payment is never going to be stored we will not check against the Vuex data
    public CheckPaymentSubmission(details: PaymentDetails): any {

        if (!this.ValidateName(details.firstName, details.lastName)) {
            return { Success: false, Message: ' Please make sure first and last name are filled out.'};
        }

        if (!this.ValidateTextForm(details.address1)) {
            return { Success: false, Message: 'Please make sure the address is valid.'};
        }

        if (!this.creditService.ValidateCCNumber(details.ccNumber)) {
            return { Success: false, Message: 'Please make sure the credit card number is valid' };
        }

        if (!this.creditService.ValidateCVC(details.ccNumber)) {
            return { Success: false, Message: 'Please make sure the CVC number has been entered correctly' };
        }

        return { Sucess: true, Message: 'Good' };
    }

    // We're gonna purge all the Vuex stored data
    public ResetForm(): void {
        Store.commit('resetEverything');
    }

    // Private stuff, behind closed doors, probably micro transaction based.
    private ValidateName(firstName: string, lastName: string): boolean {
        if (firstName !== '' && firstName.length > 0 &&
            lastName !== '' && lastName.length > 0) {
                return true;
            }

        return false;
    }

    private ValidateEmail(email: string): boolean {
        if (this.emailRegex.test(email)) {
            return true;
        }

        return false;
    }

    private ValidateLineItem(): boolean {
        for (const item of Store.state.invoiceItems) {
            if (Math.floor(item.price) > Math.floor(0.00)) {
                if (item.item.length > 0 || item.item !== '') {
                    return true;
                }
            } else {
                return false;
            }
        }

        return false;
    }

    private ValidateTextForm(formValue: string): boolean {
        if (formValue.length > 0 && formValue !== '') {
            return true;
        }

        return false;
    }
}
