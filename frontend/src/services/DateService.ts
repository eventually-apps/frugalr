// Not actually a service to get you a date.

export default class DateService {

    public GetDateString(): string {
        const date = new Date();
        return date.toLocaleDateString();
    }
}
