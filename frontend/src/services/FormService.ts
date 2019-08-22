import Store from '../store';

export default class FormService {

    // Let's make sure the Vuex has data
    public CheckFormSubmission(): boolean {
        return true;
    }

    // We're gonna purge all the Vuex stored data
    public ResetForm(): void {
        Store.commit('resetEverything');
    }
}