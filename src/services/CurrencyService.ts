
export default class CurrencyService {

    public GenerateRandomAmount(): string {
        const min = Math.ceil(3);
        const max = Math.floor(69);
        return '$ ' + ((Math.random() * (max - min + 1)) + 3).toFixed(2);
    }
}
