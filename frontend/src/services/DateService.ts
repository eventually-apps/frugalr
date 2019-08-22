// Not actually a service to get you a date, you're on your own for that one.

export default class DateService {

    public GetDateString(): string {
        const date = new Date();
        return date.toLocaleDateString();
    }
}
