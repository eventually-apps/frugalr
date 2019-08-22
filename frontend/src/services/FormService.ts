import Store from '../store';


export default class FormService {

    // tslint:disable-next-line: max-line-length
    private emailRegex = new RegExp(/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/);

    // Let's make sure the Vuex has data. Ideally we should only care for the required data.
    public CheckFormSubmission(): any {

        if (this.ValidatePersonName()) {
            return { Message: 'Please fill out the first and last name.' };
        }

        if (this.ValidateRecipEmail()) {
            return { Message: 'Please make sure the recipient email address is valid.' };
        }

        if (this.ValidateUserEmail()) {
            return { Message: 'Please make sure the your email address is valid.' };
        }

        return { Message: 'Success' };
    }

    // We're gonna purge all the Vuex stored data
    public ResetForm(): void {
        Store.commit('resetEverything');
    }

    // Private Parts
    private ValidatePersonName(): boolean {
        if (Store.state.toFirstName !== '' && Store.state.toFirstName.length > 1 &&
            Store.state.toLastName !== '' && Store.state.toLastName.length > 1) {
                return true;
            }

        return false;
    }

    private ValidateUserEmail(): boolean {
        if (this.emailRegex.test(Store.state.userEmail)) {
            return true;
        }

        return false;
    }

    private ValidateRecipEmail(): boolean {
        if (this.emailRegex.test(Store.state.recipientEmail)) {
            return true;
        }

        return false;
    }
}
