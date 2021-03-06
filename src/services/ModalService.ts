export enum ModalType {
    Cancel = 'cancel',
    Confirm = 'confirm',
    Payment = 'payment',
}

export default class ModalService {

    // tslint:disable-next-line: no-empty
    constructor() {}

    public GetModalTitle(type: string): string {
        switch (type) {
            case ModalType.Confirm: {
                return 'Confirm Invoice';
            }
            case ModalType.Cancel: {
                return 'Throw it all away';
            }
            case ModalType.Payment: {
                return 'Confirm Payment Details';
            }
            default: {
                return 'Title';
            }
        }
    }

    public GetModalMessage(type: string): string {
        switch (type) {
            case ModalType.Confirm: {
                // tslint:disable-next-line: max-line-length
                return 'Are you really happy with your invoice?' + '\nAfter submitting you will not be able to make any changes.';
            }
            case ModalType.Cancel: {
                return 'Are you really sure you wanna cancel? All your changes will not be saved.';
            }
            case ModalType.Payment: {
                return 'Please make sure all your payment information is correct.';
            }
            default: {
                return 'I have nothing to tell you';
            }
        }
    }


    public GetModalButtons(type: string): any {
        switch (type) {
            case ModalType.Confirm: {
                return { success: 'Send it!', danger: 'Continue Editing' };
            }
            case ModalType.Cancel: {
                return { success: 'Start Over', danger: 'I\'m not done' };
            }
            case ModalType.Payment: {
                return { success: 'Send Payment', danger: 'Cancel' };
            }
            default: {
                return { success: 'Confirm', danger: 'Cancel'};
            }
        }
    }
}
