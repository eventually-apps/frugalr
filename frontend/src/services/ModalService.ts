export enum ModalType {
    Cancel = 'cancel',
    Confirm = 'confirm',
}

export default class ModalService {

    // tslint:disable-next-line: no-empty
    constructor() {}

    public GetModalTitle(type: string): string {
        switch (type) {
            case ModalType.Confirm: {
                return 'Confirm Changes';
            }
            case ModalType.Cancel: {
                return 'Confirm Cancel';
            }
            default: {
                return 'Title';
            }
        }
    }

    public GetModalMessage(type: string): string {
        switch (type) {
            case ModalType.Confirm: {
                return 'Please Confirm';
            }
            case ModalType.Cancel: {
                return 'Are you really sure you wanna cancel??';
            }
            default: {
                return 'Body Message';
            }
        }
    }
}
